import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Nav from '../../app/scripts/components/nav';

describe('nav component', () => {
  let nav;

  beforeEach(() => {
    nav = shallow(<Nav />);
  });

  it('should be a div', () => {
    expect(nav).to.have.tagName('div');
  });

  it('should contain a nav', () => {
    expect(nav).to.have.exactly(1).descendants('nav');
  });

});
