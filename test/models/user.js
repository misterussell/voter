import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import TestUtils from 'react-addons-test-utils';

import User from '../../app/scripts/models/user';

describe('user model', () => {
  let newUser;

  beforeEach(() => {
    newUser = new User();
  });

  it('should have a register method', () => {});

  it('should have a login method', () => {});

  it('should have a logout method', () => {});

});
