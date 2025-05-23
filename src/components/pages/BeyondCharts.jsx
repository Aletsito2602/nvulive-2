import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { FaPlay, FaCalendarAlt, FaUsers, FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const PageContainer = styled.div`
  padding: 0;
  max-width: 100%;
  margin: 0 auto;
  min-height: 100vh;
  background: #000;
`;

const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  background: url('/images/beyondnewlogo.jpg') center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0;
  padding: 0;
  @media (max-width: 768px) {
    height: 90px;
  }
`;

const BackButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  background: rgba(0,0,0,0.5);
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0,0,0,0.8);
  }
`;

const BannerContent = styled.div`
  text-align: center;
  color: white;
  padding: 20px;
  max-width: 800px;
`;

const ChannelTitle = styled.h1`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 15px;
  background: linear-gradient(90deg, #00bcd4 0%, #009688 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ChannelDescription = styled.p`
  font-size: 18px;
  max-width: 600px;
  margin: 0 auto;
  color: #ccc;
  line-height: 1.6;
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 0px;
  padding-right: 0;
  @media (max-width: 768px) {
    padding: 0 12px;
  }
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 40px;
`;

const StatCard = styled.div`
  background: #1a1a1a;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  border: 1px solid rgba(255,255,255,0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(0,150,136,0.3);
  }

  h3 {
    color: #888;
    font-size: 14px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  p {
    color: white;
    font-size: 24px;
    font-weight: 600;
  }
`;

const SectionTitle = styled.h2`
  color: white;
  font-size: 24px;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid rgba(0,150,136,0.2);
  padding-top: 24px;
  @media (max-width: 768px) {
    padding-top: 16px;
  }
`;

const SessionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const SessionCard = styled.div`
  background: #1a1a1a;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid rgba(255,255,255,0.1);
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    border-color: rgba(0,150,136,0.3);
  }
`;

const ThumbnailContainer = styled.div`
  position: relative;
  padding-top: 56.25%;
  background: #000;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.3);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::after {
    opacity: 1;
  }
`;

const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 48px;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 2;

  ${SessionCard}:hover & {
    opacity: 1;
  }
`;

const ThumbnailImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardBody = styled.div`
  padding: 15px;
`;

const SessionTitle = styled.h3`
  color: white;
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4;
`;

const SessionDate = styled.p`
  color: #888;
  font-size: 14px;
  margin: 5px 0 0 0;
`;

const VideoContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  background: #000;
  border-radius: 8px;
  margin-bottom: 20px;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const LoadingMessage = styled.div`
  color: white;
  text-align: center;
  padding: 20px;
  font-size: 18px;
`;

const ErrorMessage = styled.div`
  color: #f44336;
  text-align: center;
  padding: 20px;
  font-size: 18px;
`;

const NoDataMessage = styled.div`
  color: #888;
  text-align: center;
  padding: 20px;
  font-size: 16px;
`;

const NextCallContainer = styled.div`
  width: 100%;
  background: #111;
  color: #fff;
  padding: 32px 0 16px 0;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 0.5px;
`;

const BeyondCharts = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedVimeoId, setSelectedVimeoId] = useState(null);
  const VIMEO_USER_ID = '221550365';
  const FOLDER_ID = '24833856';

  useEffect(() => {
    loadSessions();
  }, []);

  const loadSessions = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/.netlify/functions/vimeo-sessions?userId=${VIMEO_USER_ID}&folderId=${FOLDER_ID}`);
      if (!response.ok) {
        throw new Error('Failed to load sessions');
      }
      const data = await response.json();
      setSessions(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageContainer>
      <BannerContainer />
      <ContentContainer>
        {selectedVimeoId && (
          <VideoContainer>
            <iframe 
              src={`https://player.vimeo.com/video/${selectedVimeoId}?autoplay=1`} 
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture" 
              allowFullScreen
              title="Vimeo video player">
            </iframe>
          </VideoContainer>
        )}

        <SectionTitle>Últimas Sesiones</SectionTitle>

        {loading && <LoadingMessage>{t('beyondCharts.loading', 'Cargando sesiones...')}</LoadingMessage>}
        {error && <ErrorMessage>{t('beyondCharts.error', error || 'No se pudieron cargar las sesiones.')}</ErrorMessage>}
        
        {!loading && !error && (
          <SessionsGrid>
            {sessions.length > 0 ? (
              sessions.map(session => (
                <SessionCard key={session.vimeoId || session.id} onClick={() => setSelectedVimeoId(session.vimeoId)}>
                  <ThumbnailContainer>
                    <ThumbnailImage src={session.thumbnailUrl || '/images/placeholder_course.jpg'} alt={session.title} />
                    <PlayButton>
                      <FaPlay />
                    </PlayButton>
                  </ThumbnailContainer>
                  <CardBody>
                    <SessionTitle>{session.title || t('beyondCharts.noTitle', 'Video sin título')}</SessionTitle>
                    <SessionDate>
                      {session.createdAt ? new Date(session.createdAt).toLocaleDateString() : 'Fecha no disponible'}
                    </SessionDate>
                  </CardBody>
                </SessionCard>
              ))
            ) : (
              <NoDataMessage>{t('beyondCharts.noSessions', 'No hay sesiones disponibles.')}</NoDataMessage>
            )}
          </SessionsGrid>
        )}
      </ContentContainer>
    </PageContainer>
  );
};

export default BeyondCharts; 