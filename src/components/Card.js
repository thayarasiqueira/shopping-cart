import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { id } = this.props;
    // usa o || '[]' para caso não tenha nada, criar array vazio
    const acessarLocalStorage = JSON.parse(localStorage.getItem('id') || '[]');
    // usa os ... para manter o que já tinha e adicionar o novo id clicado
    localStorage.setItem('id', JSON.stringify([...acessarLocalStorage, id]));
  }

  render() {
    const { title, price, image } = this.props;
    return (
      <section data-testid="product" className="container-card">
        <h3>{title}</h3>
        <img src={ image } alt={ title } />
        <h4>{ price }</h4>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ this.handleClick }
        >
          adicionar ao carrinho
        </button>
      </section>
    );
  }
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;
