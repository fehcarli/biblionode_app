import {React, useEffect, useState} from "react";
import axios from "axios";
import { Table } from "react-bootstrap"

export default function Genres(){

    const [genres, setGenres] = useState({collection: []});

    useEffect(()=>{
        const genreList = async () => {
            const {data} = await axios.get('http://localhost:4000/api/genres')
            setGenres({collection: data})
        }
        genreList()
    }, [setGenres])
    
    return (
        <main>
            <div className="container mx-auto py-5">
                <h1>Lista de Gêneros Literários</h1>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Gênero Literário</th>
                            <th>Cor de Etiquetas</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            genres.collection && genres.collection.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.tipoGenero}</td>
                                    <td>{item.corEtiqueta}</td>
                            </tr> ))
                        }       
                    </tbody>
                </Table>
            </div>
        </main>
    );
}