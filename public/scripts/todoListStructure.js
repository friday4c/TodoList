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
	deleteThing: function() {
		this.setState({
			allTodoThings: []
		});
	},
	render: function() {
		return (
			<div id="mainStructure">
				<div id="header">TodoList</div>
				<div id="mainContent">
					<TodoThingsList showTodoThings={this.state.allTodoThings} callbackFather={this.deleteThing}></TodoThingsList>
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
	deleteItem: function(event) {
		// var thingsArray = this.props.showTodoThings;
		// console.log(event.innerHTML);
		// var index = _.findIndex(thingsArray, {prop2: })
		// console.log('iiiii' + iiii);
		// console.log('xxx' + str);
		console.log(event.target);
		// this.props.callbackFather();
	},
	render: function() {
		var items = [];
		for (var item of this.props.showTodoThings) {
			items.push(<div className="todoThingItem" onClick={this.deleteItem}>{item}</div>);
		}
		return (
			<div id="displayArea">	
				{items}
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
		document.getElementById('managerAddContent').value = '';
		if (addingThing != '') {
			this.props.callbackFather(addingThing);
		}
	}
});


ReactDOM.render(
	<ToDoMainStructure></ToDoMainStructure>,
	document.getElementById("mainBody")
);