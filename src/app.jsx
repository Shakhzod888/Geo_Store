import React from "react";
import Web from "./components/web";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllProducts from "./components/allProducts/allProducts";
import ChooseProduct from "./components/chooseProduc/chooseProduct";

export default class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Web />} />
            <Route path="/allProducts" element={<AllProducts />} />
            <Route
              path={`/allProducts/showChosen`}
              element={<ChooseProduct />}
            />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
