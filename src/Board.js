import React, { Component } from 'react';
import Square from "./Square"
import calculateWinner from "./calculateWinner"

class Board extends Component{


	squareRender(i){
		return< Square 
					value={this.props.squares[i]}   
 					onClick={()=>this.props.onClick(i)}
					/>
	}
	 
	
	
	render(i){
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