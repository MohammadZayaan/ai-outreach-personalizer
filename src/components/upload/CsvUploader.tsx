"use client";

import { ChangeEvent, useState } from "react";

import { parseCsv } from "@/lib/parseCsv";
import { Lead } from "@/types/lead";

interface CsvUploaderProps {
  onDataParsed: (data: Lead[]) => void;
}

export default function CsvUploader({
  onDataParsed,
}: CsvUploaderProps) {
  const [fileName, setFileName] = useState("");

  const handleFileUpload = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.name.endsWith(".csv")) {
      alert("Please upload a CSV file.");
      return;
    }

    setFileName(file.name);

    parseCsv(file, onDataParsed);
  };

  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-zinc-300 p-10 text-center">
      <label className="cursor-pointer rounded-lg bg-black px-5 py-3 font-medium text-white transition hover:bg-zinc-800">
        Upload CSV

        <input
          type="file"
          accept=".csv"
          onChange={handleFileUpload}
          className="hidden"
        />
      </label>

      <p className="mt-4 text-sm text-zinc-600">
        Upload a CSV containing lead information
      </p>

      <p className="mt-2 text-xs text-zinc-500">
        Required columns: name, role, company, linkedin_bio
      </p>

      {fileName && (
        <p className="mt-4 text-sm text-green-600">
          Uploaded: {fileName}
        </p>
      )}
    </div>
  );
}