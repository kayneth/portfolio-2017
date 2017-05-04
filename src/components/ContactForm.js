import React, { Component } from 'react';
import Recaptcha, { ReactRecaptcha } from 'react-recaptcha';
import {Helmet} from "react-helmet";

export default class ContactForm extends Component {


    constructor(props) {
        super(props);
        this.sitekey = "6Lf0Nh8UAAAAAJPUlm6VXLTxN7GlHNwQg8m4PDs6";

        // define a variable to store the recaptcha instance
        this.recaptchaInstance = {};
        this.ref = this.ref.bind(this);
        this.resetRecaptcha = this.resetRecaptcha.bind(this);

    }

    ref (e) {
        this.recaptchaInstance = e;
    }

    // specifying your onload callback function
    callback () {
        console.log('Done!!!!');
    };

    verifyCallback (response) {
        console.log(response);
    };

    expiredCallback () {
        console.log(`Recaptcha expired`);
    };

    // handle reset
    // create a reset function
    resetRecaptcha = () => {
        this.recaptchaInstance.reset();
    };

    render() {
        return (
            // Add your component markup and other subcomponent references here.
            <div>
                <Helmet>
                    <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer></script>
                </Helmet>
                <form>
                    <label htmlFor="email">Votre email</label>
                    <input type="mail" name="email" id="email"/>
                    <input type="text" name="name"/>
                    <input type="text"/>
                    <Recaptcha
                        ref={e => this.recaptchaInstance = e}
                        sitekey= {this.sitekey}
                        size="compact"
                        render="explicit"
                        verifyCallback={this.verifyCallback}
                        onloadCallback={this.callback}
                        expiredCallback={this.expiredCallback}
                    />
                    {/*<button type="button"*/}
                    {/*onClick={this.resetRecaptcha}*/}
                    {/*>*/}
                    {/*Reset*/}
                    {/*</button>*/}
                </form>
            </div>
        );
    }
}


