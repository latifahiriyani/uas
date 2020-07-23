import React, { PureComponent } from 'react'
import axios from 'axios'
import qs from 'querystring'
import { Table, Button, Container, NavLink, Alert } from 'reactstrap'
import { Link } from 'react-router-dom'

const api = 'http://localhost:3001'

class ListBarangMasukComp extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            barang_masuk: [],
            response: '',
            display: 'none'
        }
    }

    componentDidMount() {
        axios.get(api + '/tampilbarangmasuk').then(res => {
            this.setState({
                barang_masuk: res.data.values
            })
        })
    }

    Deletebarangmasuk = (idbarangmasuk) => {
        const { barang_masuk } = this.state
        const data = qs.stringify({
            id_barang_masuk: idbarangmasuk
        })

        axios.delete(api + '/hapusbarangmasuk',
            {
                data: data,
                headers: { 'Content-type': 'application/x-www-form-urlencoded' }
            }
        ).then(json => {
            if (json.data.status === 200) {

                this.setState({
                    response: json.data.values,
                    barang_masuk: barang_masuk.filter(barang_masuk => barang_masuk.id_barang_masuk !== idbarangmasuk),
                    display: 'block'
                })
                this.props.history.push('/barangmasuk')
            } else {
                this.setState({
                    response: json.data.values,

                    display: 'block'
                })
                //this.props.history.push('/barang_masuk')
            }
        });
    }



    render() {
        return (
            <Container>
                <h2>Data Barang Masuk</h2>
                <Alert color="secondary" style={{ display: this.state.display }}>
                    {this.state.response}
                </Alert>
                <NavLink href="/barangmasuk/tambahbarangmasuk"><Button color="primary">Tambah Data Barang Masuk</Button></NavLink>
                <hr />
                <Table dark className="table-bordered">
                    <thead>
                        <tr>
                            <th>Kode Barang Masuk</th>
                            <th>Tanggal Barang Masuk</th>
                            <th>Kode Obat</th>
                            <th>Nama Obat</th>
                            <th>Harga</th>
                            <th>Jumlah</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.barang_masuk.map(barang_masuk =>
                            <tr key={barang_masuk.id_barang_masuk}>
                                <td>{barang_masuk.kode_barang_masuk}</td>
                                <td>{barang_masuk.tanggal_barang_masuk}</td>
                                <td>{barang_masuk.kode_obat}</td>
                                <td>{barang_masuk.nama_obat}</td>
                                <td>{barang_masuk.harga}</td>
                                <td>{barang_masuk.jumlah}</td>
                                
                                <td>
                                    <Link to=
                                        {
                                            {
                                                pathname: '/barangmasuk/edit',
                                                state: {
                                                    id_barang_masuk: barang_masuk.id_barang_masuk,
                                                    kode_barang_masuk: barang_masuk.kode_barang_masuk,
                                                    tanggal_barang_masuk: barang_masuk.tanggal_barang_masuk,
                                                    kode_obat: barang_masuk.kode_obat,
                                                    nama_obat: barang_masuk.nama_obat,
                                                    harga: barang_masuk.harga,
                                                    jumlah: barang_masuk.jumlah
                                                }
                                            }
                                        }>
                                        <Button color="warning">Edit</Button>



                                    </Link>
                                    <span> </span>
                                    <Button onClick={() => this.Deletebarangmasuk(barang_masuk.id_barang_masuk)} color="danger">Hapus</Button>

                                </td>
                            </tr>

                        )}
                    </tbody>

                </Table>
            </Container>
        )
    }
}

export default ListBarangMasukComp;