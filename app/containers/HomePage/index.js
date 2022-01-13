/**
 *
 * HomePage
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
import makeSelectHomePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import "./style.css"

export function HomePage() {

  const omekaArray = [
    {itemName: "Zwarte Doll", itemID: "#5"},
    {itemName: "Zwarte Toy", itemID: "#6"}
  ]

  return (
    <div>
      {omekaArray.map((element)=>{
        return <div className="item-holder"  >{element.itemName}{element.itemID}</div>
      })}
    </div>
  );
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  injectReducer({ key: 'homePage', reducer }),
  injectSaga({ key: 'homePage', saga }),
  withConnect,
  memo,
)(HomePage);
