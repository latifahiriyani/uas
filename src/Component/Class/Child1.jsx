import React , {Component} from 'react'

class Child1 extends Component {
    constructor(porps) {
        super(porps)

        this.state = {
         
    }
}
minBeli = 2;
    render() {
        return (<div>
            <h3>Child 1</h3>
            <p>Stok Produk : {this.props.stock}</p>
            <button onClick={()=>this.props.fungsi(this.minBeli)}>Beli</button>
            </div>

        )
    }
}

export default Child1