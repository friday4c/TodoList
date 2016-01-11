var style = {
	color:"#DBE01B",
	border: "1px #000 solid",
};

var TodoList = React.createClass({
	render: function() {
		return (
			<p>testRender</p>
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