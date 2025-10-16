import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";

export default function WhatsappButton() {
  return (
    <div
      className="fixed z-50"
      style={{
        right: "max(1rem, env(safe-area-inset-right))",
        bottom: "max(1rem, env(safe-area-inset-bottom))",
      }}
    >
      <Link
        href="https://wa.me/5569999726369?text=Olá%2C+gostaria+de+fazer+um+pedido%21"
        className="flex items-center relative animate-pulse"
        aria-label="Abrir conversa no WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="z-20">
          <IoLogoWhatsapp size={70} color="#25D366" />
        </span>
      </Link>
    </div>
  );
}