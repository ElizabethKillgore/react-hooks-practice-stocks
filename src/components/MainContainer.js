import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [portfolio, setPortfolio] = useState([])
  const [sortBy, setSortBy] = useState("")
  const [filterBy, setFilterBy] = useState("")
   
  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((r) => r.json())
      .then((stocks) => (setStocks(stocks)))
      .catch(err => alert(err))
  }, [])
  console.log("Hi:", stocks)

  function handleAddStock(boughtStock) {
    setPortfolio([...portfolio, boughtStock])
   }

   // This format works also instead of below, both formats work
  //  const handleDeleteStock = (deletedStock) => {
  //     setPortfolio(portfolio => portfolio.filter(stock => stock.id !== deletedStock.id))
  //  }       
  function handleDeleteStock(deletedStock) {
 setPortfolio(portfolio => portfolio.filter(stock => stock.id !== deletedStock.id))
 }

  const handleToggleSort = (e) => {
    setSortBy(e.target.value)
  }

  const handleFilter = (e) => {
    setFilterBy(e.target.value)
  }

return (
    <div>
      <SearchBar sortBy={sortBy} handleToggleSort={handleToggleSort} handleFilter={handleFilter} filterBy={filterBy}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} setStocks={setStocks} handleAddStock={handleAddStock} sortBy={sortBy} filterBy={filterBy}/>
        </div>
        <div className="col-4">
          <PortfolioContainer  portfolio={portfolio} setPortfolio={setPortfolio} handleDeleteStock={handleDeleteStock}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
