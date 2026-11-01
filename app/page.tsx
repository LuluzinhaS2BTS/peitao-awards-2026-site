'use client';

import { useState } from 'react';

const tabs = ['Submissões', 'Indicados', 'Resultados'] as const;

export default function Home() {
  const [activeTab, setActiveTab] =
    useState<(typeof tabs)[number]>('Indicados');

  return (
    <main className="min-h-screen bg-[#100b18] text-white">
      <header className="border-b border-white/10 px-6 py-5">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <div>
            <p className="text-xs font-bold tracking-[0.35em] text-fuchsia-400">
              A GRANDE PREMIAÇÃO DA COMUNIDADE
            </p>
            <h1 className="mt-2 text-2xl font-black sm:text-3xl">
              PEITÃO <span className="text-fuchsia-400">AWARDS</span>
            </h1>
          </div>
          <span className="rounded-full border border-fuchsia-400/40 px-4 py-2 text-sm font-bold text-fuchsia-300">
            2026
          </span>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-16 text-center sm:py-24">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-fuchsia-300">
          O público decide
        </p>
        <h2 className="mx-auto mt-5 max-w-4xl text-5xl font-black leading-tight sm:text-7xl">
          QUEM VAI LEVAR
          <span className="block text-fuchsia-400">A GLÓRIA?</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/65">
          As indicações, as votações e os momentos mais memoráveis da nossa
          comunidade. A disputa começa aqui.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-6 py-3 text-sm font-bold transition ${
                activeTab === tab
                  ? 'bg-fuchsia-500 text-white'
                  : 'border border-white/15 bg-white/5 text-white/75 hover:bg-white/10'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-left shadow-2xl sm:p-12">
          {activeTab === 'Submissões' && (
            <>
              <p className="text-sm font-bold uppercase tracking-widest text-fuchsia-300">
                Sua sugestão começa aqui
              </p>
              <h3 className="mt-3 text-2xl font-black">
                Indique alguém ou alguma coisa
              </h3>
              <p className="mt-3 leading-7 text-white/60">
                Em breve, você poderá enviar sugestões para avaliação da
                organização. Todas as submissões serão revisadas antes de
                aparecerem publicamente.
              </p>
              <p className="mt-6 text-sm text-amber-300">
                Submissões ainda não disponíveis.
              </p>
            </>
          )}

          {activeTab === 'Indicados' && (
            <>
              <p className="text-sm font-bold uppercase tracking-widest text-fuchsia-300">
                Conheça os concorrentes
              </p>
              <h3 className="mt-3 text-2xl font-black">
                Os indicados aparecerão aqui
              </h3>
              <p className="mt-3 leading-7 text-white/60">
                As categorias, os indicados e a votação serão conectados ao
                banco de dados nas próximas etapas.
              </p>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <span className="text-2xl">🏆</span>
                  <p className="mt-3 font-bold">Categorias</p>
                  <p className="mt-1 text-sm text-white/50">Em preparação</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <span className="text-2xl">🗳️</span>
                  <p className="mt-3 font-bold">Votação pública</p>
                  <p className="mt-1 text-sm text-white/50">Ainda fechada</p>
                </div>
              </div>
            </>
          )}

          {activeTab === 'Resultados' && (
            <>
              <p className="text-sm font-bold uppercase tracking-widest text-fuchsia-300">
                O grande momento
              </p>
              <h3 className="mt-3 text-2xl font-black">
                O resultado permanece em segredo
              </h3>
              <p className="mt-3 leading-7 text-white/60">
                Os resultados oficiais só serão exibidos quando a organização
                fizer a liberação manual. Até lá, o suspense continua.
              </p>
              <div className="mt-6 rounded-2xl border border-fuchsia-400/20 bg-fuchsia-500/10 p-5 text-sm text-fuchsia-200">
                🤫 Revelação oficial pendente
              </div>
            </>
          )}
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-6 text-center text-sm text-white/40">
        PEITÃO AWARDS 2026 · Uma premiação da comunidade
      </footer>
    </main>
  );
}
