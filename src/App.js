import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from "./Board"
import calculateWinner from "./calculateWinner"

class App extends Component {
  
  constructor(props){
	super(props)
	this.state={
		history:[{squares:Array(9).fill(null)}],
		xIsNext:true,
		stepNumber:0
		}
	
	this.handleClick = this.handleClick.bind(this)
	this.jumpTo = this.jumpTo.bind(this)
}
  
  	handleClick(i){
		const history = this.state.history.slice(0,this.state.stepNumber+1);
	const  current= history[this.state.stepNumber]
		const squares = current.squares.slice();
		if(calculateWinner(squares) || squares[i])
		{
			return;
		}
		squares[i] = this.state.xIsNext?  'X'  : 'O';
		this.setState({
			history:history.concat([{squares:squares}]),
							xIsNext:!this.state.xIsNext,
							stepNumber:history.length
							});
	}
  
  jumpTo(step){
	  this.setState({
		  stepNumber:step,
		  xIsNext:(step%2)===0
	  })
  }
  render() {
    const history = this.state.history;
	const  current= history[history.length-1]
	const winner= calculateWinner(current.squares)
	
	const moves =history.map((step,move)=>{
		
		const desc=move?
		'Go to move #'+move:
		'Go to game start';
		
		
		return(
				<li  key={move}>
					<button onClick={()=>this.jumpTo(move)}>{desc}</button>
				</li>
		)
	})
	
	let status;
		if(winner){
			status="Winner    :" + winner;
		}
		else
		{
			status="Next player: "    +(this.state.xIsNext  ? 'X'  :	'O');
		}
	
	
	return (
      <div className="App">
				<Board 
				squares ={current.squares}
				onClick={(i) => this.handleClick(i)}
				/>
		<div>{status}</div>
		<div>{moves}</div>
	</div>
	  
    );
  }
}

export default App;
