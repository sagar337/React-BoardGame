import React, { Component } from 'react';
import Square from "./Square"
import calculateWinner from "./calculateWinner"

class Board extends Component{

/*constructor(){
	super()
	this.state={
		squares:Array(9).fill(null),
		xIsNext:true
	};
//	this.handleClick = this.handleClick.bind(this)
//	this.squareRender= this.squareRender.bind(this)
}*/
	
	/*handleClick(i){
		
		const squares = this.state.squares.slice();
		if(calculateWinner(squares) || squares(i))
		{
			return;
		}
		squares[i] = this.state.xIsNext?  'X'  : 'O';
		this.setState({squares:squares,
							xIsNext:!this.state.xIsNext,
							});
	}*/
	squareRender(i){
		return< Square 
					value={this.props.squares[i]}   //old state to transfer state to child component and new props. to transfer state to parent component
 					onClick={()=>{this.props.handleClick(i)}}
					/>
	}
	 
	
	
	render(i){
		/*const winner= calculateWinner(this.state.squares)
		let status;
		if(winner){
			status="Winner    :" + winner;
		}
		else
		{
			status="Next player: X"    +(this.state.xIsNext  ? 'X'  :	'O');
		}*/
		return(
		<div>
				<div className="status">{status}</div>
				<div className="board-row">
				{this.squareRender(0)}
				{this.squareRender(1)}
				{this.squareRender(2)}
				</div>
				<div className="board-row">
				{this.squareRender(3)}
				{this.squareRender(4)}
				{this.squareRender(5)}
				</div>
				<div className="board-row">
				{this.squareRender(6)}
				{this.squareRender(7)}
				{this.squareRender(8)}
				</div>				
		</div>
		)
}
}

export default Board;