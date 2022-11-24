import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/common/Layout";
import PageMariachis from "./pages/mariachis/PageMariachis";
import { PAGE_CODES } from "./utils/page-codes";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route
          path={`/${PAGE_CODES.MARIACHIS}`}
          element={<PageMariachis pageCode={PAGE_CODES.MARIACHIS} />}
        />
      </Routes>
    </Layout>
  );
};

export default App;
