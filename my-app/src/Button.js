import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './index.css';
import {Image} from 'cloudinary-react';


const proptypes = {
	openUploadWidget: PropTypes.func,
	publicId: PropTypes.string
}

export default class Button extends Component {
	render(){
		return(
			<div className={'center'}>
				<div className={'overlay'}>
					<Image cloudName="rcstraus" publicId={this.props.publicId} width="300" crop="scale"/>
				</div>
				<input className={'smlBtn'} 
					type='button'
					value='click me'
					onClick={this.props.openUploadWidget}
				/>
			</div>
		);
	}
}

Button.proptypes = proptypes;

