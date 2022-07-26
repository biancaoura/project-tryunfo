import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filters extends Component {
  render() {
    const { filterName, onInputChange } = this.props;

    return (
      <div>

        <label htmlFor="name-filter">
          Buscar carta

          <input
            type="text"
            name="filterName"
            id="name-filter"
            placeholder="Nome da carta"
            data-testid="name-filter"
            value={ filterName }
            onChange={ onInputChange }
          />
        </label>

      </div>
    );
  }
}

Filters.propTypes = {
  filterName: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Filters;
