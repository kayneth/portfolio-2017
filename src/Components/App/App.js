import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import ContactForm from "../ContactForm/ContactForm";

class App extends Component {
  render() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>
                    Dylan Temboucti, Mage & Développeur web
                </h1>
                <img src={logo} className="App-logo" alt="logo" />
                <h2 className="App-intro">

                </h2>

            </header>
            <main>
                <section>
                    <header>
                        <h1>
                            Mon Portfolio
                        </h1>
                    </header>
                </section>
                <section>
                    <header>
                        <h1>
                            Mes projets Github
                        </h1>
                    </header>
                </section>
                <section>
                    <header>
                        <h1>
                            Mon blog
                        </h1>
                    </header>
                </section>
                <section>
                    <header>
                        <h1>
                            Me concacter
                        </h1>
                    </header>
                    <main >
                        <p>N'hésitez pas à prendre contact avec moi pour tout projets ou questions.</p>
                        <ContactForm id="contact-form">

                        </ContactForm>
                    </main>
                </section>
            </main>
            <footer>
                <p>
                    Dylan Temboucti - 2017
                </p>
            </footer>
        </div>
    );
  }
}

export default App;