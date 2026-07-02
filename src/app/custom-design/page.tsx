import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Engagement Rings & Jewelry Design | Maple Grove, MN | Goldwear Jewelers",
  description: "Create your dream custom engagement rings and fine jewelry in Maple Grove, MN. Authorized retailer for Allison-Kaufman, Stuller, Facet Barcelona, and Rego.",
};

export default function CustomDesignPage() {
  const steps = [
    {
      number: "01",
      title: "Consultation & Vision",
      description: "Collaborate with our design specialists in Maple Grove. We discuss your ideas, choose your preferred metals (platinum, yellow or white gold), select stones, and sketch the initial concept."
    },
    {
      number: "02",
      title: "3D CAD modeling & Wax Prototype",
      description: "We translate your design into a detailed 3D CAD model. Once approved, we print a physical wax prototype so you can check proportions and fit before we cast."
    },
    {
      number: "03",
      title: "Casting & Hand-Fabrication",
      description: "Our jeweler casts the piece in your chosen precious metal using state-of-the-art casting methods, and meticulously hand-refines the structure."
    },
    {
      number: "04",
      title: "Stone Setting & Finish",
      description: "Every diamond and gemstone is hand-set under microscopic guidance to ensure maximum security and sparkle, followed by a multi-stage hand polish."
    }
  ];

  const brands = [
    {
      name: "Allison-Kaufman",
      tagline: "Bridal & Fashion Diamond Jewelry Retailer",
      description: "As one of the oldest and most respected diamond jewelry manufacturers in the United States, Allison-Kaufman is renowned for its award-winning designs, exceptional brilliance, and hand-crafted precision since 1920."
    },
    {
      name: "Stuller",
      tagline: "Tailored Customization & Fine Mountings",
      description: "Providing an extensive library of premium semi-mountings and loose stones, Stuller enables us to offer endless custom combinations, delivering unparalleled flexibility to match your exact styling preferences."
    },
    {
      name: "Facet Barcelona",
      tagline: "European Elegance & Modern Brilliance",
      description: "Facet Barcelona brings contemporary European design and exquisite diamond settings to Minnesota. Each piece is crafted using ethical sourcing and strict quality controls, reflecting modern global luxury."
    },
    {
      name: "Rego",
      tagline: "Classic Craftsmanship & Heirloom Quality",
      description: "Rego specializes in hand-crafted bridal and anniversary lines that highlight classic elegance. Their collections are curated to be passed down through generations, combining durability with timeless design."
    }
  ];

  return (
    <div className="w-full flex flex-col bg-white">
      {/* Header Banner */}
      <section className="w-full bg-[#f6f6f6] border-b border-[#e5e5e5] py-20 px-4 text-center">
        <div className="mx-auto max-w-[800px] flex flex-col items-center">
          <span className="font-sans text-[10px] tracking-[3px] uppercase text-[#b89d5a] mb-3">
            Signature Creation
          </span>
          <h1 className="font-heading text-[36px] md:text-[44px] font-medium uppercase tracking-[1.5px] text-[#0a0a0a] mb-4">
            Custom Jewelry Design
          </h1>
          <div className="w-12 h-[1px] bg-[#b89d5a] mb-6" />
          <p className="font-heading italic text-[15px] md:text-[16px] text-muted-foreground leading-relaxed max-w-[650px]">
            We turn your vision into one-of-a-kind diamond engagement rings, wedding bands, and heirloom pieces in Maple Grove, MN.
          </p>
        </div>
      </section>

      {/* Design Process */}
      <section className="w-full py-20 px-6 md:px-12 bg-white">
        <div className="mx-auto max-w-[1000px]">
          <div className="text-center mb-16">
            <span className="font-sans text-[10px] tracking-[3px] uppercase text-[#b89d5a] block mb-3">
              Four Simple Steps
            </span>
            <h2 className="font-heading text-[28px] md:text-[34px] text-[#0a0a0a] uppercase tracking-[1px] font-normal">
              Our Custom Design Process
            </h2>
            <div className="w-8 h-[1px] bg-gray-300 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col space-y-4 border border-[#e5e5e5] p-8 bg-white relative">
                <span className="font-heading text-[32px] font-light text-[#b89d5a] block leading-none">
                  {step.number}
                </span>
                <h3 className="font-heading text-[18px] text-[#0a0a0a] uppercase tracking-[1px]">
                  {step.title}
                </h3>
                <p className="font-sans text-[13.5px] text-muted-foreground leading-[22px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Designer Lines Section */}
      <section className="w-full py-20 px-6 md:px-12 bg-[#f6f6f6] border-t border-[#e5e5e5]">
        <div className="mx-auto max-w-[1000px]">
          <div className="text-center mb-16">
            <span className="font-sans text-[10px] tracking-[3px] uppercase text-[#b89d5a] block mb-3">
              Premier Brands
            </span>
            <h2 className="font-heading text-[28px] md:text-[34px] text-[#0a0a0a] uppercase tracking-[1px] font-normal">
              Featured Designer Collections
            </h2>
            <div className="w-8 h-[1px] bg-gray-300 mx-auto mt-4" />
            <p className="font-heading italic text-[15px] text-muted-foreground mt-4 max-w-[600px] mx-auto">
              We carry exquisite jewelry from leading global brands to give you access to the finest craftsmanship alongside our in-house designs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="flex flex-col border border-[#e5e5e5] p-8 md:p-10 bg-white space-y-4 justify-between"
              >
                <div className="space-y-2">
                  <span className="font-sans text-[10px] tracking-[2px] uppercase text-[#b89d5a]">
                    {brand.tagline}
                  </span>
                  <h3 className="font-heading text-[24px] text-[#0a0a0a] uppercase tracking-[1px] font-normal">
                    {brand.name}
                  </h3>
                  <div className="w-6 h-[1.5px] bg-[#b89d5a]" />
                  <p className="font-sans text-[14px] text-muted-foreground leading-[24px] pt-2">
                    {brand.description}
                  </p>
                </div>
                <div className="pt-4">
                  <a
                    href="https://goldwearjewelers.com/contact-us"
                    className="inline-block font-sans text-[10px] font-semibold uppercase tracking-[2px] text-[#0a0a0a] hover:text-[#b89d5a] transition-colors border-b border-[#0a0a0a] hover:border-[#b89d5a] pb-1"
                  >
                    Inquire About {brand.name}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
