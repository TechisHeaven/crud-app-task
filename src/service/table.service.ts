import { useEffect } from "react";
import sanitizedConfig from "../utils/envConfig";
import { TableData } from "../types/main.type";
import { useDispatchContext } from "../store/store";

export function useFetchTable() {
  const dispatch = useDispatchContext();
  useEffect(() => {
    async function fetchData() {
      try {
        dispatch({ type: "FETCH_TABLE" });
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
        dispatch({ type: "FETCH_TABLE_SUCCESS", payload: data });
      } catch (error) {
        if (error) {
          dispatch({
            type: "FETCH_TABLE_FAILURE",
            payload: error?.message || "An error occurred",
          });
        }
      }
    }

    fetchData();
  }, []);
}
