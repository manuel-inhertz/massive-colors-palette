import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Slider from 'rc-slider';
import "rc-slider/assets/index.css";
import './Navbar.css';

class Navbar extends Component {

    constructor(props) {
		super(props);
		this.state = { format: "hex" };
		this.handleChange = this.handleChange.bind(this);
	}
	
	handleChange(e) {
		this.setState({ format: e.target.value });
		this.props.handleChange(e.target.value);
	}

    render() {
    	const { level, changeLevel } = this.props;
        return (
            <header className="Navbar">
            	<div className="logo">
            		<a href="#">reactcolorpicker</a>
            	</div>
            	<nav>
            		<div className="slider-container">
            			<span>Level: {level}</span>
            			<div className="slider">
			                <Slider 
			                  defaultValue={level}
			                  min={100}
			                  max={900} 
			                  step={100} 
			                  onAfterChange={changeLevel}
			                />
			            </div>
            		</div>
					<div className="select-container">
						<Select value={this.state.format} onChange={this.handleChange}>
							<MenuItem value="hex">HEX - #fff</MenuItem>
							<MenuItem value="rgb">RGB - rgb(255,255,255,1.0)</MenuItem>
							<MenuItem value="rgba">HEX - rgba(255,255,255,1.0)</MenuItem>
						</Select>
					</div>
            	</nav>
            </header>
        );
    }
}

export default Navbar;
