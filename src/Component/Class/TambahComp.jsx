import React, { PureComponent } from 'react'
import axios from 'axios'
import { Container, Col, Row, Form, FormGroup, Alert, Label, Input, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

const api = 'http://localhost:3001'

class TambahComp extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            kode_obat: '',
            nama_obat: '',
            jenis_obat: '',
            harga: '',
            jumlah_stok: '',
            tanggal_exp: '',
            response: '',
            display: 'none'

        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    Addobat = () => {
        axios.post(api + '/tambah', {
            kode_obat: this.state.kode_obat,
            nama_obat: this.state.nama_obat,
            jenis_obat: this.state.jenis_obat,
            harga: this.state.harga,
            jumlah_stok: this.state.jumlah_stok,
            tanggal_exp: this.state.tanggal_exp
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
                <h4>Form Tambah Data Barang</h4>
                <Alert color="secondary" style={{ display: this.state.display }}>
                    {this.state.response}
                </Alert>
                <Form>

                    <FormGroup row>
                        <Label for="kode_Obat" sm={2}>Kode Obat</Label>
                        <Col sm={10}>
                            <Input type="text" name="kode_obat" value={this.state.kode_obat} onChange={this.handleChange} placeholder="Masukan Kode Obat" />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="nama_Obat" sm={2}>Nama Obat</Label>
                        <Col sm={10}>
                            <Input type="text" name="nama_obat" value={this.state.nama_obat} onChange={this.handleChange} placeholder="Masukan Nama Obat" />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="jenisobat" sm={2}>Jenis Obat</Label>
                        <Col sm={10}>
                            <Input type="text" name="jenis_obat" value={this.state.jenis_obat} onChange={this.handleChange} placeholder="Masukan Jenis Obat" />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="hargaobat" sm={2}>Harga </Label>
                        <Col sm={10}>
                            <Input type="text" name="harga" value={this.state.harga} onChange={this.handleChange} placeholder="Masukan Harga" />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="jumlahstok" sm={2}>Jumlah Stok</Label>
                        <Col sm={10}>
                            <Input type="text" name="jumlah_stok" value={this.state.jumlah_stok} onChange={this.handleChange} placeholder="Masukan Jumlah Stok" />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="tanggal_exp" sm={2}>Tanggal Exp</Label>
                        <Col sm={10}>
                            <Input type="text" name="tanggal_exp" value={this.state.tanggal_exp} onChange={this.handleChange} placeholder="Masukan Tanggal Exp" />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Row>
                            <Col>
                                <Button color="primary" type="button" onClick={this.Addobat}>SUBMIT</Button>
                            </Col>
                        </Row>
                    </FormGroup>
                </Form>
            </Container>
        )

    }
}

export default TambahComp