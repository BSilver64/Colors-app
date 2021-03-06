import React from 'react';
import { Component } from 'react';
import Colorbox from './ColorBox';
import Navbar from './Navbar';
import './Palette.css';




class Palette extends Component {
    constructor(props){
        super(props);
        this.state = {level : 500};
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }

    changeLevel(level){

        this.setState({level});
      
    }

    changeFormat(val){
        this.setState({format: val});
    }
    render(){
        const { colors } = this.props.palette;
        const{level, format} = this.state;
        const colorBoxes = colors[level].map(color => (
            <Colorbox background={color[format]} name={color.name} />
        ));
        
    return (
        <div className="Palette">
            <div className="slider">
            <Navbar  level={level} changeLevel={this.changeLevel} handleChange={this.changeFormat}/>
            </div>
            <div className="Palette-colors">
            {colorBoxes}

            </div>
        </div>
    );
  }   
}


export default Palette;