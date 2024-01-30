import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "./axios";
import "./App.css";
import "tailwindcss/tailwind.css";
import Card from "./homePage/Card";
import DesignerHeading from "./homePage/DesignerHeading";
import Footer from "./homePage/Footer";
import Info from "./homePage/Info";
import Loader from "./CustomJS/Loader";
import Navbar from "./homePage/Navbar";
import Taglines from "./homePage/Taglines";
import Zoom from "react-reveal/Zoom";
import AddProduct from "./Page4/AddProduct";
import EditProduct from "./Page4/EditProduct";
import PrivateRoute from "./HOC/PrivateRoute";
import Login from "./Page4/Login";
import ProductList from "./Page2/ProductList";
import MainProduct from "./Page3/MainProduct";
import Dashboard from "./Page4/Dashboard";
import FOF from "./fof/fof";
import { AdminContext } from "./context/AdminState";
import AdminNav from "./homePage/AdminNav";
import viewMore from "./images/file-search.svg";
import Blackhips from "./images/Kmimages/Blackhips.jpg"
import Naturalhips from "./images/Kmimages/NaturalHips.jpg"
import Blackkresin from "./images/Kmimages/BlackKresin.jpg"
import Bluedana from "./images/Kmimages/Bluedana.jpg"
import Milkyhips from "./images/Kmimages/Milkyhips.jpg"
import Naturalkresin from "./images/Kmimages/NaturalKresin.jpg"
import Rubber from "./images/Kmimages/Rubber.jpg"

function App() {
  const [products, setProducts] = useState([
    {
      "_id":"1",
      "image":{Blackhips}.Blackhips,
      "name":"Black HIPS",
      "category":"Dana"
    },
    {
      "_id":"2",
      "image":{Naturalkresin}.Naturalkresin,
      "name":"Natural K-Resin",
      "category":"Dana"
    },
    {
      "_id":"3",
      "image":{Milkyhips}.Milkyhips,
      "name":"Milky HIPS",
      "category":"Dana"
    },
    {
      "_id":"4",
      "image":{Naturalhips}.Naturalhips,
      "name":"Natural HIPS",
      "category":"Dana",
      "strength":467
    }, 
    {
      "_id":"7",
      "image":{Rubber}.Rubber,
      "name":"Recycled Rubber",
      "category":"Dana"
    },
    {
      "_id":"5",
      "image":{Bluedana}.Bluedana,
      "name":"Blue HIPS",
      "category":"Dana"
    },
    {
      "_id":"6",
      "image":{Blackkresin}.Blackkresin,
      "name":"Black K-Resin",
      "category":"Dana",
      "strength":467
    }
]);

  const [isDarkMode, setIsDarkMode] = useState(false);

  const { isModified } = useContext(AdminContext);

  const baseUrl = process.env.REACT_APP_API_URL;

  console.log(process.env.NODE_ENV);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const res = await axios.get(`/allproducts`);
  //     try {
  //       if (res.status === 200) {
  //         setProducts(res.data);
  //       }
  //     } catch (error) {
  //       console.log("error : ", error);
  //     }
  //   };
  //   // fetchProducts();

  //   var myProduct = {
  //     "id":1,
  //     "image":"https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=2079&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     "name":"Product name",
  //     "price":100,
  //     "category":"Dana"
  //   }

  //   setProducts([...products, myProduct]);
  // }, [isModified]);

  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, []);

  return (
    <div className={`App ${isDarkMode ? `dark` : null}`}>
      {/* <img src="localhost"></img> */}

      <Router>
        <Switch>
          {/* <Route exact path="/checkout">
            <h1>Checkout</h1>
          </Route> */}

          {/* page 4 */}

          {/* <PrivateRoute
            exact
            path="/dashboard"
            render={(props) => (
              <>
                <AdminNav
                  isDarkMode={isDarkMode}
                  setIsDarkMode={setIsDarkMode}
                />

                <Dashboard isDarkMode={isDarkMode} />
                <Footer />
              </>
            )}
          /> */}

          {/* <Route exact path="/login">
            <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            <Login />
            <Footer />
          </Route> */}
{/* 
          <PrivateRoute
            exact
            path="/addProduct"
            render={(props) => (
              <>
                <AdminNav
                  isDarkMode={isDarkMode}
                  setIsDarkMode={setIsDarkMode}
                />
                <AddProduct />
                <Footer />
              </>
            )}
          /> */}

          {/* <PrivateRoute
            exact
            path="/editProduct/:id"
            render={(props) => (
              <>
                <AdminNav
                  isDarkMode={isDarkMode}
                  setIsDarkMode={setIsDarkMode}
                />
                <EditProduct
                  isDarkMode={isDarkMode}
                  products={products}
                  setProducts={setProducts}
                  {...props}
                />
                <Footer />
              </>
            )}
          /> */}

          {/* </Route> */}
          {/* Page 2 */}
          {/* <Route
            path="/:category"
            exact
            render={(props) => (
              <>
                <ProductList
                  {...props}
                  isDarkMode={isDarkMode}
                  setIsDarkMode={setIsDarkMode}
                  products={products}
                />
              </>
            )}
          /> */}
          {/* Page 3 */}
          {/* <Route
            path="/:category/:ida"
            exact
            render={(props) => (
              <>
                <MainProduct
                  {...props}
                  isDarkMode={isDarkMode}
                  setIsDarkMode={setIsDarkMode}
                  products={products}
                  setProducts={setProducts}
                />
              </>
            )}
          /> */}
          {/* Main Page */}
          <Route path="/Kmpolymers" exact>
            <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            <div
              style={{
                width: "100%",
                zIndex: "-1",
              }}
            >
              {/* <CtaDecide /> */}
            </div>
            {/* <Header /> */}

            <DesignerHeading name="Our Products" />
            {products.length !== 0 ? (
              <Card isDarkMode={isDarkMode} products={products} />
            ) : (
              <Loader isDarkMode={isDarkMode} />
            )}

            {/* <DesignerHeading name="All Collections" />
            {products.length !== 0 ? (
              <Card isDarkMode={isDarkMode} products={products} />
            ) : (
              <Loader isDarkMode={isDarkMode} />
            )}
            <DesignerHeading name="Latest collections" />
            {products.length !== 0 ? (
              <Card isDarkMode={isDarkMode} products={products} />
            ) : (
              <Loader isDarkMode={isDarkMode} />
            )} */}
            {/* <DesignerHeading name="Featured Category" /> */}
            {/* <Card /> */}
            {/* <Grid /> */}
            {/* <DesignerHeading name="Latest Collection" /> */}
            {/* <Gallery /> */}
            <DesignerHeading name="Commitments" />
            <Taglines />
            {/* <DesignerHeading name="Testimonials" /> */}
            {/* <Testimonials /> */}
            {/* <Contact /> */}
            <DesignerHeading name="Contacts" />
            <Zoom>
              <Info />
            </Zoom>
            <Footer />
            {/* <Loader /> */}
          </Route>
          <Route component={FOF} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
