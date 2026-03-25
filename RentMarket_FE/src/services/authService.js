import api from './api';

export const login = async (username, password) => {
  try {
    const response = await api.post('/identity/auth/token', {
      username,
      password
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || 'Invalid credentials provided');
    }
    throw new Error('Network error or server unavailable');
  }
};

export const register = async (userData) => {
  try {
    const response = await api.post('/identity/users', userData);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || 'Failed to create account. Please try again.');
    }
    throw new Error('Network error or server unavailable');
  }
};
