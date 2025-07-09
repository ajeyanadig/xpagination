import { useState } from "react";
import EmployeeRow from "./EmployeeRow";

function Table({ records }) {
  let [page, setPage] = useState(0);
  const toShow = 10;
  let recordsToShow = records.slice(0 + page * toShow, toShow + toShow * page);
  let totalLength = records.length;
  function leftSideHandler() {
    if (page === 0) return;
    setPage(--page);
  }
  function rightSideHandler() {
    if (toShow + page * toShow >= totalLength) return;
    setPage(++page);
  }

  return (
    <>
      <table style={{ borderBottom: "5px solid #22c9b0 " }}>
        <thead style={{ backgroundColor: "#22c9b0" }}>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
        </thead>
        <tbody>
          {recordsToShow.map((curr) => (
            <EmployeeRow
              id={curr.id}
              name={curr.name}
              email={curr.email}
              role={curr.role}
            />
          ))}
        </tbody>
      </table>
      <div>
        {" "}
        <div className="directionButtons">
          <button
            style={{
              cursor: "pointer",
              color: "white",
              padding: "10px 15px",
              backgroundColor: "#43967B",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "5px",
            }}
            onClick={leftSideHandler}
          >
            Previous
          </button>

          <button
            style={{
              cursor: "pointer",
              color: "white",
              height: "37px",
              width: "37px",
              backgroundColor: "#43967B",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "5px",
            }}
          >
            {page + 1}
          </button>
          <button
            style={{
              color: "white",
              padding: "10px 15px",
              backgroundColor: "#43967B",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "5px",
            }}
            onClick={rightSideHandler}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default Table;
