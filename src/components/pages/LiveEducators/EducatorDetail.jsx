import React from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import educatorsData from '../../../data/educatorsData'; // Ajustar ruta relativa
import { FaArrowLeft, FaInstagram, FaLinkedin, FaFacebookF, FaUserClock, FaWifi } from 'react-icons/fa';
import { useTranslation } from 'react-i18next'; // Importar hook

// --- Styled Components (Restaurados) --- 

const EducatorDetailContainer = styled.div`
  /* Estilos del contenedor si son necesarios */
  padding-bottom: 30px; 
`;

const BackLinkContainer = styled.div`
  padding: 0 24px 16px 24px; // Añadir padding lateral
  margin-bottom: 16px;
  border-bottom: 1px solid #e9ecef;
`;

const BackLink = styled(Link)`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: #666;
    text-decoration: none;
    font-size: 14px;
    &:hover { color: #333; }
`;

const ContentWrapper = styled.div`
    padding: 20px 24px 0 24px; // 20px arriba, 24px laterales, 0 abajo
`;

const StreamArea = styled.div`
  position: relative;
  padding-bottom: 56.25%; // 16:9
  height: 0;
  overflow: hidden;
  background-color: #000;
  border-radius: 8px;
  margin-bottom: 24px; // Espacio antes del link a favoritas

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const InfoSection = styled.div`
    background-color: white;
    padding: 24px;
    margin-top: 24px; 
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
`;
const EducatorName = styled.h1`
    font-size: 24px;
    margin: 0 0 8px 0; 
`;
const EducatorTitle = styled.p`
    font-size: 16px;
    color: #666;
    margin: 0; 
`;

// Link/Banner para Sesiones Favoritas
const FavoritesLink = styled(Link)`
  display: block;
  margin-bottom: 24px;
  padding: 24px 20px;
  background: rgb(0,150,136); /* Cyan principal */
  color: rgb(255,255,255);
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 16px rgba(0,150,136,0.15);
  text-decoration: none;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0.5px;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s, transform 0.1s;

  &:hover {
    background: rgb(0,200,180);
    color: rgb(0,0,0);
    box-shadow: 0 6px 20px rgba(0,200,180,0.18);
    transform: translateY(-2px);
  }
`;

const FavoritesTitle = styled.h2`
  font-size: 22px;
  margin: 0;
  font-weight: 700;
  color: inherit;
`;

// ProfileSection y sus componentes (adaptados de EducatorSessions)
const ProfileSection = styled.div`
  display: flex;
  gap: 24px;
  background-color: rgb(24,24,24);
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.12);
`;

const SocialLinksColumn = styled.div`
  flex: 0 0 auto; 
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  background-color: rgb(18,18,18);
  padding: 20px 15px;
  border-radius: 8px;
`;

const SocialIconLink = styled.a`
  color: rgb(0,150,136); 
  font-size: 20px;
  transition: color 0.2s ease;

  &:hover {
    color: rgb(0,200,180); 
  }
`;

const BioColumn = styled.div`
  flex: 1; 
`;

const BioHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  gap: 12px;
`;

// Renombrar StatusBadge a LanguageBadge y estilo actualizado
const LanguageBadge = styled.div`
  display: inline-flex; 
  align-items: center;
  gap: 5px;
  padding: 5px 10px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  color: rgb(255,255,255);
  background-color: rgb(0,150,136);
  border: none;
  text-transform: uppercase;
`;

const BioText = styled.p`
  font-size: 14px;
  color: rgb(158,158,158);
  line-height: 1.6;
  margin: 0;
  white-space: pre-wrap;
`;

// --- Componente --- 

const findEducatorById = (id) => {
  for (const category in educatorsData) {
    const educator = educatorsData[category].find(edu => edu.id === id);
    if (educator) return educator;
  }
  return null;
};

const EducatorDetail = () => {
  const { educatorId } = useParams();
  const { t } = useTranslation();
  const educator = findEducatorById(educatorId);

  if (!educator) {
    return (
        <div> 
            {/* Texto traducido */}
            <ContentWrapper>
               {/* Texto traducido */}
               <p>{t('educatorDetail.notFound')}</p>
            </ContentWrapper>
        </div>
    );
  }

  const liveEmbedSrc = educator.vimeoLiveEmbed || 'https://player.vimeo.com/video/821637631'; // Fallback
  const bioKey = `educatorsBio.${educator.id}`; 

  return (
    <EducatorDetailContainer> 
      {/* Eliminar BackLinkContainer y BackLink aquí, dejar solo el embed y la info */}
      <ContentWrapper>
        <StreamArea>
          <iframe
            src={liveEmbedSrc}
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            title="Live Stream"
          />
        </StreamArea>
        {/* Aquí sigue el resto de la info del educador, bio, etc. */}
        {/* Enlace a Sesiones Favoritas */}
        <FavoritesLink to={`/educadores/${educatorId}/sesiones`}>
            {/* Texto traducido */}
            <FavoritesTitle>{t('educatorDetail.favoriteSessions')}</FavoritesTitle>
        </FavoritesLink>
        
        {/* Sección de Biografía y Redes Sociales */}
         <ProfileSection>
            <SocialLinksColumn>
                {educator.socialLinks?.instagram && educator.socialLinks.instagram !== '#' && (
                    <SocialIconLink href={educator.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </SocialIconLink>
                )}
                {educator.socialLinks?.linkedin && educator.socialLinks.linkedin !== '#' && (
                    <SocialIconLink href={educator.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </SocialIconLink>
                )}
                {educator.socialLinks?.facebook && educator.socialLinks.facebook !== '#' && (
                    <SocialIconLink href={educator.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                        <FaFacebookF />
                    </SocialIconLink>
                )}
                {/* Añadir condicional por si no hay ningún link */}
                {(!educator.socialLinks || 
                  (educator.socialLinks.instagram === '#' && educator.socialLinks.linkedin === '#' && educator.socialLinks.facebook === '#')) &&
                   <span style={{fontSize: '12px', color: '#6c757d'}}>N/A</span> }
            </SocialLinksColumn>
            <BioColumn>
                <BioHeader>
                    <EducatorName>{educator.name}</EducatorName>
                    {/* Usar LanguageBadge */}
                    <LanguageBadge>
                        {/* Mostrar idioma */}
                        {educator.language || 'N/A'}
                    </LanguageBadge>
                </BioHeader>
                <BioText>{t(bioKey, educator.description || t('common.bioNotAvailable'))}</BioText>
            </BioColumn>
         </ProfileSection>
      </ContentWrapper>
    </EducatorDetailContainer>
  );
};

export default EducatorDetail; 