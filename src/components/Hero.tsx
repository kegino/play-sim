import { Star, ShieldCheck, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.webp";
import { WhatsAppButton } from "./WhatsAppButton";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-16">
      <img
        src={heroBg}
        alt="Play Sim — Reprodutor e streaming IPTV ultra rápido com +35.000 canais em 4K sem travar"
        width={1920}
        height={1080}
        decoding="async"
        fetchPriority="high"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
      />
      {/* Overlays escuros para legibilidade máxima em qualquer celular ou monitor */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/95 via-background/70 to-background" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background/80 via-transparent to-background/80" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-black/40" aria-hidden="true" />

      <div className="container-page relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-20 text-center sm:py-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-950/50 px-4 py-1.5 text-xs font-semibold text-pink-300 backdrop-blur-md shadow-sm">
          <span className="size-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
          Servidores 2026 Online — Teste Grátis do Play Sim Disponível
        </div>

        <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl">
          Play Sim — <span className="gradient-text">IPTV sem travar</span>
          <span className="block text-foreground mt-1">+35.000 Canais em 4K</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-slate-200 sm:text-xl font-normal leading-relaxed">
          Experimente a máxima velocidade de reprodução com o{" "}
          <strong className="text-white font-semibold">Play Sim</strong>. Grade completa de futebol, filmes de cinema e séries sem atrasos no carregamento.
        </p>

        {/* Botões com destaque visual máximo e alto contraste */}
        <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:gap-4 w-full max-w-md justify-center">
          <WhatsAppButton
            keyword="Teste Grátis Play Sim"
            label="Solicitar Teste Grátis"
            variant="whatsapp"
            size="lg"
            className="w-full sm:w-auto text-base font-extrabold"
          />
          <WhatsAppButton
            keyword="Assinatura Play Sim"
            label="Ver Planos e Assinar"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto text-base font-extrabold"
          />
        </div>

        {/* Badges de credibilidade */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
          <div className="flex items-center gap-1.5 font-medium">
            <Zap className="size-4 text-pink-400" aria-hidden="true" />
            <span>Anti-buffering H.265</span>
          </div>
          <div className="flex items-center gap-1.5 font-medium">
            <ShieldCheck className="size-4 text-emerald-400" aria-hidden="true" />
            <span>Ativação Expressa via Pix</span>
          </div>
          <div className="flex items-center gap-1.5 font-medium">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-3.5 fill-current" aria-hidden="true" />
              ))}
            </div>
            <span>Nota 4.9 de satisfação</span>
          </div>
        </div>
      </div>
    </section>
  );
}
