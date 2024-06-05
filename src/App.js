import Header from "./components/Header";
import Detail from "./pages/Detail";
import Main from "./pages/Main";

const { BrowserRouter, Routes, Route } = require("react-router-dom");

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
