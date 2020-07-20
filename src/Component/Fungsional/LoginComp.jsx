import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardTittle, CardText, CardSubtitle, CardImg } from 'reactstrap';

const LoginComp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const onChangeusername = (e) => {
        const value = e.target.value
        setUsername(value)
    }

    const onChangePassword = (e) => {
        const value = e.target.value
        setPassword(value)
    }
    return (

        <div style={{ marginTop: "100px" }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card p-4">
                            <div className="card-body">
                                <div className="form-group">
                                    <div className="text-left">
                                    <Card>
                <CardImg top height="150" width="100%" src="/images/1024-500.png" alt="" />
                
            </Card>
                                    <label>Email</label>
                                    </div>
                                    <input type="text" placeholder="email" className="form-control" value={username} onChange={onChangeusername} />
                                </div>
                                <div className="form-group">
                                <div className="text-left">
                                    <label>Password</label>
                                    </div>
                                    <input type="password" placeholder="password" className="form-control" value={password} onChange={onChangePassword} />
                                </div>
                              
                                <div className="row">
                                
                                    <div className="col-md-6 text-left">
                                    
                                    <button> 
                                        <Link to="/HomePage" className="btn btn-primary text-left" >MASUK</Link>
                                        </button>
                                        
                                    </div>
                                    
                                    <div className="col-md-6 text-right">
                                        <Link to="/daftar" className="">
                                            Halaman Pendaftaran
                            </Link>
                           
                                    </div>
                                </div>


                           
                            </div>

                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default LoginComp