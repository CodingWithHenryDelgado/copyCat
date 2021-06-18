import React from 'react';
import PropTypes from 'prop-types';
import { styles } from '../styles';

const images = {
  copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};

export class CopyCat extends React.Component {
  render() {
    // eslint-disable-next-line 
    const { copying, toggleTape, value, handleChange, name} = this.props;

    return (
      <div style={styles.divStyles}>
        <h1 style={{marginBottom: 80}}>Copy Cat {name || 'Tom'}</h1>
        <input
          type='text'
          value={value}
          onChange={handleChange}
         />
        <img 
          alt='cat'
          src={copying ? images.copycat : images.quietcat}
          onClick={this.props.toggleTape}
          style={{height: '175px', width: '20%'}}
        />
        <p>{copying && value}</p>
      </div>
    );
  };
}

CopyCat.propTypes = {
  copying: PropTypes.bool.isRequired,
  toggleTape: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string
}