import React, { useState, useContext, useEffect } from 'react';

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [city, setCity] = useState('sydney');
  const [loading, setLoading] = useState(true);
  const [cityName, setCityName] = useState('');
  const [weather, setWeather] = useState([{}]);

  //Create new array to show days in the app
  var weekdays = new Array(7);
  weekdays[0] = 'Sunday';
  weekdays[1] = 'Monday';
  weekdays[2] = 'Tuesday';
  weekdays[3] = 'Wednesday';
  weekdays[4] = 'Thursday';
  weekdays[5] = 'Friday';
  weekdays[6] = 'Saturday';

  //Fetching data from api
  console.log(process.env.API_KEY);
  const fetchWeather = async (name) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${
          name || 'sydney'
        } , AU&units=metric&appid=3ed01d9d534f579c72be3fdc489e14f8
        `
      );

      const res = await response.json();
      //storing list in list variable
      const list = res.list;

      const searchCity = res.city.name;
      const data = list.map((item) => {
        const { main, weather, dt_txt } = item;
        //creating date
        const date = dt_txt.slice(0, 10);

        return {
          main,
          weather,
          date,
        };
      });
      setCityName(searchCity);
      setWeather(data);

      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, [city]);
  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        weather,
        city,
        setCity,
        weekdays,
        cityName,
      }}
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
