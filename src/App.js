import React from "react";
import { v4 as uuidv4 } from "uuid";
import NavBar from "./components/NavBar/NavBar";
import News from "./components/News/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { router } from "./config/config";
import Search from "./components/Search/Search";
import Subscription from "./components/Subscription/Subscription";
import PrivacyPolicy from "./privacy-policy"; // ✅ Correct import based on your file location

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          {router.map((path) => (
            <Route
              exact
              key={uuidv4()}
              path={path.path}
              element={
                <>
                  <News
                    key={path.key}
                    newscategory={path.category}
                    country={path.country}
                  />
                  <Subscription />
                </>
              }
            />
          ))}
          <Route path="/search/:query" element={<Search />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} /> {/* ✅ Added Privacy Policy Route */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
