import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import AxiosQuery from "./components/AxiosQuery";
import ReactQuery from "./components/ReactQuery";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/axios-query" element={<AxiosQuery />} />
          <Route path="/react-query" element={<ReactQuery />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
