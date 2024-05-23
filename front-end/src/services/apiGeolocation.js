// https://react-fast-pizza-api.onrender.com/api

export const getAddress = async ({ latitude, longitude }) => {
  const res = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
  );
  if (!res.ok) throw new Error('Failed getting address');

  const data = res.json();
  return data;
};
