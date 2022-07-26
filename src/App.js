import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import AllCards from './components/AllCards';
import Filters from './components/Filters';
import './App.css';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    savedCards: [],
    filterName: '',
    filterRare: 'todas',
    filterTrunfo: false,
  };

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(() => ({
      [name]: value,
    }), this.enableButton);
  }

  enableButton = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    const attr = this.verifyAttributes(cardAttr1, cardAttr2, cardAttr3);

    if (cardName && cardDescription && cardImage && cardRare && attr) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  }

  verifyAttributes = (attr1, attr2, attr3) => {
    let isValid = true;
    const maxPoints = 90;
    const maxTotalPts = 210;

    if (Number(attr1) > maxPoints || Number(attr1) < 0) isValid = false;
    if (Number(attr2) > maxPoints || Number(attr2) < 0) isValid = false;
    if (Number(attr3) > maxPoints || Number(attr3) < 0) isValid = false;

    if (Number(attr1) + Number(attr2) + Number(attr3) > maxTotalPts) isValid = false;

    return isValid;
  }

  onSaveButtonClick = () => {
    const cardObj = { ...this.state };

    this.saveCard(cardObj);
    this.clearForm();
  }

  clearForm = () => {
    this.setState({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
    });
  }

  saveCard = (card) => {
    this.setState(({ savedCards }) => ({
      savedCards: [...savedCards, card],
    }), this.findTrunfo);
  }

  findTrunfo = () => {
    const { savedCards } = this.state;
    const trunfo = savedCards.some((el) => el.cardTrunfo === true);

    if (trunfo) {
      this.setState({
        hasTrunfo: true,
        cardTrunfo: false,
      });
    }
  }

  deleteButton = ({ target }) => {
    const { id } = target;
    const { savedCards } = this.state;

    const updateCards = savedCards.filter((_, index) => index !== Number(id));
    const isTrunfo = savedCards[id].cardTrunfo;

    this.setState({
      hasTrunfo: !isTrunfo,
      savedCards: updateCards,
    });
  }

  render() {
    const { handleChange, onSaveButtonClick, deleteButton } = this;

    return (
      <main>

        <Form
          { ...this.state }
          onInputChange={ handleChange }
          onSaveButtonClick={ onSaveButtonClick }
        />

        <Card
          { ...this.state }
        />

        <AllCards
          { ...this.state }
          deleteButton={ deleteButton }
        />

        <Filters
          { ...this.state }
          onInputChange={ handleChange }
        />

      </main>
    );
  }
}

export default App;
