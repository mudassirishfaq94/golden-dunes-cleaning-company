import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "../data";

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />

      {/* Button */}
      <div className="relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-600 shadow-xl shadow-green-600/30 hover:shadow-green-600/50 hover:from-green-600 hover:to-green-700 transition-all duration-300 group-hover:scale-110">
        <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
      </div>

      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-3 px-4 py-2 rounded-xl bg-navy-900 text-white text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg">
        Chat with us on WhatsApp
        <div className="absolute top-full right-6 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-navy-900" />
      </div>
    </a>
  );
}
