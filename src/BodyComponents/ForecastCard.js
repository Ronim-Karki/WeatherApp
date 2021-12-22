import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../Weather/context';
import Loading from './Loading';
const ForecastCard = () => {
  const { weather, loading } = useGlobalContext();
  console.log(weather);
  // const temperature = weather[0].main.temp;
  // const icon = weather[0].weather.icon;
  if (loading) {
    return <Loading />;
  }
  const img = weather[0].weather.map((item) => item.icon).toString();
  const iconCode = `http://openweathermap.org/img/w/${img}.png`;
  console.log(weather[0].weather.map((item) => item.icon).toString());
  return (
    // const temp =
    <Section>
      <div>{weather[0].main.temp}&#8451;</div>
      <Img src={iconCode} alt="icon" />
      <span>Temp-min: {weather[0].main.temp_min}&#8451;</span>
      <span>Temp-max: {weather[0].main.temp_max}&#8451;</span>
      <span>
        Condition: {weather[0].weather.map((item) => item.description)}
      </span>
    </Section>
  );
};

const Section = styled.section`
  background-color: #18f1f1;
  opacity: 0.5;
  border-radius: 1rem;
  text-color: white,
  height: 50vh;
  width: 60%;
  display: flex;
  flex-direction:column;
  margin: 0 auto;
  margin-top: 2em;
  justify-content: center;
padding:5em;
  text-align: center;
  min-width: 20%;
`;
const Img = styled.img`
  height: 5em;

  max-width: 10em;
  min-width: 5em;
  display: flex;
  align-content: center;
  margin: 0 auto;
`;
export default ForecastCard;
