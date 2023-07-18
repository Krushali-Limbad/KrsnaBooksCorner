import "./App.css";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import SmallBooks from "./Components/SmallBooks";
import MediumBooks from "./Components/MediumBooks";
import BigBooks from "./Components/BigBooks";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from "./Components/ProductDetail";

import ShoppingCart from "./Components/ShoppingCart";

// const getProduct=()=>{
//   <div className="row">
//           {SampleProducts.map((element) => {
//             return (
//               <div className="col-md-3" key={element.id}>
//                 <ProductItem
//                   title={element.title}
//                   price={element.price}
//                   imageUrl={element.imageUrl}
//                 />
//               </div>
//             );
//           })}
//         </div>
// })
function App() {
  // console.log(id);

  // function BlogPost() {
  //   let { id } = useParams();
  //   return <div style={{ fontSize: "50px" }}>Now showing post {id}</div>;
  // }
  return (
    <>
      {/* <div>KRSNA BOOKS CORNER</div> */}

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Products />}></Route>
          {/* <Route exact path="/" element={<ShoppingCart />}></Route> */}
          <Route exact path="/smallbooks" element={<SmallBooks />}></Route>
          <Route exact path="/mediumbooks" element={<MediumBooks />}></Route>
          <Route exact path="/bigbooks" element={<BigBooks />}></Route>
          <Route exact path="/shoppingcart" element={<ShoppingCart />}></Route>
          {/* <Route exact path="/blogpost" element={<BlogPost />}></Route> */}
          <Route
            path=":userId"
            element={
              <ProductDetail
              // product={findProduct}
              // title={SampleProducts[id].title}
              // description={SampleProducts[id].description}
              // imageUrl={SampleProducts[id].imageUrl}
              // price={SampleProducts[id].price}
              />
            }
          ></Route>

          <Route path="* " element={<h1>NOt Found</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
