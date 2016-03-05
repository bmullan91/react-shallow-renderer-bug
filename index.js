var test = require('tape');
var React = require('react');
var ReactDOM = require('react-dom');
var ReactTestUtils = require('react-addons-test-utils');

var StatelessComponent = function(props) {
  return React.createElement('div', null, 'Hello ', props.name);
}

var StatefulComponent = React.createClass({
  render: function() {
    return React.createElement('div', null, 'Hello ', this.props.name);
  }
});

var expected = React.createElement('div', null, 'Hello ', 'Brian');

test('compare StatelessComponent shallowRenderer getRenderOutput', function(t) {
  t.plan(1);

  var shallowRenderer = ReactTestUtils.createRenderer();
  shallowRenderer.render(React.createElement(StatelessComponent, { name: 'Brian' }));
  var actual = shallowRenderer.getRenderOutput();

  t.deepEqual(actual, expected);
});


test('compare StatefulComponent shallowRenderer getRenderOutput', function(t) {
  t.plan(1);

  var shallowRenderer = ReactTestUtils.createRenderer();
  shallowRenderer.render(React.createElement(StatefulComponent, { name: 'Brian' }));
  var actual = shallowRenderer.getRenderOutput();

  t.deepEqual(actual, expected);
});
