import React from 'react';
import './Country.css'
const Country = (props) => {
    const { area, region, population, name, flags } = props.country;
    return (
        <div className='country bg-info rounded-4 p-4'>
            <h2>Country name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area : {area}</p>
            <p>Region : {region}</p>

        </div>
    );
};

export default Country;