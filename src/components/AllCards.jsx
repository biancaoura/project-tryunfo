import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class AllCards extends Component {
  render() {
    const { savedCards } = this.props;
    return (
      <div>
        {
          savedCards.map(({ cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo }) => (
            <Card
              key={ cardName }
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
            />
          ))
        }
        {/* renderizar todas as cartas que estão no savedCards */}
        {/* atualizar lista sempre que clicar no botão Salvar */}
      </div>
    );
  }
}

AllCards.propTypes = {
  savedCards: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AllCards;
