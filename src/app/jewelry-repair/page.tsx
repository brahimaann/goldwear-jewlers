import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jewelry Repair & Ring Resizing | Maple Grove, MN | Goldwear Jewelers",
  description: "Professional jewelry repair in Maple Grove, MN. Expert ring sizing, stone replacement, re-tipping, chain repair, and bracelet restringing.",
};

export default function JewelryRepairPage() {
  const services = [
    {
      title: "Ring Sizing",
      description: "We offer ring sizing on rings made of platinum, any karat yellow or white gold, and sterling silver. The price depends on whether or not the ring is being sized up or down, how many sizes, and variables with stones.",
      image: "/images/ring-sizing.jpg"
    },
    {
      title: "Ring Re-Tipping",
      description: "We recommend that tips covering the stones in rings be checked every six months so we can prevent stones coming out.",
      image: "/images/retipping.jpg"
    },
    {
      title: "Chain Break",
      description: "Chain repairs are most commonly a break in the chain. Most chain repairs cost $40 and up depending on the chain and the material it is made of.",
      image: "/images/chain-repair.jpg"
    },
    {
      title: "Ring Break",
      description: "A split in the band of a ring can be repaired and potentially prevented by reshanking the ring if it is very thin. Soldering a break can be $40 and up.",
      image: "/images/ring-break.jpg"
    },
    {
      title: "Replacement Stones",
      description: "Replacing gemstones and diamonds is a service we are able to offer. Along with replacing the stone, there often needs to be tipping work done to hold that stone in. Prices are on a case-by-case basis.",
      image: "/images/loose-gemstones.jpg"
    },
    {
      title: "Replacement Clasp",
      description: "We can replace clasps in a variety of styles and sizes. Price varies depending on the metal, type, and size.",
      image: "/images/replacement-clasp.jpg"
    },
    {
      title: "Bracelet Repair",
      description: "Bracelets of many styles are able to be repaired by our jeweler. From tennis bracelets to charm bracelets we can do it all.",
      image: "/images/bracelet-repair.jpg"
    },
    {
      title: "Restringing",
      description: "We are able to offer restringing services regarding pearl necklaces, pearl bracelets, and other strung jewelry.",
      image: "/images/restringing.jpg"
    }
  ];

  return (
    <div className="w-full flex flex-col bg-white">
      {/* Header Banner */}
      <section className="w-full bg-[#f6f6f6] border-b border-[#e5e5e5] py-20 px-4 text-center">
        <div className="mx-auto max-w-[800px] flex flex-col items-center">
          <span className="font-sans text-[10px] tracking-[3px] uppercase text-[#b89d5a] mb-3">
            Services
          </span>
          <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-[#b89d5a] mb-3 block">
            Expert Craftsmanship
          </span>
          <h1 className="font-heading text-[32px] md:text-[42px] font-light uppercase tracking-[0.15em] text-[#0a0a0a] mb-4">
            Jewelry Repair
          </h1>
          <div className="w-12 h-[1px] bg-[#b89d5a] mb-6" />
          <p className="font-heading italic text-[15px] md:text-[16px] text-muted-foreground leading-relaxed max-w-[650px]">
            Some of the jewelry repairs we offer -- if you have any questions about repairs or have a repair that you do not see on this list, feel free to bring the piece in, call, or email us.
          </p>
        </div>
      </section>

      {/* Services Alternating Rows */}
      <section className="w-full bg-white py-24 px-6 md:px-12">
        <div className="mx-auto max-w-[1000px]">
          <div className="flex flex-col space-y-24">
            {services.map((svc, index) => {
              const isEven = index % 2 === 1;
              return (
                <div
                  key={svc.title}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center group"
                >
                  {/* Image container */}
                  <div
                    className={`lg:col-span-7 aspect-[16/7] relative overflow-hidden border border-gray-100 bg-gray-50 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={svc.image}
                      alt={`${svc.title} - Jewelry Repair Maple Grove MN`}
                      className="w-full h-full object-cover grayscale transition-all duration-[800ms] group-hover:grayscale-0 group-hover:scale-103"
                    />
                    <div className="absolute inset-0 bg-black/5" />
                  </div>

                  {/* Text Content */}
                  <div
                    className={`lg:col-span-5 flex flex-col space-y-4 text-left ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#b89d5a]">
                      Service {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-heading text-[24px] md:text-[28px] text-[#0a0a0a] uppercase tracking-[1px] font-normal leading-tight">
                      {svc.title}
                    </h3>
                    <div className="w-6 h-[1.5px] bg-[#b89d5a]" />
                    <p className="font-sans text-[14px] text-muted-foreground leading-[24px] pt-1">
                      {svc.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
