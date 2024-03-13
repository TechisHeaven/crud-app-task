import { createContext, useContext } from "react";
import { TableData } from "../types/main.type";

// define the initial state for table
export const initialTableState = {
  tables: [] as TableData[],
  loading: false,
  error: null,
};

// REDUCER: reducer function with actions in switch
// Define the table reducer function
export function tableReducer(state = initialTableState, action: any) {
  switch (action.type) {
    case "RESET_TABLE":
      return {
        ...state,
        tables: [],
      };
    case "FETCH_TABLE":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_TABLE_SUCCESS":
      return {
        ...state,
        loading: false,
        tables: [...state.tables, ...action.payload],
      };
    case "FETCH_TABLE_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case "ADD_ITEM_TABLE":
      return {
        ...state,
        tables: [action.payload, ...state.tables],
      };

    case "UPDATE_ITEM_TABLE":
      const { updatedData, index } = action.payload;

      if (index >= 0 && index < state.tables.length) {
        return {
          ...state,
          tables: [
            ...state.tables.slice(0, index),
            updatedData,
            ...state.tables.slice(index + 1),
          ],
        };
      } else {
        console.warn("Invalid update index for table data");
        return state;
      }
    case "REMOVE_FROM_TABLE":
      const tableIdToRemove = action.payload;
      const updatedTable = state.tables.filter(
        (table) => table.id !== tableIdToRemove
      );
      return {
        ...state,
        loading: false,
        tables: updatedTable,
      };
    default:
      return state;
  }
}

// combine the reducers into a single reducer function and then access within on state better for low data maintaining accross application
export function rootReducer(state: any, action: any) {
  return {
    tables: tableReducer(state.tables, action),
  };
}

// create context objects for the state and dispatch function
export const StateContext = createContext<any>(null);
export const DispatchContext = createContext<any>(null);

// define custom hooks to access the state and dispatch function from context
export function useStateContext() {
  return useContext(StateContext);
}

export function useDispatchContext() {
  return useContext(DispatchContext);
}
