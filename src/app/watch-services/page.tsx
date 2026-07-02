import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Watch Repair & Battery Replacement | Maple Grove, MN | Goldwear Jewelers",
  description: "Precision watch repair in Maple Grove, MN. We change watch batteries for all makes and models, resize watch bands, and replace buckles.",
};

export default function WatchServicesPage() {
  const services = [
    {
      title: "Watch Batteries",
      description: "We are able to change batteries in all makes and models of watches. Our regular rate is $15 plus tax. We have a $30 plus tax rate for premium watches such as Gucci, Movado, Invicta, etc. We also offer a senior discount that takes $2 off any battery.",
      image: "/images/watch-battery.jpg"
    },
    {
      title: "Watch Adjustment",
      description: "Watch adjustments are a $20 fee for a standard adjustment and $30 fee for premium watches and includes future adjustments with the watch we are sizing. We offer a senior rate of $18 standard or $28 premium for watch adjustments.",
      image: "/images/watch-adjustment.jpg"
    },
    {
      title: "Replacement Pin",
      description: "Friction pins and spring bars are replaceable parts that we sell and install for $8 each. A pair of spring bars are priced at $10. Specialty pins are $15 and up depending on the type of pin.",
      image: "/images/watch-pin.jpg"
    },
    {
      title: "Reset Hands/Markers",
      description: "Hands on watches are held by friction and can sometimes slip off or spin around freely. We are able to reset hands in most watches. Markers are held on commonly by a small amount of glue and can come off occasionally. We recommend either resetting the markers or dropping them out of the face of the watch.",
      image: "/images/resetting-watch-hands.jpg"
    },
    {
      title: "Replacement Buckle/Clasp",
      description: "If the buckle on your band comes off and is lost we are able to replace it. We are also able to replace some spring deployed clasps and parts.",
      image: "/images/watch-buckles.jpg"
    },
    {
      title: "New Watch Band",
      description: "If your leather band has fallen apart or buckles are too hard to do anymore we offer replacement bands. We carry multiple styles of leather bands in multiple sizes. Expansion bands are a metal option that slip over the hand for ease of use. We also carry a small selection of metal link bands. Don't see something you like? We also have a catalog you can look in and order from.",
      image: "/images/new-watch-bands.jpg"
    }
  ];

  return (
    <div className="w-full flex flex-col bg-white">
      {/* Header Banner */}
      <section className="w-full bg-[#f6f6f6] border-b border-[#e5e5e5] py-20 px-4 text-center">
        <div className="mx-auto max-w-[800px] flex flex-col items-center">
          <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-[#b89d5a] mb-3 block">
            Precision &amp; Care
          </span>
          <h1 className="font-heading text-[32px] md:text-[42px] font-light uppercase tracking-[0.15em] text-[#0a0a0a] mb-4">
            Watch Services
          </h1>
          <div className="w-12 h-[1px] bg-[#b89d5a] mb-6" />
          <p className="font-heading italic text-[15px] md:text-[16px] text-muted-foreground leading-relaxed max-w-[650px]">
            Some of the watch services we offer -- if you have any questions about services or have a repair that you do not see on this list, feel free to bring the watch in, call, or email us.
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
                      alt={`${svc.title} - Watch Repair Maple Grove MN`}
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
