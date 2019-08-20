import React from 'react'
import CountryStyles from '../styles/CountryStyles'

const CountryItemDetail = (props) => {
    const { country } = props;
    const { name, native, emoji, languages, currency, phone } = country;

    return (
        <CountryStyles>
            <p>{emoji} {name}</p>
            <small>{native}</small>
            <small>Currency:{currency}</small>
            <small>Phone Code:{phone}</small>
            <p>Languages:</p>
            {languages.map(({code, name, native}) => (<small key={code}>{name} ({native})</small>))}
        </CountryStyles>
    )
}

export default CountryItemDetail;