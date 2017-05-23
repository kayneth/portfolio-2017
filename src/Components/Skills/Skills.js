import React, { Component } from 'react';
import './Skills.css';

export default class Skills extends Component {

    constructor(){
        super();
        this.languages = [
            {
                name: "Javascript",
                color: "#ec407a"
            },
            {
                name: "PHP",
                color: "#f5d555"
            },
            {
                name: "CSS",
                color: "#528ff5"
            },
            {
                name: 'Génie Logicielle',
                color: "#45ef87"
            }
        ];

        this.skills = [
            {
                title: 'AngularJS',
                language: this.languages[0],
            },{
                title: 'ReactJS',
                language: this.languages[0],
            },
            {
                title: 'Symfony',
                language: this.languages[1]
            },
            {
                title: 'Sass',
                language: this.languages[2]
            },
            {
                title: 'ES6',
                language: this.languages[0]
            },
            {
                title: 'UML',
                language: this.languages[3]
            },
            {
                title: 'API RESTful',
                language: this.languages[3]
            }
        ]
    }

    shuffle(a) {
        for (let i = a.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [a[i - 1], a[j]] = [a[j], a[i - 1]];
        }
        return a;
    }

    render() {
        return (
            <div className="container-fluid">
                <ul className="skills">
                    {
                        this.shuffle(this.skills).map(item => (
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
            background: skill.language.color
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
