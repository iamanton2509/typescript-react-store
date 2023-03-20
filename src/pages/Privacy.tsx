const Privacy = () => {

    const toggleElement: React.MouseEventHandler<HTMLHeadElement> = (e) => {
        const target = e.target as HTMLHeadElement;
        if (target.nextElementSibling) {
            target.nextElementSibling.classList.toggle('none');
        }
    }

    return (
        <section className="section">
            <div className="container">
                <h1 className="section-title">Privacy policy</h1>
                <div className="item">
                    <h2 onClick={toggleElement} className="item__title">What type of personal information do we collect?</h2>
                    <p className="item__paragraph none">For the purposes described in this Policy, we may collect the following categories of personal information: <br /> <br /> 1. Identification and Contact information (such as name, address, phone number or e-mail address) <br /> 2. Demographic information like your gender and birthday <br /> 3. Preferences and interests which you choose to disclose in the course of your privileged contacts or encounters with our client advisors (which may include your preferences about our collections or other luxury brands, your size, your lifestyle, or basic information on your family circle) <br /> 4. Information, which may include health information, related to possible adverse effect caused by our cosmetic products <br /> 5. Information you submit or post in a public space, on our social media pages or our websites, for example for a product review. <br /> 6. Information about your purchases online or in stores. This could include the products you purchased and their prices <br /> 7. If you use our web sites, we may collect information about the browser you are using, and your browsing behaviour. <br /> 8. If you use our mobile app, we may collect your GPS location, subject to your consent when required. We might also look how often you use the app and where you downloaded it. We may collect information about the browser you are using, and your browsing behaviour. </p>
                </div>
                <div className="item">
                    <h2 onClick={toggleElement} className="item__title">How do we use your personal information?</h2>
                    <p className="item__paragraph none">We use the information described above for the purposes specified at the time of collection or hereafter in this Policy: <br /> <br />

                    1. To improve our understanding of your interests and concerns, and to improve our understanding of your use of our products: we may use your information to make our website, apps and products/services better. We may use your information to customize your experience with Us and to tailor our marketing activities to fit your needs and interests as we believe that it is also in our legitimate interest to better serve you and respond to your needs. <br />

                    2. To provide you with our connected services, to process your order, respond to your requests or questions, and manage your complaints: for example, we use your information to process your order and deliver your products. Or, we may use your information to send you information you requested, or to communicate with you about your account or our relationship: we may contact you about changes to the Site or about service updates. We may also contact you about feedback or about this Policy or website terms. In such case, your information is processed to perform the contract we have with you. <br />

                    3. For security purposes: we may use information to protect Our company, Our customers, Our associates, and Our websites or apps against fraud, theft or any wrongdoing which may affect our activity as it is our legitimate interest to ensure the security of our activity online and offline. <br />

                    4. To manage the possible adverse effect caused by our cosmetic products in accordance with our legal obligations as cosmetic manufacturer <br />

                    5. For marketing purposes: we may use your information to contact you, subject to your consent when applicable, about new products and special offers we think you will find valuable. <br />

                    6. Other purposes: we use information to maintain transaction and other business records for legal, administrative and audit purposes. We also use information to meet legal, insurance and processing requirements.
                    </p>
                </div> 
                <div className="item">
                    <h2 onClick={toggleElement} className="item__title">Who do we share your personal information with?</h2>
                    <p className="item__paragraph none">We do not disclose or otherwise share your personal information We collect, except: <br /> <br />
                    
                    1. With our parent and affiliated companies within our group of companies: only authorized personnel with a need to know have access to the information, for purposes of internal audit, billing or administrative and to provide you with the same level of services around the world <br />

                    2. With service providers and agents who perform services on Our behalf: for example, We share information with vendors who send emails for Us. We may also share personal information with service providers that help Us operate our websites. <br />

                    3. With banks or other online payment services companies <br />

                    4. Subject to your consent, with Our business partners: for example We will share information with third parties who jointly sponsor an event or promotion with Us. <br />

                    5. With any third party as part of any business restructuring or reorganization (including dissolution or liquidation). This includes if We are merged of all or part of Our business or assets are transferred, assigned or sold. <br />

                    6. When we are required to do so in order to comply with applicable law, to respond to a court order, or more generally to respond to any request from a competent authority
                    
                    </p>
                </div>
                <div className="item">
                    <h2 onClick={toggleElement} className="item__title">Tracking tools and use of cookies</h2>
                    <p className="item__paragraph none">We may collect certain information through cookies, web beacons and other automated means. A cookie is a text file which is stored in a dedicated area of your device's hard drive, for instance when you visit online service, when you read an email or while installing or using a mobile app. A cookie allows its sender to identify the device on which it is stored during the period of validity of consent, which does not exceed 13 months. <br /> <br />

                    What type of cookies do we use? <br /> <br />

                    1. Some cookies may be functional to collect information which will allow Us to facilitate your browsing such as languages preferences, memorizing log-in, or saving the content of your shopping basket or wish list. <br />

                    2. Other cookies also collect information on your behaviour by collecting referring URLS (where our visitors come from, which banners they clicked on and which directed them to our website), pages accessed, times of websites visits. Such information will allow Us to enhance our web sites and apps, have a better understanding of the products and services you would prefer, and offer you more personalized communications and/or more personalized content on our website or our applications. <br />

                    3.  We also use cookies for web analytics to measure the web sites activity and determine the areas of the web sites which are the most visited, hence improving visibility of our content. <br />

                    4. Our websites or apps may contain third party cookies (delivered by advertising agencies, analytics providers, etc.) enabling them to collect browsing information on your Devices, including to measure the efficiency of our advertising campaigns on third party websites. Third party cookies are subject to said third party privacy policies. We hereby inform you about the purpose of these cookies and how you can manage them, to the extent we are aware thereof. <br />

                    5. We may include in our website or apps the possibility to share content with third parties or to let other persons know you browsed our website. Such is the case for instance of 'Like' and 'Share' functionalities offered by social network platforms (Facebook, Twitter, etc). <br />

                    Social networks which offer these functionalities may identify you even though you do not use these functionalities on our website. Indeed, such functionalities allow social network platforms to track information about your browsing on our website whenever your social network account is active while browsing our website. <br />

                    We do not control how these platforms collect your personal data while you are browsing our website. We invite you to read the Privacy policies of these social networks to find out how they use information they collect (including for advertising purposes) through these buttons. These Privacy policies should provide you information about how to manage your preferences on your social networks account. <br /> <br />

                    Acceptance of cookies <br />  <br />

                    Except for functional or security cookies, the use of cookie on a Device depends on the user's choice, which can be made and modified freely and at any time. 
                    </p>
                </div>                
            </div>
        </section>
    );
}

export default Privacy;