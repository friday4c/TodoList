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

var TodoList = React.createClass({
    getDefaultProps: function () {
	    console.log("getDefaultProps, 1");
	    return 
	    {
		    name : "prop name"
		};
    },
    getInitialState: function () {
	    console.log("getInitialState, 22222222");
	    return {
			nameList:[
    			"Tom",
    			"Jony"
    		],
	    };
	},
	render: function() {
		console.log('render, 33333333');
		var tString = '';
		for (var pStr of this.state.nameList){
			tString = tString + pStr + "\n";
		}
		console.log(tString);
		return (
			<div style={style}>
				<div style={cStyle}>{tString}</div>
				<InputTodoContent></InputTodoContent>
			</div>
		);
	}
});

var InputTodoContent = React.createClass({
	render: function() {
		return (
			<div>
		        <button id="add"></button>
		        <input id="newTodoContent"></input>
			</div>
		);
	}
});

ReactDOM.render(
  <div style={style}>
  	<TodoList></TodoList>
  </div>,
  document.getElementById('contentView')
);