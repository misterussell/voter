import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import sinon from 'sinon';

import Bands from '../../app/scripts/collections/bands';

describe('bands collection', () => {
  // let xhr, requests, bands;

  // before(() => {
  //   bands = new Bands();
  //   xhr = sinon.useFakeXMLHttpRequest();
  //   requests = [];
  //   xhr.onCreate = function(req) { requests.push(req); };
  // });

  // after(() => {
  //   xhr.restore();
  // });
  //
  // it('makes a GET request for search results', () => {
  //   bands.getBands('test', sinon.spy());
  //
  //   expect(requests.length).to.equal(1);
  //   expect(requests[0].url).to.be('https://api.spotify.com/v1/search?q=test&type=artist');
  // });

});
