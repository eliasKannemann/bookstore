import React from "react";
import Hero from "../components/Hero";
import ItemListContainer from "../components/ItemListContainer";
import NewArrivals from "../components/NewArrivals";

function Main() {
  return (
    <div className="">
      <Hero />
      <ItemListContainer greeting={"products"} />
      <ItemListContainer greeting={"Outlet"} />
      <NewArrivals />
      <ItemListContainer greeting={"New Arrivals"} />
    </div>
  );
}

export default Main;
