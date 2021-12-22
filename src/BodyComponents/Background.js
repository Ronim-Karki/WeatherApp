import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';

import ForecastDays from './ForecastDays';

const Background = () => {
  return (
    <Body>
      <SearchBar />

      <ForecastDays />
    </Body>
  );
};
const Body = styled.div`
  font-size: 1.5em;
  
  width:100%
  display: flex;
  flex-direction: column;
  padding:5em;
  justify-content: center;
  color:white;
  font-family: 'Roboto Condensed', sans-serif;

  align-content:space-between;
  text-align:center;
  background-image: linear-gradient(to bottom right, rgba(126, 213, 111, 0.8), rgba(40, 180, 133, 0.1) ), url("https://image.freepik.com/free-vector/gorgeous-clouds-background-with-blue-sky-design_1017-25501.jpg");
  background-size: cover;
`;
export default Background;
