import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../Weather/context';
import Loading from './Loading';
const ForecastDays = () => {
  const { weather, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  var weekdays = new Array(7);
  weekdays[0] = 'Sunday';
  weekdays[1] = 'Monday';
  weekdays[2] = 'Tuesday';
  weekdays[3] = 'Wednesday';
  weekdays[4] = 'Thursday';
  weekdays[5] = 'Friday';
  weekdays[6] = 'Saturday';

  // const data = weather.map((item, index) => {
  //   const { date, main, weather } = item;

  //   const day = weekdays[new Date(date).getDay()];
  //   console.log(day);
  //   return { date, main, weather };
  // });
  const iconCode = `http://openweathermap.org/img/w/${weather[7].weather
    .map((item) => item.icon)
    .toString()}.png`;
  const iconCode1 = `http://openweathermap.org/img/w/${weather[15].weather
    .map((item) => item.icon)
    .toString()}.png`;
  const iconCode2 = `http://openweathermap.org/img/w/${weather[23].weather
    .map((item) => item.icon)
    .toString()}.png`;
  const iconCode3 = `http://openweathermap.org/img/w/${weather[31].weather
    .map((item) => item.icon)
    .toString()}.png`;
  const iconCode4 = `http://openweathermap.org/img/w/${weather[38].weather
    .map((item) => item.icon)
    .toString()}.png`;

  // for (let i = 7; i < weather.length; i = i + 7) {
  //   const iconCode = `http://openweathermap.org/img/w/"${weather[7].weather.map(
  //     (item) => item.icon
  //   )}.png`;
  //   return (
  //     <Section>
  //       <div>Day: {weekdays[new Date(weather[i].date).getDay()]}</div>
  //       <img src={iconCode} alt="icon"></img>
  //       <span>Temp-min: {weather[i].main.temp_min}&#8451;</span>
  //       <span>Temp-max: {weather[i].main.temp_max}&#8451;</span>
  //     </Section>
  //   );
  // }
  return (
    <Div>
      <Section>
        <div>Day: {weekdays[new Date(weather[7].date).getDay()]}</div>
        <Img src={iconCode} alt="icon" />
        <span>Temp-min: {weather[7].main.temp_min}&#8451;</span>
        <span>Temp-max: {weather[7].main.temp_max}&#8451;</span>
      </Section>
      <Section>
        <div>Day: {weekdays[new Date(weather[15].date).getDay()]}</div>
        <Img src={iconCode1} alt="icon" />
        <span>Temp-min: {weather[15].main.temp_min}&#8451;</span>
        <span>Temp-max: {weather[15].main.temp_max}&#8451;</span>
      </Section>
      <Section>
        <div>Day: {weekdays[new Date(weather[23].date).getDay()]}</div>
        <Img src={iconCode2} alt="icon" />
        <span>Temp-min: {weather[23].main.temp_min}&#8451;</span>
        <span>Temp-max: {weather[23].main.temp_max}&#8451;</span>
      </Section>
      <Section>
        <div>Day: {weekdays[new Date(weather[31].date).getDay()]}</div>
        <Img src={iconCode3} alt="icon" />
        <span>Temp-min: {weather[31].main.temp_min}&#8451;</span>
        <span>Temp-max: {weather[31].main.temp_max}&#8451;</span>
      </Section>
      <Section>
        <div>Day: {weekdays[new Date(weather[38].date).getDay()]}</div>
        <Img src={iconCode4} alt="icon" />
        <span>Temp-min: {weather[38].main.temp_min}&#8451;</span>
        <span>Temp-max: {weather[38].main.temp_max}&#8451;</span>
      </Section>
    </Div>
  );
};
const Section = styled.section`
  background-color: #18f1f1;
  opacity: 0.5;
  border-radius: 1rem;
  height: 30vh;
  width: 15%;

  margin: 0 auto;
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;

  text-align: center;
  min-width: 10%;
`;
const Div = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Img = styled.img`
  height: 5em;

  max-width: 10em;
  min-width: 5em;
  display: flex;
  align-content: center;
  margin: 0 auto;
`;

export default ForecastDays;
