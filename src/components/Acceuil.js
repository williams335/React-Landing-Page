import React from 'react';
import './Acceuil.css';
import Items from './Items'

class Acceuil extends React.Component{

	
  render() {
  return this.props.todos.map((t) =>(
  	<Items t={t}/>
  	));
}
}

export default Acceuil;
