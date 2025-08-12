import React from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "FILMS", href: "#" },
  { label: "TECHNOLOGY", href: "#" },
  { label: "CAREERS", href: "#" },
  { label: "MORE", href: "#" },
];

export const Navbar: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex h-16 items-center justify-between">
          <a href="#" className="font-semibold tracking-[0.3em] text-gray-900">
            Jhon Bucks
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-xs tracking-[0.25em] text-gray-800 hover:text-black transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
            aria-expanded={open}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </div>

      <div
        className={`md:hidden transition-[max-height] duration-300 overflow-hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="border-t">
          <ul className="flex flex-col px-4 py-3 gap-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a
                  onClick={() => setOpen(false)}
                  href={item.href}
                  className="block py-2 text-sm tracking-[0.2em] text-gray-900"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};
