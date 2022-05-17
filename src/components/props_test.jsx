import React from 'react';
import PropTypes from 'prop-types';

const props_test = (props) => {
  const title = props.title || 'Default title';
  const description = props.description || 'Default description';
  const qty = props.qty || 0;

  return (
    <React.Fragment>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <h3>{qty + 5}</h3>
    </React.Fragment>
  )
}

props_test.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  qty: PropTypes.number
}

props_test.defaultProps = {
  title: 'Default title',
  description: 'Default description',
  qty: 0
}

export default props_test