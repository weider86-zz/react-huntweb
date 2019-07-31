import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './product.css'; 

export default class Product extends Component {
    state = {
        product: {}
    }
    async componentDidMount() {
        const { id } = this.props.match.params;
        
        console.log('this.props.match.params = ', id);

        const response = await api.get(`/products/${id}`);

        this.setState({
            product: response.data
        })
    }
    render() {

        const  { product } = this.state;

        return (
            <div className="product-info">
                <div className="product-info__content">
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <p>
                        Acesse: <a href={product.url}>{product.url}</a>
                    </p>
                </div>
                <div className="actions">
                    <Link className="link" to={'/'}>Voltar</Link>
                </div>
            </div>
        )
    }
}