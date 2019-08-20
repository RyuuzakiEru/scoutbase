import React from 'react'
import { Link } from 'react-router-dom';
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';
import styled from "styled-components";

const ALL_CONTINENTS_QUERY = gql`
    query ALL_CONTINENTS_QUERY {
        continents {
            code
            name
        }
    }
`;

const Center = styled.div`
  text-align: center;
`;

const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    li {
        text-transform: uppercase;
        margin-bottom: 20px;
    }
`;


const Home = () => {

    const { loading, error, data } = useQuery(ALL_CONTINENTS_QUERY);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    const { continents } = data;
    return (
        <Center>
            <h2>COUNTRIES LIST</h2>
            <List>
                <Link to="/countries"><li>All Countries</li></Link>
                {continents && continents.map(({code, name}) => (<Link key={code} to={`/countries/${code}`}><li>Countries in {name}</li></Link>))}

            </List>
        </Center>);
};

export default Home;