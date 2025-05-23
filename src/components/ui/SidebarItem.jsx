import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ItemLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  color: ${(props) => (props.$isActive ? 'rgb(0,150,136)' : 'rgb(255,255,255)')};
  text-decoration: none;
  font-weight: ${(props) => (props.$isActive ? '600' : '400')};
  transition: all 0.2s ease;
  border-left: 3px solid ${(props) => (props.$isActive ? 'rgb(0,150,136)' : 'transparent')};
  background-color: ${(props) => (props.$isActive ? 'rgba(0,150,136,0.08)' : 'transparent')};
  
  &:hover {
    background-color: rgba(0,150,136,0.12);
    color: rgb(0,150,136);
    border-left-color: rgb(0,150,136);
  }
`;

const IconWrapper = styled.div`
  margin-right: ${props => props.$isCollapsed ? '0' : '12px'};
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  min-width: 24px;
  transition: margin-right 0.3s ease;
`;

const ItemLabel = styled.span`
  opacity: ${props => props.$isCollapsed ? '0' : '1'};
  transition: opacity 0.2s ease 0.1s;
  white-space: nowrap;
  color: rgb(158,158,158);
`;

const SidebarItem = ({ to, icon, label, isActive, isCollapsed, onClick }) => {
  return (
    <ItemLink to={to} $isActive={isActive} title={label} onClick={onClick}>
      <IconWrapper $isCollapsed={isCollapsed}>{icon}</IconWrapper>
      <ItemLabel $isCollapsed={isCollapsed}>{label}</ItemLabel>
    </ItemLink>
  );
};

export default SidebarItem;