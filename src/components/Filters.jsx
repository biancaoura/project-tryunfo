import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filters extends Component {
  render() {
    const { onInputChange, filterName, filterRare, filterTrunfo } = this.props;

    return (
      <section className="filter container input">

        <h1>Filtros</h1>
        <label htmlFor="name-filter">
          Nome

          <input
            type="text"
            name="filterName"
            data-testid="name-filter"
            id="name-filter"
            placeholder="Nome da carta"
            value={ filterName }
            onChange={ onInputChange }
            disabled={ filterTrunfo }
          />
        </label>

        <label htmlFor="rare-filter">
          Raridade

          <select
            name="filterRare"
            data-testid="rare-filter"
            id="rare-filter"
            value={ filterRare }
            onChange={ onInputChange }
            disabled={ filterTrunfo }
          >
            <option value="todas">Todas</option>
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>

          </select>

        </label>

        <label htmlFor="trunfo-filter">

          <input
            type="checkbox"
            name="filterTrunfo"
            id="trunfo-filter"
            data-testid="trunfo-filter"
            checked={ filterTrunfo }
            onChange={ onInputChange }
          />
          Super Trunfo

        </label>

      </section>
    );
  }
}

Filters.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  filterName: PropTypes.string.isRequired,
  filterRare: PropTypes.string.isRequired,
  filterTrunfo: PropTypes.bool.isRequired,
};

export default Filters;
