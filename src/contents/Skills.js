import React, { Component } from 'react'

class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'myskills':['JAVASCRIPT', 'REACT', 'HTML', 'CSS', 'RUBY', 'RAILS', 'SQLITE', 'POSTGRESQL', ]
        };
    }

    render() {
        return (
            <div className="condiv skills">
                <h1 className="subtopic">My Skills (whats the purpose of this page?)</h1>
                <ul>
                    {this.state.myskills.map((value) => {
                        return <li>{value}</li>
                    })}
                </ul>
            </div>
        )
    }
}
    
export default Skills