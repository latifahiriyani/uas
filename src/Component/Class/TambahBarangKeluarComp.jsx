import React, { PureComponent } from 'react'
import axios from 'axios'
import { Container, Col, Row, Form, FormGroup, Alert, Label, Input, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

const api = 'http://localhost:3001'

class TambahBarangKeluarComp extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            kode_barang_keluar: '',
            tanggal_barang_keluar: '',
            kode_obat: '',
           nama_obat: '',
            harga: '',
            jumlah: '',
            response: '',
            display: 'none'

        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    Addbarangkeluar = () => {
        axios.post(api + '/tambahbarangkeluar', {
            kode_barang_keluar: this.state.kode_barang_keluar,
            tanggal_barang_keluar: this.state.tanggal_barang_keluar,
            kode_obat: this.state.kode_obat,
            nama_obat: this.state.nama_obat,
            harga: this.state.harga,
            jumlah: this.state.jumlah
        }).then(json => {
            if (json.data.status === 200) {
                this.setState({
                    response: json.data.values,
                    display: 'block'
                })
            } else {
                this.setState({
                    response: json.data.values,
                    display: 'block'
                })
            }
        })
    }

    render() {
        return (
            <Container>
                <h4>Form Tambah Data Barang Keluar</h4>
                <Alert color="secondary" style={{ display: this.state.display }}>
                    {this.state.response}
                </Alert>
                <Form>

                    <FormGroup row>
                        <Label for="kode_barang_keluar" sm={2}>Kode Barang Keluar</Label>
                        <Col sm={10}>
                            <Input type="text" name="kode_barang_keluar" value={this.state.kode_barang_keluar} onChange={this.handleChange} placeholder="Masukan Kode Barang Keluar" />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="tanggal_barang_keluar" sm={2}>Tanggal Barang Keluar</Label>
                        <Col sm={10}>
                            <Input type="text" name="tanggal_barang_keluar" value={this.state.tanggal_barang_keluar} onChange={this.handleChange} placeholder="Masukan Tanggal Barang Keluar" />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="kode_obat" sm={2}>Kode Obat</Label>
                        <Col sm={10}>
                            <Input type="text" name="kode_obat" value={this.state.kode_obat} onChange={this.handleChange} placeholder="Masukan Kode Obat" />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="nama_obat" sm={2}>Nama Obat</Label>
                        <Col sm={10}>
                            <Input type="text" name="nama_obat" value={this.state.nama_obat} onChange={this.handleChange} placeholder="Masukan Nama Obat" />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="harga" sm={2}>Harga</Label>
                        <Col sm={10}>
                            <Input type="text" name="harga" value={this.state.harga} onChange={this.handleChange} placeholder="Masukan Harga" />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="jumlah" sm={2}>Jumlah</Label>
                        <Col sm={10}>
                            <Input type="text" name="jumlah" value={this.state.jumlah} onChange={this.handleChange} placeholder="Masukan Jumlah" />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Row>
                            <Col>
                                <Button color="primary" type="button" onClick={this.Addbarangkeluar}>SUBMIT</Button>
                            </Col>
                        </Row>
                    </FormGroup>
                </Form>
            </Container>
        )

    }
}

export default TambahBarangKeluarComp