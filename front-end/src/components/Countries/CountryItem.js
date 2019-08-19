import React from 'react'
import CountryStyles from '../styles/CountryStyles'

const CountryItem = (props) => {
    const { country } = props;
    const { name, native, emoji, continent } = country;

    return (
        <CountryStyles>
            <p>{emoji} {name}</p>
            <small>{native}</small>
            <small>{continent.name} {continent.code}</small>
        </CountryStyles>
    )



}

export default CountryItem;