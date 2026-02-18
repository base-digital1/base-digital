import { motion } from "framer-motion";
import { Layout, Target, Smartphone, MessageCircle, List, Zap, FileText, Search, Plug, BookOpen } from "lucide-react";

const services = [
  { icon: Layout, title: "Presença digital profissional", desc: "Alinhada ao seu posicionamento de mercado" },
  { icon: Target, title: "Estrutura estratégica", desc: "Focada em autoridade e conversão" },
  { icon: Smartphone, title: "Design moderno e responsivo", desc: "Perfeito em qualquer dispositivo" },
  { icon: MessageCircle, title: "Integração com WhatsApp", desc: "Contato direto com seus clientes" },
  { icon: List, title: "Organização clara dos serviços", desc: "Seus serviços apresentados com clareza" },
  { icon: Zap, title: "Entrega ágil e otimizada", desc: "Processo rápido sem perder qualidade" },
];

const extras = [
  { icon: FileText, label: "Página institucional expandida" },
  { icon: List, label: "Área de serviços detalhada" },
  { icon: BookOpen, label: "Seção de blog" },
  { icon: Search, label: "Otimização para Google (SEO)" },
  { icon: Plug, label: "Integrações específicas" },
];

const ServicesSection = () => (
  <section id="services" className="section-padding relative">
    <div className="absolute inset-0 hero-glow pointer-events-none opacity-50" />
    <div className="container mx-auto max-w-5xl relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-medium tracking-widest uppercase">Nossos serviços</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-3">O que estruturamos para sua empresa</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-5 mb-16">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-7 hover:border-primary/30 transition-colors group"
          >
            <s.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card p-8 md:p-10"
      >
        <h3 className="text-xl font-semibold mb-6 text-center">
          Extras personalizados <span className="text-muted-foreground font-normal text-base">(opcional)</span>
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {extras.map((e) => (
            <div
              key={e.label}
              className="flex items-center gap-2.5 px-5 py-3 rounded-xl border border-border/50 bg-secondary/30 text-sm text-secondary-foreground"
            >
              <e.icon className="w-4 h-4 text-primary" />
              {e.label}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default ServicesSection;
