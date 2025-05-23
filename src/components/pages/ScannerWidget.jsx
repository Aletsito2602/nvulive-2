import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget({ scannerType = 'gold' }) {
  const container = useRef();

  // Definir los símbolos para cada tipo de scanner
  const getSymbol = () => {
    switch (scannerType) {
      case 'gold':
        return 'OANDA:XAUUSD';
      case 'abi':
        return 'CMCMARKETS:EURUSD';
      case 'pops':
        return 'FXCM:EURUSD';
      default:
        return 'OANDA:XAUUSD';
    }
  };

  // Definir los intervalos para cada tipo de scanner
  const getInterval = () => {
    switch (scannerType) {
      case 'gold':
        return '5';
      case 'abi':
        return '5';
      case 'pops':
        return '5';
      default:
        return '5';
    }
  };

  // Definir los indicadores personalizados para cada tipo de scanner
  const getCustomIndicators = () => {
    switch (scannerType) {
      case 'gold':
        return [
          { id: "siK56X3D@tv-scripting-101", options: { } }
        ];
      case 'abi':
        return [];
      case 'pops':
        return [
          { id: "pn1VHTbz", options: { } }
        ];
      default:
        return [];
    }
  };

  useEffect(() => {
    if (container.current) {
      // Limpiar el contenedor anterior
      container.current.innerHTML = '';

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    
    const widgetOptions = {
      "autosize": true,
      "symbol": getSymbol(),
      "interval": getInterval(),
        "timezone": "Etc/UTC",
        "theme": "dark",
      "style": "1",
      "locale": "es",
        "enable_publishing": false,
        "allow_symbol_change": true,
        "studies": getCustomIndicators(),
        "support_host": "https://www.tradingview.com",
        "width": "100%",
        "height": "100%",
        "save_image": true,
        "hideideas": false,
        "show_popup_button": true,
        "popup_width": "1000",
        "popup_height": "650"
      };

    script.innerHTML = JSON.stringify(widgetOptions);
    container.current.appendChild(script);
    }
  }, [scannerType]);

  return (
    <div 
      className="tradingview-widget-container" 
      ref={container} 
      style={{ 
        height: "100%", 
        width: "100%",
        position: "relative"
      }}
    />
  );
}

export default memo(TradingViewWidget); 