'use strict';

const React = require('react');
const chai = require('chai');
const expect = chai.expect;
const sd = require('skin-deep');

const Map = require('./../client/components/Map.jsx');

describe ('React Unit Tests: Map', () => {
  let tree,instance;
  beforeEach(function () {
    tree = sd.shallowRender(
      <Map locations = [{lat: 34, lng: 35}] center = {lat: 34.1, lng: 35.1} />
    );

    instance = tree.getMountedInstance();
    vdom = tree.getRenderOutput();


  it('Renders a <div> with id "mapid"', () => {
    expect(vdom.type).toEqual('div');
    expect(vdom.props.id).toEqual('mapid');
  });
}
