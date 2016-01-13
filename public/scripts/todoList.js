var style = {
	color:"#DBE01B",
	border: "1px #000 solid",
	height:"100%"
};

var cStyle = {
	// font-size:"200%",
	border: "1px #000 solid",
	height:"50%",
	textAlign:"center"
};

var allTodoThings = [
	"i want to buy ticket at 9:00am",
	"amy will go hiking with me at 12:00am",
	"Remember to settle a room"
];

var TodoList = React.createClass({
	getInitialState: function() {
		return {
			nameList: allTodoThings.slice(0)
		};
	},
	refreshTodoContentList: function () {
		//write to json//noooo-----> onClickCall
		console.log('rrrrrrrrrrefresh');
		//refresh state from json
		//change state , render 
		// this.state.nameList = allTodoThings.slice(0);
		this.setState({nameList: allTodoThings.slice(0)});
	},

	render: function() {
		console.log('render, 33333333');
		return (
			<div style={style}>
				<div style={cStyle}>
				{
					this.state.nameList.map(
						function (todoThing)
						{
							return <p>{todoThing}</p>
						}
					)
				}
				</div>
				<InputTodoContent callbackParent={this.refreshTodoContentList}></InputTodoContent>
			</div>
		);
	}
});

var InputTodoContent = React.createClass({
	onClickCall: function () {
		allTodoThings.push(document.getElementById("kkk").value);
		this.props.callbackParent();
	},

	render: function() {
		console.log('iiiiiiiiiiiirender');
		return (
			<form onSubmit={this.onClickCall}>
				<input id="kkk" type="text"></input>
				<input type="submit" value="Post"></input>
			</form>
		);
	}
});

ReactDOM.render(
  <div style={style}>
  	<TodoList></TodoList>
  </div>,
  document.getElementById('contentView')
);
