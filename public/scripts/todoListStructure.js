var ToDoMainStructure = React.createClass({
	getInitialState: function() {
		return {
			allTodoThings: [],
		};
	},
	addTodoThing: function(addingThing) {
		console.log('father' + addingThing);
		var thingsArray = this.state.allTodoThings;
		thingsArray.push(addingThing);
		this.setState({
			allTodoThings: thingsArray
		});
	},

	render: function() {
		return (
			<div id="mainStructure">
				<div id="header">TodoList</div>
				<div id="mainContent">
					<TodoThingsList showTodoThings={this.state.allTodoThings}></TodoThingsList>
				</div>
				<ToDoManagerAccess callbackFather={this.addTodoThing}></ToDoManagerAccess>
			</div>
		);
	},
});

var TodoThingsList = React.createClass({
	getInitialState: function() {
		return {
			thingsArray: [
				"9:00am : Work",
				"10:00am: Drink"
			]
		};
	},
	render: function() {
		return (
			<div id="displayArea">	
				{
					this.props.showTodoThings.map
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

var ToDoManagerAccess = React.createClass({
	render: function() {
		return (
			<div id="footer">
				<div id="managerSelectorAddButton" onClick={this.handleClick}></div>
				<textarea id="managerAddContent"></textarea>
			</div>
		);
	},
	handleClick: function(event) {
		var addingThing = document.getElementById('managerAddContent').value;
		// document.getElementById('managerAddContent').value = '';
		this.props.callbackFather(addingThing);
	}
});


ReactDOM.render(
	<ToDoMainStructure></ToDoMainStructure>,
	document.getElementById("mainBody")
);