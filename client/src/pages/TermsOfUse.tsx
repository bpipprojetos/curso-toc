import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function TermsOfUse() {
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
                    <h1 className="text-4xl font-bold mb-8 text-white">Termos de Uso</h1>

                    <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
                        <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Termos</h2>
                        <p>Ao acessar ao site Arthphysio, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.</p>

                        <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Uso de Licença</h2>
                        <p>É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Arthphysio , apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>modificar ou copiar os materiais;</li>
                            <li>usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</li>
                            <li>tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Arthphysio;</li>
                            <li>remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou</li>
                            <li>transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</li>
                        </ul>
                        <p>Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por Arthphysio a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrónico ou impresso.</p>

                        <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Isenção de responsabilidade</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Os materiais no site da Arthphysio são fornecidos 'como estão'. Arthphysio não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.</li>
                            <li>Além disso, o Arthphysio não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ​​ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Limitações</h2>
                        <p>Em nenhum caso o Arthphysio ou seus fornecedores serão responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Arthphysio, mesmo que Arthphysio ou um representante autorizado da Arthphysio tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos conseqüentes ou incidentais, essas limitações podem não se aplicar a você.</p>

                        <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Precisão dos materiais</h2>
                        <p>Os materiais exibidos no site da Arthphysio podem incluir erros técnicos, tipográficos ou fotográficos. Arthphysio não garante que qualquer material em seu site seja preciso, completo ou atual. Arthphysio pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, Arthphysio não se compromete a atualizar os materiais.</p>

                        <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Links</h2>
                        <p>O Arthphysio não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por Arthphysio do site. O uso de qualquer site vinculado é por conta e risco do usuário.</p>

                        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Modificações</h2>
                        <p>O Arthphysio pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.</p>

                        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Lei aplicável</h2>
                        <p>Estes termos e condições são regidos e interpretados de acordo com as leis do Arthphysio e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
