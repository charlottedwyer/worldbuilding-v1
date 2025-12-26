import { createContext, useContext, useEffect, useMemo, useState } from "react";

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

const STORAGE_KEY = "worldbuilder.worlds";
const ACTIVE_KEY = "worldbuilder.activeWorldId";

export function WorldProvider({ children }: { children: React.ReactNode }) {
  const [worlds, setWorlds] = useState<World[]>([]);
  const [activeWorldId, setActiveWorldId] = useState<string | null>(null);

  // Load from localStorage on first mount
  useEffect(() => {
    const storedWorlds = localStorage.getItem(STORAGE_KEY);
    const storedActive = localStorage.getItem(ACTIVE_KEY);

    if (storedWorlds) {
      const parsed = JSON.parse(storedWorlds) as World[];
      setWorlds(parsed);
      setActiveWorldId(storedActive ?? parsed[0]?.id ?? null);
    } else {
      const demo: World[] = [
        {
          id: crypto.randomUUID(),
          name: "Demo World",
          description: "A starter world to test the system.",
        },
      ];
      setWorlds(demo);
      setActiveWorldId(demo[0].id);
    }
  }, []);

  // Persist worlds
  useEffect(() => {
    if (worlds.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(worlds));
    }
  }, [worlds]);

  // Persist active world
  useEffect(() => {
    if (activeWorldId) {
      localStorage.setItem(ACTIVE_KEY, activeWorldId);
    }
  }, [activeWorldId]);

  const activeWorld = useMemo(
    () => worlds.find((w) => w.id === activeWorldId) ?? null,
    [worlds, activeWorldId]
  );

  function createWorld(name: string) {
    const newWorld: World = {
      id: crypto.randomUUID(),
      name,
    };
    setWorlds((prev) => [newWorld, ...prev]);
    setActiveWorldId(newWorld.id);
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
  if (!ctx) throw new Error("useWorld must be used within WorldProvider");
  return ctx;
}
