import React, { PureComponent } from 'react'
import axios from 'axios'
import qs from 'querystring'
import { Link } from 'react-router-dom'
import { Container, Col, Row, Form, FormGroup, Alert, Label, Input, Button } from 'reactstrap'

const api = "http://localhost:3001"

class EditComp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            id_obat: this.props.location.state.id_obat,
            kode_obat: this.props.location.state.kode_obat,
            nama_obat: this.props.location.state.nama_obat,
            jenis_obat: this.props.location.state.jenis_obat,
            harga: this.props.location.state.harga,
            jumlah_stok: this.props.location.state.jumlah_stok,
            tanggal_exp: this.props.location.state.tanggal_exp,
            response: '',
            display: 'none'
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    ubahObat = (idobat) => {
        const data = qs.stringify({
            id_obat: idobat,
            kode_obat: this.state.kode_obat,
            nama_obat: this.state.nama_obat,
            jenis_obat: this.state.jenis_obat,
            harga: this.state.harga,
            jumlah_stok: this.state.jumlah_stok,
            tanggal_exp: this.state.tanggal_exp,
        });

        axios.put(api + '/ubah', data)
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
                <h4>Form Edit Data Obat</h4>
                <Alert color="secondary" style={{ display: this.state.display }}>
                    {this.state.response}
                </Alert>
                <Form>
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
                        <Label for="jumlahstok" sm={2}>JUmlah Stok</Label>
                        <Col sm={10}>
                            <Input type="text" name="jumlah_stok" value={this.state.jumlah_stok} onChange={this.handleChange} placeholder="Masukan Jumlah Stok" />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="tanggalexp" sm={2}>Nama Obat</Label>
                        <Col sm={10}>
                            <Input type="text" name="tanggal_exp" value={this.state.tanggal_exp} onChange={this.handleChange} placeholder="Masukan Tanggal Exp" />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Row>
                            <Col>
                                <Button color="primary" type="button" onClick={() => this.ubahObat(this.state.id_obat)}>UPDATE</Button>
                                
                            </Col>
                        </Row>
                    </FormGroup>


                </Form>
            </Container>
        )
    }
}

export default EditComp