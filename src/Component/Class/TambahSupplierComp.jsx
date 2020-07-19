import React, { PureComponent } from 'react'
import axios from 'axios'
import { Container, Col, Row, Form, FormGroup, Alert, Label, Input, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

const api = 'http://localhost:3001'

class TambahSupplierComp extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            kode_supplier: '',
            nama_supplier: '',
            alamat: '',
            no_tlp: '',
            response: '',
            display: 'none'

        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    Addsupplier = () => {
        axios.post(api + '/tambahsupplier', {
            kode_supplier: this.state.kode_supplier,
            nama_supplier: this.state.nama_supplier,
            alamat: this.state.alamat,
            no_tlp: this.state.no_tlp
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
                <h4>Form Tambah Data Supplier</h4>
                <Alert color="secondary" style={{ display: this.state.display }}>
                    {this.state.response}
                </Alert>
                <Form>

                    <FormGroup row>
                        <Label for="kode_supplier" sm={2}>Kode Supplier</Label>
                        <Col sm={10}>
                            <Input type="text" name="kode_supplier" value={this.state.kode_supplier} onChange={this.handleChange} placeholder="Masukan Kode Supplier" />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="nama_supplier" sm={2}>Nama Supplier</Label>
                        <Col sm={10}>
                            <Input type="text" name="nama_supplier" value={this.state.nama_supplier} onChange={this.handleChange} placeholder="Masukan Nama Supplier" />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="alamat" sm={2}>Alamat</Label>
                        <Col sm={10}>
                            <Input type="text" name="alamat" value={this.state.alamat} onChange={this.handleChange} placeholder="Masukan Alamat" />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="no_tlp" sm={2}>No Telepon</Label>
                        <Col sm={10}>
                            <Input type="text" name="no_tlp" value={this.state.no_tlp} onChange={this.handleChange} placeholder="Masukan No Telepon" />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Row>
                            <Col>
                                <Button color="primary" type="button" onClick={this.Addsupplier}>SUBMIT</Button>
                            </Col>
                        </Row>
                    </FormGroup>
                </Form>
            </Container>
        )

    }
}

export default TambahSupplierComp
