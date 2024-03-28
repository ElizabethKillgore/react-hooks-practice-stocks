import React from "react";

function Stock( {stock, handleStock} ) {
  
  // This format works also, both formats work
  // const handleClick = () => {
  //   handleStock(stock)
  //   console.log(stock)
  // }
  
function handleClick() {
handleStock(stock)
}

  return (
    <div>
      <div className="card" >
        This is the stock component
        <div className="card-body" onClick={handleClick} >
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.ticker}:{stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
