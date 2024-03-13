import { useEffect } from "react";
import sanitizedConfig from "../utils/envConfig";
import { Prettify, TableData } from "../types/main.type";
import { useDispatchContext } from "../store/store";

//fetch data server to get data from server api.

export function useFetchTable() {
  const dispatch = useDispatchContext();
  useEffect(() => {
    async function fetchData() {
      try {
        dispatch({ type: "FETCH_TABLE" });
        //* api url get from sanitized config so dont have to use import.meta.env.KEY we made it  typesafe environment variables
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

        const data: Prettify<TableData[]> = await response.json();
        dispatch({ type: "FETCH_TABLE_SUCCESS", payload: data });
      } catch (error: any) {
        if (error) {
          dispatch({
            type: "FETCH_TABLE_FAILURE",
            payload: error.message || "An error occurred",
          });
        }
      }
    }

    fetchData();
  }, []);
}

// SERVICE: Services we can more here
