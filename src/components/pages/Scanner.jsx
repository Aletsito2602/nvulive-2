import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import TradingViewWidget from './ScannerWidget';

const PageContainer = styled.div`
  padding: 24px;
  min-height: calc(100vh - 64px);
  background: linear-gradient(135deg, #0f2027 0%, #2c5364 100%);
  position: relative;
  overflow: hidden;
`;

// Futuristic animated background layer
const FuturisticBg = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background: radial-gradient(ellipse at 20% 30%, rgba(0,188,212,0.12) 0%, transparent 70%),
              radial-gradient(ellipse at 80% 70%, rgba(0,255,247,0.10) 0%, transparent 70%),
              linear-gradient(120deg, rgba(0,150,136,0.08) 0%, transparent 100%);
  animation: bgMove 12s linear infinite alternate;
  @keyframes bgMove {
    0% { background-position: 0% 0%, 100% 100%, 0% 100%; }
    100% { background-position: 100% 100%, 0% 0%, 100% 0%; }
  }
`;

const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: rgb(255,255,255);
  margin-bottom: 10px;
`;

const ContentContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SidebarContainer = styled.div`
  background-color: rgb(24,24,24);
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 0;
  width: 160px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: row;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 16px;
    min-height: 160px;
  }
`;

const WidgetContainer = styled.div`
  background-color: rgb(24,24,24);
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  flex-grow: 1;
  height: calc(100vh - 150px);
  overflow: hidden;
`;

const ScannerLogosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  margin-top: 24px;
  @media (max-width: 768px) {
    flex-direction: row;
    gap: 32px;
    margin-top: 0;
  }
`;

const ScannerLogo = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  background: #181818;
  cursor: pointer;
  border: 2px solid transparent;
  transition: border-color 0.2s, transform 0.2s, opacity 0.2s;
  outline: none;
  opacity: 0.6;
  &:hover, &:focus {
    border-color: #00bcd4;
    transform: scale(1.07);
    opacity: 1;
  }
  &.active {
    border-color: #00bcd4;
    box-shadow: 0 4px 16px rgba(0,188,212,0.15);
    opacity: 1;
  }
  @media (max-width: 768px) {
    width: 90px;
    height: 90px;
  }
`;

const SectionTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: rgb(255,255,255);
  margin-bottom: 15px;
`;

const TabBarContainer = styled.div`
  padding: 0 24px;
  margin-bottom: 24px;
`;

const ComingSoonOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(8px) brightness(0.7);
  background: rgba(0,0,0,0.35);
  pointer-events: none;
`;

const ComingSoonText = styled.h2`
  color: #fff;
  font-size: 2.5rem;
  font-weight: 800;
  letter-spacing: 2px;
  text-shadow: 0 4px 24px #00fff7, 0 1px 8px #000;
  margin-bottom: 12px;
  background: linear-gradient(90deg, #00fff7 0%, #a259ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const scannerLogos = [
  {
    key: 'gold',
    src: '/images/scanner/Helios.png',
    alt: 'Helios Scanner',
    label: 'Helios'
  },
  {
    key: 'abi',
    src: '/images/scanner/Cronos.png',
    alt: 'Cronos Scanner',
    label: 'Cronos'
  },
  {
    key: 'pops',
    src: '/images/scanner/olympus.png',
    alt: 'Olympus Scanner',
    label: 'Olympus'
  }
];

const Scanner = () => {
  const { t } = useTranslation();
  const [activeScanner, setActiveScanner] = useState('gold');

  const handleScannerChange = (scanner) => {
    setActiveScanner(scanner);
  };

  return (
    <PageContainer>
      <FuturisticBg />
      <PageTitle>{t('sidebar.scanner')}</PageTitle>
      
      <ContentContainer>
        <SidebarContainer>
          <ScannerLogosContainer>
            {scannerLogos.map(scanner => (
              <div key={scanner.key} style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <ScannerLogo
                  src={scanner.src}
                  alt={scanner.alt}
                  className={activeScanner === scanner.key ? 'active' : ''}
                  tabIndex={0}
                  onClick={() => handleScannerChange(scanner.key)}
                  onKeyPress={e => { if (e.key === 'Enter') handleScannerChange(scanner.key); }}
                />
                <span style={{color:'#fff',marginTop:8,fontSize:15,fontWeight:500}}>{scanner.label}</span>
              </div>
            ))}
          </ScannerLogosContainer>
        </SidebarContainer>
        
        <WidgetContainer style={{position:'relative'}}>
          <ComingSoonOverlay>
            <ComingSoonText>Coming Soon</ComingSoonText>
          </ComingSoonOverlay>
          <TradingViewWidget scannerType={activeScanner} />
        </WidgetContainer>
      </ContentContainer>
    </PageContainer>
  );
};

export default Scanner; 