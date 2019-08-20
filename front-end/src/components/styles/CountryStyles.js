import styled from 'styled-components';

const CountryStyles = styled.div`
  -webkit-box-shadow: 10px 9px 26px 0px rgba(204,204,204,1);
  -moz-box-shadow: 10px 9px 26px 0px rgba(204,204,204,1);
  box-shadow: 10px 9px 26px 0px rgba(204,204,204,1);
  position: relative;
  display: flex;
  flex-direction: column;
  align-content: center;
  a{
    text-decoration: none;
  }
  p {
    font-size: 12px;
    font-weight: 200;
    flex-grow: 1;
    font-size: 1.2rem;
  }
`;

export default CountryStyles;