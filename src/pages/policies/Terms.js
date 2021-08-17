import MetaTags from 'react-meta-tags';

function Terms(){
    return(
        <div>
            <MetaTags>
                <title>Terms - CoinIcons</title>
                <meta name="description" content="Terms for the usage of our web services." />
            </MetaTags>

            <div className="text-center mt-4">
                <h2>Terms of Service</h2>
                <div className="container paragraph-container">
                    The following terms establish the guidelines for the usage of the web services provided by CoinIcons. 
                    By using our services (website, API) you agree to these stated terms. 
                    If you do not agree with one or more of the terms, you are strictly prohibited from using any service offered by CoinIcons.

                    <h3 className="mt-3">Usage Policy</h3>
                    You are permitted to use our Icon API and icons downloaded from the website commercially. When doing so,
                    we ask that you provide credit to our website (ex. "Icons from CoinIcons.net"). We do not take responsibility
                    for any legal repercussions caused by the use of our services and expect that you use them in compliance with all authority. <br />
                    <br />
                    Usage of our services with malicious intent - including without limitation to: flooding our servers
                    - is  strictly prohibited and will result in a loss of access. We reserve the right to restrict
                    access to our services to any user or any group of users for any reason.
                    <h3 className="mt-3">Limitation of Liability</h3>
                    CoinIcons is not liable for any special, incidental, indirect, or consequential damages that arise from 
                    the use, misuse, or inability to use any of the services we offer. 
                    <h3 className="mt-3">Content Accuracy</h3>
                    We do not warrant the accuracy of the content that appears on any of our services. Any information
                    displayed is subject to any type of inaccuracies or errors. We reserve the right to make changes,
                    remove, or discontinue any of our content at any time without notice and with no liabilities to any party.
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

export default Terms;