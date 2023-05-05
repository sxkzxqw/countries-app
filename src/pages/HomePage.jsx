import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ALL_COUNTRIES } from '../config'
import List from '../components/List';
import Card from '../components/Card';
import Controls from '../components/Controls';
import { useHistory } from 'react-router-dom';


const HomePage = ({ countries, setCountries }) => {

    useEffect(() => {
        if (!countries.length)
            axios.get(ALL_COUNTRIES).then(
                ({ data }) => setCountries(data)
            )
    }, [])

    useEffect(() => {
        handleSearch()
    }, [countries])

    const [filtredCountries, setFiltredCountries] = useState(countries)
    const handleSearch = (search, region) => {
        let data = [...countries]
        if (region) {
            data = data.filter(c => c.region.includes(region))
        }

        if (search) {
            data = data.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))
        }

        setFiltredCountries(data)
    }

    return (
        <>
            <Controls onSearch={handleSearch} />
            <List>
                {filtredCountries.map(country => {
                    const countryInfo = {
                        img: country.flags.png,
                        name: country.name,
                        info: [
                            {
                                title: 'Population',
                                description: country.population.toLocaleString()
                            },
                            {
                                title: 'Region',
                                description: country.region
                            },
                            {
                                title: 'Capital',
                                description: country.capital
                            }
                        ],
                    }
                    return (
                        <Card key={country.name} {...countryInfo} />
                    )
                })
                }
            </List>
        </>
    );
};

export default HomePage;