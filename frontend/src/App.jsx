import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import LoginSignup from "./Pages/LoginSignup";
import Cart from "./Pages/Cart";


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/mens" element={<ShopCategory category="men" />} />
        <Route path="/women" element={<ShopCategory category="women" />} />
        <Route path="/kids" element={<ShopCategory category="kids" />} />
        <Route path = "/product" element={<Product/>}>
        <Route path =":productId" element={<Product/>}></Route>
        </Route>
        <Route path ='/cart' element={<Cart/>}/>
        <Route path = '/login' element={<LoginSignup/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;