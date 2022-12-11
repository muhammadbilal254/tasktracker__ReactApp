import PropTypes from 'prop-types';

const Button = ({color,title,onClick}) => {
  return  <button style={{backgroundColor:color}} className='btn' onClick={onClick}>{title}</button>
  
}

Button.defaultProps = {
    color : 'grey',
    text: 'demo',
}

Button.propTypes = {
    color : PropTypes.string,
    title : PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
