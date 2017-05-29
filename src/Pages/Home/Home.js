import React, { Component } from 'react';
// import logo from '../../logo.svg';
import './Home.css';
import 'flexboxgrid-sass';
import ContactForm from "../../Components/ContactForm/ContactForm";
import AnimatedGradient from "../../Components/AnimatedGradient/AnimatedGradient";
import GithubProjects from "../../Components/GithubProjects/GithubProjects";
import Skills from "../../Components/Skills/Skills";
import Portfolio from "../../Components/Portfolio/Portfolio";

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
                    ['#C2185B', '#242F39'],
                    ['#E91E63', '#C2185B'],
                    ['#242F39', '#E91E63'],
                    ['#C2185B', '#242F39'],
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
                           Dylan Ballandras, Mage <span>&</span> Développeur web
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
                    <div>
                        <Portfolio/>
                        <Skills/>
                    </div>
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

    constructor() {
        super();
        this.description = "J'ai entrepris, lors de la fin de ma première année de DUT MMI, la rédaction d'un blog professionnel sur le thème du développement web et de l'intégration web. Il a pour but principal d'aider les autres étudiants de ma formation ou ceux qui souhaitent évoluer dans ces métiers. De manière plus personnelle, je me forme à la rédaction web pour la première fois. C'est d'ailleurs, un exercice qui demande un grand effort de veille ce qui me permet d'être continuellement à jour sur mes compétences."
    }

    render() {
        return (
            <section className="blog">
                <header>
                    <h1>
                        Mon blog
                    </h1>
                    <div className="row center-xs">
                        <p className="description container-fluid">
                            {this.description}
                        </p>
                        <a href="http://dylantemboucti.fr/blog/" className="cta" target="_blank">Mes articles</a>
                    </div>
                </header>
            </section>
        )
    }
}

class ContactSection extends Component {

    render() {
        return (
            <section className="contact">
                <ContactForm/>
            </section>
        )
    }
}