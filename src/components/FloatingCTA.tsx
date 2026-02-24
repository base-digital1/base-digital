import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const FloatingCTA = () => {
  return (
    <motion.a
      href="https://wa.me/5567991788626?text=Quero%20solicitar%20meu%20or%C3%A7amento!"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1.5, ease: [0.25, 0.4, 0.25, 1] }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-7 right-7 z-50 flex items-center justify-center w-14 h-14 rounded-full text-primary-foreground transition-all duration-300 fab-pulse"
      style={{
        background: "linear-gradient(135deg, hsl(217 91% 58%), hsl(217 100% 42%))",
        boxShadow:
          "0 0 24px -4px hsl(217 91% 60% / 0.5), 0 4px 16px -2px rgba(0, 0, 0, 0.4)",
        border: "1px solid rgba(96, 165, 250, 0.3)",
      }}
      aria-label="Solicitar Orçamento via WhatsApp"
    >
      <MessageCircle size={24} strokeWidth={2.2} />
    </motion.a>
  );
};

export default FloatingCTA;
