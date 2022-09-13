import React, { useEffect, useRef, useState } from "react";
import TradingViewWidget, { Themes } from "react-tradingview-widget";

const TradingChart = () => {
  const tradingRef = useRef(null);
  const [symbol, setSymbol] = useState("AAPL");

  useEffect(() => {
    console.log(tradingRef.current.props.symbol);
  }, []);

  console.log(symbol);

  return (
    <TradingViewWidget
      symbol={symbol}
      theme={Themes.LIGHT}
      locale="en"
      ref={tradingRef}
    />
  );
};
export default TradingChart;
