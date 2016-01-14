var ToDoMainStructure = React.createClass({
	render: function() 
	{
		return (
			<div id="mainStructure">
				<div id="header">TodoList</div>
				<div id="mainContent"></div>
				<div id="footer"></div>
			</div>
		);
	},
});

ReactDOM.render(
	<ToDoMainStructure></ToDoMainStructure>,
  	document.getElementById("mainBody")
);