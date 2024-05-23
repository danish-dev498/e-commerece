// https://react-fast-pizza-api.onrender.com/api

const API_URL = ' https://react-fast-pizza-api.onrender.com/api/menu';

export const getPizza = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error('Not able to get the pizza');
  }

  return response.json();
};
