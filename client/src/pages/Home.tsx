import { NeonButton } from "@/components/ui/neon-button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Zap, Check, Award, ShieldCheck, Trophy, Video } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Home() {
  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqs = [
    {
      question: "Quem pode participar?",
      answer: "Acadêmicos de Fisioterapia a partir do 6º período, Fisioterapeutas e Médicos. Não é exigido conhecimento prévio. Vagas da prática limitadas a 30 alunos."
    },
    {
      question: "Quando acontecem as aulas e qual a carga horária?",
      answer: "Teoria (online ao vivo via Zoom): 08/05/2025, das 18h às 22h (4h). Prática (presencial): 09/05/2025, das 8h às 18h (10h). Total: 14 horas."
    },
    {
      question: "Onde será a parte prática?",
      answer: "No Instituto Saens, Rua Bela Cintra, 643, 1º andar, Consolação, São Paulo - SP. Próximo à Av. Paulista (Metrôs Consolação e Paulista), com estrutura confortável e fácil acesso a hotéis e restaurantes."
    },
    {
      question: "Como recebo o link da parte online?",
      answer: "O acesso é liberado somente para inscritos. O link do Zoom é enviado até 1 hora antes do início da aula ao vivo. A teoria fica gravada e disponível aos participantes."
    },
    {
      question: "O que está incluso em cada modalidade?",
      answer: "Teoria: aula ao vivo via Zoom + gravação + material digital + tutorial gravado de Diretrizes Práticas + certificado de participação teórica. Teoria + Prática: tudo acima + prática presencial com equipamentos importados + certificado de Formação e Capacitação em TOC."
    },
    {
      question: "O certificado tem validade nacional?",
      answer: "Sim. O certificado é emitido pela ARTHPHYSIO com apoio da SNTOC. A habilitação para uso da TOC se aplica à formação completa (Teoria + Prática)."
    },
    {
      question: "Quais equipamentos serão usados na prática?",
      answer: "Marcas importadas e líderes citadas nas melhores evidências científicas: Chattanooga, EMS Dolorclast, BTL e Longest."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden font-sans selection:bg-primary selection:text-black">

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/Otimizadas/geometric_bg_green.webp"
            alt="Geometric Background"
            className="absolute top-0 right-0 w-full h-full object-cover opacity-40"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-sm">
              <Zap className="w-5 h-5 fill-primary" />
              <span>TOC - Terapia por Ondas de Choque</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold leading-tight text-white">
              FORME-SE EM <span className="text-primary">TERAPIA POR ONDAS DE CHOQUE</span> E SE DESTAQUE NA FISIOTERAPIA
            </h1>

            <p className="text-xl text-gray-300 max-w-xl leading-relaxed">
              Curso híbrido com prática em equipamentos importados, <strong className="text-white">certificado nacional</strong> e aplicabilidade imediata em consultório.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <NeonButton size="lg" onClick={scrollToPricing} className="text-lg px-10">
                Quero garantir minha vaga
              </NeonButton>
            </div>

            <div className="flex items-center gap-6 pt-8 text-xs font-bold text-gray-500 uppercase tracking-widest">
              <span>ARTHPHYSIO</span>
              <span className="w-1 h-1 bg-primary rounded-full" />
              <span>SNTOC</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 max-w-sm mx-auto">
              {/* Repository Style Frame */}
              <div className="relative bg-zinc-900 p-2 rounded-sm border border-zinc-800 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                {/* Top Bar */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-zinc-800 flex items-center px-3 gap-2 rounded-t-sm border-b border-zinc-700">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  <div className="ml-auto text-[10px] font-mono text-zinc-500">IMG_MARCO_BW.RAW</div>
                </div>

                {/* Image Container */}
                <div className="mt-8 relative overflow-hidden bg-black aspect-[4/5]">
                  <img
                    src="/images/Otimizadas/professor_profile.webp"
                    alt="Prof. Marco Antonio"
                    className="w-full h-full object-cover filter contrast-125 grayscale hover:grayscale-0 transition-all duration-700"
                    loading="eager"
                  />

                  {/* Overlay Scanlines */}
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

                  {/* Corner Accents */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/50" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/50" />
                </div>
              </div>

              {/* Floating Triangles */}
              {/* Floating Triangles */}
              <motion.img
                src="/images/Otimizadas/green_triangle_3d.webp"
                animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 w-32 h-32 opacity-80 z-20"
              />
              <motion.img
                src="/images/Otimizadas/green_triangle_3d.webp"
                animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 -left-10 w-24 h-24 opacity-60 z-20"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 bg-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/images/Otimizadas/geometric_bg_green.webp" className="w-full h-full object-cover" alt="Background Pattern" loading="lazy" />
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-20" />
              <img
                src="/images/Otimizadas/toc_impact.webp"
                alt="Profissional aplicando TOC"
                className="relative rounded-lg shadow-2xl border border-zinc-800 w-full object-cover aspect-video grayscale hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                O MERCADO EXIGE <br />
                <span className="text-primary">RESULTADOS RÁPIDOS</span>
              </h2>

              <p className="text-xl text-gray-300 leading-relaxed">
                Pacientes não querem apenas tratamento, querem solução. A Terapia por Ondas de Choque é a tecnologia que entrega <strong className="text-white">alívio imediato da dor</strong> e regeneração tecidual acelerada.
              </p>

              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-primary" />
                  <span>Alta demanda por tratamentos não invasivos</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-primary" />
                  <span>Tecnologia com alto valor percebido pelo paciente</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-primary" />
                  <span>Retorno rápido sobre o investimento</span>
                </li>
              </ul>

              <div className="pt-4">
                <NeonButton onClick={scrollToPricing} className="w-full sm:w-auto">
                  Quero dominar essa tecnologia
                </NeonButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section (New) */}
      <section className="py-24 bg-black relative">
        <div className="container max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Benefícios diretos <br />
              <span className="text-white">para sua carreira</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Diferenciais práticos e aplicáveis desde o <strong className="text-white">primeiro atendimento</strong>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Aplicação imediata",
                desc: "Formação com segurança, assertividade e resultados clínicos rápidos."
              },
              {
                title: "Modelo de negócio",
                desc: "Monetização da TOC para consultórios e clínicas, com gestão e prospecção."
              },
              {
                title: "Certificação nacional",
                desc: "Certificado ARTHPHYSIO com apoio da SNTOC, reconhecido em todo o país."
              },
              {
                title: "Alta remuneração",
                desc: "Tecnologia valorizada, elevando seu ticket por hora de trabalho."
              },
              {
                title: "Diferencial no currículo",
                desc: "Reconhecimento e destaque em processos seletivos e no mercado privado."
              },
              {
                title: "Ultrassonografia aplicada",
                desc: "Introdução ao US como apoio ao diagnóstico e acompanhamento."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-xl border border-primary/30 bg-zinc-900/50 hover:bg-zinc-900 transition-colors group"
              >
                <div className="mb-6">
                  <Check className="w-8 h-8 text-primary" strokeWidth={3} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-24 bg-white text-black">
        <div className="container max-w-6xl">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Como funciona
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Formato híbrido: teoria online ao vivo + prática intensiva presencial.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Theory Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-black text-white p-8 rounded-2xl border border-zinc-800 shadow-xl"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Zap className="w-6 h-6 text-primary fill-primary" />
                  <h3 className="text-2xl font-bold text-primary">Parte Teórica (online)</h3>
                </div>

                <ul className="space-y-6">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-white mt-1 shrink-0" />
                    <span className="text-gray-300 text-lg">08/05/2025 — 18h às 22h via Zoom</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-white mt-1 shrink-0" />
                    <span className="text-gray-300 text-lg">Acesso à gravação + material digital + tutorial de diretrizes práticas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-white mt-1 shrink-0" />
                    <span className="text-gray-300 text-lg">Certificado de participação teórica</span>
                  </li>
                </ul>
              </motion.div>

              {/* Practical Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-black text-white p-8 rounded-2xl border border-zinc-800 shadow-xl"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Zap className="w-6 h-6 text-primary fill-primary" />
                  <h3 className="text-2xl font-bold text-primary">Parte Prática (presencial)</h3>
                </div>

                <ul className="space-y-6">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-white mt-1 shrink-0" />
                    <span className="text-gray-300 text-lg">09/05/2025 — 8h às 18h (10h intensivas)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-white mt-1 shrink-0" />
                    <span className="text-gray-300 text-lg">Manuseio monitorado focado em ortopedia, esportiva, urológica e dermatologia</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-white mt-1 shrink-0" />
                    <span className="text-gray-300 text-lg">Equipamentos importados: Chattanooga, EMS Dolorclast, BTL, Longest</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-black text-white p-10 rounded-2xl border border-zinc-800 shadow-xl flex flex-col h-full"
            >
              <div className="flex items-center gap-3 mb-8">
                <Zap className="w-6 h-6 text-primary fill-primary" />
                <h3 className="text-2xl font-bold text-primary">O que você vai aprender</h3>
              </div>

              <ul className="space-y-6 mb-10 flex-grow">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 shrink-0" />
                  <span className="text-gray-300 text-lg leading-relaxed">Diretrizes baseadas nas melhores evidências científicas (indicação, efeitos e resultados).</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 shrink-0" />
                  <span className="text-gray-300 text-lg leading-relaxed">Protocolo prático para principais condições ortopédicas, esportivas, urológicas e dermatológicas.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 shrink-0" />
                  <span className="text-gray-300 text-lg leading-relaxed">Experiência prática com as principais marcas líderes do mercado.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 shrink-0" />
                  <span className="text-gray-300 text-lg leading-relaxed">Modelo de negócio em TOC: monetização, prospecção, marketing, vendas e gestão do serviço.</span>
                </li>
              </ul>

              <div className="space-y-4">
                <button
                  onClick={scrollToPricing}
                  className="w-full bg-primary hover:bg-primary/90 text-black font-bold text-lg py-4 px-6 rounded-full transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Quero viver essa experiência completa
                </button>
                <p className="text-center text-xs text-gray-500">
                  Certificação emitida pela ARTHPHYSIO com apoio da SNTOC.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professor Section */}
      <section className="py-24 bg-zinc-900 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold tracking-wider mb-6">
                SEU MENTOR
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Prof. Marco Antonio <br />
                <span className="text-primary">Ferreira</span>
              </h2>

              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  Fisioterapeuta com mais de 20 anos de experiência clínica e acadêmica. Referência nacional em Terapia por Ondas de Choque, com atuação focada em reabilitação musculoesquelética e gestão de clínicas.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 pt-4">
                  <div className="flex items-center gap-3">
                    <Award className="w-6 h-6 text-primary" />
                    <span>Mestre em Ciências da Reabilitação</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                    <span>Certificação Internacional em TOC</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Trophy className="w-6 h-6 text-primary" />
                    <span>Diretor da Arthphysio</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Video className="w-6 h-6 text-primary" />
                    <span>Palestrante em Congressos</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
                <img
                  src="/images/Otimizadas/professor_profile.webp"
                  alt="Prof. Marco Antonio Ferreira"
                  className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-bold text-xl">Prof. Marco Antonio</p>
                  <p className="text-primary text-sm">Fisioterapeuta & Mentor</p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-black relative">
        <div className="absolute inset-0 bg-[url('/images/Otimizadas/grid_pattern.webp')] opacity-5" />

        <div className="container relative z-10 max-w-5xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Investimento para <br />
              <span className="text-primary">sua transformação</span>
            </h2>
            <p className="text-xl text-gray-400">
              Escolha a modalidade ideal para o seu momento profissional
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Online Plan */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 bg-zinc-800 text-xs font-bold px-3 py-1 rounded-bl-lg text-gray-300">
                ONLINE
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">Teoria Online</h3>
              <p className="text-gray-400 text-sm mb-6">Para quem busca fundamentação teórica sólida</p>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-sm text-gray-500 line-through">R$ 697</span>
                <span className="text-4xl font-bold text-white">R$ 497</span>
                <span className="text-sm text-gray-400">à vista</span>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-gray-300 text-sm">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Acesso à aula ao vivo (Zoom)</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300 text-sm">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Gravação disponível por 6 meses</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300 text-sm">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Certificado de participação (4h)</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300 text-sm">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Material de apoio digital</span>
                </li>
              </ul>

              <a
                href="https://typebot.co/marco-cursotoc"
                target="_blank"
                className="w-full py-4 rounded-lg border border-primary text-primary font-bold hover:bg-primary hover:text-black transition-all uppercase tracking-wide text-sm text-center block"
              >
                Inscrever no Online
              </a>
            </motion.div>

            {/* Hybrid Plan (Featured) */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-zinc-900 border border-primary rounded-2xl p-8 relative overflow-hidden shadow-2xl shadow-primary/10 scale-105"
            >
              <div className="absolute top-0 inset-x-0 h-1 bg-primary" />
              <div className="absolute top-4 right-4 bg-primary text-black text-xs font-bold px-3 py-1 rounded-full">
                MAIS PROCURADO
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">Completo (Híbrido)</h3>
              <p className="text-gray-400 text-sm mb-6">Teoria + Prática Intensiva Presencial</p>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-sm text-gray-500 line-through">R$ 1.997</span>
                <span className="text-5xl font-bold text-primary">R$ 1.497</span>
                <span className="text-sm text-gray-400">à vista</span>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-white text-sm font-medium">
                  <div className="bg-primary/20 p-1 rounded-full"><Check className="w-3 h-3 text-primary" /></div>
                  <span>Tudo do plano Online incluso</span>
                </li>
                <li className="flex items-center gap-3 text-white text-sm font-medium">
                  <div className="bg-primary/20 p-1 rounded-full"><Check className="w-3 h-3 text-primary" /></div>
                  <span>Prática presencial em SP (10h)</span>
                </li>
                <li className="flex items-center gap-3 text-white text-sm font-medium">
                  <div className="bg-primary/20 p-1 rounded-full"><Check className="w-3 h-3 text-primary" /></div>
                  <span>Manuseio de equipamentos de ponta</span>
                </li>
                <li className="flex items-center gap-3 text-white text-sm font-medium">
                  <div className="bg-primary/20 p-1 rounded-full"><Check className="w-3 h-3 text-primary" /></div>
                  <span>Certificação Completa (14h)</span>
                </li>
                <li className="flex items-center gap-3 text-white text-sm font-medium">
                  <div className="bg-primary/20 p-1 rounded-full"><Check className="w-3 h-3 text-primary" /></div>
                  <span>Networking com profissionais</span>
                </li>
              </ul>

              <NeonButton
                className="w-full py-4 text-base"
                onClick={() => window.open("https://typebot.co/marco-cursotoc", "_blank")}
              >
                Quero a Formação Completa
              </NeonButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-24 bg-black relative">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Diferenciais do Curso
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Card 1: Monetização (Wireframe) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative aspect-video rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900"
            >
              <img
                src="/images/Otimizadas/diff_monetization.webp"
                alt="Monetização da TOC"
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <h3 className="text-3xl font-bold text-white uppercase leading-none mb-1">
                  Monetização
                </h3>
                <h3 className="text-3xl font-bold text-white uppercase leading-none">
                  da <span className="text-primary">TOC</span>
                </h3>
              </div>
            </motion.div>

            {/* Card 2: Experiência Prática (Photo) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative aspect-video rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900"
            >
              <img
                src="/images/Otimizadas/diff_equipment.webp"
                alt="Experiência Prática"
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8 text-left">
                <h3 className="text-3xl font-bold text-white uppercase leading-tight">
                  Experiência <br />
                  Prática em <br />
                  <span className="text-primary">Marcas Líderes</span>
                </h3>
              </div>
            </motion.div>

            {/* Card 3: Certificação (Wireframe) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative aspect-video rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900"
            >
              <img
                src="/images/Otimizadas/diff_certificate.webp"
                alt="Certificação Nacional"
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <h3 className="text-3xl font-bold text-white uppercase leading-none mb-1">
                  Certificação
                </h3>
                <h3 className="text-3xl font-bold text-primary uppercase leading-none">
                  Nacional
                </h3>
              </div>
            </motion.div>

            {/* Card 4: Ultrassonografia (Photo) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group relative aspect-video rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900"
            >
              <img
                src="/images/Otimizadas/diff_ultrasound.webp"
                alt="Ultrassonografia"
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8 text-left">
                <h3 className="text-3xl font-bold text-white uppercase leading-tight">
                  Introdução à <br />
                  <span className="text-primary">Ultrassonografia</span>
                </h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Limited Spots Section (New) */}
      <section className="py-20 bg-black border-t border-zinc-900">
        <div className="container max-w-4xl text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-medium text-white leading-snug">
            As vagas práticas são <strong className="text-white">limitadas a apenas 30 alunos</strong>. <br />
            Garanta já sua certificação e destaque-se na fisioterapia <br />
            com a tecnologia <strong className="text-white">mais promissora do mercado</strong>.
          </h2>

          <div className="pt-4">
            <a
              href="https://typebot.co/marco-cursotoc"
              target="_blank"
              className="bg-[#00D62F] hover:bg-[#00bd29] text-black font-bold text-xl py-5 px-12 rounded-full transition-transform transform hover:scale-105 shadow-[0_0_30px_rgba(0,214,47,0.3)] inline-block"
            >
              Quero me inscrever agora
            </a>
          </div>

          <div className="flex items-center justify-center gap-3 text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] pt-4">
            <span>• ARTHPHYSIO •</span>
            <span>SNTOC</span>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-black">
        <div className="container max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
            Perguntas Frequentes
          </h2>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
            {/* Left Column */}
            <div className="space-y-4">
              {faqs.slice(0, 4).map((faq, i) => (
                <Accordion key={i} type="single" collapsible>
                  <AccordionItem value={`item-${i}`} className="border-b border-zinc-800 px-0">
                    <AccordionTrigger className="text-left text-lg font-medium text-gray-200 hover:text-primary transition-colors py-6 [&[data-state=open]]:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-400 text-base pb-6 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              {faqs.slice(4).map((faq, i) => (
                <Accordion key={i + 4} type="single" collapsible>
                  <AccordionItem value={`item-${i + 4}`} className="border-b border-zinc-800 px-0">
                    <AccordionTrigger className="text-left text-lg font-medium text-gray-200 hover:text-primary transition-colors py-6 [&[data-state=open]]:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-400 text-base pb-6 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>
          </div>

          {/* Still have doubts? */}
          <div className="mt-20 text-center">
            <h3 className="text-3xl font-bold text-white mb-8">
              Ainda com dúvidas?
            </h3>
            <a
              href="https://typebot.co/marco-cursotoc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#00D62F] hover:bg-[#00bd29] text-black font-bold text-lg py-4 px-8 rounded-full transition-transform transform hover:scale-105"
            >
              <Zap className="w-6 h-6 fill-black" />
              Falar com consultor
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-zinc-900 text-center text-gray-500 text-sm">
        <div className="container">
          <p>&copy; 2025 Arthphysio. Todos os direitos reservados.</p>
          <p className="mt-2">Desenvolvido com tecnologia de ponta para profissionais de elite.</p>
          <div className="flex justify-center gap-6 mt-6">
            <Link href="/politica-de-privacidade">
              <a className="hover:text-primary transition-colors">Política de Privacidade</a>
            </Link>
            <Link href="/termos-de-uso">
              <a className="hover:text-primary transition-colors">Termos de Uso</a>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
