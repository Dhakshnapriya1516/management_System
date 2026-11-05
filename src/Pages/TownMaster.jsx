import MasterPage from "../components/MasterPage";
import { initialData } from "../services/masterService";
import "../style/TownMaster.css";

const columns = [
  { field: "townName", label: "Town Name", required: true },
  {
    field: "state",
    label: "State",
    type: "select",
    options: initialData.states.map((item) => item.stateName),
    required: true,
  },
  {
    field: "district",
    label: "District",
    type: "select",
    options: initialData.districts.map((item) => item.districtName),
    required: true,
  },
];

export default function TownMaster() {
  return (
    <MasterPage
      title="Town Master"
      columns={columns}
      initialRows={initialData.towns}
    />
  );
}