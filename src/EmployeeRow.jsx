import "./EmployeeRow.css";
function EmployeeRow({ id, name, email, role }) {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{role}</td>
    </tr>
  );
}

export default EmployeeRow;
