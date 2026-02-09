import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5511999999999" // Substituir pelo número real
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:bg-[#20bd5a] transition-all duration-300 hover:scale-110 group"
      aria-label="Falar no WhatsApp"
    >
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75 group-hover:opacity-100 duration-1000" />
      <MessageCircle className="w-8 h-8 text-white relative z-10" />
    </a>
  );
}
