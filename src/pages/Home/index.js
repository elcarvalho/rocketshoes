import React, { Component } from 'react';
import {MdShoppingCart} from 'react-icons/md'
import api from '../../services/api'

import { ProductList } from './styles';

export default class Home extends Component {

  state = {
    products: []
  }

  async componentDidMount() {
    const response = await api.get('products');

    this.setState({
      products: response.data
    })
  }

  render() {
    return <ProductList>
    <li>
      <img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/06/HZM-1731-006/HZM-1731-006_detalhe2.jpg?resize=326:*" alt="Tênis Nike Revolution 5 Masculino"/>
      <strong>Tênis Nike Revolution 5 Masculino</strong>
      <span>R$ 129,90</span>
      <button type="button">
        <div>
          <MdShoppingCart size="16" color="#FFF" /> 3
        </div>
        <span>ADICIONAR AO CARRINHO</span>
      </button>
    </li>
    <li>
      <img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/06/HZM-1731-006/HZM-1731-006_detalhe2.jpg?resize=326:*" alt="Tênis Nike Revolution 5 Masculino"/>
      <strong>Tênis Nike Revolution 5 Masculino</strong>
      <span>R$ 129,90</span>
      <button type="button">
        <div>
          <MdShoppingCart size="16" color="#FFF" /> 3
        </div>
        <span>ADICIONAR AO CARRINHO</span>
      </button>
    </li>
    <li>
      <img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/06/HZM-1731-006/HZM-1731-006_detalhe2.jpg?resize=326:*" alt="Tênis Nike Revolution 5 Masculino"/>
      <strong>Tênis Nike Revolution 5 Masculino</strong>
      <span>R$ 129,90</span>
      <button type="button">
        <div>
          <MdShoppingCart size="16" color="#FFF" /> 3
        </div>
        <span>ADICIONAR AO CARRINHO</span>
      </button>
    </li>
    <li>
      <img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/06/HZM-1731-006/HZM-1731-006_detalhe2.jpg?resize=326:*" alt="Tênis Nike Revolution 5 Masculino"/>
      <strong>Tênis Nike Revolution 5 Masculino</strong>
      <span>R$ 129,90</span>
      <button type="button">
        <div>
          <MdShoppingCart size="16" color="#FFF" /> 3
        </div>
        <span>ADICIONAR AO CARRINHO</span>
      </button>
    </li>
    <li>
      <img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/06/HZM-1731-006/HZM-1731-006_detalhe2.jpg?resize=326:*" alt="Tênis Nike Revolution 5 Masculino"/>
      <strong>Tênis Nike Revolution 5 Masculino</strong>
      <span>R$ 129,90</span>
      <button type="button">
        <div>
          <MdShoppingCart size="16" color="#FFF" /> 3
        </div>
        <span>ADICIONAR AO CARRINHO</span>
      </button>
    </li>
    <li>
      <img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/06/HZM-1731-006/HZM-1731-006_detalhe2.jpg?resize=326:*" alt="Tênis Nike Revolution 5 Masculino"/>
      <strong>Tênis Nike Revolution 5 Masculino</strong>
      <span>R$ 129,90</span>
      <button type="button">
        <div>
          <MdShoppingCart size="16" color="#FFF" /> 3
        </div>
        <span>ADICIONAR AO CARRINHO</span>
      </button>
    </li>
  </ProductList>;
  }
}
