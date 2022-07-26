import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class AllCards extends Component {
  render() {
    const { savedCards, deleteButton, filterName } = this.props;

    const filteredCard = savedCards
      .filter((card) => card.cardName.includes(filterName));

    return (
      <div>
        {
          filteredCard
            .map((cardInfo, index) => (
              <section key={ index }>

                <Card
                  { ...cardInfo }
                />

                <button
                  id={ index }
                  type="button"
                  data-testid="delete-button"
                  onClick={ deleteButton }
                >
                  Excluir
                </button>

              </section>
            ))
        }
      </div>
    );
  }
}

AllCards.propTypes = {
  savedCards: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteButton: PropTypes.func.isRequired,
  filterName: PropTypes.string.isRequired,
};

export default AllCards;
