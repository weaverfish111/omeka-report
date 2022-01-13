/**
 *
 * MapPage
 *
 */

import React, { memo } from 'react';
import {Helmet} from "react-helmet";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from '../../utils/injectSaga';
import injectReducer from '../../utils/injectSaga';
import makeSelectMapPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import './style.css'
import { Link } from 'react-router-dom';

export function MapPage() {
  return (
    <div>
          <Link to="/">Home Page</Link>
          <Link to="/map-page">Map Page</Link>
          This is the map page
    </div>
  );
}

MapPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  mapPage: makeSelectMapPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  injectReducer({ key: 'mapPage', reducer }),
  injectSaga({ key: 'mapPage', saga }),
  withConnect,
  memo,
)(MapPage);
