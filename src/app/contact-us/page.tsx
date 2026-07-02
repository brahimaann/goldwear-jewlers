import React from "react";
import type { Metadata } from "next";
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon } from "@/components/icons";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Location, Hours & Contact | Maple Grove, MN | Goldwear Jewelers",
  description: "Visit Goldwear Jewelers in Maple Grove, MN. Check out our store hours, location map, and contact information for jewelry and watch repairs.",
};

export default function ContactUsPage() {
  return (
    <div className="w-full flex flex-col bg-white">
      {/* Header Banner */}
      <section className="w-full bg-[#f6f6f6] border-b border-[#e5e5e5] py-20 px-4 text-center">
        <div className="mx-auto max-w-[800px] flex flex-col items-center">
          <span className="font-sans text-[10px] tracking-[3px] uppercase text-[#b89d5a] mb-3">
            Get In Touch
          </span>
          <h1 className="font-heading text-[32px] md:text-[40px] font-medium uppercase tracking-[1.5px] text-[#0a0a0a] mb-4">
            Contact &amp; Location
          </h1>
          <div className="w-12 h-[1px] bg-[#b89d5a] mb-6" />
        </div>
      </section>

      {/* Info Grid Section */}
      <section className="w-full bg-white py-20 px-6 md:px-12">
        <div className="mx-auto max-w-[1000px] grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left Column: Business Details & Hours */}
          <div className="flex flex-col space-y-12">
            <div>
              <h2 className="font-heading text-[24px] text-[#0a0a0a] uppercase tracking-[1px] font-normal mb-6 pb-2 border-b border-[#e5e5e5]">
                Store Location
              </h2>
              <ul className="space-y-4 font-sans text-[14px] text-muted-foreground leading-relaxed">
                <li className="flex items-start gap-4">
                  <MapPinIcon className="h-5 w-5 text-[#b89d5a] shrink-0 mt-0.5" />
                  <span>
                    We are located at:<br />
                    <strong className="text-[#0a0a0a] font-medium block mt-1">
                      13689 Grove Drive, Maple Grove, MN 55311
                    </strong>
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <PhoneIcon className="h-5 w-5 text-[#b89d5a] shrink-0" />
                  <span>
                    Phone: <strong className="text-[#0a0a0a]">(763) 420-8060</strong>
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <MailIcon className="h-5 w-5 text-[#b89d5a] shrink-0" />
                  <span>
                    Email: <a href="mailto:goldwearjewelers@gmail.com" className="text-[#b89d5a] hover:underline">goldwearjewelers@gmail.com</a>
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-[24px] text-[#0a0a0a] uppercase tracking-[1px] font-normal mb-6 pb-2 border-b border-[#e5e5e5]">
                Store Hours
              </h2>
              <ul className="space-y-4 font-sans text-[14px] text-muted-foreground leading-relaxed">
                <li className="flex items-center gap-4">
                  <ClockIcon className="h-5 w-5 text-[#b89d5a] shrink-0" />
                  <span>
                    Tuesday - Saturday: <strong className="text-[#0a0a0a] font-medium">10:00 AM - 5:00 PM</strong>
                  </span>
                </li>
                <li className="flex items-start gap-4 pl-9">
                  <span className="text-red-600 font-semibold text-[12px] uppercase tracking-wider">
                    Closed Sundays and Mondays
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Google Maps Embed */}
          <div className="w-full border border-[#e5e5e5] h-[360px] bg-gray-50">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2813.1496924849187!2d-93.45744452339794!3d45.10271775748281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b343cb6e2cf045%3A0x6b29e0de554b5dfd!2s13689%20Grove%20Dr%2C%20Maple%20Grove%2C%20MN%2055311!5e0!3m2!1sen!2sus!4v1783000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Goldwear Jewelers Location Map"
            />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full bg-[#f6f6f6] py-20 px-6 md:px-12 border-t border-[#e5e5e5]">
        <ContactForm />
      </section>
    </div>
  );
}
