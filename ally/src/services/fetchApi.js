export const fetchCountry = async () => {
  const response = await fetch('https://amazon-api.sellead.com/country');
  const data = await response.json();
  return data;
  };

  export const fetchCity = async () => {
    const response = await fetch('https://amazon-api.sellead.com/city');
    const data = await response.json();
    return data;
    };
