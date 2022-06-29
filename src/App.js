import { Routes, Route } from "react-router-dom";

import Navbar from "./Routes/Navbar/index";
import Home from "./Routes/Home";
import Shop from "./Routes/Shop/index";

const App = () => {
  return (
    <Routes>
      <Route to="/" element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
