import { motion } from "framer-motion";
import { Globe, Shield, MousePointerClick, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Globe,
    title: "Instagram sozinho não basta",
    description: "Redes sociais são alugadas. Um site profissional é o terreno próprio da sua marca na internet.",
  },
  {
    icon: Shield,
    title: "Autoridade e credibilidade",
    description: "Empresas com site transmitem profissionalismo. Clientes pesquisam antes de comprar — e julgam o que encontram.",
  },
  {
    icon: MousePointerClick,
    title: "O primeiro contato define tudo",
    description: "A percepção do cliente se forma em segundos. Um site bem feito causa a impressão certa desde o início.",
  },
  {
    icon: TrendingUp,
    title: "Mais conversão e confiança",
    description: "Sites bem estruturados guiam o visitante até o contato, aumentando suas chances de fechar negócio.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const WhySection = () => (
  <section id="why" className="section-padding relative">
    <div className="container mx-auto max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-medium tracking-widest uppercase">Por que ter um site</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-3">
          Por que sua empresa precisa de um site profissional
        </h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-6"
      >
        {reasons.map((r) => (
          <motion.div
            key={r.title}
            variants={item}
            className="glass-card p-8 group hover:border-primary/30 transition-colors"
          >
            <r.icon className="w-10 h-10 text-primary mb-5 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold mb-3">{r.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{r.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default WhySection;
