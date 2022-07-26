import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class AllCards extends Component {
  render() {
    const { savedCards, deleteButton } = this.props;
    return (
      <div>
        {
          savedCards.map((cardInfo, index) => (
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
};

export default AllCards;
