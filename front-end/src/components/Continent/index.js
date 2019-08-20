import React from 'react'
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';
import styled from "styled-components";

import CountryItemDetail from '../Country/CountryItemDetail';



const CONTINENT_COUNTRIES_QUERY = gql`
    query CONTINENT_COUNTRIES_QUERY ($code: String!) {
        continent (code: $code) {
            code
            name
              countries{
                code
                name
                native
                phone
                currency
                languages {
                  code
                  name
                  native
                }
                emoji
            }
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

const Continent = (props) => {
    const { code } = props.match.params;
    const { loading, error, data } = useQuery(CONTINENT_COUNTRIES_QUERY, {
        variables: { code },
    });

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    const {continent} = data;
    const {name} = continent;
    return (
        <Center>
            <p>Countries in {name} ({code})</p>
            <CountryList>
                {continent.countries.map(country => (
                    <CountryItemDetail key={country.code} country={country} />
                ))}
            </CountryList>
        </Center>);

}

export default Continent;