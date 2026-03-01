"use client";
import { useState } from "react";

const TYPE_MAP: Record<number, string> = {
  1: "A",
  2: "NS",
  5: "CNAME",
  6: "SOA",
  15: "MX",
  16: "TXT",
  28: "AAAA",
};

export default function DnsForm() {
  const [domain, setDomain] = useState("");
  const [type, setType] = useState("A");
  const [rows, setRows] = useState<any[]>([]);

  async function query() {
    setRows([]);
    const res = await fetch(`/api/dns?domain=${domain}&type=${type}`);
    const data = await res.json();
    setRows(data.Answer || []);
  }

  return (
    <div>
      <h1 style={{ marginBottom: 18 }}>DNS Tools</h1>

      {/* Search bar */}
      <div style={{ display: "flex", gap: 12, marginBottom: 28 }}>
        <input
          placeholder="example.com"
          value={domain}
          onChange={e => setDomain(e.target.value)}
        />
        <select value={type} onChange={e => setType(e.target.value)}>
          {["A","AAAA","MX","TXT","NS","CNAME","SOA","PTR"].map(t => (
            <option key={t}>{t}</option>
          ))}
        </select>
        <button onClick={query}>Query</button>
      </div>

      {/* Results */}
      {rows.length > 0 && (
        <div>
          {/* Header */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "120px 80px 1fr",
              fontWeight: 600,
              paddingBottom: 10,
              borderBottom: "1px solid rgba(255,255,255,.25)",
              marginBottom: 8,
            }}
          >
            <div>Type</div>
            <div>TTL</div>
            <div>Value</div>
          </div>

          {/* Rows */}
          {rows.map((r, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "120px 80px 1fr",
                padding: "8px 0",
                borderBottom: "1px solid rgba(255,255,255,.1)",
                wordBreak: "break-all",
              }}
            >
              <div>{TYPE_MAP[r.type] || r.type}</div>
              <div>{r.TTL}</div>
              <div>{r.data}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}