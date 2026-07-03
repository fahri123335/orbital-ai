'use client';

import { useChat } from '@ai-sdk/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 flex flex-col items-center justify-between p-4 md:p-8 font-sans">
      {/* Header */}
      <header className="w-full max-w-2xl text-center py-4 border-b border-zinc-800">
        <h1 className="text-2xl font-bold tracking-wider text-cyan-400">ORBITAL AI</h1>
        <p className="text-xs text-zinc-400 mt-1">Next-Gen Chat Assistant</p>
      </header>

      {/* Chat Box */}
      <main className="w-full max-w-2xl flex-1 my-4 overflow-y-auto space-y-4 pr-2 max-h-[70vh]">
        {messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-zinc-500 text-sm mt-20">
            <p>Belum ada obrolan. Mulai sapa Orbital AI! 🚀</p>
          </div>
        ) : (
          messages.map((m) => (
            <div
              key={m.id}
              className={`flex flex-col p-3 rounded-lg max-w-[85%] ${
                m.role === 'user'
                  ? 'bg-cyan-950/40 border border-cyan-800 text-cyan-100 ml-auto'
                  : 'bg-zinc-900 border border-zinc-800 text-zinc-100 mr-auto'
              }`}
            >
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 mb-1">
                {m.role === 'user' ? 'Kamu' : 'Orbital AI'}
              </span>
              <p className="text-sm leading-relaxed whitespace-pre-wrap">{m.content}</p>
            </div>
          ))
        )}
      </main>

      {/* Input Form */}
      <footer className="w-full max-w-2xl sticky bottom-0 bg-zinc-950 pt-2">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            className="flex-1 bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-cyan-500 transition-colors"
            value={input}
            placeholder="Tulis pesan ke Orbital AI..."
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="bg-cyan-600 hover:bg-cyan-500 active:bg-cyan-700 text-zinc-950 font-bold px-5 py-3 rounded-lg text-sm tracking-wide transition-colors"
          >
            Kirim
          </button>
        </form>
      </footer>
    </div>
  );
}
