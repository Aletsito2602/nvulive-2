import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaInstagram, FaLinkedin, FaFacebookF, FaUserClock, FaWifi } from 'react-icons/fa';
import educatorsData from '../../../data/educatorsData'; // Importar datos para buscar IDs

// --- Styled Components ---
const EducatorSessionsContainer = styled.div`
  padding-left: 0;
  padding-right: 0;
  padding-bottom: 30px;
`;

const BannerImage = styled.img`
  width: 100%;
  height: 360px;
  object-fit: cover;
  display: block;
  margin-bottom: -20px;
  position: relative; 
  z-index: 0;
  @media (max-width: 600px) {
    height: 90px;
  }
`;

const ContentWrapper = styled.div`
    padding: 0;
    position: relative;
    z-index: 1; 
`;

const ProfileSection = styled.div`
  display: flex;
  gap: 24px;
  background-color: rgb(24,24,24);
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.12);
  margin: 0 24px 32px 24px;
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
  &:hover { color: rgb(0,200,180); }
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

const EducatorName = styled.h2`
  font-size: 22px;
  font-weight: 600;
  margin: 0;
  color: rgb(255,255,255);
`;

const StatusBadge = styled.div`
  display: inline-flex; 
  align-items: center;
  gap: 5px;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  color: rgb(255,255,255);
  background-color: ${props => props.$isLive ? 'rgb(0,150,136)' : 'rgb(48,48,48)'};
`;

const BioText = styled.p`
  font-size: 14px;
  color: rgb(158,158,158);
  line-height: 1.6;
  margin: 0;
`;

const SessionsSection = styled.div`
  padding: 0 24px;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: rgb(0,150,136);
  margin-bottom: 20px;
`;

const SessionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
`;

const SessionCard = styled.div`
  background-color: rgb(24,24,24);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,150,136,0.08);
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  &:hover {
      transform: translateY(-4px);
      box-shadow: 0 4px 16px rgba(0, 150, 136, 0.18);
  }
`;

const SessionThumbnail = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
  display: block;
`;

const SessionInfo = styled.div`
  padding: 12px;
`;

const SessionTitle = styled.h3`
  font-size: 15px;
  font-weight: 600;
  margin: 0 0 6px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgb(255,255,255);
`;

const SessionEducator = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: rgb(158,158,158);
`;

const EducatorAvatarSmall = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

const LoadingMessage = styled.p`
  color: rgb(158,158,158);
  text-align: center;
  padding: 20px;
`;
const ErrorMessage = styled.p`
  color: red;
  text-align: center;
  padding: 20px;
`;
const NoDataMessage = styled.p`
  color: rgb(158,158,158);
  text-align: center;
  padding: 20px;
`;

// Helper para buscar educador por ID (similar al de EducatorDetail)
const findEducatorById = (id) => {
  for (const category in educatorsData) {
    const educator = educatorsData[category].find(edu => edu.id === id);
    if (educator) return educator;
  }
  return null;
};

