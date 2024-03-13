import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./router";

function App() {
  //if user wan't to add something can do
  //as per
  return (
    <>
      <RouterProvider
        router={router}
        fallbackElement={<p>Initial Load...</p>}
      />
    </>
  );
}

export default App;
