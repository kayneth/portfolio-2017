import React, { Component } from 'react';

import './Portfolio.css';
import 'flexboxgrid-sass';
import data from './portfolio.json';

export default class Portfolio extends Component
{

    constructor(props) {
        super(props);
        this.state = {items : []};
    }

    componentDidMount() {
        this.setState({items: data});
    }

    render ()
    {
        return (
            <div>
                <ul className="row">
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
            <div className="col-xs-12 col-sm-6">
                <li className="github-project row">
                    <h3 className="title col-xs-12">
                        <a href={ project.url } target="_blank" className="link">
                            { project.title }
                        </a>
                    </h3>
                    <p className="description col-xs-12">
                        { project.description }
                    </p>
                </li>
            </div>
        )
    }
}