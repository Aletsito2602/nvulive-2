import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

// Styled Components (puedes moverlos a un archivo .styles.js si prefieres)
const PageContainer = styled.div`
  padding: 24px;
  max-width: 800px;
  margin: 20px auto;
  background-color: rgb(0,0,0);
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 255, 255, 0.04);
  border: 1.5px solid rgba(0,255,255,0.08);
`;

const PageTitle = styled.h1`
  font-size: 28px;
  color: rgb(255,255,255);
  font-weight: 700;
  margin-bottom: 24px;
  letter-spacing: 0.01em;
`;

const ProfileSection = styled.section`
  margin-bottom: 30px;
  background: rgb(24,24,24);
  border-radius: 12px;
  padding: 24px;
  border: 1px solid rgba(0,255,255,0.08);
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  color: rgb(0,150,136);
  font-weight: 600;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(0,255,255,0.08);
`;

const DataRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-size: 16px;
`;

const DataLabel = styled.span`
  font-weight: 500;
  color: rgb(255,255,255);
  width: 120px;
  flex-shrink: 0;
`;

const DataValue = styled.span`
  color: rgb(158,158,158);
  flex-grow: 1;
  word-break: break-all;
`;

const InputField = styled.input`
  padding: 12px 16px;
  border: 1.5px solid rgb(40,40,40);
  border-radius: 10px;
  font-size: 16px;
  color: rgb(255,255,255);
  background: rgb(18,18,18);
  flex-grow: 1;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    outline: none;
    border-color: rgb(0,150,136);
    box-shadow: 0 0 0 2px rgba(0,255,255,0.12);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-top: 24px;
`;

const Button = styled.button`
  padding: 12px 24px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;

  &:active {
    transform: translateY(1px);
  }
`;

const PrimaryButton = styled(Button)`
  background: linear-gradient(90deg, #00fff7 0%, #00bcd4 100%);
  color: rgb(0,0,0);

  &:hover {
    background: linear-gradient(90deg, #00e6e0 0%, #00acc1 100%);
  }

  &:disabled {
    background: rgb(40,40,40);
    color: rgb(158,158,158);
    cursor: not-allowed;
    transform: none;
  }
`;

const SecondaryButton = styled(Button)`
  background: rgb(40,40,40);
  color: rgb(255,255,255);

  &:hover {
    background: rgb(50,50,50);
  }
`;

const LogoutButton = styled(Button)`
  background: rgb(255,59,48);
  color: rgb(255,255,255);
  padding: 16px 36px;

  &:hover {
    background: rgb(255,69,58);
  }
`;

const JournalPlaceholder = styled.div`
  padding: 24px;
  background: rgb(18,18,18);
  border: 1px dashed rgba(0,255,255,0.2);
  border-radius: 12px;
  text-align: center;
  color: rgb(158,158,158);
  margin-top: 16px;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 16px;
  margin-top: 24px;
`;

const LogoutRow = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 32px;
  padding-bottom: 32px;
`;

const UserProfile = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  
  // Datos de ejemplo - Reemplazar con datos reales de Firebase Auth/Firestore
  const [userData, setUserData] = useState({
    id: 'N/A',
    name: 'Usuario Ejemplo',
    email: 'usuario@ejemplo.com',
  });
  
  // Estado temporal para los cambios durante la edición
  const [editData, setEditData] = useState({});

  // Cargar datos del usuario al montar (ej. desde localStorage o Firebase)
  useEffect(() => {
    // Aquí iría la lógica para cargar datos reales, por ahora usamos los de ejemplo
    // Podrías intentar cargar desde localStorage como en el Header:
    const storedData = localStorage.getItem('nvuUserData');
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        setUserData({
          id: parsedData.id || 'N/A',
          name: parsedData.name || 'Usuario',
          email: parsedData.email || ''
        });
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, []);

  const handleEditToggle = () => {
    if (isEditing) {
      // Cancelar edición, revertir cambios
      setEditData({});
    } else {
      // Iniciar edición, copiar datos actuales al estado de edición
      setEditData({ name: userData.name, email: userData.email });
    }
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveChanges = () => {
    // Aquí iría la lógica para guardar los datos en Firebase Auth/Firestore
    console.log("Guardando cambios:", editData);
    // Por ahora, solo actualizamos el estado local
    setUserData(prevUserData => ({ ...prevUserData, ...editData }));
    setIsEditing(false);
    // Podrías actualizar localStorage aquí también si lo usas
    // localStorage.setItem('nvuUserData', JSON.stringify(editData));
    alert(t('profile.saveSuccess', 'Perfil actualizado con éxito.')); 
  };

  const handleGoToJournal = () => {
    navigate('/trading-journal');
  };

  const handleLogout = () => {
    // Limpiar datos de usuario
    localStorage.removeItem('nvuUserData');
    // Redirigir al login
    navigate('/login');
  };

  return (
    <PageContainer>
      <PageTitle>{t('profile.title', 'Mi Perfil')}</PageTitle>

      <ProfileSection>
        <SectionTitle>{t('profile.personalInfo', 'Información Personal')}</SectionTitle>
        
        <DataRow>
          <DataLabel>{t('profile.userIdLabel', 'ID Usuario:')}</DataLabel>
          <DataValue>{userData.id}</DataValue>
        </DataRow>

        <DataRow>
          <DataLabel>{t('profile.nameLabel', 'Nombre:')}</DataLabel>
          {isEditing ? (
            <InputField 
              type="text" 
              name="name" 
              value={editData.name || ''}
              onChange={handleInputChange} 
            />
          ) : (
            <DataValue>{userData.name}</DataValue>
          )}
        </DataRow>

        {/* Campo de email eliminado por requerimiento */}

        {/* Añadir más campos si es necesario */}

      </ProfileSection>

      <ButtonRow>
        {/* Botón de editar perfil removido por requerimiento */}
      </ButtonRow>
      <LogoutRow>
        <LogoutButton onClick={handleLogout}>{t('profile.logoutButton', 'Cerrar Sesión')}</LogoutButton>
      </LogoutRow>
      
      <ProfileSection>
        <SectionTitle>{t('profile.journalTitle', 'Mi Diario de Trading')}</SectionTitle>
        <JournalPlaceholder>
          <p>{t('profile.journalDescription', 'Accede a tu diario de trading para registrar y analizar tus operaciones.')}</p>
          <PrimaryButton onClick={handleGoToJournal} style={{marginTop: '16px'}}>
            {t('profile.journalButton', 'Ir al Journal')}
          </PrimaryButton>
        </JournalPlaceholder>
      </ProfileSection>

    </PageContainer>
  );
};

export default UserProfile; 