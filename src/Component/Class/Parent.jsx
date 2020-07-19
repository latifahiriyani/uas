import React, { Component } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

class Parent extends Component {
    constructor(porps) {
        super(porps)

        this.state = {
            stock: 15
        }
    }

    beliProduk = (jumlah) => {
        this.setState({
            stock: this.state.stock - jumlah
        })
    }

    render() {
        return (
            <div>
                <Child1
                    stock={this.state.stock}
                    fungsi={this.beliProduk.bind(this)} />
                <Child2 stock={this.state.stock} />
            </div>
        )
    }
}

export default Parent