import Layout from "./components/global/Layout";
import PageTrangChu from './pages/PageTrangChu';
import PageQuanLy from './pages/PageNhanVien';
import PagePhongBan from './pages/PagePhongBan';
import PageLinhVuc from './pages/PageLinhVuc';
import PageCongVan from "./pages/PageCongVan";
import CVanDetail from "./components/congvan/CVanDetail";
import PageLoaiCVan from './pages/PageLoaiCVan';
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";


const queryClient = new QueryClient({});

function App() {
  return (
    <Layout>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<PageTrangChu />} />
          <Route path="nhanvien" element={<PageQuanLy />} />
          <Route path="phongban" element={<PagePhongBan />} />
          <Route path="linhvuc" element={<PageLinhVuc />} />
          <Route path="congvan" element={<PageCongVan />} />
          <Route path="/congvan/:id" element={<CVanDetail />} />
          <Route path="loaicvan" element={<PageLoaiCVan />} />
        </Routes>
      </QueryClientProvider>
    </Layout>
  );
}

export default App;
