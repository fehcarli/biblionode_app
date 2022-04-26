import React from "react";
import { Container, Nav, Navbar, NavDropdown  } from "react-bootstrap";

export default function Header(){
    return(
        <header className="p-3 bg-dark text-white">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">   
                <Navbar variant="dark" bg="dark" expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="/dashboard">Início</Navbar.Brand>
                        <Navbar.Collapse id="navbar-dark-example">
                            <Nav>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-1">Reserva de Livros</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-2">Efetivar Empréstimo</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-3">Renovação</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-4">Devolução</Nav.Link>
                                </Nav.Item>

                                <NavDropdown id="nav-dropdown-dark-example" title="Cadastros" menuVariant="dark">
                                    <NavDropdown.Item href="#">Adicionar livro</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Editar Livro</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Adicionar Gênero Literário</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Editar Gênero Literário</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#">Cadastrar Bibliotecário</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </header>
    );
}