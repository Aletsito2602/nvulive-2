import React from 'react';
import styled from 'styled-components';
import EducatorCard from './EducatorCard';
import { useTranslation } from 'react-i18next';

const Container = styled.div`
  padding: 24px;
  background-color: rgb(0,0,0);
`;

const Title = styled.h2`
  font-size: 24px;
  color: rgb(255,255,255);
  margin-bottom: 24px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 16px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const NoEducatorsMessage = styled.p`
  color: rgb(158,158,158);
  text-align: center;
  padding: 20px;
  font-size: 16px;
`;

const EducatorsContainer = ({ educators, title }) => {
  const { t } = useTranslation();

  return (
    <Container>
      {title && <Title>{title}</Title>}
      <Grid>
        {educators && educators.length > 0 ? (
          educators.map(educator => (
            <EducatorCard key={educator.id} educator={educator} />
          ))
        ) : (
          <NoEducatorsMessage>{t('educators.noEducatorsAvailable')}</NoEducatorsMessage>
        )}
      </Grid>
    </Container>
  );
};

export default EducatorsContainer; 