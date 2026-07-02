import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jewelry & Watch Repair Services | Maple Grove, MN | Goldwear Jewelers",
  description: "Discover Goldwear Jewelers' full repair services. Offering professional jewelry restoration, ring sizing, and watch repair in Maple Grove.",
};

export default function ServicesPage() {
  const categories = [
    {
      title: "Jewelry Repair",
      description: "We offer extensive repair services on all kinds of jewelry -- from ring sizing to chain repairs.",
      link: "/jewelry-repair",
      image: "/images/jewelry-repair-thumb.jpg",
    },
    {
      title: "Watch Services",
      description: "From replacement batteries to new bands we cover many facets of watch repair.",
      link: "/watch-services",
      image: "/images/watch-repair-thumb.jpg",
    },
  ];

  return (
    <div className="w-full flex flex-col bg-white">
      {/* Header Banner */}
      <section className="w-full bg-[#f6f6f6] border-b border-[#e5e5e5] py-20 px-4 text-center">
        <div className="mx-auto max-w-[800px] flex flex-col items-center">
          <span className="font-sans text-[10px] tracking-[3px] uppercase text-[#b89d5a] mb-3">
            Collections
          </span>
          <h1 className="font-heading text-[36px] md:text-[44px] font-medium uppercase tracking-[1.5px] text-[#0a0a0a] mb-4">
            Our Services
          </h1>
          <div className="w-12 h-[1px] bg-[#b89d5a] mb-6" />
          <p className="font-heading italic text-[16px] md:text-[18px] text-muted-foreground leading-relaxed max-w-[550px]">
            We offer quality repair and services for fine jewelry and watches alike.
          </p>
        </div>
      </section>

      {/* Services Selection Grid */}
      <section className="w-full bg-white py-20 px-6 md:px-12">
        <div className="mx-auto max-w-[1000px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="group flex flex-col bg-white overflow-hidden text-center items-center"
              >
                {/* Image Container (Aspect 1/1 square) */}
                <div className="w-full aspect-[4/3] relative overflow-hidden border border-gray-100 mb-6 bg-gray-50">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cat.image}
                    alt={`${cat.title} and repair services in Maple Grove MN`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-black/5" />
                </div>

                {/* Content Box */}
                <span className="font-sans text-[10px] tracking-[3px] uppercase text-[#b89d5a] mb-2">
                  Specialty Category
                </span>
                <h2 className="font-heading text-[24px] text-[#0a0a0a] uppercase tracking-[1.5px] font-normal mb-3">
                  {cat.title}
                </h2>
                <p className="font-sans text-[14px] text-muted-foreground leading-[24px] mb-6 max-w-[400px] h-12">
                  {cat.description}
                </p>
                <Link
                  href={cat.link}
                  className="inline-block font-sans text-[11px] font-medium uppercase tracking-[2.5px] bg-[#0a0a0a] hover:bg-[#b89d5a] text-white px-8 py-3.5 transition-colors duration-300 w-full max-w-[200px]"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
