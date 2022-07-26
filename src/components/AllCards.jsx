import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class AllCards extends Component {
  render() {
    const { savedCards, deleteButton, filterName, filterRare, filterTrunfo } = this.props;

    const filteredCard = () => {
      const trunfoFilter = savedCards.filter(({ cardTrunfo }) => cardTrunfo === true);

      if (filterTrunfo) return trunfoFilter;

      const nameFilter = savedCards
        .filter(({ cardName }) => cardName.includes(filterName));

      const rareFilter = nameFilter
        .filter(({ cardRare }) => cardRare === filterRare);

      return filterRare === 'todas' ? nameFilter : rareFilter;
    };

    return (
      <section className="card container">
        {
          filteredCard()
            .map((cardInfo, index) => (
              <section key={ index } className="saved container">

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
      </section>
    );
  }
}

AllCards.propTypes = {
  savedCards: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteButton: PropTypes.func.isRequired,
  filterName: PropTypes.string.isRequired,
  filterRare: PropTypes.string.isRequired,
  filterTrunfo: PropTypes.bool.isRequired,
};

export default AllCards;
