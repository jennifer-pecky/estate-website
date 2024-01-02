import React from "react";
import Layout from "./components/Layout/Layout";
import { ModalProvider } from "./Context/Modalcontext";
function App() {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <ModalProvider>
          <Layout />
        </ModalProvider>
      </div>
    </>
  );
}

export default App;
