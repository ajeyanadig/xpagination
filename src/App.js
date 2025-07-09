import { useEffect, useState } from "react";
import "./App.css";

import Table from "./Table";
function App() {
  let [records, setRecords] = useState([]);
  useEffect(() => {
    fetch(
      "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
    )
      .then((rawData) => rawData.json())
      .then((allRecords) => setRecords(allRecords))
      .catch((e) => console.log("failed to fetch data"));
  }, []);

  return (
    <div>
      <h1>Employee Data Table</h1>
      <Table records={records} />
    </div>
  );
}

export default App;
