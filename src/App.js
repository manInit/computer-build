import { Route, Routes } from "react-router-dom"
import Navbar from './components/navbar/navbar'
import MainPage from './pages/main/main'
import ReportPage from './pages/report/report'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import AddInfoPage from './pages/add-info/add-info'
import TotalBuildPage from './pages/total-build/total-build'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/report" element={<ReportPage />} />
        <Route path="/info" element={<AddInfoPage />} />
        <Route path="/build" element={<TotalBuildPage />} />
      </Routes>  
    </>

  );
}

export default App;
