import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Error from "./pages/Error";
import Rootlayouts from "./layouts/Rootlayouts";
import { Journal } from "./pages/Journal";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Rootlayouts/>}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/products/:id" element={<ProductDetails />}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contacts/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
         <Route path="/journal" element={<Journal/>}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
        <Route path="*" element={<Error/>}></Route>
    </Route>
    </>
  )
);

function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App