import Panel from "../components/Panel";
import { useWorld } from "../app/WorldContext";

export default function Wiki() {
  const { activeWorld } = useWorld();

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Wiki</h1>
      <Panel>
        <p className="text-sm text-zinc-400">
          World: <strong>{activeWorld?.name}</strong>
        </p>
      </Panel>
    </div>
  );
}
