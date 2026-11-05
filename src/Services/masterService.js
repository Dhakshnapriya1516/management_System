export const initialData = {
  users: [
    { id: 1, name: "Arun Kumar", email: "arun@gmail.com", mobile: "9876543210", role: "Admin", status: "Active" },
    { id: 2, name: "Priya", email: "priya@gmail.com", mobile: "9876543211", role: "HR", status: "Active" },
  ],

  roles: [
    { id: 1, roleName: "Admin", description: "Full system access" },
    { id: 2, roleName: "HR", description: "Employee management" },
    { id: 3, roleName: "Employee", description: "Basic access" },
  ],

  states: [
    { id: 1, stateName: "Tamil Nadu", stateCode: "TN" },
    { id: 2, stateName: "Kerala", stateCode: "KL" },
  ],

  districts: [
    { id: 1, districtName: "Chennai", state: "Tamil Nadu" },
    { id: 2, districtName: "Coimbatore", state: "Tamil Nadu" },
    { id: 3, districtName: "Ernakulam", state: "Kerala" },
  ],

  towns: [
    { id: 1, townName: "Tambaram", state: "Tamil Nadu", district: "Chennai" },
    { id: 2, townName: "Pollachi", state: "Tamil Nadu", district: "Coimbatore" },
    { id: 3, townName: "Aluva", state: "Kerala", district: "Ernakulam" },
  ],
};