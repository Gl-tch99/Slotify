import axios from 'axios';
import { any } from 'prop-types';
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
  login = '/auth/login',
  user = '/api/v1/users',
  venues = '/api/v1/venues',
}

export const buildApiUrl = (endpoint: string) => {
  return `${API_CONFIG.baseURL}${endpoint}`;
};

// Enhanced fetch wrapper with error handling
export const apiRequest = async (endpoint: API_ENDPOINTS, method: string, body?: {}) => {
  const url = buildApiUrl(endpoint);
  console.log(url)
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
    // Check if status is in the 2xx range (successful)
    if (response.status >= 200 && response.status < 300) {
      return response.data;  // response.data is already an object, no need for await
    } else {
      // Only throw error for non-2xx status codes
      throw new Error(`HTTP error! status: ${response.status}, body: ${JSON.stringify(response.data)}`);
    }
  } catch (error: any) {
    // Handle axios errors properly
    if (error.response) {
      // Server responded with error status
      // Extract error message from response
      const errorMessage = error.response.data?.errors || 
                          error.response.data?.error || 
                          error.response.data?.message ||
                          `HTTP error! status: ${error.response.status}`;
      
      console.error('API request failed:', errorMessage);
      
      // Create a new Error with the extracted message
      const customError = new Error(errorMessage);
      // Attach the original error for debugging if needed
      (customError as any).originalError = error;
      throw customError;
    } else if (error.request) {
      // Request was made but no response received
      console.error('API request failed: No response received', error.request);
      throw new Error('Network error: No response from server');
    } else {
      // Something else happened
      console.error('API request failed:', error.message);
      throw error;
    }
  }
};
export const get = (endpoint: API_ENDPOINTS) => {
  return apiRequest(endpoint, 'get', {});
};
export const post = (endpoint: API_ENDPOINTS, body?: {}) => {
  return apiRequest(endpoint, 'post', body);
};
