import axios from 'axios';
const API_CONFIG = {
  baseURL:
    import.meta.env.ENVIRONMENT === 'prd' ? import.meta.env.BACKEND_URL : 'http://localhost:3000',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
};

// API endpoints
export enum API_ENDPOINTS {
  venues = '/api/v1/venues',
}

export const buildApiUrl = (endpoint: string) => {
  return `${API_CONFIG.baseURL}${endpoint}`;
};

// Enhanced fetch wrapper with error handling
export const apiRequest = async (endpoint: API_ENDPOINTS, method: string, body?: {}) => {
  const url = buildApiUrl(endpoint);
  // Get auth token from localStorage
  //   const token = localStorage.getItem('authToken');
  const config = {
    ...API_CONFIG.headers,
    // ...options.headers,
    // Only add Authorization header if token exists
    // ...(token && { 'Authorization': `Bearer ${token}` }),
  };

  try {
    const response = await axios(url, {
      method: method,
      data: body,
      headers: config,
      timeout: API_CONFIG.timeout,
    });

    if (!(response.statusText === 'OK')) {
      const errorText = await response.data;
      console.log('Error response body:', errorText);
      throw new Error(`HTTP error! status: ${response.status}, body: ${errorText}`);
    }

    return await response.data;
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};
export const get = (endpoint: API_ENDPOINTS) => {
  return apiRequest(endpoint, 'get', {});
};
export const post = (endpoint: API_ENDPOINTS, body?: {}) => {
  return apiRequest(endpoint, 'post', body);
};
