import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => (
  <section id="cta" className="section-padding relative overflow-hidden">
    <div className="absolute inset-0 hero-glow pointer-events-none" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

    <div className="container mx-auto max-w-3xl relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Profissionalize sua empresa agora e conquiste{" "}
          <span className="text-gradient">mais clientes</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
          Dê o próximo passo para uma presença digital que gera resultados reais para o seu negócio.
        </p>
        <a
          href="https://wa.me/5567991788626?text=Quero%20solicitar%20meu%20or%C3%A7amento!"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-5 rounded-2xl text-lg font-semibold hover:bg-primary/90 transition-all glow-border"
        >
          Solicitar Orçamento Agora
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
