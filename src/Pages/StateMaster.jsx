import MasterPage from "../components/MasterPage";
import { initialData } from "../services/masterService";
import "../style/StateMaster.css";

const columns = [
  { field: "stateName", label: "State Name", required: true },
  { field: "stateCode", label: "State Code", required: true },
];

export default function StateMaster() {
  return (
    <MasterPage
      title="State Master"
      columns={columns}
      initialRows={initialData.states}
    />
  );
}