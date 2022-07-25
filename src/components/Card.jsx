import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <div>
        <h1
          data-testid="name-card"
        >
          {cardName}

        </h1>

        <img src={ cardImage } alt={ cardName } data-testid="image-card" />

        <h4 data-testid="description-card">{cardDescription}</h4>

        <p data-testid="attr1-card">{cardAttr1}</p>
        <p data-testid="attr2-card">{cardAttr2}</p>
        <p data-testid="attr3-card">{cardAttr3}</p>

        <p data-testid="rare-card">{cardRare}</p>

        {cardTrunfo ? <p data-testid="trunfo-card">Super Trunfo</p> : ''}

      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
};

Card.defaultProps = {
  cardName: 'nome da carta',
  cardDescription: 'descrição da carta',
  cardAttr1: 'atributo 1',
  cardAttr2: 'atributo 2',
  cardAttr3: 'atributo 3',
  cardImage: 'imagem da carta',
  cardRare: 'raridade da carta',
  cardTrunfo: false,
};

export default Card;
