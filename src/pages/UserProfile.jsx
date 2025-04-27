import React from "react"
import { LogOut, MoveUpRight, Settings, FileText, User } from "lucide-react"

function UserProfile({
  name = "John Doe",
  role = "Prompt Engineer",
  avatar = "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/avatar-02-albo9B0tWOSLXCVZh9rX9KFxXIVWMr.png",
} = {}) {
  const menuItems = [
    {
      label: "Profile",
      href: "#",
      icon: <User className="w-4 h-4" />,
    },
    {
      label: "Settings",
      href: "#",
      icon: <Settings className="w-4 h-4" />,
    },
    {
      label: "Terms & Policies",
      href: "#",
      icon: <FileText className="w-4 h-4" />,
      external: true,
    },
  ]

  return (
    <div className="w-64 bg-zinc-900 rounded-lg shadow-lg border border-zinc-700">
      <div className="p-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="relative shrink-0">
            <img
              src={avatar}
              alt={name}
              className="w-12 h-12 rounded-full ring-2 ring-zinc-800 object-cover"
            />
            <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-zinc-800" />
          </div>

          <div className="flex-1">
            <h2 className="text-sm font-semibold text-white">{name}</h2>
            <p className="text-xs text-zinc-400">{role}</p>
          </div>
        </div>

        <div className="h-px bg-zinc-700 my-3" />

        <div className="space-y-1">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center justify-between p-2 hover:bg-zinc-800 rounded-lg transition-colors duration-200"
              target={item.external ? "_blank" : "_self"}
              rel={item.external ? "noopener noreferrer" : ""}
            >
              <div className="flex items-center gap-2">
                {item.icon}
                <span className="text-xs font-medium text-white">{item.label}</span>
              </div>
              {item.external && <MoveUpRight className="w-3 h-3 text-zinc-400" />}
            </a>
          ))}

          <button
            type="button"
            className="w-full flex items-center justify-between p-2 hover:bg-zinc-800 rounded-lg transition-colors duration-200"
          >
            <div className="flex items-center gap-2">
              <LogOut className="w-4 h-4" />
              <span className="text-xs font-medium text-white">Logout</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserProfile