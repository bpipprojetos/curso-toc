import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-primary selection:text-black py-20">
            <div className="container max-w-4xl px-4 mx-auto">
                <Link href="/">
                    <a className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Voltar para a Home
                    </a>
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl font-bold mb-8 text-white">Política de Privacidade</h1>

                    <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
                        <p>A sua privacidade é importante para nós. É política da Arthphysio respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Arthphysio, e outros sites que possuímos e operamos.</p>

                        <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Informações que coletamos</h2>
                        <p>Solicitamos informações pessoais, como nome, e-mail e telefone, apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.</p>

                        <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Uso de informações</h2>
                        <p>Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.</p>

                        <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Compartilhamento de dados</h2>
                        <p>Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.</p>

                        <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Links para sites externos</h2>
                        <p>O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.</p>

                        <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Cookies</h2>
                        <p>Utilizamos cookies para analisar o tráfego e personalizar o conteúdo e anúncios. Você pode recusar o uso de cookies através das configurações do seu navegador.</p>

                        <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Compromisso do Usuário</h2>
                        <p>O usuário se compromete a fazer uso adequado dos conteúdos e da informação que a Arthphysio oferece no site e com caráter enunciativo, mas não limitativo:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;</li>
                            <li>B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, ou apostas online, jogos de sorte e azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;</li>
                            <li>C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) da Arthphysio, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. Mais informações</h2>
                        <p>Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.</p>

                        <p className="mt-8 text-sm text-gray-500">Esta política é efetiva a partir de Fevereiro de 2025.</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
