import { useState } from "react";
import { fetchAnalytics } from "../services/api";
import MetricsCard from "./MetricsCard";

export default function Dashboard() {
  const [data, setData] = useState(null);

  const loadData = async () => {
    const res = await fetchAnalytics("UC_x5XG1OV2P6uZZ5FSM9Ttw");
    setData(res.data.items[0].statistics);
  };

  return (
    <div>
      <h1>YouTube Analytics Dashboard</h1>
      <button onClick={loadData}>Load Analytics</button>
      {data && <MetricsCard data={data} />}
    </div>
  );
}
