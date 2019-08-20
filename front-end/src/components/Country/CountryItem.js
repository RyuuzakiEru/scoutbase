import React from 'react'
import { Link } from 'react-router-dom';
import CountryStyles from '../styles/CountryStyles'

const CountryItem = (props) => {
    const { country } = props;
    const { name, native, emoji, continent, languages } = country;

    return (
        <CountryStyles>
            <p>{emoji} {name}</p>
            <small>{native}</small>
            <Link to={`/countries/${continent.code}`}><small>{continent.name} ({continent.code})</small></Link>
            <p>Languages:</p>
            {languages.map(({code, name, native}) => (<small key={code}>{name} ({native})</small>))}
        </CountryStyles>
    )
}

export default CountryItem;