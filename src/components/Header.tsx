import { motion } from "framer-motion";
import logo from "@/assets/logo-base-digital.png";

const Header = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "linear-gradient(180deg, rgba(8, 12, 24, 0.55) 0%, rgba(8, 12, 24, 0.4) 100%)",
        backdropFilter: "blur(28px) saturate(1.4)",
        WebkitBackdropFilter: "blur(28px) saturate(1.4)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.07)",
        borderTop: "1px solid rgba(255, 255, 255, 0.04)",
        boxShadow: "0 8px 32px -8px rgba(0, 0, 0, 0.5), 0 1px 0 0 rgba(255, 255, 255, 0.03) inset",
      }}
    >
      <div className="container mx-auto flex items-center justify-between py-3.5">
        <img
          src={logo}
          alt="Base Digital"
          className="h-10 w-10 md:h-11 md:w-11 rounded-full object-cover"
          style={{
            boxShadow: "0 0 0 2px hsl(217 91% 60% / 0.35), 0 0 12px -2px hsl(217 91% 60% / 0.2)",
          }}
        />

        <nav className="hidden md:flex items-center gap-2.5">
          {[
            { label: "Sobre", id: "why" },
            { label: "Serviços", id: "services" },
            { label: "Método", id: "method" },
            { label: "Depoimentos", id: "testimonials" },
          ].map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              whileHover={{ y: -1, scale: 1.05 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
              style={{
                color: "rgba(210, 220, 240, 0.85)",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow: "0 1px 4px -1px rgba(0, 0, 0, 0.3), inset 0 1px 0 0 rgba(255, 255, 255, 0.03)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "rgba(240, 245, 255, 1)";
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.09)";
                e.currentTarget.style.borderColor = "rgba(96, 165, 250, 0.35)";
                e.currentTarget.style.boxShadow = "0 0 20px -4px hsl(217 91% 60% / 0.3), 0 2px 8px -2px rgba(0, 0, 0, 0.3), inset 0 1px 0 0 rgba(96, 165, 250, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(210, 220, 240, 0.85)";
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                e.currentTarget.style.boxShadow = "0 1px 4px -1px rgba(0, 0, 0, 0.3), inset 0 1px 0 0 rgba(255, 255, 255, 0.03)";
              }}
            >
              {item.label}
            </motion.button>
          ))}
        </nav>

        <motion.a
          href="https://wa.me/5567991788626?text=Quero%20solicitar%20meu%20or%C3%A7amento!"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, y: -1 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="px-6 py-2.5 rounded-full text-sm font-semibold text-primary-foreground transition-all duration-300"
          style={{
            background: "linear-gradient(135deg, hsl(217 91% 58%), hsl(217 100% 42%))",
            boxShadow: "0 0 24px -4px hsl(217 91% 60% / 0.5), 0 4px 12px -2px rgba(0, 0, 0, 0.4), inset 0 1px 0 0 rgba(255, 255, 255, 0.15)",
            border: "1px solid rgba(96, 165, 250, 0.35)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 0 36px -4px hsl(217 91% 60% / 0.65), 0 6px 16px -2px rgba(0, 0, 0, 0.4), inset 0 1px 0 0 rgba(255, 255, 255, 0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 0 24px -4px hsl(217 91% 60% / 0.5), 0 4px 12px -2px rgba(0, 0, 0, 0.4), inset 0 1px 0 0 rgba(255, 255, 255, 0.15)";
          }}
        >
          Solicitar Orçamento
        </motion.a>
      </div>
    </motion.header>
  );
};

export default Header;
