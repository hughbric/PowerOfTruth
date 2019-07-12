import 'react-native';
import React from  'react';
import Home from '../src/Home';
import renderer from 'react-test-renderer';

test('Home snapShot', () => {
  const snap = renderer.create(
    <Home />
  ).toJSON();
  expect(snap).toMatchSnapshot();
});

