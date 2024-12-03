import { Route, Routes } from "react-router-dom";
import { AppLayout } from "./layout/app-layout";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Home } from "./pages/home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/autorization" element={<Register />} />
        <Route path="/app" element={<AppLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
