import React from 'react';
import {css} from '@emotion/core';
import HashLoader from 'react-spinners/HashLoader';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const override = css`
  display: block;
  margin: auto;
`;
const loadWrapper = {
  height: '100vh',
  background: '#000000c2',
  display: 'flex',
  position: 'fixed',
  zIndex: '5',
  width: '100vw',
};

const Spinner = ({loading}) => {
  return (
    <div style={loadWrapper} className={loading ? '' : 'd-none'}>
      <HashLoader
        loader={'HashLoader'}
        css={override}
        size={150}
        color={'#03A677'}
        loading={loading}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.global.loading,
});

export default connect(mapStateToProps)(Spinner);
