import React, { Component } from 'react';
// import logo from '../../logo.svg';
import './Home.css';
import 'flexboxgrid-sass';
import ContactForm from "../../Components/ContactForm/ContactForm";
import AnimatedGradient from "../../Components/AnimatedGradient/AnimatedGradient";
import GithubProjects from "../../Components/GithubProjects/GithubProjects";

export default class Home extends Component {

    render()
    {
        return (
            <div className="Home container-fluid">
                <HeaderSection/>
                <main>
                    <PortfolioSection/>
                    <GithubSection/>
                    <BlogSection/>
                    <ContactSection/>
                </main>
            </div>
        );

    }
}

class HeaderSection extends Component {

    get states () {
        return {
            "default-state": {
                gradients: [
                    ['#834D9B', '#D04ED6'],
                    ['#1CD8D2', '#93EDC7']
                ]
            }
        }
    };

    render() {
        return (
            <header className="Home-header row middle-xs center-xs">
                <div className="content col-xs row middle-xs center-xs">
                   <div className="col-xs">
                       <h1 className="">
                           Dylan Temboucti, Mage & Développeur web
                       </h1>
                   </div>
                    {/*<img src={logo} className="Home-logo" alt="logo" />*/}
                    <AnimatedGradient id="header-gradient" states={this.states} direction="diagonal"/>
                </div>
            </header>
        )
    }
}

class PortfolioSection extends Component {

    render() {
        return (
            <section className="portfolio">
                <header>
                    <h1>
                        Mon Portfolio
                    </h1>
                </header>
            </section>
        )
    }
}

class GithubSection extends Component {

    render() {
        return (
            <section className="github">
                <header>
                    <h1>
                        Mes projets Github
                    </h1>
                    <article>
                        <GithubProjects/>
                    </article>
                </header>
            </section>
        )
    }
}

class BlogSection extends Component {

    render() {
        return (
            <section className="blog">
                <header>
                    <h1>
                        Mon blog
                    </h1>
                </header>
            </section>
        )
    }
}

class ContactSection extends Component {

    render() {
        return (
            <section className="contact">
                <header>
                    <h1>
                        Me contacter
                    </h1>
                </header>
                <main >
                    <p>N'hésitez pas à prendre contact avec moi pour tout projets ou questions.</p>
                    <ContactForm id="contact-form">

                    </ContactForm>
                </main>
            </section>
        )
    }
}