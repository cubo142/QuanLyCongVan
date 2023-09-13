import Layout from "./components/global/Layout";
import PageTrangChu from './pages/PageTrangChu';
import { Routes, Route } from "react-router-dom";
import QLNhanVien from "./components/quanly/QLNhanVien/QLNhanVien";
import PageQuanLy from "./pages/PageQuanLy";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<PageTrangChu />} />
          <Route path="quanly" element={<PageQuanLy />} />
        </Routes>
      </Layout>

    </>
  );
}

export default App;
