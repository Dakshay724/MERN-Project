import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BusniessInfo from "./component/home/BusniessInfo"
import BussinessTable from './component/home/BussinessTable';
import Buyer from "./component/home/Buyer"
import BuyerTable from './component/home/BuyerTable';
import LoginCompo from "./component/home/LoginCompo"
import MainContainer from "./component/home/MainContainer"
import ProductInfo from "./component/home/Product"
import ProductTable from './component/home/ProductTable';
import PurchaseInfo from "./component/home/PurchaseInfo"
import SignCompo from "./component/home/SignCompo"
import SuplierInfo from "./component/home/SuplierInfo"
import SupplierTable from './component/home/SupplierTable';
import SideBar from './component/navigation/SideBar';
 

function App() {
  return (
   
<>

    <BrowserRouter>
    <SideBar/>
      <Routes>
          <Route path="/" element={<LoginCompo />} />
        <Route path="/signup" element={<SignCompo />} />
        <Route path ="/main" element = {<MainContainer/>}/>
        <Route path ="/product" element = {<ProductInfo/>}/>  
        <Route path ="/businesstable" element = {<BussinessTable/>}/>
        <Route path ="/businessinfo" element = {<BusniessInfo/>}/>
        <Route path ="/producttable" element = {<ProductTable/>}/>
        <Route path ="/purchase" element = {<PurchaseInfo/>}/>
        <Route path ="/suplier" element = {<SuplierInfo/>}/>
        <Route path ="/supliertable" element = {<SupplierTable/>}/>
        <Route path ="/buyer" element = {<Buyer/>}/>
        <Route path ="/buyertable" element = {<BuyerTable/>}/>  
      </Routes>
    </BrowserRouter>
    
    

</>
   
  
 
  )
}

export default App
