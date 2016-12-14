import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import TestUtils from 'react-addons-test-utils';

import User from '../../app/scripts/models/user';
import Session from '../../app/scripts/models/session';

describe('user model', () => {
  let newUser, session;

  before(() => {
    Session.initialize = function() {};
  });

  beforeEach(() => {
    newUser = new User();
    session = new Session();
  });

  // cannot test - involves ajax request
  it('should have a login method that changes the session\'s authenticated value', () => {
    newUser.login('max', 'password');
    expect(session.authenticated).to.equal('true');
  });

  // cannot test - involves ajax request
  it('should have a logout method that changes the session\'s authenticated value', () => {});

});
