import MetaTags from 'react-meta-tags';

function Privacy(){
    return(
        <div>
            <MetaTags>
                <title>Privacy - CoinIcons</title>
                <meta name="description" content="Privacy policy for our web services." />
            </MetaTags>

            <div className="text-center mt-4">
                <h2>Terms of Service</h2>
                <div className="container paragraph-container">
                    The CoinIcons team takes your privacy very seriously; accordingly we have put together this privacy policy 
                    to ensure that our users can be aware of any and all uses of information by our services. By using any services 
                    offered by CoinIcons, you agree to the policy stated below.

                    <h3 className="mt-3">Data Collection</h3>
                    CoinIcons only collects and stores personally identifiable information if deemed necessary for one or more of
                    our services. Our Icon API collects IP (Internet Protocol) addresses for certain endpoints in order to ensure
                    fair usage of our API by all clients and for analytical purposes. Individual IP addresses are seldom accessed,
                    and only done so if we suspect malicious use by one or more of our clients. Our web servers may log information 
                    about your connection, such as IP addresses, and device identifiers which are strictly used
                     for debugging purposes if necessary. 
                    <br /><br />
                    We will never share any data collected with third parties, unless required to do so by law enforcement.
                    <h3 className="mt-3">Data Deletion</h3>
                    If you have any concerns about personal information stored by any of our services or would like to request 
                    a deletion of data, you may contact our team via email at: info@coinicons.net. By requesting a deletion 
                    of data, you understand that this may make a service unusable for you.  
                    <h3 className="mt-3">External Services</h3>
                    Our website uses Google Analytics to measure user engagement and cater our services towards apparent 
                    user trends. To learn about how Google uses data collected from partner sites you may visit their<span> </span>  
                    <a href="https://policies.google.com/technologies/partner-sites">Privacy and Terms Page</a>.

<h3 className="mt-3">Legal Contact</h3>
                    Legal inquiries should be communicated via email to info@coinicons.net
                    <h3 className="mt-3">Policy Changes</h3>
                    We reserve the right to make changes to our Terms of Service (this document) without notice.
                    <br /><br />
                    <b>Last updated:</b> 16th August 2021
                </div>
            </div>
        </div>
    );
}

export default Privacy;