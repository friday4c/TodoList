var RenderComponentTwo = React.createClass({
	render: function() {
		return (
			<div id="RenderBoxTwo"></div>
		);
	}
});

ReactDOM.render(
	<div id="fatherBox">
		<RenderComponentTwo></RenderComponentTwo>
	</div>,
  document.getElementById('contentYYY')
);