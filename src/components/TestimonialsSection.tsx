import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Depois do site ficou muito mais profissional, até os clientes comentam.",
    name: "Carlos S.",
  },
  {
    text: "Antes a gente só tinha Instagram, agora passa outra imagem.",
    name: "Juliana P.",
  },
  {
    text: "Fechamos mais orçamento porque o cliente já chega confiando.",
    name: "Thiago M.",
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="section-padding">
    <div className="container mx-auto max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-medium tracking-widest uppercase">Depoimentos</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-3">O que nossos clientes dizem</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glass-card p-8 flex flex-col"
          >
            <Quote className="w-8 h-8 text-primary/30 mb-4" />
            <p className="text-foreground/90 leading-relaxed mb-6 flex-1 italic">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                {t.name.charAt(0)}
              </div>
              <span className="text-sm font-medium text-muted-foreground">{t.name}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
