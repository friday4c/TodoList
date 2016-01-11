var style = {
	color:"#DBE01B",
	border: "1px #000 solid",
};

var todoThings = "firstThing at 1:00:00";

var TodoList = React.createClass({
	render: function() {
		return (
			<p>{todoThings}</p>
		);
	}
});

var InputTodoContent = React.createClass({
	render: function() {
		return (<p>xxx</p>);
	}
});

ReactDOM.render(
  <div style={style}><TodoList></TodoList></div>,
  document.getElementById('midView')
);