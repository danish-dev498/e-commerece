import React, { useEffect, useLayoutEffect, useState } from 'react';

const useLocalStorageState = (key, initialVlaue) => {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialVlaue;
  });

  console.log('check key', key);

  useLayoutEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  // console.log('check the key in localStorage ', initialVlaue);

  return [value, setValue];
};

export default useLocalStorageState;
