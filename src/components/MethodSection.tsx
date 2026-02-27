import { motion } from "framer-motion";
import { Search, Code, Rocket } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Search,
    title: "Diagnóstico Estratégico",
    desc: "Analisamos seu negócio, público e concorrência para criar a estratégia ideal de presença digital.",
  },
  {
    num: "02",
    icon: Code,
    title: "Desenvolvimento Personalizado",
    desc: "Construímos seu site do zero, com design exclusivo alinhado à identidade e objetivos da sua empresa.",
  },
  {
    num: "03",
    icon: Rocket,
    title: "Entrega Otimizada para Conversão",
    desc: "Publicamos um site rápido, responsivo e pronto para converter visitantes em clientes reais.",
  },
];

const MethodSection = () => (
  <section id="method" className="section-padding">
    <div className="container mx-auto max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-medium tracking-widest uppercase">Como funciona</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-3">Nosso Método</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.15, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-6">
              <s.icon className="w-7 h-7 text-primary" />
            </div>
            <span className="block text-5xl font-bold text-primary/10 absolute -top-2 right-4 select-none">{s.num}</span>
            <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default MethodSection;
