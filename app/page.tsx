'use client';

import { useChat } from 'ai/react';
import { useEffect, useRef } from 'react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex h-screen bg-[#131314] text-[#e3e3e3] font-sans antialiased">
      <div className="flex flex-col flex-grow h-full max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* HEADER */}
        <header className="flex items-center justify-between py-4 border-b border-[#2d2f31]">
          <div className="flex items-center gap-2">
            <span className="text-xl font-medium tracking-tight bg-gradient-to-r from-blue-400 via-teal-400 to-purple-400 bg-clip-text text-transparent">
              Orbital AI
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-[#282a2c] text-teal-400 font-mono border border-[#3c4043]">
              Cloud v1.0
            </span>
          </div>
          <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" title="Cloud Active"></div>
        </header>

        {/* CHAT AREA */}
        <div className="flex-grow overflow-y-auto py-6 space-y-8 pr-2 scrollbar-thin scrollbar-thumb-[#3c4043]">
          {messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center opacity-50 space-y-3 mt-20">
              <div className="text-4xl">✨</div>
              <h2 className="text-2xl font-light">Halo, Bro! Ada yang bisa gue bantu?</h2>
              <p className="text-xs font-mono max-w-sm">AI siap nemenin lu ngoding atau sekadar ngobrol santai.</p>
            </div>
          ) : (
            messages.map((m) => (
              <div key={m.id} className="flex gap-4 animate-fadeIn">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0 shadow-md ${
                  m.role === 'user' ? 'bg-blue-600 text-white' : 'bg-gradient-to-tr from-purple-600 to-indigo-600 text-white'
                }`}>
                  {m.role === 'user' ? 'U' : 'AI'}
                </div>

                <div className="flex flex-col space-y-1 w-full max-w-[85%]">
                  <span className="text-xs font-medium text-gray-400">
                    {m.role === 'user' ? 'Lu' : 'Jailbreak Alim'}
                  </span>
                  <div className={`text-sm leading-relaxed p-3.5 rounded-2xl ${
                    m.role === 'user' ? 'bg-[#282a2c] text-[#e3e3e3] border border-[#3c4043]' : 'bg-transparent text-[#e3e3e3]'
                  }`}>
                    <p className="whitespace-pre-wrap font-sans">{m.content}</p>
                  </div>
                </div>
              </div>
            ))
          )}
          
          {isLoading && (
            <div className="flex gap-4 items-center opacity-70">
              <div className="w-8 h-8 rounded-full bg-[#282a2c] border border-dashed border-teal-400 animate-spin flex items-center justify-center text-xs">⚡</div>
              <p className="text-xs font-mono text-teal-400 animate-pulse">Orbital AI lagi mikir...</p>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* INPUT BOX */}
        <div className="pb-6 pt-2 bg-[#131314]">
          <form onSubmit={handleSubmit} className="relative flex items-center bg-[#1e1f20] border border-[#3c4043] rounded-full px-6 py-3 shadow-xl focus-within:border-[#5f6368] transition-all">
            <input
              value={input}
              placeholder="Tanya apa aja, Bro..."
              onChange={handleInputChange}
              className="w-full bg-transparent text-[#e3e3e3] text-sm focus:outline-none placeholder-gray-500 pr-12"
            />
            <button 
              type="submit" 
              disabled={!input.trim() || isLoading}
              className={`absolute right-3 p-2 rounded-full transition-all ${
                input.trim() && !isLoading ? 'bg-teal-500 text-black hover:bg-teal-400 cursor-pointer' : 'bg-[#2d2f31] text-gray-600 cursor-not-allowed'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
              </svg>
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
