"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon, XIcon, ChevronDownIcon } from "./icons";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);


  const mainNavItems = [
    { label: "Home", path: "/" },
    {
      label: "All Services",
      path: "/services",
      submenu: [
        { label: "Jewelry Repair", path: "/jewelry-repair" },
        { label: "Watch Services", path: "/watch-services" },
      ],
    },
    { label: "Custom Design", path: "/custom-design" },
    { label: "Jewelry Repair", path: "/jewelry-repair" },
    { label: "Watch Services", path: "/watch-services" },
    { label: "Contact Us", path: "/contact-us" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e5e5e5] bg-white">
      {/* Desktop Header (2 Rows) */}
      <div className="hidden lg:block w-full">
        {/* Row 1: Brand Wordmark & Secondary details */}
        <div className="w-full border-b border-[#f2f2f2] px-8 py-5">
          <div className="mx-auto max-w-[1000px] grid grid-cols-3 items-center">
            {/* Row 1 Left: Services / Contact quick links */}
            <div className="flex space-x-6 text-[10.5px] font-normal tracking-[2.5px] uppercase font-sans text-muted-foreground">
              <Link href="/services" className="hover:text-[#0a0a0a] transition-colors">
                Services
              </Link>
              <Link href="/contact-us" className="hover:text-[#0a0a0a] transition-colors">
                Contact
              </Link>
            </div>

            {/* Row 1 Center: Brand Logo Image */}
            <div className="text-center flex flex-col items-center">
              <Link href="/" className="group flex flex-col items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/goldwear-logo.jpg"
                  alt="Goldwear Jewelers Logo"
                  className="h-[75px] w-auto object-contain transition-opacity duration-300 group-hover:opacity-85"
                />
              </Link>
            </div>

            {/* Row 1 Right: Contact details */}
            <div className="flex flex-col items-end space-y-1 font-sans text-[10.5px] tracking-[2px] uppercase text-muted-foreground">
              <a href="tel:7634208060" className="text-[#0a0a0a] font-semibold hover:text-[#b89d5a] transition-colors">
                (763) 420-8060
              </a>
              <span className="text-[9.5px]">TUE-SAT: 10:00 AM - 5:00 PM</span>
            </div>
          </div>
        </div>

        {/* Row 2: Main Navigation Menu */}
        <div className="w-full py-4 bg-white">
          <nav className="mx-auto max-w-[1000px] flex justify-center space-x-12">
            {mainNavItems.map((item) => {
              if (item.submenu) {
                return (
                  <div
                    key={item.label}
                    className="relative py-1 cursor-pointer"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1.5 font-sans text-[11px] font-medium uppercase tracking-[2.5px] transition-colors cursor-pointer ${
                        isActive(item.path) || pathname.startsWith("/jewelry-repair") || pathname.startsWith("/watch-services")
                          ? "text-[#b89d5a] border-b border-[#b89d5a]"
                          : "text-[#0a0a0a] hover:text-[#b89d5a]"
                      }`}
                    >
                      {item.label}
                      <ChevronDownIcon className="h-3 w-3 text-current transition-transform duration-300 group-hover:rotate-180" />
                    </button>

                    {/* Dropdown Menu */}
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 top-[100%] w-[220px] bg-white border border-[#e5e5e5] shadow-lg py-3 transition-all duration-300 ${
                        servicesDropdownOpen
                          ? "visible opacity-100 translate-y-2"
                          : "invisible opacity-0 translate-y-0 pointer-events-none"
                      }`}
                    >
                      <div className="flex flex-col space-y-1">
                        <Link
                          href={item.path}
                          className={`px-6 py-2.5 text-[10px] tracking-[2px] uppercase transition-colors font-sans ${
                            pathname === item.path ? "text-[#b89d5a] bg-[#f6f6f6]" : "text-[#0a0a0a] hover:bg-[#f6f6f6] hover:text-[#b89d5a]"
                          }`}
                        >
                          All Services
                        </Link>
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.path}
                            className={`px-6 py-2.5 text-[10px] tracking-[2px] uppercase border-t border-gray-50 transition-colors font-sans ${
                              pathname === sub.path ? "text-[#b89d5a] bg-[#f6f6f6]" : "text-[#0a0a0a] hover:bg-[#f6f6f6] hover:text-[#b89d5a]"
                            }`}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.path}
                  className={`relative py-1 font-sans text-[11px] font-medium uppercase tracking-[2.5px] transition-colors border-b ${
                    isActive(item.path)
                      ? "text-[#b89d5a] border-[#b89d5a]"
                      : "text-[#0a0a0a] border-transparent hover:text-[#b89d5a] hover:border-[#b89d5a]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Mobile Header (Collapsible Drawer Layout) */}
      <div className="lg:hidden w-full h-[70px] px-6 flex items-center justify-between">
        {/* Spacer to balance hamburger icon */}
        <div className="w-10" />

        {/* Brand Logo (Centered) */}
        <Link href="/" className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/goldwear-logo.jpg"
            alt="Goldwear Jewelers Logo"
            className="h-[48px] w-auto object-contain"
          />
        </Link>

        {/* Right Side: Hamburger Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-[#0a0a0a] hover:text-[#b89d5a] focus:outline-none cursor-pointer"
          aria-label="Toggle menu"
        >
          {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 top-[70px] z-40 bg-black/40 backdrop-blur-sm lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Side Drawer Menu (Slides from the Left) */}
      <div
        className={`fixed left-0 top-[70px] bottom-0 z-40 w-full max-w-[300px] border-r border-[#e5e5e5] bg-white shadow-2xl transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full bg-white divide-y divide-gray-100">
          <nav className="flex flex-col p-6 space-y-6">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={`font-sans text-[12px] font-semibold uppercase tracking-[2.5px] ${
                pathname === "/" ? "text-[#b89d5a]" : "text-[#0a0a0a] hover:text-[#b89d5a]"
              }`}
            >
              Home
            </Link>

            <Link
              href="/services"
              onClick={() => setIsOpen(false)}
              className={`font-sans text-[12px] font-semibold uppercase tracking-[2.5px] ${
                pathname === "/services" ? "text-[#b89d5a]" : "text-[#0a0a0a] hover:text-[#b89d5a]"
              }`}
            >
              All Services
            </Link>

            <Link
              href="/custom-design"
              onClick={() => setIsOpen(false)}
              className={`font-sans text-[12px] font-semibold uppercase tracking-[2.5px] ${
                pathname === "/custom-design" ? "text-[#b89d5a]" : "text-[#0a0a0a] hover:text-[#b89d5a]"
              }`}
            >
              Custom Design
            </Link>

            <div className="flex flex-col pl-4 border-l border-gray-100 space-y-4">
              <Link
                href="/jewelry-repair"
                onClick={() => setIsOpen(false)}
                className={`font-sans text-[11px] font-medium uppercase tracking-[2px] ${
                  pathname === "/jewelry-repair" ? "text-[#b89d5a]" : "text-muted-foreground hover:text-[#b89d5a]"
                }`}
              >
                Jewelry Repair
              </Link>
              <Link
                href="/watch-services"
                onClick={() => setIsOpen(false)}
                className={`font-sans text-[11px] font-medium uppercase tracking-[2px] ${
                  pathname === "/watch-services" ? "text-[#b89d5a]" : "text-muted-foreground hover:text-[#b89d5a]"
                }`}
              >
                Watch Services
              </Link>
            </div>

            <Link
              href="/contact-us"
              onClick={() => setIsOpen(false)}
              className={`font-sans text-[12px] font-semibold uppercase tracking-[2.5px] ${
                pathname === "/contact-us" ? "text-[#b89d5a]" : "text-[#0a0a0a] hover:text-[#b89d5a]"
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Quick contact at bottom of mobile menu */}
          <div className="p-6 mt-auto bg-[#f6f6f6] flex flex-col space-y-2">
            <a href="tel:7634208060" className="font-sans text-[13px] font-bold text-[#0a0a0a] tracking-[1.5px]">
              (763) 420-8060
            </a>
            <span className="font-sans text-[10px] text-muted-foreground tracking-[1.5px] uppercase">
              TUE-SAT: 10:00 AM - 5:00 PM
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
