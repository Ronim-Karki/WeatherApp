import React, { useState, useContext, useEffect } from 'react';

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [city, setCity] = useState('sydney');
  const [loading, setLoading] = useState(true);
  // const [cityName, setCityName] = useState('');
  const [weather, setWeather] = useState([{}]);
  //   const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=026ec3cd1bbbfc617c8edd7311d23e78`;
  const fetchWeather = async (name) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${
          name || 'sydney'
        } , AU&units=metric&appid=3ed01d9d534f579c72be3fdc489e14f8`
      );

      const res = await response.json();
      // const data = await res.json();
      const list = res.list;

      console.log(res);

      const data = list.map((item) => {
        const { main, weather, dt_txt } = item;
        // const date = dt_text.slice(0, 10);
        const date = dt_txt.slice(0, 10);

        return {
          main,
          weather,
          date,
        };
      });
      setWeather(data);
      console.log(data);

      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(weather);
  useEffect(() => {
    fetchWeather(city);
  }, [city]);
  return (
    <AppContext.Provider
      value={{ loading, setLoading, weather, city, setCity }}
    >
      {children}
    </AppContext.Provider>
  );
};

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
