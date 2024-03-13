import { useReducer } from "react";
import {
  DispatchContext,
  StateContext,
  initialTableState,
  rootReducer,
} from "../store/store";

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(rootReducer, {
    tables: initialTableState,
  });

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}
