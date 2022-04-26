import { React, useEffect, useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap"

export default function Books(){

    const [books, setBooks] = useState({collection: []});

    useEffect(()=>{
        const bookList = async () => {
            const {data} = await axios.get('http://localhost:4000/api/books')
            setBooks({collection: data})
            console.log(data)
        }
        bookList()
    }, [setBooks])
    
    return (
        <main>
            <div className="container mx-auto py-5">
                <h1>Lista de Livros</h1>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Título</th>
                            <th>Autor</th>
                            <th>Código Interno</th>
                            <th>ISBN</th>
                            <th>Editora</th>
                            <th>Edição</th>
                            <th>Número de Páginas</th>
                            <th>Gênero Literário</th>
                            <th>Cor da Etiqueta</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            books.collection && books.collection.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.titulo}</td>
                                    <td>{item.autor}</td>
                                    <td>{item.codLivro}</td>
                                    <td>{item.isbn}</td>
                                    <td>{item.editora}</td>
                                    <td>{item.edicao}</td>
                                    <td>{item.numPaginas}</td>
                                    <td>{item.nomeGenero}</td>
                                    <td>{item.corEtiqueta}</td>
                            </tr> ))
                        }       
                    </tbody>
                </Table>
            </div>
        </main>
    );
}