import React, { PureComponent } from 'react'
import axios from 'axios'
import qs from 'querystring'
import { Link } from 'react-router-dom'
import { Container, Col, Row, Form, FormGroup, Alert, Label, Input, Button } from 'reactstrap'

const api = "http://localhost:3001"

class EditAdminComp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            id_admin: this.props.location.state.id_admin,
            kode_admin: this.props.location.state.kode_admin,
            nama_admin: this.props.location.state.nama_admin,
            alamat: this.props.location.state.alamat,
            no_tlp: this.props.location.state.no_tlp,
            email: this.props.location.state.email,
            password: this.props.location.state.password,
            response: '',
            display: 'none'
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    ubahDataAdmin = (idadmin) => {
        const data = qs.stringify({
            id_admin: idadmin,
            kode_admin: this.state.kode_admin,
            nama_admin: this.state.nama_admin,
            alamat: this.state.alamat,
            no_tlp: this.state.no_tlp,
            email: this.state.email,
            password: this.state.password,
        });

        axios.put(api + '/ubahadmin', data)
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
                <h4>Form Edit Data Admin</h4>
                <Alert color="secondary" style={{ display: this.state.display }}>
                    {this.state.response}
                </Alert>
                <Form>

                    <FormGroup row>
                        <Label for="kode_admin" sm={2}>Kode Admin</Label>
                        <Col sm={10}>
                            <Input type="text" name="kode_admin" value={this.state.kode_admin} onChange={this.handleChange} placeholder="Masukan Kode Admin" />
                        </Col>
                    </FormGroup>


                    <FormGroup row>
                        <Label for="nama_admin" sm={2}>Nama Admin</Label>
                        <Col sm={10}>
                            <Input type="text" name="nama_admin" value={this.state.nama_admin} onChange={this.handleChange} placeholder="Masukan Nama Admin" />
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

                    <FormGroup row>
                        <Label for="email" sm={2}>Email</Label>
                        <Col sm={10}>
                            <Input type="text" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Masukan Email" />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="password" sm={2}>password</Label>
                        <Col sm={10}>
                            <Input type="text" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Masukan Password" />
                        </Col>
                    </FormGroup>


                    <FormGroup>
                        <Row>
                            <Col>
                                <Button color="primary" type="button" onClick={() => this.ubahDataAdmin(this.state.id_admin)}>UPDATE</Button>
                            </Col>
                        </Row>
                    </FormGroup>


                </Form>
            </Container>
        )
    }
}

export default EditAdminComp