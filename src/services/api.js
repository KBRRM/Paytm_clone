import axios from 'axios';

const api = axios.create({
  baseURL: 'https://your-api-url.com',
});

export const makeRecharge = async (mobileNumber, amount) => {
  const response = await api.post('/recharge', { mobileNumber, amount });
  return response.data;
};

export const makePayment = async (details) => {
  const response = await api.post('/payment', details);
  return response.data;
};
