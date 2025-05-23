import React, { useEffect, useRef } from 'react';

const TradingViewNativeChart = ({ symbol = 'OANDA:XAUUSD', interval = '15' }) => {
  const chartContainerRef = useRef(null);

  useEffect(() => {
    // Cargar el script de la librería si no está cargado
    if (!window.TradingView) {
      const script = document.createElement('script');
      script.src = '/charting_library/charting_library.js';
      script.onload = createWidget;
      document.body.appendChild(script);
    } else {
      createWidget();
    }

    function createWidget() {
      if (window.TradingView && window.TradingView.widget) {
        new window.TradingView.widget({
          symbol,
          interval,
          container_id: chartContainerRef.current.id,
          library_path: '/charting_library/',
          locale: 'es',
          theme: 'Dark',
          autosize: true,
        });
      }
    }
    // Limpieza opcional
    return () => {
      if (chartContainerRef.current) {
        chartContainerRef.current.innerHTML = '';
      }
    };
  }, [symbol, interval]);

  return (
    <div
      id="tv_chart_container"
      ref={chartContainerRef}
      style={{ width: '100%', height: '600px' }}
    />
  );
};

export default TradingViewNativeChart; 