// --- Componente ---
const EducatorSessions = () => {
  const { educatorId } = useParams();
  const educator = findEducatorById(educatorId); // Buscar datos del educador

  const [sessions, setSessions] = useState([]);
  const [selectedVimeoId, setSelectedVimeoId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Obtener el nombre del educador para el enlace de vuelta
  const educatorName = educator ? educator.name : educatorId;

  useEffect(() => {
    // Solo intentar buscar si encontramos al educador y tiene IDs de Vimeo
    if (!educator || !educator.vimeoUserId || !educator.vimeoFolderId) {
      console.log('Educador no encontrado o sin configuración de Vimeo (userId/folderId).');
      setError('Este educador no tiene sesiones configuradas.');
      setLoading(false);
      return; // No hacer la llamada a la API
    }

    const fetchEducatorSessions = async () => {
      setLoading(true);
      setError(null);
      
      // Usar IDs del educador encontrado
      const userId = educator.vimeoUserId;
      const folderId = educator.vimeoFolderId;
      const backendUrl = `/.netlify/functions/vimeo-sessions?userId=${userId}&folderId=${folderId}`;

      try {
        console.log(`Fetching sessions from backend: ${backendUrl}`);
        const response = await fetch(backendUrl);
        
        if (!response.ok) {
          let errorDetails = 'Error desconocido del servidor';
          try {
            const errorData = await response.json();
            errorDetails = errorData.details || errorData.error || `Status: ${response.status}`;
          } catch (e) { 
             errorDetails = `Status: ${response.status}`;
          }
          throw new Error(`Error al cargar sesiones: ${errorDetails}`);
        }

        const data = await response.json();
        setSessions(data);
        // Si no hay sesiones, mostrar mensaje específico en lugar de error
        if (data.length === 0) {
          // No establecer error, el renderizado manejará el array vacío
        }

      } catch (err) {
        console.error("Error fetching sessions from backend:", err);
        setError(err.message || "No se pudieron cargar las sesiones.");
      } finally {
        setLoading(false);
      }
    };

    fetchEducatorSessions();

  }, [educator]); // Depender del objeto educator completo

  // Mensaje si el educador no existe en los datos
  if (!educator && !loading) {
      return (
          <EducatorSessionsContainer>
            <ErrorMessage>Educador no encontrado.</ErrorMessage>
            <Link to="/educadores">Volver</Link>
          </EducatorSessionsContainer>
      );
  }

  // Preparar datos para la plantilla
  const isLive = educator.status === 'En vivo';
  // TODO: Filtrar sesiones basadas en activeFilter ('ultimas'/'pasadas') si es necesario
  const sessionsToShow = sessions; 

  // --- Determinar la imagen del banner ---
  // Usar la imagen de portada del educador si existe, sino la imagen general
  const bannerSrc = educator.coverImageFilename 
                    ? `/images/PORTADAS/${educator.coverImageFilename}` 
                    : '/images/banner.png'; // Fallback a la imagen genérica si no hay de portada

  // Función para manejar errores de carga de imagen
  const handleImageError = (e) => {
    console.error('Error loading banner image:', e);
    console.log('Attempted to load:', bannerSrc);
    e.target.src = '/images/banner.png'; // Fallback a la imagen genérica
  };

  // Efecto para precargar la imagen
  useEffect(() => {
    if (educator.coverImageFilename) {
      const img = new Image();
      img.src = bannerSrc;
      img.onload = () => {
        console.log('Banner image loaded successfully:', bannerSrc);
      };
      img.onerror = () => {
        console.error('Failed to load banner image:', bannerSrc);
      };
    }
  }, [educator.coverImageFilename]);

  return (
    <EducatorSessionsContainer>
       {/* Usar la imagen correcta para el banner con manejo de errores */}
       <BannerImage 
         src={bannerSrc} 
         alt={`${educator.name} banner`} 
         onError={handleImageError}
         crossOrigin="anonymous"
       />

       <ContentWrapper>
            {/* Sección Perfil */}
            <ProfileSection>
                <BioColumn>
                    <BioHeader>
                        <EducatorName>{educator.name}</EducatorName>
                        <StatusBadge $isLive={isLive}>
                            {isLive ? <FaWifi /> : <FaUserClock />}
                            {educator.status}
                        </StatusBadge>
                    </BioHeader>
                    <BioText>{educator.description || 'Biografía no disponible.'}</BioText>
                </BioColumn>
            </ProfileSection>

            {/* Sección Sesiones */}
            <SessionsSection>
                <SectionTitle>Sesiones</SectionTitle>
                
                {/* --- MOVER EL REPRODUCTOR AQUÍ --- */}
                {selectedVimeoId && (
                    <div style={{ marginBottom: '30px', position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', backgroundColor:'#000', borderRadius: '8px' }}>
                    <iframe 
                        src={`https://player.vimeo.com/video/${selectedVimeoId}?autoplay=1`} 
                        frameBorder="0" 
                        allow="autoplay; fullscreen; picture-in-picture" 
                        allowFullScreen
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                        title="Vimeo video player">
                        </iframe>
                    </div>
                )}
                {/* --- FIN DEL REPRODUCTOR MOVIDO --- */}

                {/* Mensajes de carga/error y Grid de Sesiones */}
                {loading && <LoadingMessage>Cargando sesiones...</LoadingMessage>}
                {error && error !== 'Este educador no tiene sesiones configuradas.' && <ErrorMessage>{error}</ErrorMessage>}
                
                {!loading && (
                    <SessionsGrid>
                        {sessionsToShow.length > 0 ? (
                        sessionsToShow.map(session => (
                            <SessionCard key={session.id} onClick={() => setSelectedVimeoId(session.vimeoId)}>
                                <SessionThumbnail src={session.thumbnailUrl || `https://vumbnail.com/${session.vimeoId}.jpg`} alt={session.title} />
                                <SessionInfo>
                                    <SessionTitle>{session.title || 'Video sin título'}</SessionTitle>
                                    <SessionEducator>
                                        <EducatorAvatarSmall 
                                            src={educator.profileImageFilename ? `/images/perfil/${educator.profileImageFilename}` : '/images/placeholder.jpg'} 
                                            alt={educator.name}
                                        />
                                        {educator.name} NVU
                                    </SessionEducator>
                                </SessionInfo>
                            </SessionCard>
                        ))
                        ) : (
                        <NoDataMessage>{error === 'Este educador no tiene sesiones configuradas.' ? error : 'No hay sesiones disponibles.'}</NoDataMessage>
                        )}
                    </SessionsGrid>
                )}

            </SessionsSection>
       </ContentWrapper>
    </EducatorSessionsContainer>
  );
};

export default EducatorSessions; 