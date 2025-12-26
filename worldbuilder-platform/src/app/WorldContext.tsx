import { createContext, useContext, useMemo, useState } from "react";

export type World = {
  id: string;
  name: string;
  description?: string;
};

type WorldContextValue = {
  worlds: World[];
  activeWorldId: string | null;
  activeWorld: World | null;
  setActiveWorldId: (id: string | null) => void;
  createWorld: (name: string) => void;
};

const WorldContext = createContext<WorldContextValue | null>(null);

const seedWorlds: World[] = [
  {
    id: "demo-world",
    name: "Demo World",
    description: "A starter world to test the system.",
  },
];

export function WorldProvider({ children }: { children: React.ReactNode }) {
  const [worlds, setWorlds] = useState<World[]>(seedWorlds);
  const [activeWorldId, setActiveWorldId] = useState<string | null>(
    seedWorlds[0]?.id ?? null
  );

  const activeWorld = useMemo(
    () => worlds.find((w) => w.id === activeWorldId) ?? null,
    [worlds, activeWorldId]
  );

  function createWorld(name: string) {
    const id = crypto.randomUUID();
    setWorlds((prev) => [{ id, name }, ...prev]);
    setActiveWorldId(id);
  }

  return (
    <WorldContext.Provider
      value={{
        worlds,
        activeWorldId,
        activeWorld,
        setActiveWorldId,
        createWorld,
      }}
    >
      {children}
    </WorldContext.Provider>
  );
}

export function useWorld() {
  const ctx = useContext(WorldContext);
  if (!ctx) {
    throw new Error("useWorld must be used within WorldProvider");
  }
  return ctx;
}
