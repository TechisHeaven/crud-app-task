import { useState, useEffect } from "react";
import sanitizedConfig from "../utils/envConfig";
import { TableData } from "../types/main.type";

export function useFetchTable(): [TableData[], boolean, string | null, any] {
  const [tableData, setTableData] = useState<TableData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const url = sanitizedConfig.VITE_API_URL;
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "content-type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data: TableData[] = await response.json();
        setTableData(data);
      } catch (error) {
        setError(error.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return [tableData, loading, error, setTableData];
}
