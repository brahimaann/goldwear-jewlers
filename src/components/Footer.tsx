import React from "react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t-2 border-[#0a0a0a] bg-white py-16 px-6 md:px-12 mt-auto">
      <div className="mx-auto max-w-[1000px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Column 1: About */}
        <div className="flex flex-col space-y-4">
          <h4 className="font-sans text-[11px] font-bold tracking-[2.5px] uppercase text-[#0a0a0a]">
            About Us
          </h4>
          <p className="font-sans text-[13px] leading-[22px] text-muted-foreground">
            Goldwear Jewelers was established in 1986. Over the past 40 years, we have been committed to taking care of Minnesota&apos;s fine jewelry repairs, battery changes, and custom designs.
          </p>
        </div>

        {/* Column 2: Jewelry Repairs */}
        <div className="flex flex-col space-y-4">
          <h4 className="font-sans text-[11px] font-bold tracking-[2.5px] uppercase text-[#0a0a0a]">
            Jewelry Repair
          </h4>
          <ul className="flex flex-col space-y-2.5 font-sans text-[13px]">
            <li>
              <Link href="/jewelry-repair" className="text-muted-foreground hover:text-[#b89d5a] transition-colors">
                Ring Sizing
              </Link>
            </li>
            <li>
              <Link href="/jewelry-repair" className="text-muted-foreground hover:text-[#b89d5a] transition-colors">
                Ring Re-Tipping
              </Link>
            </li>
            <li>
              <Link href="/jewelry-repair" className="text-muted-foreground hover:text-[#b89d5a] transition-colors">
                Chain Solder
              </Link>
            </li>
            <li>
              <Link href="/jewelry-repair" className="text-muted-foreground hover:text-[#b89d5a] transition-colors">
                Replacement Stones
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Watch Services */}
        <div className="flex flex-col space-y-4">
          <h4 className="font-sans text-[11px] font-bold tracking-[2.5px] uppercase text-[#0a0a0a]">
            Watch Services
          </h4>
          <ul className="flex flex-col space-y-2.5 font-sans text-[13px]">
            <li>
              <Link href="/watch-services" className="text-muted-foreground hover:text-[#b89d5a] transition-colors">
                Watch Batteries
              </Link>
            </li>
            <li>
              <Link href="/watch-services" className="text-muted-foreground hover:text-[#b89d5a] transition-colors">
                Watch Adjustments
              </Link>
            </li>
            <li>
              <Link href="/watch-services" className="text-muted-foreground hover:text-[#b89d5a] transition-colors">
                Replacement Pins
              </Link>
            </li>
            <li>
              <Link href="/watch-services" className="text-muted-foreground hover:text-[#b89d5a] transition-colors">
                Bands & Buckles
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact & Details */}
        <div className="flex flex-col space-y-4">
          <h4 className="font-sans text-[11px] font-bold tracking-[2.5px] uppercase text-[#0a0a0a]">
            Store Info
          </h4>
          <ul className="flex flex-col space-y-2.5 font-sans text-[13px] text-muted-foreground">
            <li>
              13689 Grove Drive<br />
              Maple Grove, MN 55311
            </li>
            <li>
              <a href="tel:7634208060" className="text-[#0a0a0a] font-semibold hover:text-[#b89d5a] transition-colors">
                (763) 420-8060
              </a>
            </li>
            <li>
              TUE-SAT: 10:00 AM - 5:00 PM
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="mx-auto max-w-[1000px] border-t border-[#e5e5e5] mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-sans text-[11px] font-medium text-muted-foreground uppercase tracking-[1.5px] text-center md:text-left">
          &copy; {currentYear} GOLDWEAR JEWELERS. ALL RIGHTS RESERVED.
        </p>
        <div className="flex space-x-6 text-[10px] uppercase tracking-[1.5px]">
          <Link href="/" className="text-muted-foreground hover:text-[#0a0a0a] transition-colors">
            Home
          </Link>
          <Link href="/services" className="text-muted-foreground hover:text-[#0a0a0a] transition-colors">
            Services
          </Link>
          <Link href="/contact-us" className="text-muted-foreground hover:text-[#0a0a0a] transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
