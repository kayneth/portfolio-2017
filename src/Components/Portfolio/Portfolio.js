import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';
import './Portfolio.css';
import 'flexboxgrid-sass';
import config from '../../Config/Config';
import axios from 'axios'

export default class Portfolio extends Component
{

    constructor(props) {
        super(props);
        this.state = {items : []};
    }

    getProjects = (url) => {
        return axios.get(url)
            .then(function (res) {
                return res.data;
            })
            .catch(function (err) {
                console.log(err);
            })
    };

    getMedia = (url) => {
        return axios.get(url)
                .then((res) => {
                    // console.log(res.data);
                    return res.data;
                })
                .catch(function (err) {
                    console.log(err);
                })
    };

    componentDidMount() {
        let projectsUrl = config.api + "/works";
        let self = this;
        this.getProjects(projectsUrl)
            .then((res) => {
                self.setState({items: res});
                this.state.items.map(item => {
                    this.getMedia(item._links['wp:featuredmedia'][0].href).then(res => {
                        if(res.media_details.sizes['medium_large'])
                        {
                            item.image = res.media_details.sizes['medium_large'].source_url;
                        }else{
                            item.image = res.media_details.sizes['full'].source_url;
                        }

                        console.log(item.image);
                        self.setState({items: this.state.items});
                    })
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render ()
    {
        return (
            <div className="portfolio">
                <ul className="row project-list around-md">
                    {
                        this.state.items.map(item => (
                            <Project key={item.id} project={item}/>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

class Project extends Component
{
    render() {
        const { project } = this.props;

        return (
            <li className="portfolio-project col-xs-12 col-md-5">
                    <div className="row projet-wrapper">
                        <div className="img-container col-sm-6">
                            <Link to={ `/works/${project.id}` } className="link">
                                <img src={project.image} alt=" "/>
                            </Link>
                        </div>
                        <div className="content col-sm-6">
                            <div className="row">
                                <Link to={ `/works/${project.id}` } className="link col-xs-12">
                                    <h3 className="title">
                                        { project.title.rendered }
                                    </h3>
                                </Link>
                                <p className="description col-xs-12" dangerouslySetInnerHTML={{ __html: project.excerpt.rendered }}>
                                </p>
                            </div>
                            <div className="row technologies">
                                {/*{*/}
                                    {/*project.technologies.map( (item, index) => (*/}
                                            {/*<span className="technology" key={index}>*/}
                                                {/*# { item }*/}
                                            {/*</span>*/}
                                        {/*)*/}
                                    {/*)*/}
                                {/*}*/}
                            </div>
                        </div>
                    </div>
            </li>
        )
    }
}