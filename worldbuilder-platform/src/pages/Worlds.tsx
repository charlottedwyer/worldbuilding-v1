import { useState } from "react";
import Panel from "../components/Panel";
import { useWorld } from "../app/WorldContext";

export default function Worlds() {
  const { worlds, activeWorldId, setActiveWorldId, createWorld } = useWorld();
  const [name, setName] = useState("");

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Worlds</h1>

      <Panel title="Create world">
        <input
          className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm"
          placeholder="World name…"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          className="mt-2 rounded-xl bg-zinc-100 px-4 py-2 text-sm font-semibold text-zinc-950"
          onClick={() => {
            if (!name.trim()) return;
            createWorld(name.trim());
            setName("");
          }}
        >
          Create
        </button>
      </Panel>

      <Panel title="Existing worlds">
        <ul className="space-y-2">
          {worlds.map((w) => (
            <li key={w.id} className="flex justify-between">
              <span>{w.name}</span>
              <button
                onClick={() => setActiveWorldId(w.id)}
                className={
                  w.id === activeWorldId
                    ? "text-zinc-400"
                    : "text-zinc-100 underline"
                }
              >
                {w.id === activeWorldId ? "Active" : "Set active"}
              </button>
            </li>
          ))}
        </ul>
      </Panel>
    </div>
  );
}
