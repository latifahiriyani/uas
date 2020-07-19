import React , {Component} from 'react'
import GrandChild from './GrandChild'

    class Child2 extends Component {
        constructor(porps) {
        super(porps)

        this.state = {
         
    }
}
     render() {
     return (
        <div>
            <h3>Child 2</h3>
            <GrandChild data={this.props.stock}/>
            </div>
    )
    }
    }

export default Child2