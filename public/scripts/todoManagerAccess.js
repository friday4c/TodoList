var ToDoManagerAccess = React.createClass({
	render: function() 
	{
		return (
			<div id="managerSelectorAdd"></div>
		);
	},
	handleClick: function (event) 
	{
		console.log('yyy');
	}
});

ReactDOM.render(
	<ToDoManagerAccess></ToDoManagerAccess>,
 	document.getElementById('footer')
);