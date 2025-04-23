'use client';
import { useState } from 'react';
import PhaseOne from '@/components/PhaseOne';
import ParticlesBackground from '@/components/ParticlesBackground';

export default function Home() {
  const [started, setStarted] = useState(false);

  return (
    <main className="min-h-screen w-full flex flex-col justify-between items-center  px-4 py-10 font-sans text-white">
      <ParticlesBackground />
      {!started ? (
        <>

          <h1 className="text-5xl font-bold mt-[-280]">Testing</h1>
          <button
            onClick={() => setStarted(true)}
            className="px-10 py-3 bg-[#1d9bf0] text-black text-xl font-bold rounded-full hover:scale-105 active:scale-95 transition-transform duration-200 mb-5"
          >
            start
          </button>
        </>
      ) : (
        <PhaseOne />
      )}
    </main>
  );
}
