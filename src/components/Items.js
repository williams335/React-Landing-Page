import React from 'react';


class Items extends React.Component{

	getStyle = () => {
		if(this.props.t.complete){
			return{
				backgroundColor: 'green'
			}
		} else{
			return {
				backgroundColor: 'white'
			}
		}
		}
  render() {
  return (
  	<h1 style={this.getStyle()} key={this.props.t.id}> { this.props.t.title }</h1> 
  	);
}
}

export default Items;
