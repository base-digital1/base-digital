import logo from "@/assets/logo-base-digital.png";
import { MessageCircle } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/30 py-10 px-4">
    <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Base Digital" className="h-7 object-contain" />
      </div>

      <a
        href="https://wa.me/5567991788626?text=Quero%20solicitar%20meu%20or%C3%A7amento!"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <MessageCircle className="w-4 h-4" />
        Contato via WhatsApp
      </a>

      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Base Digital. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
