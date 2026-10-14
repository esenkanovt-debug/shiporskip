import { ROWS } from "@/lib/site";
export default function Scoreboard({ limit }: { limit?: number }) {
  const rows = limit ? ROWS.slice(0, limit) : ROWS;
  return (
    <div className="overflow-x-auto rounded-xl border border-white/10">
      <table className="w-full min-w-[640px] text-left text-sm">
        <caption className="sr-only">Ship or Skip scoreboard (scores out of 10)</caption>
        <thead className="bg-white/5 text-gray-400"><tr>{["Tool","Category","Works","Time-to-value","Price","Hype vs reality","Verdict"].map(h=><th key={h} scope="col" className="px-4 py-3 font-medium">{h}</th>)}</tr></thead>
        <tbody>
          {rows.map(r => (
            <tr key={r.tool} className="border-t border-white/10">
              <th scope="row" className="px-4 py-3 font-semibold text-white">{r.tool}{r.example && <span className="ml-2 rounded bg-yellow-400/15 px-1.5 py-0.5 text-xs text-yellow-300">EXAMPLE — not a real review</span>}</th>
              <td className="px-4 py-3">{r.category}</td><td className="px-4 py-3">{r.works}/10</td><td className="px-4 py-3">{r.ttv}/10</td><td className="px-4 py-3">{r.price}/10</td><td className="px-4 py-3">{r.hype}/10</td>
              <td className="px-4 py-3"><span className={`rounded px-2 py-1 font-bold ${r.verdict==="Ship"?"bg-ship/15 text-ship":r.verdict==="Skip"?"bg-skip/15 text-skip":"bg-white/10"}`}>{r.verdict}</span></td>
            </tr>))}
        </tbody>
      </table>
    </div>
  );
}
