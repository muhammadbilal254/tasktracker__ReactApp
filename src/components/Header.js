import PropTypes from 'prop-types';
import Button from './Button';



const Header = (props) => {

   
  return (
    <header className='header'>
      <h1 >{props.title}</h1>
      <Button color={props.showAdd ? "red":"green"} title={props.showAdd ? "close":"add"} onClick={props.onAdd}/>
    </header>
  )
}


Header.defaultProps = {
    title : "Task tracker"
}

Header.propTypes = {
    title : PropTypes.string
}

// CSS Styling
// const headerStyle = {
//     color: 'red',
//     backgroundColor : 'black',
// }


export default Header
