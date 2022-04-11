import {React,
    useEffect, useState} from "react";
import { Button, Card, Col, 
    Dropdown, DropdownButton, 
    Form, FormControl, 
    InputGroup, Row} from "react-bootstrap";
import axios from "axios";

export default function Home(){

    const [users, setUsers] = useState({group: []});
    //const [email, setEmail] = useState();

    useEffect(()=>{
        const userList = async () => {
            const {data} = await axios.get('http://localhost:4000/api/users')
            console.log(data)
            setUsers({group: data})
        }
        userList()
    }, [setUsers])

    return (
        <main>
            <div className="container mx-auto py-5">
                <Row xs={1} md={2} lg={2} className="g-4">
                    <Col>
                    <Card>
                        <Card.Body>
                            <Form>
                                <h2 className="title title-primary">Bem-vindo de volta!</h2>
                                <p className="description description-primary">Se você já é cadastrado, por favor insira seus dados para acesso.</p>
                                <Form.Group className="mb-3">
                                    <Form.Floating className="mb-2">
                                       
                                        <Form.Control
                                            id="floatingInputCustom"
                                            type="email"
                                            placeholder="E-mail"
                                            />
                                            <label htmlFor="floatingInputCustom">E-mail</label>
                                            <Form.Text className="text-muted">
                                                <p>* Nós nunca iremos compartilhar seu e-mail com terceiros.</p>
                                            </Form.Text>
                                    </Form.Floating>
                                </Form.Group>

                                <Form.Group className="mb-2">
                                    <Form.Floating>
                                        <Form.Control
                                        id="SenhaLogin"
                                        type="password"
                                        placeholder="Senha"
                                        />
                                        <label htmlFor="SenhaLogin">Senha</label>
                                    </Form.Floating>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Check type="checkbox" label="Lembrar de mim" />
                                </Form.Group>
                                
                                <Col>
                                    <Row xs={1} className="g-2">
                                        
                                        <Button variant="primary" type="submit">
                                            Entrar
                                        </Button>
                                        <Button variant="outline-primary" type="submit">
                                            Entrar com uma conta Google
                                        </Button>
                                    </Row>
                                </Col>
                                
                            </Form>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card>
                        <Card.Body>
                            <Form>
                                <h2 className="title title-primary">É novo por aqui?</h2>
                                <p className="description description-primary">Entre com seus dados e comece a utilizar o Biblionode hoje mesmo!</p>
                                <Form.Group className="mb-3">
                                    <InputGroup className="mb-3">
                                        <FormControl aria-label="First name" placeholder="Nome" />
                                        <FormControl aria-label="Last name"  placeholder="Sobrenome"/>
                                        <FormControl aria-label="cpf"  placeholder="CPF"/>
                                    </InputGroup>

                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon3">
                                            @
                                        </InputGroup.Text>
                                        <FormControl id="basic-url" aria-describedby="basic-addon3" placeholder="Insira seu E-mail"/>
                                    </InputGroup>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Check type="checkbox" label="Você é Bibliotecário?" />
                                </Form.Group>

                                <InputGroup className="mb-3">
                                    <FormControl aria-label="Text input with dropdown button" placeholder="Matricula(RA)"/>

                                    <DropdownButton
                                    variant="outline-secondary"
                                    title="Unidade"
                                    id="input-group-dropdown-2"
                                    align="end"
                                    >
                                    <Dropdown.Item>Barroca</Dropdown.Item>
                                    <Dropdown.Item>Centro</Dropdown.Item>
                                    <Dropdown.Item>Contorno</Dropdown.Item>
                                    <Dropdown.Item>Pampulha</Dropdown.Item>
                                    </DropdownButton>
                                </InputGroup>

                                <Form.Group className="mb-3">
                                    <Row xs={1} md={2} className="g-4">
                                        <Col>
                                            <Form.Floating>
                                                <Form.Control
                                                id="Senha"
                                                type="password"
                                                placeholder="Senha"
                                                />
                                                <label htmlFor="Senha">Senha</label>
                                            </Form.Floating>
                                        </Col>
                                        <Col>
                                            <Form.Floating>
                                                <Form.Control
                                                id="ConfirmaSenha"
                                                type="password"
                                                placeholder="Confirmar Senha"
                                                />
                                                <label htmlFor="ConfirmaSenha">Confirmar Senha</label>
                                            </Form.Floating>
                                        </Col>
                                    </Row>    
                                </Form.Group>

                                <Col>
                                    <Row xs={1} className="g-2">
                                        <Button variant="primary" type="submit">
                                            Cadastrar
                                        </Button>
                                    </Row>
                                </Col>
                            </Form>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </div>
        </main>
    )
}