import React, { Component } from 'react';
// import logo from '../../logo.svg';
import './Home.css';
import 'flexboxgrid-sass';
import ContactForm from "../../Components/ContactForm/ContactForm";
import AnimatedGradient from "../../Components/AnimatedGradient/AnimatedGradient";
import GithubProjects from "../../Components/GithubProjects/GithubProjects";
import Skills from "../../Components/Skills/Skills";
import Portfolio from "../../Components/Portfolio/Portfolio";
import Tilt from 'react-tilt';
import FaGithub from 'react-icons/lib/fa/github';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaLinkedin from 'react-icons/lib/fa/linkedin';
import FaFileO from 'react-icons/lib/fa/file-o';

export default class Home extends Component {

    render()
    {
        return (
            <div className="Home container-fluid">
                <HeaderSection/>
                <main>
                    <PortfolioSection/>
                    <GithubSection/>
                    {/*<BlogSection/>*/}
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
                <Tilt Tilt className="Tilt content col-xs col-sm-10 row middle-xs center-xs" options={{ max : 10, reverse: true, scale: 1.05, speed: 100 }} >
                    <div className=" Tilt-inner">
                        <div className="col-xs Tilt-inner">
                            <h1 className="">
                                Dylan Ballandras, Mage <span>&</span> Développeur web
                            </h1>
                            <h2>
                                Développeur Front & Back-End
                            </h2>

                            <ul className="rsn">
                                <li>
                                    <a target="_blank" href="https://github.com/Kayneth">
                                       <FaGithub/>
                                        Kayneth
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" href="https://twitter.com/kayneth_light">
                                        <FaTwitter/>
                                        Kayneth_Light
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" href="https://www.linkedin.com/in/dballandras/">
                                        <FaLinkedin/>
                                        Dylan Ballandras
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" href="http://dylan-ballandras.fr/cv_ballandras_dylan.pdf">
                                        <FaFileO/>
                                        Mon CV
                                    </a>
                                </li>
                            </ul>

                        </div>
                        {/*<img src={logo} className="Home-logo" alt="logo" />*/}
                        <AnimatedGradient id="header-gradient" states={this.states} direction="diagonal"/>
                    </div>
                </Tilt>
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
                        <a href="http://dylan-ballandras.fr/blog/" className="cta" target="_blank">Mes articles</a>
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