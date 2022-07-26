import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class AllCards extends Component {
  render() {
    const { savedCards } = this.props;
    return (
      <div>
        {
          savedCards.map((cardInfo, index) => (
            <Card
              { ...cardInfo }
              key={ index }
            />
          ))
        }
      </div>
    );
  }
}

AllCards.propTypes = {
  savedCards: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AllCards;
