"use client"

import { useState, useEffect, useRef } from "react"
import { Input } from "@/components/ui/input"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Send, BarChart2, Globe, Video, PlaneTakeoff, AudioLines } from "lucide-react"

const allActions = [
  {
    id: "1",
    label: "Book tickets",
    icon: <PlaneTakeoff className="h-4 w-4 text-blue-500" />,
    description: "anything",
    short: "⌘K",
    end: "Agent",
  },
  {
    id: "2",
    label: "Summarize",
    icon: <BarChart2 className="h-4 w-4 text-orange-500" />,
    description: "kuch bhi ",
    short: "⌘cmd+p",
    end: "Command",
  },
  {
    id: "3",
    label: "Screen Studio",
    icon: <Video className="h-4 w-4 text-purple-500" />,
    description: "main",
    short: "",
    end: "Application",
  },
  {
    id: "4",
    label: "Talk to Jarvis",
    icon: <AudioLines className="h-4 w-4 text-green-500" />,
    description: "meri merzi",
    short: "",
    end: "Active",
  },
  {
    id: "5",
    label: "Translate",
    icon: <Globe className="h-4 w-4 text-blue-500" />,
    description: "jo bhi-4o",
    short: "",
    end: "Command",
  },
]

const highlightMatch = (text, query) => {
  if (!query) return text
  const regex = new RegExp(`(${query})`, "gi")
  const parts = text.split(regex)
  return parts.map((part, i) =>
    regex.test(part) ? <mark key={i} className="bg-yellow-200">{part}</mark> : part
  )
}

function ActionSearchBar({ actions = allActions }) {
  const [query, setQuery] = useState("")
  const [result, setResult] = useState(null)
  const [isFocused, setIsFocused] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)

  const debounceRef = useRef(null)

  useEffect(() => {
    if (!isFocused) {
      setResult(null)
      return
    }

    if (debounceRef.current) clearTimeout(debounceRef.current)

    debounceRef.current = setTimeout(() => {
      const normalized = query.toLowerCase().trim()
      const filtered = actions.filter((a) =>
        a.label.toLowerCase().includes(normalized)
      )
      setResult({ actions: normalized ? filtered : actions })
    }, 200)

    return () => clearTimeout(debounceRef.current)
  }, [query, isFocused])

  const handleKeyDown = (e) => {
    if (!result || !result.actions.length) return

    if (e.key === "ArrowDown") {
      e.preventDefault()
      setSelectedIndex((prev) => (prev + 1) % result.actions.length)
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setSelectedIndex((prev) =>
        prev <= 0 ? result.actions.length - 1 : prev - 1
      )
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      const action = result.actions[selectedIndex]
      alert(`You selected: ${action.label}`)
      setIsFocused(false)
      setSelectedIndex(-1)
    }
  }

  const container = {
    hidden: { opacity: 0, height: 0 },
    show: {
      opacity: 1,
      height: "auto",
      transition: {
        height: { duration: 0.4 },
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        height: { duration: 0.3 },
        opacity: { duration: 0.2 },
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  }

  return (
    <div className="w-full max-w-xl mx-auto reletive">
      <div className="relative flex flex-col items-center min-h-[300px]">
        <div className="w-full max-w-sm sticky top-0 bg-black z-10 pt-6 pb-1">
         
          <div className="relative">
            <Input
              type="text"
              placeholder="What's up?"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setTimeout(() => setIsFocused(false), 200)}
              onKeyDown={handleKeyDown}
              className="pl-3 pr-9 py-1.5 h-9 text-sm rounded-lg focus-visible:ring-offset-0"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4">
              <AnimatePresence mode="popLayout">
                {query.length > 0 ? (
                  <motion.div
                    key="send"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Send className="w-4 h-4 text-gray-400" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="search"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Search className="w-4 h-4 text-gray-400" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="w-full max-w-sm">
          <AnimatePresence>
            {isFocused && result && (
              <motion.div
                className="w-full border rounded-md shadow-sm overflow-hidden dark:border-gray-800 bg-white dark:bg-black mt-1"
                variants={container}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                <motion.ul>
                  {result.actions.length > 0 ? (
                    result.actions.map((action, index) => (
                      <motion.li
                        key={action.id}
                        className={`px-3 py-2 flex items-center justify-between cursor-pointer rounded-md ${
                          index === selectedIndex
                            ? "bg-gray-200 dark:bg-zinc-900"
                            : "hover:bg-gray-100 dark:hover:bg-zinc-800"
                        }`}
                        variants={item}
                        layout
                        onMouseEnter={() => setSelectedIndex(index)}
                        onClick={() => alert(`You selected: ${action.label}`)}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-gray-500">{action.icon}</span>
                          <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                            {highlightMatch(action.label, query)}
                          </span>
                          <span className="text-xs text-gray-400">{action.description}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-400">{action.short}</span>
                          <span className="text-xs text-gray-400">{action.end}</span>
                        </div>
                      </motion.li>
                    ))
                  ) : (
                    <motion.li className="px-3 py-2 text-sm text-gray-500 text-center" variants={item}>
                      No results found for “{query}”
                    </motion.li>
                  )}
                </motion.ul>
                <div className="mt-2 px-3 py-2 border-t border-gray-100 dark:border-gray-800 text-xs text-gray-500 flex justify-between">
                  <span>Use ↑ ↓ to navigate</span>
                  <span>ESC to cancel</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default ActionSearchBar
