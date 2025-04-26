"use client";

import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Send } from "lucide-react";

const actions = [
  { id: "1", label: "Book tickets", short: "⌘K" },
  { id: "2", label: "Summarize", short: "⌘cmd+P" },
  { id: "3", label: "Screen Studio", short: "" },
];

const highlightMatch = (text, query) => {
  if (!query) return text;
  const regex = new RegExp(`(${query})`, "gi");
  return text.split(regex).map((part, i) =>
    regex.test(part) ? (
      <mark key={i} className="bg-yellow-200">
        {part}
      </mark>
    ) : (
      part
    )
  );
};

export default function ActionSearchBar() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [isFocused, setIsFocused] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const debounceRef = useRef(null);

  useEffect(() => {
    if (!isFocused) {
      setResult(null);
      return;
    }
    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      const normalized = query.toLowerCase().trim();
      const filtered = actions.filter((a) =>
        a.label.toLowerCase().includes(normalized)
      );
      setResult(normalized ? filtered : actions);
    }, 200);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [query, isFocused]);

  const handleKeyDown = (e) => {
    if (!result?.length) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % result.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev <= 0 ? result.length - 1 : prev - 1));
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      alert(`You selected: ${result[selectedIndex].label}`);
      setIsFocused(false);
      setSelectedIndex(-1);
    }
  };

  return (
    <div className="w-full max-w-full sm:max-w-sm px-2 relative">
      <div className="relative">
        <Input
          type="text"
          placeholder="Search actions"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          onKeyDown={handleKeyDown}
          className="w-full pl-3 pr-9 py-2 h-10 text-lg text-black rounded-lg"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
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

      <AnimatePresence>
        {isFocused && result && (
          <motion.ul
            className="mt-2 w-full bg-white border rounded-md shadow-md overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {result.length > 0 ? (
              result.map((action, index) => (
                <motion.li
                  key={action.id}
                  className={`px-4 py-2 flex justify-between cursor-pointer text-sm ${
                    index === selectedIndex
                      ? "bg-gray-200"
                      : "hover:bg-gray-100"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  onMouseEnter={() => setSelectedIndex(index)}
                  onClick={() => alert(`You selected: ${action.label}`)}
                >
                  <span>{highlightMatch(action.label, query)}</span>
                  {action.short && (
                    <span className="text-gray-400">{action.short}</span>
                  )}
                </motion.li>
              ))
            ) : (
              <motion.li
                className="px-4 py-2 text-center text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                No results found for "{query}"
              </motion.li>
            )}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}