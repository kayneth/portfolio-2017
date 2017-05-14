import React, { Component } from 'react';
import PropsType from 'prop-types';
import axios from 'axios';
import './GithubProjects.css';

export default class GithubProjects extends Component {

    constructor(props) {
        super(props);
        this.updatedProjects = "https://api.github.com/users/kayneth/repos?sort=updated";
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

    componentDidMount() {
        let self = this;
        this.getProjects(this.updatedProjects)
            .then(function (res) {
                self.setState({items: res.slice(0,4)});
            })
    }

    render() {
        return (
            <div className="container-fluid">
                <ul className="github-projects row">
                    {
                        this.state.items.map(item => (
                            <Project key={item.id} project={item}/>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

class Project extends Component {

    render() {
        const { project } = this.props;
        return (
            <div className="col-xs-12 col-sm-6">
                <li className="github-project row">
                    <h3 className="title col-xs-12">
                        <a href={ project.clone_url } target="_blank" className="link">
                            { project.name }
                        </a>
                    </h3>
                    <p className="description col-xs-12">
                        { project.description }
                    </p>
                    <div className="language col-xs-12">
                        #{project.language}
                    </div>
                </li>
            </div>
        )
    }
}
