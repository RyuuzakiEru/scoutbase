import React from 'react'
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';
import styled from "styled-components";

import CountryItem from './CountryItem';



const ALL_COUNTRIES_QUERY = gql`
    query ALL_COUNTRIES_QUERY {
        countries {
            name
            native
            continent {
              code
              name
            }
            languages {
              name
              native
            }
            emoji
        }
    }
`;

const Center = styled.div`
  text-align: center;
`;

const CountryList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;

const Countries = () => {
  const { loading, error, data } = useQuery(ALL_COUNTRIES_QUERY);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
  <Center>
    <p>ALL COUNTRIES</p>
    <CountryList>
    {data.countries.map(country => (
      <CountryItem country={country} />
    ))}
    </CountryList>
  </Center>);

}

export default Countries;