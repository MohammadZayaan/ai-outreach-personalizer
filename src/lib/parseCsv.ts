import Papa from "papaparse";
import { Lead } from "@/types/lead";

export function parseCsv(
  file: File,
  callback: (data: Lead[]) => void
) {
  Papa.parse<Lead>(file, {
    header: true,
    skipEmptyLines: true,

    complete: (results) => {
      callback(results.data);
    },

    error: (error) => {
      console.error("CSV Parsing Error:", error);
    },
  });
}