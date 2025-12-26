import { Outlet, useNavigate } from "react-router-dom";
import { FiBookOpen, FiUsers, FiMap, FiClock, FiFeather, FiGlobe } from "react-icons/fi";
import NavLinkItem from "../components/NavLinkItem";
import Panel from "../components/Panel";
import { useWorld } from "./WorldContext";

export default function AppShell() {
  const navigate = useNavigate();
  const { worlds, activeWorldId, setActiveWorldId, activeWorld } = useWorld();

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 p-4 md:grid-cols-[280px_1fr]">
        <aside className="space-y-4">
          <Panel title="World">
            <div className="flex items-center gap-2">
              <FiGlobe />
              <select
                className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm"
                value={activeWorldId ?? ""}
                onChange={(e) => {
                  setActiveWorldId(e.target.value);
                  navigate("/wiki");
                }}
              >
                {worlds.map((w) => (
                  <option key={w.id} value={w.id}>
                    {w.name}
                  </option>
                ))}
              </select>
            </div>

            <button
              className="mt-3 w-full rounded-xl bg-zinc-100 px-3 py-2 text-sm font-semibold text-zinc-950 hover:bg-white"
              onClick={() => navigate("/worlds")}
            >
              Manage worlds
            </button>

            {activeWorld?.description && (
              <p className="mt-3 text-sm text-zinc-400">
                {activeWorld.description}
              </p>
            )}
          </Panel>

          <Panel title="Sections">
            <nav className="space-y-1">
              <NavLinkItem to="/wiki" icon={<FiBookOpen />} label="Wiki" />
              <NavLinkItem to="/characters" icon={<FiUsers />} label="Characters" />
              <NavLinkItem to="/locations" icon={<FiMap />} label="Locations" />
              <NavLinkItem to="/maps" icon={<FiMap />} label="Maps" />
              <NavLinkItem to="/timelines" icon={<FiClock />} label="Timelines" />
              <NavLinkItem to="/writing" icon={<FiFeather />} label="Writing Tools" />
            </nav>
          </Panel>
        </aside>

        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
