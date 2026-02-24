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
        background: "rgba(10, 15, 28, 0.35)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
      }}
    >
      <div className="container mx-auto flex items-center justify-between py-3.5">
        <img
          src={logo}
          alt="Base Digital"
          className="h-10 w-10 md:h-11 md:w-11 rounded-full object-cover ring-2 ring-primary/30"
        />

        <nav className="hidden md:flex items-center gap-2">
          {[
            { label: "Sobre", id: "why" },
            { label: "Serviços", id: "services" },
            { label: "Método", id: "method" },
            { label: "Depoimentos", id: "testimonials" },
          ].map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              whileHover={{ y: -1, scale: 1.03 }}
              transition={{ duration: 0.25 }}
              className="relative px-5 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 ease-out"
              style={{
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
                e.currentTarget.style.borderColor = "rgba(96, 165, 250, 0.25)";
                e.currentTarget.style.boxShadow = "0 0 16px -4px hsl(217 91% 60% / 0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.04)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                e.currentTarget.style.boxShadow = "none";
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
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.25 }}
          className="px-6 py-2.5 rounded-full text-sm font-semibold text-primary-foreground transition-all duration-300"
          style={{
            background: "linear-gradient(135deg, hsl(217 91% 55%), hsl(217 91% 45%))",
            boxShadow: "0 0 20px -4px hsl(217 91% 60% / 0.4), 0 0 6px -1px hsl(217 91% 60% / 0.2)",
            border: "1px solid rgba(96, 165, 250, 0.3)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 0 28px -4px hsl(217 91% 60% / 0.55), 0 0 10px -1px hsl(217 91% 60% / 0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 0 20px -4px hsl(217 91% 60% / 0.4), 0 0 6px -1px hsl(217 91% 60% / 0.2)";
          }}
        >
          Solicitar Orçamento
        </motion.a>
      </div>
    </motion.header>
  );
};

export default Header;
