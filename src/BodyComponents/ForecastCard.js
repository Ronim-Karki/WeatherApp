import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../Weather/context';
import Loading from './Loading';
const ForecastCard = () => {
  const { weather, loading, weekdays, cityName } = useGlobalContext();
  console.log(weather);

  if (loading) {
    return <Loading />;
  }
  const img = weather[0].weather.map((item) => item.icon).toString();
  const iconCode = `http://openweathermap.org/img/w/${img}.png`;
  const description = weather[0].weather.map((item) => item.description);
  const des =
    description.toString().charAt(0).toUpperCase() + description.slice(1);
  console.log(des);
  return (
    <Box>
      <BoxOne>
        <div>
          <Head>{cityName},&nbsp; </Head>
          <div>
            {weekdays[new Date(weather[0].date).getDay()]}&nbsp;|&nbsp;
            {weather[0].date}
          </div>
        </div>
        <Content>
          <Img src={iconCode} alt="icon" />
          <BoxOne>
            <Head>{weather[0].main.temp}&#8451; </Head>
            <span style={{ textTransform: 'uppercase' }}>{description}</span>
          </BoxOne>
        </Content>
      </BoxOne>

      <Section>
        <span>Temp-min: {weather[0].main.temp_min}&#8451;</span>
        <span>Temp-max: {weather[0].main.temp_max}&#8451;</span>
      </Section>
    </Box>
  );
};
const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  flex-wrap: wrap;
`;
const BoxOne = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Content = styled.div`
  display: flex;
  flex-direction: row;

  margin-left: 10em;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    margin: 0 auto;
    flex-direction: column;
  }
`;
const Section = styled.section`
  background-color: rgba(48, 246, 246, 0.2);

  border-radius: 1rem;
  font-family: open-sans;
  height: 10vh;
  width: 20%;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 2em;
  justify-content: center;
  padding: 2em;
  text-align: center;
  min-width: 20%;
`;
const Img = styled.img`
  height: 10em;

  max-width: 10em;
  min-width: 5em;
  display: flex;
  align-content: center;
  margin: 0 auto;
`;
const Head = styled.h1`
  justify-content: flex-start;
  display: inline-flex;
  font-size: 3rem;
`;
export default ForecastCard;
