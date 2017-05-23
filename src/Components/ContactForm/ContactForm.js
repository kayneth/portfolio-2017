import React, { Component } from 'react';
import Recaptcha  from 'react-recaptcha';
import {Helmet} from "react-helmet";
import FaAngleRight from 'react-icons/lib/fa/angle-right';

import './ContactForm.css';

export default class ContactForm extends Component {


    constructor(props) {
        super(props);
        this.sitekey = "6Lf0Nh8UAAAAAJPUlm6VXLTxN7GlHNwQg8m4PDs6";

        this.contactForm = {
            email : "",

        };
        // define a variable to store the recaptcha instance
        this.recaptchaInstance = {};
        this.ref = this.ref.bind(this);
        this.resetRecaptcha = this.resetRecaptcha.bind(this);
        this.stepName = this.stepName.bind(this);
        this.stepEmail = this.stepEmail.bind(this);
        this.stepMessage = this.stepMessage.bind(this);
        this.stepSend = this.stepSend.bind(this);

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

    stepName = (e) => {
        e.preventDefault();
        let elements = document.querySelectorAll(".contact-form");
        Array.prototype.forEach.call(elements, function(el, i){
            el.classList.add("activated");
        });
        document.getElementById("contact-name").classList.add("step-on");
        document.querySelector("#contact-name input").focus();
        document.querySelector("#contact-name svg").classList.add("displayBlock");
    };

    stepEmail = (e) => {
        e.preventDefault();
        document.getElementById("contact-name").classList.add("step-off");
        document.getElementById("contact-name").classList.remove("step-on");
        document.getElementById("contact-email").classList.add("step-on");
        document.querySelector("#contact-email input").focus();
        document.querySelector("#contact-email svg").classList.add("displayBlock");
    };

    stepMessage = (e) => {
        e.preventDefault();
        document.getElementById("contact-email").classList.add("step-off");
        document.getElementById("contact-email").classList.remove("step-on");
        document.getElementById("contact-message").classList.add("step-on");
        document.querySelector("#contact-message textarea").focus();
        document.querySelector("#contact-message svg").classList.add("displayBlock");
    };

    stepSend = (e) => {
        e.preventDefault();
    };

    // handle reset
    // create a reset function
    resetRecaptcha = () => {
        this.recaptchaInstance.reset();
    };

    render() {
        return (
            // Add your component markup and other subcomponent references here.
            <div className="contact-form">
                <Helmet>
                    <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer></script>
                </Helmet>
                <header>
                    <h1>
                       Besoin d'informations ?
                    </h1>
                    <h2>
                        N'hésitez pas à prendre contact avec moi pour tout projets ou questions
                    </h2>
                </header>
                <main >
                    <form className="row center-xs middle-xs">
                        <button className="contact-btn " onClick={this.stepName}>
                            Contactez moi
                        </button>

                        <fieldset className="form-group" id="contact-name">
                            <label htmlFor="email">Votre nom</label>
                            <input type="text" name="name"/>
                            <FaAngleRight onClick={this.stepEmail}/>
                        </fieldset>
                        <fieldset className="form-group" id="contact-email">
                            <label htmlFor="email">Votre email</label>
                            <input type="mail" name="email" id="email"/>
                            <FaAngleRight onClick={this.stepMessage}/>
                        </fieldset>
                        <fieldset className="form-group" id="contact-message">
                            <label htmlFor="message">
                                Message
                            </label>
                            <textarea name="message" id="message" cols="30" rows="10">

                            </textarea>
                            <FaAngleRight onClick={this.stepSend}/>
                        </fieldset>
                        <fieldset className="form-group" id="contact-captcha">
                            <Recaptcha
                                ref={e => this.recaptchaInstance = e}
                                sitekey={this.sitekey}
                                size="compact"
                                render="explicit"
                                verifyCallback={this.verifyCallback}
                                onloadCallback={this.callback}
                                expiredCallback={this.expiredCallback}
                            />
                        </fieldset>
                        {/*<button type="button"*/}
                        {/*onClick={this.resetRecaptcha}*/}
                        {/*>*/}
                        {/*Reset*/}
                        {/*</button>*/}
                    </form>
                </main>

            </div>
        );
    }
}


