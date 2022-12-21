import "./App.css";
import { Route, Routes } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
import NganSachNam from "./Body/Components/NganSachNam";

function App() {
  return (
    <>
      <Breadcrumbs>
        <Routes>
          <Route exact path="/DangKiNganSachNam" element={<NganSachNam />} />
        </Routes>
      </Breadcrumbs>
    </>
  );
}

export default App;
