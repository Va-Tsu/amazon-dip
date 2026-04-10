// pages/AdminSeed.tsx
import { useState } from "react";
import { request } from "../api/fetchClient";

export function AdminSeed() {
  const [categoryName, setCategoryName] = useState("");
  const [countryName, setCountryName] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [log, setLog] = useState<string[]>([]);

  const token = localStorage.getItem("token") ?? "";

  const addLog = (msg: string) => setLog(prev => [msg, ...prev]);

  const createCategory = async () => {
    try {
      await request("/api/Category/create", "POST", {
        id: 0, name: categoryName, imageUrl: "", products: []
      }, token);
      addLog(`✓ Category "${categoryName}" created`);
      setCategoryName("");
    } catch (e) {
      addLog(`✗ Error: ${(e as Error).message}`);
    }
  };

  const createCountry = async () => {
    try {
      await request("/api/Country/create", "POST", {
        id: 0, name: countryName, imageUrl: "", code: countryCode, products: []
      }, token);
      addLog(`✓ Country "${countryName}" (${countryCode}) created`);
      setCountryName("");
      setCountryCode("");
    } catch (e) {
      addLog(`✗ Error: ${(e as Error).message}`);
    }
  };

  return (
    <div style={{ maxWidth: 500, margin: "2rem auto", padding: "0 1rem" }}>
      <h1 style={{ fontSize: 22, fontWeight: 500, marginBottom: "1.5rem" }}>Admin seed</h1>

      <div style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: "var(--border-radius-lg)", padding: "1rem 1.25rem", marginBottom: "1rem" }}>
        <h2 style={{ fontSize: 16, fontWeight: 500, marginBottom: 12 }}>Add category</h2>
        <input
          type="text"
          placeholder="Category name"
          value={categoryName}
          onChange={e => setCategoryName(e.target.value)}
          style={{ width: "100%", marginBottom: 8 }}
        />
        <button onClick={createCategory} disabled={!categoryName}>
          Create category
        </button>
      </div>

      <div style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: "var(--border-radius-lg)", padding: "1rem 1.25rem", marginBottom: "1rem" }}>
        <h2 style={{ fontSize: 16, fontWeight: 500, marginBottom: 12 }}>Add country</h2>
        <input
          type="text"
          placeholder="Country name (e.g. Ukraine)"
          value={countryName}
          onChange={e => setCountryName(e.target.value)}
          style={{ width: "100%", marginBottom: 8 }}
        />
        <input
          type="text"
          placeholder="Code (e.g. UA)"
          value={countryCode}
          onChange={e => setCountryCode(e.target.value.toUpperCase())}
          style={{ width: "100%", marginBottom: 8 }}
        />
        <button onClick={createCountry} disabled={!countryName || !countryCode}>
          Create country
        </button>
      </div>

      {log.length > 0 && (
        <div style={{ fontSize: 13, color: "var(--color-text-secondary)", display: "flex", flexDirection: "column", gap: 4 }}>
          {log.map((entry, i) => <span key={i}>{entry}</span>)}
        </div>
      )}
    </div>
  );
}