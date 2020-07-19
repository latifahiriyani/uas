import React, { PureComponent } from 'react'
import axios from 'axios'
import qs from 'querystring'
import { Table, Button, Container, NavLink, Alert } from 'reactstrap'
import { Link } from 'react-router-dom'

const api = 'http://localhost:3001'

class ListComp extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            obat: [],
            response: '',
            display: 'none'
        }
    }

    componentDidMount() {
        axios.get(api + '/tampil').then(res => {
            this.setState({
                obat: res.data.values
            })
        })
    }

    Deleteobat = (idobat) => {
        const { obat } = this.state
        const data = qs.stringify({
            id_obat: idobat
        })

        axios.delete(api + '/hapus',
            {
                data: data,
                headers: { 'Content-type': 'application/x-www-form-urlencoded' }
            }
        ).then(json => {
            if (json.data.status === 200) {

                this.setState({
                    response: json.data.values,
                    obat: obat.filter(obat => obat.id_obat !== idobat),
                    display: 'block'
                })
                this.props.history.push('/obat')
            } else {
                this.setState({
                    response: json.data.values,

                    display: 'block'
                })
                //this.props.history.push('/obat')
            }
        });
    }



    render() {
        return (
            <Container>
                <h2>Data Stok Barang</h2>
                <Alert color="secondary" style={{ display: this.state.display }}>
                    {this.state.response}
                </Alert>
                <NavLink href="/obat/tambah"><Button color="primary">Tambah Data</Button></NavLink>
                <hr />
                <Table dark className="table-bordered">
                    <thead>
                        <tr>
                            <th>Kode Obat</th>
                            <th>Nama Obat</th>
                            <th>Jenis Obat</th>
                            <th>Harga</th>
                            <th>Jumlah Stok</th>
                            <th>Tanggal Exp</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.obat.map(obat =>
                            <tr key={obat.id_obat}>
                                <td>{obat.kode_obat}</td>
                                <td>{obat.nama_obat}</td>
                                <td>{obat.jenis_obat}</td>
                                <td>{obat.harga}</td>
                                <td>{obat.jumlah_stok}</td>
                                <td>{obat.tanggal_exp}</td>
                                <td>
                                    <Link to=
                                        {
                                            {
                                                pathname: '/obat/edit',
                                                state: {
                                                    id_obat: obat.id_obat,
                                                    kode_obat: obat.kode_obat,
                                                    nama_obat: obat.nama_obat,
                                                    jenis_obat: obat.jenis_obat,
                                                    harga: obat.harga,
                                                    jumlah_stok: obat.jumlah_stok,
                                                    tanggal_exp: obat.tanggal_exp
                                                }
                                            }
                                        }>
                                        <Button color="warning">Edit</Button>



                                    </Link>
                                    <span> </span>
                                    <Button onClick={() => this.Deleteobat(obat.id_obat)} color="danger">Hapus</Button>

                                </td>
                            </tr>

                        )}
                    </tbody>

                </Table>
            </Container>
        )
    }
}

export default ListComp;