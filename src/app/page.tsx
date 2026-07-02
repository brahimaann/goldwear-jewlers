import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jewelry Store & Custom Designs | Maple Grove, MN | Goldwear Jewelers",
  description: "Family-owned jewelry store in Maple Grove, MN since 1986. Specializing in custom engagement rings, expert jewelry repair, and watch battery replacements.",
};

export default function Home() {
  return (
    <div className="w-full flex flex-col bg-white">
      
      {/* Hero / Promo Splitted Section */}
      <section className="w-full py-10 px-6 md:px-12 bg-white">
        <div className="mx-auto max-w-[1000px] grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Asymmetrical Gold-bordered Text Box (40% width / 5 cols) */}
          <div className="md:col-span-5 flex flex-col justify-between border border-[#b89d5a] p-8 md:p-12 text-center items-center bg-white min-h-[400px]">
            <span className="font-sans text-[9px] tracking-[0.35em] uppercase text-[#b89d5a]">
              Established 1986
            </span>
            
            <div className="my-auto flex flex-col items-center">
              <h2 className="font-heading text-[32px] md:text-[42px] leading-tight font-light text-[#0a0a0a] uppercase tracking-[0.15em] mt-4 mb-3">
                Goldwear Jewelers
              </h2>
              <div className="w-10 h-[1.5px] bg-[#b89d5a] my-4" />
              <p className="font-heading italic text-[16px] text-muted-foreground leading-relaxed">
                Family-Owned Custom Design &amp; Full-Service Repair Since 1986
              </p>
            </div>
            
            <Link
              href="/services"
              className="inline-block font-sans text-[11px] font-medium uppercase tracking-[2.5px] bg-[#0a0a0a] hover:bg-[#b89d5a] text-white px-8 py-4 w-full transition-colors duration-300"
            >
              Explore Our Services
            </Link>
          </div>

          {/* Right Column: Hero Cover Image (60% width / 7 cols) */}
          <div className="md:col-span-7 relative group overflow-hidden border border-gray-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/store-front.jpg"
              alt="Goldwear Jewelers store front in Maple Grove MN"
              className="w-full h-full min-h-[400px] object-cover transition-transform duration-700 group-hover:scale-103"
            />
            <div className="absolute inset-0 bg-black/5" />
          </div>

        </div>
      </section>

      {/* Brand Promise Section */}
      <section className="w-full bg-[#f6f6f6] py-20 px-6 md:px-12 border-y border-[#e5e5e5]">
        <div className="mx-auto max-w-[800px] text-center flex flex-col items-center">
          <span className="font-sans text-[10px] tracking-[3.5px] uppercase text-[#b89d5a] mb-4">
            Our Promise
          </span>
          <h3 className="font-heading text-[26px] md:text-[36px] font-light leading-snug text-[#0a0a0a] mb-8 max-w-[680px]">
            &ldquo;Every piece of jewelry carries a story. We use our four decades of craft and precision to ensure that story continues beautifully.&rdquo;
          </h3>
          <div className="w-16 h-[1px] bg-[#0a0a0a]/20 mb-8" />
        </div>
      </section>

      {/* About & History (Luxury Editorial Overlapping Staggered Rows) */}
      <section className="w-full py-24 px-6 md:px-12 bg-white">
        <div className="mx-auto max-w-[1000px] space-y-32">
          
          {/* Row 1: About Us & Who We Are */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group">
            {/* Left: Cinematic Workshop Image (cols 1-7) */}
            <div className="lg:col-span-7 aspect-[16/10] relative overflow-hidden border border-gray-100 bg-gray-50">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/jewelry-repair-thumb.jpg"
                alt="Jeweler workbench in Maple Grove MN"
                className="w-full h-full min-h-[300px] object-cover grayscale transition-all duration-[800ms] group-hover:grayscale-0 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-black/5" />
            </div>

            {/* Right: Floating Content Card (cols 6-12) */}
            <div className="lg:col-span-5 lg:-ml-20 bg-white border border-[#e5e5e5] p-8 md:p-12 shadow-sm z-10 relative space-y-8">
              <div>
                <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-[#b89d5a] block mb-3">
                  Maple Grove, Minnesota
                </span>
                <h3 className="font-heading text-[28px] md:text-[34px] leading-tight font-light text-[#0a0a0a] uppercase tracking-[0.1em] mb-4">
                  About Us
                </h3>
                <div className="font-sans text-[13.5px] leading-[24px] text-muted-foreground space-y-4">
                  <p>
                    For nearly four decades, Goldwear Jewelers has specialized in creating custom, one-of-a-kind jewelry and providing expert, full-service repair.
                  </p>
                  <p>
                    We curate exceptional fine jewelry from premier manufacturers—including Allison-Kaufman, Stuller, Facet Barcelona, and Rego—alongside our own signature custom designs. Every piece in our collection is strictly vetted to meet rigorous quality standards, ensuring your jewelry is both visually striking and built to endure.
                  </p>
                  <p>
                    We also provide comprehensive watch maintenance, including precision battery replacements for all makes and models.
                  </p>
                </div>
              </div>

              <div className="border-t border-[#e5e5e5] pt-6">
                <h4 className="font-heading text-[18px] text-[#0a0a0a] uppercase tracking-[1.5px] font-normal mb-3">
                  Who We Are
                </h4>
                <p className="font-sans text-[13.5px] leading-[24px] text-muted-foreground">
                  Goldwear Jewelers is a family-operated business dedicated to precise craftsmanship and attentive client service. From minor technical repairs to selecting milestone gifts, we deliver reliable solutions to manage and maintain your jewelry collection.
                </p>
              </div>
            </div>
          </div>

          {/* Row 2: Our History (Staggered Stance) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group pt-10">
            {/* Left: Floating Content Card (cols 1-7 - overlapping!) */}
            <div className="lg:col-span-5 lg:-mr-20 bg-white border border-[#e5e5e5] p-8 md:p-12 shadow-sm z-10 relative order-2 lg:order-1">
              <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-[#b89d5a] block mb-3">
                Since 1986
              </span>
              <h3 className="font-heading text-[28px] md:text-[34px] leading-tight font-light text-[#0a0a0a] uppercase tracking-[0.1em] mb-4">
                Our History
              </h3>
              <p className="font-sans text-[13.5px] leading-[24px] text-muted-foreground">
                Goldwear Jewelers was founded 40 years ago by business partners Ron Halverson and David Johnson. David&apos;s son, Tom, began training in the trade at age 16, developing a deep expertise in production and repair. Following the retirement of the founders, Tom assumed ownership and continues to direct all operations, preserving the company&apos;s commitment to technical excellence and local heritage.
              </p>
            </div>

            {/* Right: Cinematic Storefront Image (cols 6-12) */}
            <div className="lg:col-span-7 aspect-[16/10] relative overflow-hidden border border-gray-100 bg-gray-50 order-1 lg:order-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/watch-repair-thumb.jpg"
                alt="Watch services at Goldwear Jewelers Maple Grove MN"
                className="w-full h-full min-h-[300px] object-cover grayscale transition-all duration-[800ms] group-hover:grayscale-0 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-black/5" />
            </div>
          </div>

        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full bg-[#f6f6f6] py-20 px-6 md:px-12 border-t border-[#e5e5e5]">
        <div className="mx-auto max-w-[1000px]">
          <div className="text-center mb-16">
            <span className="font-sans text-[10px] tracking-[3px] uppercase text-[#b89d5a] block mb-3">
              Testimonials
            </span>
            <h2 className="font-heading text-[28px] md:text-[34px] text-[#0a0a0a] uppercase tracking-[1px] font-normal">
              Voices of our Clients
            </h2>
            <div className="w-8 h-[1px] bg-gray-300 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col border border-[#e5e5e5] bg-white p-8 space-y-4">
              <span className="text-[#b89d5a] text-xl">★★★★★</span>
              <p className="font-sans italic text-[14px] text-muted-foreground leading-[22px] flex-1">
                &ldquo;For our 10 year wedding anniversary, I wanted a custom yellow gold engagement ring. Tom made this set perfect for me, using gold from my original set. The whole process was a delight and the end result amazing.&rdquo;
              </p>
              <div className="space-y-0.5">
                <span className="font-heading text-[15px] font-medium text-[#0a0a0a] uppercase tracking-[1.5px] block">
                  Hannah R.
                </span>
                <span className="font-sans text-[9px] uppercase tracking-[1px] text-muted-foreground block">
                  Maple Grove, MN
                </span>
              </div>
            </div>

            <div className="flex flex-col border border-[#e5e5e5] bg-white p-8 space-y-4">
              <span className="text-[#b89d5a] text-xl">★★★★★</span>
              <p className="font-sans italic text-[14px] text-muted-foreground leading-[22px] flex-1">
                &ldquo;Friendly, reasonable, trustworthy family-owned jewelry store - has been tucked into a corner in a strip mall in Maple Grove for almost as long as I can remember. We&apos;ve always been 100% satisfied with Tom.&rdquo;
              </p>
              <div className="space-y-0.5">
                <span className="font-heading text-[15px] font-medium text-[#0a0a0a] uppercase tracking-[1.5px] block">
                  Paula K.
                </span>
                <span className="font-sans text-[9px] uppercase tracking-[1px] text-muted-foreground block">
                  Yelp Review
                </span>
              </div>
            </div>

            <div className="flex flex-col border border-[#e5e5e5] bg-white p-8 space-y-4">
              <span className="text-[#b89d5a] text-xl">★★★★★</span>
              <p className="font-sans italic text-[14px] text-muted-foreground leading-[22px] flex-1">
                &ldquo;Goldwear Jewelers values long term relationships. I would recommend a consultation with Tom before any major purchase because his knowledge, experience, and care goes beyond what words could match.&rdquo;
              </p>
              <div className="space-y-0.5">
                <span className="font-heading text-[15px] font-medium text-[#0a0a0a] uppercase tracking-[1.5px] block">
                  Aaron L.
                </span>
                <span className="font-sans text-[9px] uppercase tracking-[1px] text-muted-foreground block">
                  Google Review
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
