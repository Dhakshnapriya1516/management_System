import MasterPage from "../components/MasterPage";
import { initialData } from "../services/masterService";
import "../style/DistrictMaster.css";


const columns = [
  { field: "districtName", label: "District Name", required: true },
  {
    field: "state",
    label: "State",
    type: "select",
    options: initialData.states.map((item) => item.stateName),
    required: true,
  },
];

export default function DistrictMaster() {
  return (
    <MasterPage
      title="District Master"
      columns={columns}
      initialRows={initialData.districts}
    />
  );
}