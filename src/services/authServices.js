export const login = async (username, password) => {
    const response = await api.post('/login', { username, password });
    return response.data;
  };
  
  export const signup = async (userData) => {
    const response = await api.post('/signup', userData);
    return response.data;
  };
  