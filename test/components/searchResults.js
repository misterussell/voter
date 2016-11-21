import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import TestUtils from 'react-addons-test-utils';

import SearchResults from '../../app/scripts/components/SearchResults';

describe('search results list', () => {
  let list;

  beforeEach(() => {
    list = shallow(<SearchResults />);
  });

  it('should output an ul', () => {
    expect(list).to.have.tagName('ul');
  });

});
