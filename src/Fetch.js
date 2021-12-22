// import React from 'react';

// // const ApiKey = process.env.API_KEY;
// // //   const [city, setCity] = useState('');
// // const [weather, setWeather] = useState([{}]);
// const Fetch = async (city) => {
//   try {
//     const response = await fetch(
//       `https://api.openweathermap.org/data/2.5/forecast?q=sydney&units=metric&appid=026ec3cd1bbbfc617c8edd7311d23e78`
//     );

//     const res = await response.json();
//     // const data = await res.json();

//     const data = res.map((item, index) => {
//       const { main, weather, dt_text } = item.list;
//       return {
//         main,
//         weather,
//         dt_text,
//       };
//     });
//     setWeather(data);
//     console.log(data);
//     return data;
//   } catch (err) {
//     console.log(err);
//   }
// };
// console.log(weather);
// export default Fetch;
