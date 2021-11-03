import React from "react";
import PageTitle from "../Components/PageTitle/PageTitle";

function ShoppingList() {
  return (
    <main className="page-container">
      <PageTitle text="My Shopping List" />
      <article className="shopping-list-container">
        <p>Shopping list feature coming soon!</p>
        <p>
          We’re working really hard to bring you a delightful grocery shopping
          experience so please bear with us!
        </p>
        <p className="bear">🐻</p>
      </article>
    </main>
  );
}

export default ShoppingList;
