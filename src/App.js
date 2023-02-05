import { Route, Routes } from "react-router-dom"
import Navbar from './components/navbar/navbar'
import MainPage from './pages/main/main'
import ReportPage from './pages/report/report'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import AddInfoPage from './pages/add-info/add-info'
import TotalBuildPage from './pages/total-build/total-build'
import OrdersPage from './pages/orders/orders'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/report" element={<ReportPage />} />
        <Route path="/info" element={<AddInfoPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/build" element={<TotalBuildPage />} />
      </Routes>  
    </>

  );
}

export default App;
