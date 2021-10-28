import React from "react";
import PageTitle from "../Components/PageTitle/PageTitle";

function ShoppingList() {
  return (
    <div>
      <PageTitle text="My Shopping List" />
      <div className="shopping-list-container">
        <p>Shopping list feature coming soon!</p>
        <p>
          We’re working really hard to bring you a delightful grocery shopping
          experience so please bear with us!
        </p>
        <p className="bear">🐻</p>
      </div>
    </div>
  );
}

export default ShoppingList;
