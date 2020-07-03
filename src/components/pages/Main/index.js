import React, { Component } from "react";
import api from '../../../services/api';
import { link } from 'react-router-dom';

export default class Main extends Component {
    //armazena os dados
    state = {
        products: []
    }
    //faz a busca dos dados na API
    componentDidMount() {        
        this.loadproducts();
        
    }
        
    loadproducts = async () => {
        const response = await api.get('');
        console.log(response.data);
        const {docs} = response.data;
        this.setState({products: docs});
        
    }

    render(){
        return(
            <div>
                {
                    
                }
            </div>

        );
    }
}

