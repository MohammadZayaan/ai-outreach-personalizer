import { Lead } from "@/types/lead";

export function exportLeadsToCsv(leads: Lead[]) {
  const headers = [
    "name",
    "role",
    "company",
    "linkedin_bio",
    "generatedMessage",
  ];

  const rows = leads.map((lead) => [
    lead.name,
    lead.role,
    lead.company,
    lead.linkedin_bio,
    lead.generatedMessage || "",
  ]);

  const csvContent = [
    headers.join(","),
    ...rows.map((row) => row.join(",")),
  ].join("\n");

  const blob = new Blob([csvContent], {
    type: "text/csv;charset=utf-8;",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;

  link.setAttribute(
    "download",
    "generated_outreach.csv"
  );

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);
}