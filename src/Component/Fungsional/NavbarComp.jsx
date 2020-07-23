import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

const NavbarComp = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar color="secondary" light expand="md">
                {/*<NavbarBrand href="/">reactstrap</NavbarBrand>*/}
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/">HOME</NavLink>
                        </NavItem>
                       {/* <NavItem>
                            <NavLink href="/about">About</NavLink>
                       </NavItem>
                        <NavItem>
                            <NavLink href="/admin">ADMIN</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/supplier">SUPPLIER</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/obat">BARANG</NavLink>
                        </NavItem>*/}
                        <UncontrolledDropdown nav inNavbar>
                  
                  <DropdownToggle nav caret>
                    MASTER
                  </DropdownToggle>
                  <DropdownMenu right>
                  <DropdownItem>
                  <NavLink href="/obat">BARANG</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                    <NavLink href="/admin">ADMIN</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                    <NavLink href="/supplier">SUPPLIER</NavLink>
                    </DropdownItem>
                  </DropdownMenu>
                  
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                  
                  <DropdownToggle nav caret>
                    MASUK/KELUAR
                  </DropdownToggle>
                  <DropdownMenu right>
                  <DropdownItem>
                  <NavLink href="/barangmasuk">BARANG MASUK</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                    <NavLink href="/barangkeluar">BARANG KELUAR</NavLink>
                    </DropdownItem>
                
                  </DropdownMenu>
                  
                </UncontrolledDropdown>

                
                
               {/* <UncontrolledDropdown nav inNavbar>
                  
              <DropdownToggle nav caret>
                MASTER DATA
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                <NavLink href="/barangmasuk">Barang Masuk</NavLink>
                </DropdownItem>
                <DropdownItem>
                  Barang Keluar
                </DropdownItem>
                
              </DropdownMenu>
               </UncontrolledDropdown>*/}

                            
                       {/* <NavItem>
                            <NavLink href="/kelas">Class</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/hooks">Hook</NavLink>
                       </NavItem>
                        <NavItem>
                            <NavLink href="/useeffects">Use Effects</NavLink>
                       </NavItem>*/}
                       
                    </Nav>
                    <NavbarText> <Link to="/register" className="">
                                              DAFTAR | 
                              </Link></NavbarText>
                              
                    <NavbarText> <Link to="/" className="">
                                               | LOG OUT
                              </Link></NavbarText>
                </Collapse>
            </Navbar>
        </div>
    )
}
export default NavbarComp