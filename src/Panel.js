import React, { Component } from 'react';
import './Panel.css';


class Panel extends Component {




    render() {
        console.log(this);
        return (
            <div className="Panel">
                <div className='Panel-Title'>{this.props.label}</div>
                <div className='Panel-Content'>{this.props.wert}</div>
            </div>
        )
    }
}



export default Panel;