import React, { Component } from 'react';

export default class Tag extends Component
{

    constructor(props) {
        super(props);
    }

    render ()
    {
        const { tag } = this.props;
        return (
            <span className="tag">
                #{tag}
            </span>
        )
    }
}