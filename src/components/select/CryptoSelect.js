import './CryptoSelect.css';
import AsyncSelect from 'react-select'
import { useState } from 'react';
import { Redirect } from "react-router-dom";

const axios = require('axios');


function CryptoSelect(){
    const [options, setOptions] = useState([]);
    const [redirect, setRedirect] = useState("");


    const onInputChange = (input) => {
        if (input === "" || input.length < 3){
            setOptions([]);
            return;
        }

        axios.get(`https://api.coinicons.net/crypto/search?query=${input}`).then(resp => {
            setOptions(resp.data);
        }).catch(err => {return})
    }

    const onSelect = (selection) => {
        setRedirect(`/c/${selection.value}`)
    }

    if (redirect.length > 0){
        return <Redirect to={redirect} />
    }
    return(
        <div className="container selection-container">
            <AsyncSelect id="crypto-selection" options={options} onChange={onSelect} onInputChange={onInputChange} placeholder="Search for a cryptocurrency" />
        </div>
    );
}

export default CryptoSelect;