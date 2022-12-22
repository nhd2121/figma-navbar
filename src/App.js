import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Breadcrumbs from "./Breadcrumbs";
import DangKiNganSachNam from "./Body/Components/DangKiNganSachNam";
import CapNhatNganSachNam from "./Body/Components/CapNhatNganSachNam";

function App() {
  return (
    <>
      <Navbar />
      <Breadcrumbs />
      <Switch>
        {/* <Route exact path="/" component={<Home />}/> */}
        {/* <Route
          exact
          path="/NganSachNam"
          component={<NganSachNam />}
        /> */}
        <Route
          exact
          path="/NganSachNam/DangKiNganSachNam"
          component={DangKiNganSachNam}
        />
        <Route
          exact
          path="/NganSachNam/CapNhatNganSachNam"
          component={CapNhatNganSachNam}
        />
      </Switch>
    </>
  );
}

export default App;
