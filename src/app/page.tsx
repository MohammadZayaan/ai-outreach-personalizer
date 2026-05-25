"use client";

import { useState } from "react";

import CsvUploader from "@/components/upload/CsvUploader";
import LeadsTable from "@/components/table/LeadsTable";

import { Lead } from "@/types/lead";

export default function Home() {
  const [leads, setLeads] = useState<Lead[]>([]);

  return (
    <main className="min-h-screen bg-white text-black">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 py-20">
        <h1 className="text-center text-5xl font-bold tracking-tight">
          AI Outreach Personalizer
        </h1>

        <p className="mt-4 max-w-2xl text-center text-lg text-zinc-600">
          Upload a CSV file and generate personalized cold outreach
          messages using AI.
        </p>

        <div className="mt-10 w-full max-w-3xl rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
          <CsvUploader onDataParsed={setLeads} />
        </div>

        <div className="mt-6 text-zinc-500">
          {leads.length === 0
            ? "No leads uploaded yet"
            : `${leads.length} leads parsed successfully`}
        </div>

        {leads.length > 0 && (
          <LeadsTable leads={leads} />
        )}
      </div>
    </main>
  );
}