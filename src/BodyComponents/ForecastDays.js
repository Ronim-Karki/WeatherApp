import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../Weather/context';
import Loading from './Loading';
const ForecastDays = () => {
  const { weather, loading, weekdays } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }

  var newWeathers = new Array(5);
  newWeathers[0] = weather[7];
  newWeathers[1] = weather[15];
  newWeathers[2] = weather[23];
  newWeathers[3] = weather[31];
  newWeathers[4] = weather[38];
  console.log(newWeathers);

  const obj = newWeathers.map((item, index) => {
    const { date, main, weather } = item;
    const description = weather.map((item) => item.description);
    const iconCode = `http://openweathermap.org/img/w/${weather.map(
      (item) => item.icon
    )}.png`;
    return (
      <Section key={index}>
        <Div>{weekdays[new Date(date).getDay()]}</Div>
        <Img src={iconCode} alt="icon" />
        <span style={{ textTransform: 'uppercase' }}> {description}</span>
        <span>Temp-min: {main.temp_min}&#8451;</span>
        <span>Temp-max: {main.temp_max}&#8451;</span>
      </Section>
    );
  });
  return <Div>{obj}</Div>;
};
const Section = styled.div`
  background-color: rgba(48, 246, 246, 0.2);
  opacity: 0.9;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  flex-wrap: wrap;
  margin: 0 auto;
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
  min-width: 15%;
`;
const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
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
