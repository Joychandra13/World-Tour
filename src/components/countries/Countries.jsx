import React, { use, useState } from 'react';
import Country from '../country/Country';
import "./Countries.css"

const Countries = ({countriesPromise}) => {
    const [countryVisited, setCountryVisited] = useState ([]);
    const hendelCountryVisited = (country)=>{
        console.log(country)
        const newCountryVisited = [...countryVisited, country]
        setCountryVisited (newCountryVisited);

    }

    const countriesData= use(countriesPromise);
    const countries = countriesData.countries
    // console.log(countries)
    return (
        <div >
            <h1>Total Countries: {countries.length}</h1>
            <h3>Total Visited Countries: {countryVisited.length}</h3>
            <ol>
                {
                    countryVisited.map(country => <li key={country.cca3.cca3} >{country.name.common}</li>)
                }
            </ol>
            <div className='countries'>
                {
                countries.map(country => <Country 
                    key={country.ccn3.ccn3} 
                    country={country}
                    hendelCountryVisited={hendelCountryVisited}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;