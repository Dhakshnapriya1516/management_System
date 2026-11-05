import MasterPage from "../components/MasterPage";
import { initialData } from "../services/masterService";
import "../style/RoleMaster.css";

const columns = [
  { field: "roleName", label: "Role Name", required: true },
  { field: "description", label: "Description", required: true },
];

export default function RoleMaster() {
  return (
    <MasterPage
      title="Role Master"
      columns={columns}
      initialRows={initialData.roles}
    />
  );
}