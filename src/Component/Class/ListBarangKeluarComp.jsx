import React, { PureComponent } from 'react'
import axios from 'axios'
import qs from 'querystring'
import { Table, Button, Container, NavLink, Alert } from 'reactstrap'
import { Link } from 'react-router-dom'

const api = 'http://localhost:3001'

class ListBarangKeluarComp extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            barang_keluar: [],
            response: '',
            display: 'none'
        }
    }

    componentDidMount() {
        axios.get(api + '/tampilbarangkeluar').then(res => {
            this.setState({
                barang_keluar: res.data.values
            })
        })
    }

    Deletebarangkeluar = (idbarangkeluar) => {
        const { barang_keluar } = this.state
        const data = qs.stringify({
            id_barang_keluar: idbarangkeluar
        })

        axios.delete(api + '/hapusbarangkeluar',
            {
                data: data,
                headers: { 'Content-type': 'application/x-www-form-urlencoded' }
            }
        ).then(json => {
            if (json.data.status === 200) {

                this.setState({
                    response: json.data.values,
                    barang_keluar: barang_keluar.filter(barang_keluar => barang_keluar.id_barang_keluar !== idbarangkeluar),
                    display: 'block'
                })
                this.props.history.push('/barangkeluar')
            } else {
                this.setState({
                    response: json.data.values,

                    display: 'block'
                })
                //this.props.history.push('/barang_keluar')
            }
        });
    }



    render() {
        return (
            <Container>
                <h2>Data Barang Keluar</h2>
                <Alert color="secondary" style={{ display: this.state.display }}>
                    {this.state.response}
                </Alert>
                <NavLink href="/barangkeluar/tambahbarangkeluar"><Button color="primary">Tambah Data Barang Keluar</Button></NavLink>
                <hr />
                <Table dark className="table-bordered">
                    <thead>
                        <tr>
                            <th>Kode Barang Keluar</th>
                            <th>Tanggal Barang Keluar</th>
                            <th>Kode Obat</th>
                            <th>Nama Obat</th>
                            <th>Harga</th>
                            <th>Jumlah</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.barang_keluar.map(barang_keluar =>
                            <tr key={barang_keluar.id_barang_keluar}>
                                <td>{barang_keluar.kode_barang_keluar}</td>
                                <td>{barang_keluar.tanggal_barang_keluar}</td>
                                <td>{barang_keluar.kode_obat}</td>
                                <td>{barang_keluar.nama_obat}</td>
                                <td>{barang_keluar.harga}</td>
                                <td>{barang_keluar.jumlah}</td>
                                
                                <td>
                                    <Link to=
                                        {
                                            {
                                                pathname: '/barangkeluar/edit',
                                                state: {
                                                    id_barang_keluar: barang_keluar.id_barang_keluar,
                                                    kode_barang_keluar: barang_keluar.kode_barang_keluar,
                                                    tanggal_barang_keluar: barang_keluar.tanggal_barang_keluar,
                                                    kode_obat: barang_keluar.kode_obat,
                                                    nama_obat: barang_keluar.nama_obat,
                                                    harga: barang_keluar.harga,
                                                    jumlah: barang_keluar.jumlah
                                                }
                                            }
                                        }>
                                        <Button color="warning">Edit</Button>



                                    </Link>
                                    <span> </span>
                                    <Button onClick={() => this.Deletebarangkeluar(barang_keluar.id_barang_keluar)} color="danger">Hapus</Button>

                                </td>
                            </tr>

                        )}
                    </tbody>

                </Table>
            </Container>
        )
    }
}

export default ListBarangKeluarComp;