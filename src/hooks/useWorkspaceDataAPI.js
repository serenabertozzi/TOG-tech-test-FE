import { useEffect, useState } from "react";

export const WorkspaceDataAPI = () => {
  const [currentData, updateData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const url = "https://mocki.io/v1/0a8a3472-1336-467a-ae37-8ddf0edb26ae";
    const res = await fetch(url, { method: "GET" });
    const json = await res.json();

    updateData(json);
    setLoading(false);
  };

  useEffect(() => getData(), []);

  return [currentData, loading];
};
