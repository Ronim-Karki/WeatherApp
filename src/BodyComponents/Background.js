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
  height: 100vh;
  width:100%
  display: flex;
  flex-direction: column;
  padding:5em;
  justify-content: center;
  color:#257373;
  align-content:space-between;
  text-align:center;
  background-color: #3d3c55;
  background-size: cover;
`;
export default Background;
