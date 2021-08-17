import './Icon.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MetaTags from 'react-meta-tags';
import axios from 'axios';


const sizes = [
    {
        "name": "small",
        "size": "32"
    },
    {
        "name": "medium",
        "size": "64"
    },
    {
        "name": "large",
        "size": "128"
    }
]

function Icon(){
    let { slug } = useParams();
    let [name, setName] = useState();


    useEffect(() => {
        getName();
    }, [])

    const getName = async() => {
        axios.get(`https://api.coinicons.net/crypto/info?slug=${slug}`).then(res => {
            setName(res.data.name);
        })
    }

    return(
        <div>
            <MetaTags>
                <title>{name} Icons - CoinIcons</title>
                <meta name="description" content={"Download full size png icons for " +  name + "."} />
                <meta property="og:image" content={"https://api.coinicons.net/icon/" + slug + "/32x32?input=slug"} />
            </MetaTags>
            <div className="text-center mt-5">
                <h1 className="section-header">{name} Icons</h1>
                <center>
                    { sizes.map((size, i) => (
                        <div className="" style={{"width": "500px"}} key={i}>
                            <div className="text-center">
                                <h5>{size['name']} <a className="icon-download-link"  target="_next" href={"https://api.coinicons.net/icon/" + slug + "/" + size['size'] + "x" + size['size'] + "?input=slug&action=download"}>{"\u2B73"}</a></h5>
                                <img src={"https://api.coinicons.net/icon/" + slug + "/" + size['size'] + "x" + size['size'] + "?input=slug"} width={size['size'] + "px"} alt={size['name'] + " " + slug + " icon"} className="crypto-icon" />
                                {/* <br /><a className="btn btn-primary btn-download"><i className="fas fa-file-download"></i></a> */}
                            </div>
                        </div>
                    ))}
                </center>
            </div>
        </div>
    );
}

export default Icon;