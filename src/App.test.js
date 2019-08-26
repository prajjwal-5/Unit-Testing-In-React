import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

test('Link changes the class with hovered', () => {
  const component = renderer.create(
    <App page="http.gmail.com">Facebook</App>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.onMouseEnter();

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();


  tree.props.onMouseLeave();

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})