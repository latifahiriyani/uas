import React, { PureComponent } from 'react'
import axios from 'axios'
import qs from 'querystring'
import { Table, Button, Container, NavLink, Alert } from 'reactstrap'
import { Link } from 'react-router-dom'

const api = 'http://localhost:3001'

class ListSupplierComp extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            supplier: [],
            response: '',
            display: 'none'
        }
    }

    componentDidMount() {
        axios.get(api + '/tampilsupplier').then(res => {
            this.setState({
                supplier: res.data.values
            })
        })
    }

    Deletesupplier = (idsupplier) => {
        const { supplier } = this.state
        const data = qs.stringify({
            id_supplier: idsupplier
        })

        axios.delete(api + '/hapussupplier',
            {
                data: data,
                headers: { 'Content-type': 'application/x-www-form-urlencoded' }
            }
        ).then(json => {
            if (json.data.status === 200) {

                this.setState({
                    response: json.data.values,
                    supplier: supplier.filter(supplier => supplier.id_supplier !== idsupplier),
                    display: 'block'
                })
                this.props.history.push('/supplier')
            } else {
                this.setState({
                    response: json.data.values,

                    display: 'block'
                })
                //this.props.history.push('/supplier')
            }
        });
    }



    render() {
        return (
            <Container>
                <h2>Data Supplier</h2>
                <Alert color="secondary" style={{ display: this.state.display }}>
                    {this.state.response}
                </Alert>
                <NavLink href="/supplier/tambahsupplier"><Button color="primary">Tambah Data</Button></NavLink>
                <hr />
                <Table dark className="table-bordered">
                    <thead>
                        <tr>
                            <th>Kode Supplier</th>
                            <th>Nama Supplier</th>
                            <th>Alamat</th>
                            <th>No Telepon</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.supplier.map(supplier =>
                            <tr key={supplier.id_supplier}>
                                <td>{supplier.kode_supplier}</td>
                                <td>{supplier.nama_supplier}</td>
                                <td>{supplier.alamat}</td>
                                <td>{supplier.no_tlp}</td>
                                <td>
                                    <Link to=
                                        {
                                            {
                                                pathname: '/supplier/edit',
                                                state: {
                                                    id_supplier: supplier.id_supplier,
                                                    kode_supplier: supplier.kode_supplier,
                                                    nama_supplier: supplier.nama_supplier,
                                                    alamat: supplier.alamat,
                                                    no_tlp: supplier.no_tlp
                                                }
                                            }
                                        }>
                                        <Button color="warning">Edit</Button>



                                    </Link>
                                    <span> </span>
                                    <Button onClick={() => this.Deletesupplier(supplier.id_supplier)} color="danger">Hapus</Button>

                                </td>
                            </tr>

                        )}
                    </tbody>

                </Table>
            </Container>
        )
    }
}

export default ListSupplierComp;