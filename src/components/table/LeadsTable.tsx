import { Lead } from "@/types/lead";

interface LeadsTableProps {
  leads: Lead[];
}

export default function LeadsTable({
  leads,
}: LeadsTableProps) {
  return (
    <div className="mt-10 w-full overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
      <div className="max-h-[500px] overflow-auto">
        <table className="w-full border-collapse text-left">
          <thead className="sticky top-0 bg-zinc-100">
            <tr className="border-b border-zinc-200">
              <th className="px-4 py-4 font-semibold">
                Name
              </th>

              <th className="px-4 py-4 font-semibold">
                Role
              </th>

              <th className="px-4 py-4 font-semibold">
                Company
              </th>

              <th className="px-4 py-4 font-semibold">
                Generated Message
              </th>
            </tr>
          </thead>

          <tbody>
            {leads.map((lead, index) => (
              <tr
                key={index}
                className="border-b border-zinc-100 odd:bg-white even:bg-zinc-50"
              >
                <td className="px-4 py-4">
                  {lead.name}
                </td>

                <td className="px-4 py-4 text-zinc-600">
                  {lead.role}
                </td>

                <td className="px-4 py-4 text-zinc-600">
                  {lead.company}
                </td>

                <td className="max-w-md px-4 py-4 text-sm leading-7 text-zinc-700">
                  {lead.generatedMessage || "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}