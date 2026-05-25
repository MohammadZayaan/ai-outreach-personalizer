import { Lead } from "@/types/lead";

interface LeadsTableProps {
  leads: Lead[];
}

export default function LeadsTable({
  leads,
}: LeadsTableProps) {
  return (
    <div className="mt-10 w-full overflow-x-auto rounded-2xl border border-zinc-300 bg-white shadow-sm">
      <table className="w-full border-collapse text-left">
        <thead className="border-b border-zinc-300 bg-zinc-100">
          <tr>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Role</th>
            <th className="px-4 py-3">Company</th>
            <th className="px-4 py-3">LinkedIn Bio</th>
          </tr>
        </thead>

        <tbody>
          {leads.map((lead, index) => (
            <tr
              key={index}
              className="border-b border-zinc-200"
            >
              <td className="px-4 py-3">{lead.name}</td>
              <td className="px-4 py-3">{lead.role}</td>
              <td className="px-4 py-3">{lead.company}</td>
              <td className="px-4 py-3 text-zinc-600">
                {lead.linkedin_bio}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}