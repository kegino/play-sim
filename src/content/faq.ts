export interface FaqItem {
  q: string;
  a: string;
}

export const HOME_FAQ: FaqItem[] = [
  {
    q: "O que é o Play Sim e como ele funciona?",
    a: "O Play Sim é uma plataforma de streaming e reprodução IPTV desenvolvida para máxima agilidade e estabilidade. Ele transmite mais de 35.000 canais ao vivo, filmes de cinema e séries completas em 4K via internet para Smart TVs, TV Box, Fire Stick, celulares e PCs.",
  },
  {
    q: "O Play Sim trava durante transmissões pesadas?",
    a: "Não. O Play Sim foi estruturado com infraestrutura CDN distribuída e compressão avançada H.265. O tráfego de dados é roteado automaticamente para o ponto mais veloz, garantindo zero congelamentos e zero buffering mesmo em finais de futebol.",
  },
  {
    q: "Quais aparelhos são compatíveis com o Play Sim?",
    a: "Praticamente qualquer dispositivo com tela: Smart TVs (Samsung Tizen, LG webOS, TCL Android TV), TV Box, Amazon Fire TV Stick, smartphones Android, iPhones, iPads e computadores.",
  },
  {
    q: "Como faço para solicitar um teste grátis no Play Sim?",
    a: "Basta clicar em 'Solicitar Teste Grátis' em nosso site para abrir o WhatsApp oficial do Play Sim. Nossa equipe gera e envia suas credenciais completas em poucos minutos, sem cobrar nada e sem cartão.",
  },
  {
    q: "Qual velocidade de internet é necessária para usar o Play Sim?",
    a: "Para canais em HD são necessários pelo menos 10 Mbps. Para Full HD, 20 Mbps. E para conteúdos em 4K Ultra HD recomendamos uma conexão estável a partir de 35 Mbps.",
  },
  {
    q: "A liberação do acesso no Play Sim é imediata?",
    a: "Sim! Após a confirmação do pagamento por Pix ou cartão, seus dados de acesso (usuário, senha, DNS Xtream Codes e link M3U) são enviados imediatamente no seu WhatsApp com auxílio na instalação.",
  },
];

export const FULL_FAQ: FaqItem[] = [
  ...HOME_FAQ,
  {
    q: "Posso utilizar minha assinatura do Play Sim em vários aparelhos?",
    a: "Cada assinatura padrão permite uma tela simultânea ativa por vez, mas você pode deixar o app instalado em quantos aparelhos desejar. Se precisar de duas ou mais telas assistindo ao mesmo tempo, oferecemos pontos extras com valor reduzido.",
  },
  {
    q: "Quais aplicativos são recomendados para usar com o Play Sim?",
    a: "Indicamos os melhores players do mercado: IPTV Smarters Pro, XCIPTV, IBO Player, TiviMate, SmartOne IPTV e Bob Player.",
  },
  {
    q: "O Play Sim tem Guia de Programação (EPG)?",
    a: "Sim, todos os planos contam com grade EPG atualizada todos os dias para você saber com precisão o que está passando e os horários das próximas atrações.",
  },
  {
    q: "Existe fidelidade ou contrato de longo prazo no Play Sim?",
    a: "Não há fidelidade nem multas. Você escolhe a duração (mensal, trimestral, semestral ou anual) e só renova se estiver 100% satisfeito com a velocidade e qualidade.",
  },
];
