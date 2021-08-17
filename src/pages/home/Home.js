import './Home.css';
import CryptoSelect from '../../components/select/CryptoSelect';
import MetaTags from 'react-meta-tags';

function Home(){
    return(
        <div>
            <MetaTags>
                <title>CoinIcons</title>
                <meta name="description" content="Download fullsize cryptocurrency icons. Use crypto icons in your applications and documents with our Icon API." />
            </MetaTags>
            <div className="text-center mt-5">
                <div id="home-content">
                    <div>
                        <h1 className="section-header">Download Fullsize Cryptocurrency Icons</h1>
                        <div className="container">
                            <CryptoSelect />
                        </div>
                    </div>
                    <div id="api-section">
                        <center>
                            <h1 id="api-section-header" className="section-header">Render Crypto Icons in your Applications and Documents  With Ease Using Our API</h1>
                            <h5 className="color-secondary mt-3"><span className="color-primary">GET </span>https://api.coinicons.net/icon/<span className="color-primary">:crypto</span>/<span className="color-primary">:size</span></h5>
                            <h5>
                                crypto
                                <p className="color-secondary arg-desc">
                                    symbol of the cryptocurrency
                                    <br />
                                    Ex. btc, xmr, eth, ltc
                                </p>
                            </h5>
                            <h5>
                                size
                                <p className="color-secondary arg-desc">
                                    size of the image
                                    <br />
                                    32x32, 64x64, 128x128
                                </p>
                            </h5>
                            <h5>
                                example
                                <p className="color-secondary arg-desc">
                                    https://api.coinicons.net/icon/ada/64x64
                                    <br />
                                    <a href="https://codesandbox.io/s/crazy-sid-en9q5" target="_next"> html</a> | <a href="https://codesandbox.io/s/confident-christian-bgmnt" target="_next">react</a> | <a href="https://docs.google.com/document/d/1PXxOT657p-gc-84C3fpPOkU4S_HM8wnEDTEqg2ERFvU" target="_next">document</a>
                                </p>
                            </h5>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;