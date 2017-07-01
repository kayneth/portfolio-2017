import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import './Work.css';
import 'flexboxgrid-sass';
import axios from 'axios';
import config from '../../Config/Config';

export default class Work extends Component {

    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }

    constructor(props)
    {
        super(props)
        const { match, location, history } = this.props;
        this.id = match.params.work;
        this.state = {work : []};
    }

    getProject = (url) => {
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
        let projectsUrl = config.api + "/works/" + this.id;
        let self = this;
        this.getProject(projectsUrl)
            .then((res) => {
                let work = res;
                self.setState({work: [work]});

                this.getMedia(work._links['wp:featuredmedia'][0].href).then(res => {
                    work.image = res.media_details.sizes['hestia-blog'].source_url;
                    console.log(work.image);
                    self.setState({work: [work]});
                })
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render()
    {
        let work = this.state.work;
        console.log(work);

        return (
            <div className="Work container-fluid">
                {
                    this.state.work.map(item => (
                        <Realisation key={item.id} project={item} />
                    ))
                }
            </div>
        );

    }
}

class Realisation extends Component
{
    render() {
        const { project } = this.props;

        return (
            <div className="portfolio-project col-xs-12">
                <div className="row projet-wrapper">
                    <div className="img-container col-xs-12">
                        <div className="row center-xs middle-xs">
                            <div className="col-sm-6">
                                <div className="img-overlay"/>
                                <img src={project.image} alt=" "/>
                            </div>
                        </div>
                    </div>
                    <div className="content-wrapper col-xs-12">
                        <div className="row">
                            <h1 className="title col-xs-12">
                                <a href={project.link} target="_blank" className="link col-xs-12 col-sm-6">
                                    { project.title.rendered }
                                </a>
                            </h1>
                            <p className="content col-xs-12 col-sm-6" dangerouslySetInnerHTML={{ __html: project.content.rendered }} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}