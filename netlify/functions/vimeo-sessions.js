const axios = require('axios');

exports.handler = async function(event, context) {
  // Permitir CORS para peticiones desde el frontend
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
      },
      body: '',
    };
  }

  const params = event.queryStringParameters;
  const userId = params.userId;
  const folderId = params.folderId;
  const VIMEO_TOKEN = process.env.VIMEO_ACCESS_TOKEN;

  if (!userId || !folderId) {
    return {
      statusCode: 400,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: 'Faltan parámetros userId o folderId.' })
    };
  }
  if (!VIMEO_TOKEN) {
    return {
      statusCode: 500,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: 'Error de configuración del servidor: Falta el token de acceso de Vimeo.' })
    };
  }

  const fields = 'uri,name,description,duration,pictures.sizes,link';
  const vimeoApiUrl = `https://api.vimeo.com/users/${userId}/projects/${folderId}/videos?fields=${fields}&per_page=50`;

  try {
    const response = await axios.get(vimeoApiUrl, {
      headers: { 'Authorization': `Bearer ${VIMEO_TOKEN}` }
    });
    const sessions = response.data.data.map(video => {
      const videoId = video.uri.split('/').pop();
      const thumbnail = video.pictures?.sizes?.find(size => size.width >= 300)?.link || video.pictures?.base_link;
      return {
        id: videoId,
        vimeoId: videoId,
        title: video.name || 'Video sin título',
        description: video.description || '',
        duration: video.duration,
        thumbnailUrl: thumbnail || ''
      };
    });
    return {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify(sessions)
    };
  } catch (error) {
    return {
      statusCode: error.response?.status || 500,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({
        error: 'Error al contactar con la API de Vimeo',
        details: error.response?.data || error.message
      })
    };
  }
}; 