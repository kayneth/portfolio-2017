import React, { Component } from 'react';
import './Skills.css';

import data from './skills.json';

export default class Skills extends Component {

    constructor(){
        super();

        this.state = {skills : []};
    }

    shuffle(a) {
        for (let i = a.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [a[i - 1], a[j]] = [a[j], a[i - 1]];
        }
        return a;
    }

    componentDidMount() {
        this.setState({skills: data});
    }

    render() {
        return (
            <div className="container-fluid">
                <ul className="skills">
                    {
                        this.shuffle(this.state.skills).map(item => (
                            <Skill key={item.title} skill={item}/>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

class Skill extends Component {

    render() {
        const { skill } = this.props;
        const style = {
            background: skill.type.color
        };
        return (
            <li className="skill" style={style}>
                <span>
                    {skill.title}
                </span>
            </li>
        )
    }
}
