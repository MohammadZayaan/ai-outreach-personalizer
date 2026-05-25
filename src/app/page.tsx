export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 py-20">
        <h1 className="text-center text-5xl font-bold tracking-tight">
          AI Outreach Personalizer
        </h1>

        <p className="mt-4 max-w-2xl text-center text-lg text-zinc-400">
          Upload a CSV file and generate personalized cold outreach messages
          using AI.
        </p>

        <div className="mt-10 w-full max-w-3xl rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
          <p className="text-center text-zinc-400">
            CSV upload component coming next...
          </p>
        </div>
      </div>
    </main>
  );
}