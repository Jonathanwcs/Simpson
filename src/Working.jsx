import React, { Component } from 'react';
import "./index";
class Working extends Component {

    constructor(props) {
        super(props);
        this.state = {
          on: true
        };
      }

      handleClick = () => {
          this.setstate({on : !this.state.on});
      };

    render(){
        const work = this.state.on ? 'Homer work' : 'Homer is break';
        return(
            <div className='test'>
            <button onclick={this.handleClick} className={work}>{work}</button>
            <figure className={work}/>
            </div>
        );
    }
}

export default Working;