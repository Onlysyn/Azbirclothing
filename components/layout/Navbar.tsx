"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Collections", href: "/collections" },
  { label: "Our Story", href: "/our-story" },
  { label: "Custom Order", href: "/custom-order" },
  { label: "Contact", href: "/contact" },
] as const;

const SCROLL_THRESHOLD = 24;

type NavbarProps = {
  /** When true, navbar is transparent at the top of the page (for hero sections). */
  overHero?: boolean;
};

export default function Navbar({ overHero }: NavbarProps) {
  const pathname = usePathname();
  const isOverHero = overHero ?? pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const isSolid = !isOverHero || scrolled;

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > SCROLL_THRESHOLD);
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) {
      const drawer = document.getElementById("mobile-nav-drawer");
      if (drawer?.contains(document.activeElement)) {
        menuButtonRef.current?.focus();
      }
    }
  }, [menuOpen]);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    menuButtonRef.current?.focus();
  }, []);

  const linkClass = isSolid
    ? "text-dark/80 hover:text-green transition-colors"
    : "text-white/90 hover:text-white transition-colors";

  const logoClass = isSolid ? "text-dark" : "text-white";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          isSolid
            ? "bg-white shadow-sm shadow-dark/5"
            : "bg-transparent"
        }`}
      >
        <nav
          className="mx-auto grid h-16 max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-4 px-4 sm:h-20 sm:px-6 lg:px-8"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className={`justify-self-start font-display text-lg font-semibold tracking-tight sm:text-xl ${logoClass}`}
          >
            Azbir Clothing
          </Link>

          <ul className="hidden items-center justify-center gap-6 xl:gap-8 lg:flex">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link href={href} className={`text-sm font-medium ${linkClass}`}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-end gap-3 justify-self-end">
            <Link
              href="/custom-order"
              className="hidden rounded-sm bg-gold px-5 py-2.5 text-sm font-semibold text-dark transition-colors hover:bg-gold/90 sm:inline-flex"
            >
              Order Now
            </Link>

            <button
              ref={menuButtonRef}
              type="button"
              className={`inline-flex h-10 w-10 items-center justify-center rounded-sm lg:hidden ${
                isSolid ? "text-dark" : "text-white"
              }`}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-drawer"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-6 w-6"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-6 w-6"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-dark/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!menuOpen}
        onClick={closeMenu}
      />

      {/* Mobile slide-in drawer */}
      <aside
        id="mobile-nav-drawer"
        className={`fixed top-0 right-0 z-50 flex h-full w-[min(100%,20rem)] flex-col bg-white shadow-xl transition-transform duration-300 ease-out lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        inert={!menuOpen}
      >
        <div className="flex h-16 items-center justify-between border-b border-dark/10 px-5 sm:h-20">
          <span className="font-display text-lg font-semibold text-dark">
            Menu
          </span>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm text-dark"
            aria-label="Close menu"
            onClick={closeMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-6 w-6"
              aria-hidden
            >
              <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-5 py-6">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="rounded-sm px-3 py-3 text-base font-medium text-dark/80 transition-colors hover:bg-cream hover:text-green"
              onClick={closeMenu}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="border-t border-dark/10 p-5">
          <Link
            href="/custom-order"
            className="flex w-full items-center justify-center rounded-sm bg-gold px-5 py-3 text-sm font-semibold text-dark transition-colors hover:bg-gold/90"
            onClick={closeMenu}
          >
            Order Now
          </Link>
        </div>
      </aside>
    </>
  );
}
