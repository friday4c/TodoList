var TodoThingsList = React.createClass({
	getInitialState: function() {
		return {
			thingsArray:
			[
				"9:00am : Work",
				"10:00am: Drink"
			]
		};
	},
	render: function() {
		return (
				<div id="displayArea">
				{
					this.state.thingsArray.map
					(
						function (thingTodo)
						{
							return <div>{thingTodo}</div>
						}
					)
				}
				</div>
		);
	}
});
	
ReactDOM.render(
	<TodoThingsList></TodoThingsList>,
	document.getElementById('mainContent')
);