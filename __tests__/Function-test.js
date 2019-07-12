import 'react-native';
import React from 'react';
import Home from '../src/Home';

import renderer from 'react-test-renderer';

it('function and state test care', () => {
  let HomeData= renderer.create(<Home />).getInstance();
  console.log('HomeData');
  expect(HomeData).toBe;
});
