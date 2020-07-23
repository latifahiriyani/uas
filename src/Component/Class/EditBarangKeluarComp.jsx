import React, { PureComponent } from 'react'
import axios from 'axios'
import qs from 'querystring'
import { Link } from 'react-router-dom'
import { Container, Col, Row, Form, FormGroup, Alert, Label, Input, Button } from 'reactstrap'

const api = "http://localhost:3001"

class EditBarangKeluarComp extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            id_barang_keluar: this.props.location.state.id_barang_keluar,
            kode_barang_keluar: this.props.location.state.kode_barang_keluar,
            tanggal_barang_keluar: this.props.location.state.tanggal_barang_keluar,
            kode_obat: this.props.location.state.kode_obat,
            nama_obat: this.props.location.state.nama_obat,
            harga: this.props.location.state.harga,
            jumlah: this.props.location.state.jumlah,
           
            response: '',
            display: 'none'
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    ubahDataBarangKeluar = (idbarangkeluar) => {
        const data = qs.stringify({
            id_barang_keluar: idbarangkeluar,
            kode_barang_keluar: this.state.kode_barang_keluar,
            tanggal_barang_keluar: this.state.tanggal_barang_keluar,
            kode_obat: this.state.kode_obat,
            nama_obat: this.state.nama_obat,
            harga: this.state.harga,
            jumlah: this.state.jumlah,
        });

        axios.put(api + '/ubahbarangkeluar', data)
            .then(json => {
                if (json === 200) {
                    this.setState({
                        response: json.data.values,
                        display: 'block'
                    });
                }
                else {
                    this.setState({
                        response: json.data.values,
                        display: 'block'
                    });
                }
            });
    }

    render() {
        return (
            <Container>
                <h4>Form Edit Data Barang Keluar</h4>
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
                                <Button color="primary" type="button" onClick={() => this.ubahDataBarangKeluar(this.state.id_barang_keluar)}>UPDATE</Button>
                                
                            </Col>
                        </Row>
                    </FormGroup>


                </Form>
            </Container>
        )
    }
}

export default EditBarangKeluarComp