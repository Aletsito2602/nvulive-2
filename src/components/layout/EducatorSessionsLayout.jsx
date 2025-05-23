import React, { useState, useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const SIDEBAR_WIDTH = 250;
const SIDEBAR_WIDTH_COLLAPSED = 70;
const HEADER_HEIGHT = '64px';
const MOBILE_BREAKPOINT = '991px';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const SidebarOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 800;
  opacity: ${props => props.$isOpen ? 1 : 0};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  display: none;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    display: block;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  min-width: 0;
  padding-top: 0;
  margin-left: ${props => props.$isSidebarCollapsed ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH}px;
  transition: margin-left 0.3s ease;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    margin-left: 0;
  }
`;

const MainContent = styled.main`
  flex: 1;
  padding: 0; // Sin padding lateral
  background-color: rgb(0,0,0);
  overflow-y: auto;
  min-width: 0;
  margin-top: ${HEADER_HEIGHT};
`;

const EducatorSessionsLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDesktopCollapsed, setIsDesktopCollapsed] = useState(false);
  const location = useLocation();

  const handleToggleSidebar = () => {
    const isMobile = window.innerWidth <= parseInt(MOBILE_BREAKPOINT);
    if (isMobile) {
      setIsSidebarOpen(prev => !prev);
    } else {
      setIsDesktopCollapsed(prev => !prev);
      setIsSidebarOpen(true);
    }
  };

  const handleCloseSidebar = () => {
    const isMobile = window.innerWidth <= parseInt(MOBILE_BREAKPOINT);
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    handleCloseSidebar();
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= parseInt(MOBILE_BREAKPOINT);
      if (!isMobile) {
        setIsSidebarOpen(true);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <LayoutContainer>
      <Header onToggleSidebar={handleToggleSidebar} isSidebarOpen={isSidebarOpen} />
      <Sidebar 
        isOpen={isSidebarOpen} 
        isCollapsed={isDesktopCollapsed}
        onClose={handleCloseSidebar} 
        onToggleCollapse={handleToggleSidebar}
      />
      <SidebarOverlay $isOpen={isSidebarOpen} onClick={handleCloseSidebar} />
      <ContentWrapper $isSidebarCollapsed={isDesktopCollapsed}>
        <MainContent>{children}</MainContent>
      </ContentWrapper>
    </LayoutContainer>
  );
};

export default EducatorSessionsLayout; 