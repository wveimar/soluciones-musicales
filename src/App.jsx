import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/common/Layout";
import PageMariachis from "./pages/mariachis/PageMariachis";
import PageChirimias from "./pages/page-chirimias/PageChirimias";
import { PAGE_CODES } from "./utils/page-codes";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route
          path={`/${PAGE_CODES.MARIACHIS}`}
          element={<PageMariachis pageCode={PAGE_CODES.MARIACHIS} />}
        />
         <Route
          path={`/${PAGE_CODES.CHIRIMIAS}`}
          element={<PageChirimias pageCode={PAGE_CODES.CHIRIMIAS} />}
        />
      </Routes>
    </Layout>
  );
};

export default App;
