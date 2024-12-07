import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true // Enable credentials
});

// Temporary mock service for testing frontend
export const authService = {
  register: async (username, password) => {
    console.log('Mock register:', { username, password });
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (username === 'exists@test.com') {
      throw new Error('User already exists');
    }
    
    return {
      token: 'mock-token',
      user: {
        id: '123',
        username,
        role: 'user'
      }
    };
  },

  login: async (username, password) => {
    console.log('Mock login:', { username, password });
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Admin credentials
    if (username === 'admin@gmail.com' && password === 'admin123') {
      return {
        token: 'mock-admin-token',
        user: {
          id: 'admin123',
          username: 'admin',
          role: 'admin'
        }
      };
    }

    // Regular user credentials
    if (username === 'testuser' && password === 'password123') {
      return {
        token: 'mock-user-token',
        user: {
          id: '123',
          username: 'testuser',
          role: 'user'
        }
      };
    }

    throw new Error('Invalid credentials');
  }
};

// Add token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;