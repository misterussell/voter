import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import TestUtils from 'react-addons-test-utils';

import Nav from '../../app/scripts/components/nav';

describe('nav component', () => {
  let nav;

  beforeEach(() => {
    nav = shallow(<Nav />);
  });

  it('should output a nav', () => {
    expect(nav).to.have.tagName('div');
  });

  //test that correct number of links appear depending on whether
  //the url is for the login or sign up page
});
