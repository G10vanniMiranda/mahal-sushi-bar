import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";

export default function WhatsappButton() {
    return (
        <div className="fixed bottom-10 right-10 z-50">
            <Link
                href="https://wa.me/5569993533868"
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