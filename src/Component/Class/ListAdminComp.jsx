import React, { PureComponent } from 'react'
import axios from 'axios'
import qs from 'querystring'
import { Table, Button, Container, NavLink, Alert } from 'reactstrap'
import { Link } from 'react-router-dom'

const api = 'http://localhost:3001'

class ListAdminComp extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            admin: [],
            response: '',
            display: 'none'
        }
    }

    componentDidMount() {
        axios.get(api + '/tampiladmin').then(res => {
            this.setState({
                admin: res.data.values
            })
        })
    }

    Deleteadmin = (idadmin) => {
        const { admin } = this.state
        const data = qs.stringify({
            id_admin: idadmin
        })

        axios.delete(api + '/hapusadmin',
            {
                data: data,
                headers: { 'Content-type': 'application/x-www-form-urlencoded' }
            }
        ).then(json => {
            if (json.data.status === 200) {

                this.setState({
                    response: json.data.values,
                    admin: admin.filter(admin => admin.id_admin !== idadmin),
                    display: 'block'
                })
                this.props.history.push('/admin')
            } else {
                this.setState({
                    response: json.data.values,

                    display: 'block'
                })
                //this.props.history.push('/admin')
            }
        });
    }



    render() {
        return (
            <Container>
                <h2>Data Admin</h2>
                <Alert color="secondary" style={{ display: this.state.display }}>
                    {this.state.response}
                </Alert>
                <NavLink href="/admin/tambahadmin"><Button color="primary">Tambah Data</Button></NavLink>
                <hr />
                <Table dark className="table-bordered">
                    <thead>
                        <tr>
                            <th>Kode Admin</th>
                            <th>Nama Admin</th>
                            <th>Alamat</th>
                            <th>No Telepon</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.admin.map(admin =>
                            <tr key={admin.id_admin}>
                                <td>{admin.kode_admin}</td>
                                <td>{admin.nama_admin}</td>
                                <td>{admin.alamat}</td>
                                <td>{admin.no_tlp}</td>
                                <td>{admin.email}</td>
                                <td>{admin.password}</td>
                                <td>
                                    <Link to=
                                        {
                                            {
                                                pathname: '/admin/edit',
                                                state: {
                                                    id_admin: admin.id_admin,
                                                    kode_admin: admin.kode_admin,
                                                    nama_admin: admin.nama_admin,
                                                    alamat: admin.alamat,
                                                    no_tlp: admin.no_tlp,
                                                    email: admin.email,
                                                    password: admin.password

                                                }
                                            }
                                        }>
                                        <Button color="warning">Edit</Button>



                                    </Link>
                                    <span> </span>
                                    <Button onClick={() => this.Deleteadmin(admin.id_admin)} color="danger">Hapus</Button>

                                </td>
                            </tr>

                        )}
                    </tbody>

                </Table>
            </Container>
        )
    }
}

export default ListAdminComp;