import React, { useEffect, useState } from 'react'
import { Container, Table, Button } from 'reactstrap'
import axios from 'axios'

const api = 'http://localhost:3001'

function HooksUseEffect() {

    const [obat, setObat] = useState([])

    useEffect(() => {
        console.log("Memanggil Use Effects")
        axios.get(api + '/tampil').then(res => {
            setObat(res.data.values)
        })
    }, [])

    return (
        <Container>
            <h2>Data Barang</h2>
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
			        
                    </tr>
                </thead>
                <tbody>
                    {obat.map(obat =>
                        <tr key={obat.id_obat}>
                        <td>{obat.kode_obat}</td>
                            <td>{obat.nama_obat}</td>
                            <td>{obat.jenis_obat}</td>
                            <td>{obat.harga}</td>
                            <td>{obat.jumlah_stok}</td>
                            <td>{obat.tanggal_exp}</td>
                        
                        </tr>

                    )}
                </tbody>

            </Table>
        </Container>
    )
}

export default HooksUseEffect