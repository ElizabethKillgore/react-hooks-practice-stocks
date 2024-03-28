import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio, setPortfolio, stock, handleDeleteStock }) {
  

  return (
    <div>
      <h2>My Portfolio</h2>
      This is the portfolio container
      <ul className="Portfolio">
        {portfolio.map((stock) => (
          <Stock
            key={stock.id}
            stock={stock}
            handleStock={handleDeleteStock}
          />
        ))}
      </ul>
    </div>
  )
}

export default PortfolioContainer;
