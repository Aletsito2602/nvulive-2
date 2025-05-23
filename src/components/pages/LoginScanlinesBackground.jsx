import React from 'react';
import styled, { keyframes } from 'styled-components';

const move = keyframes`
  0% { background-position-y: 0; }
  100% { background-position-y: 20px; }
`;

const Scanlines = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  background: repeating-linear-gradient(
    to bottom,
    rgba(0,255,255,0.08) 0px,
    rgba(0,255,255,0.08) 1px,
    transparent 1px,
    transparent 20px
  );
  animation: ${move} 2s linear infinite;
`;

const LoginScanlinesBackground = () => <Scanlines />;

export default LoginScanlinesBackground; 