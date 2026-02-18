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
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/30 bg-background/80 backdrop-blur-xl"
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        <img src={logo} alt="Base Digital" className="h-8 md:h-10 object-contain" />
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "Sobre", id: "why" },
            { label: "Serviços", id: "services" },
            { label: "Método", id: "method" },
            { label: "Depoimentos", id: "testimonials" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>
        <button
          onClick={() => scrollToSection("cta")}
          className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          Solicitar Orçamento
        </button>
      </div>
    </motion.header>
  );
};

export default Header;
