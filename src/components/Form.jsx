import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div>

        <label htmlFor="name-input">
          Nome da carta

          <input
            type="text"
            name="name-input"
            id="name-input"
            data-testid="name-input"
          />
        </label>

        <label htmlFor="description-input">
          Descrição da carta

          <textarea
            name="description-input"
            data-testid="description-input"
            id="description-input"
          />
        </label>

        <label htmlFor="attr1-input">
          Primeiro atributo da carta

          <input
            type="number"
            name="attr1-input"
            data-testid="attr1-input"
            id="attr1-input"
          />
        </label>

        <label htmlFor="attr2-input">
          Segundo atributo da carta

          <input
            type="number"
            name="attr2-input"
            data-testid="attr2-input"
            id="attr2-input"
          />
        </label>

        <label htmlFor="attr3-input">
          Terceiro atributo da carta

          <input
            type="number"
            name="attr3"
            data-testid="attr3-input"
            id="attr3-input"
          />
        </label>

        <label htmlFor="image-input">
          Imagem

          <input
            type="text"
            name="image-input"
            data-testid="image-input"
            id="image-input"
          />
        </label>

        <label htmlFor="rare-input">
          Raridade

          <select
            name="rare-input"
            data-testid="rare-input"
            id="rare-input"
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>

        <label htmlFor="trunfo-input">
          <input
            type="checkbox"
            name="trunfo-input"
            data-testid="trunfo-input"
            id="trunfo-input"
          />
          Super Trunfo?
        </label>

        <button
          type="button"
          data-testid="save-button"
        >
          Salvar
        </button>
      </div>
    );
  }
}

export default Form;
