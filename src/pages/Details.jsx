import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { IoArrowBack } from 'react-icons/io5'
import { searchByCountry } from '../config';
import { Button } from '../components/Button';
import Info from '../components/Info';

const Details = () => {
    let { id } = useParams();
    const navigate = useNavigate()
    const [country, setCountry] = useState(null)

    useEffect(() => {
        axios.get(searchByCountry(id)).then(({ data }) => setCountry(data[0]))
    }, [id])
    return (
        <>
            <Button onClick={() => { navigate(-1) }}>
                <IoArrowBack /> Go back
            </Button>
            {country &&
                <Info {...country} />
            }
        </>
    );
};

export default Details;