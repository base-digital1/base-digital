import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding pt-32 overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        aria-hidden="true"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Dark gradient overlay for readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, hsl(222 47% 6% / 0.85) 0%, hsl(222 47% 4% / 0.92) 50%, hsl(222 47% 6% / 0.88) 100%)",
        }}
      />

      {/* Glow background */}
      <div className="absolute inset-0 hero-glow pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto text-center relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/30 text-primary text-xs font-medium tracking-widest uppercase">
            Agência de Web Design Premium
          </span>
        </motion.div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          {["Sua", "empresa", "merece", "uma", "presença", "digital", "que", "transmite", "confiança", "desde", "o", "primeiro", "contato."].map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.3 + i * 0.05,
                ease: "easeOut",
              }}
              className={`inline-block mr-[0.3em] ${word === "confiança" ? "text-gradient glow-text" : ""}`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Criamos sites estratégicos que aumentam credibilidade e facilitam o contato com seus clientes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://wa.me/5567991788626?text=Quero%20solicitar%20meu%20or%C3%A7amento!"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-primary text-primary-foreground px-8 py-4 rounded-xl text-base font-semibold hover:bg-primary/90 transition-all flex items-center justify-center gap-2 glow-border"
          >
            Solicitar Orçamento
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <button
            onClick={() => scrollTo("method")}
            className="border border-border text-foreground px-8 py-4 rounded-xl text-base font-medium hover:bg-secondary/50 transition-all"
          >
            Ver Como Funciona
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-5 h-5 text-muted-foreground animate-bounce" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
