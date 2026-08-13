'use client';

import React from 'react';
import { contactConfig } from '@/config/contact';

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Bonjour Arol, j'ai vu votre portfolio et j'aimerais échanger avec vous.",
  );
  const whatsappUrl = `https://wa.me/${contactConfig.phoneHref.replace('+', '')}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg shadow-[#25D366]/30 hover:bg-[#128C7E] transition-all duration-300 hover:scale-110 animate-fade-up"
      aria-label="Me contacter sur WhatsApp"
      title="Me contacter sur WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping [animation-duration:2.5s] group-hover:opacity-0" aria-hidden="true" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        className="relative fill-current text-white"
      >
        <path d="M12.031 0C5.398 0 .015 5.39 .015 12.034c0 2.122.553 4.195 1.605 6.01L.014 24l6.104-1.6c1.761.954 3.754 1.458 5.912 1.458h.005c6.63 0 12.016-5.39 12.016-12.031C24.051 5.39 18.663 0 12.031 0zm0 21.849h-.004c-1.796 0-3.557-.483-5.097-1.396l-.365-.216-3.788.993.999-3.69-.237-.377a10.012 10.012 0 01-1.531-5.127c0-5.545 4.512-10.055 10.062-10.055 5.548 0 10.057 4.512 10.057 10.055.001 5.543-4.509 10.055-10.057 10.055zm5.518-7.533c-.302-.151-1.789-.882-2.065-.983-.276-.101-.477-.151-.678.151-.201.302-.779.983-.955 1.184-.176.201-.352.226-.654.075-1.294-.654-2.457-1.428-3.376-2.617-.235-.304.234-.28.826-1.464.075-.151.038-.283-.019-.384-.056-.101-.678-1.631-.929-2.234-.244-.587-.492-.507-.678-.517-.176-.009-.377-.009-.578-.009-.201 0-.528.075-.804.377-.276.302-1.055 1.031-1.055 2.514 0 1.483 1.08 2.916 1.231 3.117.151.201 2.124 3.243 5.145 4.545 1.956.845 2.766.918 3.738.775 1.114-.165 2.228-.868 2.545-1.706.316-.838.316-1.558.222-1.708-.094-.15-.347-.225-.649-.375z" />
      </svg>
    </a>
  );
}
