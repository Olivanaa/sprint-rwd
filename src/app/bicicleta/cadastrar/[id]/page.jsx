"use client"

import Link from "next/link"
import { useState } from "react"


export default function Bicicleta({ params }) {

    const idCli = params.id == 0 ? '' : params.id


    const [bike, setBike] = useState({
        marca: '',
        modelo: '',
        numeroDeSerie: '',
        valorNota: '',
        valorAtual: '',
        tipoSeguro: ''
    });

    const handleChange = e => {
        setBike({ ...bike, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        console.log(bike);
        e.preventDefault();
        fetch(`http://localhost:8080/Sprint4/api/bicicleta/cadastrar/${idCli}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(bike)
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    console.error('Erro no cadastro da bicicleta:', response.status);
                    throw new Error('Erro no cadastro da bicicleta');
                }
            })
            .then(data => {
                console.log('ID da bicicleta:', data);
                window.location = `/instrucao/${data}`
            })
            .catch(error => console.error(error))


    }





    return (
        <main className='Bicicleta'>
            <div className="FormBicicleta">
                <form onSubmit={handleSubmit}>
                    <div className='TituloBicicleta'>
                        <h1>Cadastro da Bicicleta</h1>
                    </div>
                    <div className="form-input-bicicleta">

                        <div className="input-box-bicicleta">
                            <label htmlFor="marca">Marca da bicicleta</label>
                            <input id="marca" type="text" name="marca" placeholder="Digite a marca da bicicleta" value={bike.marca} onChange={handleChange} required />
                        </div>

                        <div className="input-box-bicicleta">
                            <label htmlFor="modelo">Modelo da bicicleta</label>
                            <input id="modelo" type="text" name="modelo" placeholder="Digite o modelo da bicicleta" value={bike.modelo} onChange={handleChange} required />
                        </div>

                        <div className="input-box-bicicleta">
                            <label htmlFor="numeroDeSerie">Número de serie</label>
                            <input id="numeroDeSerie" type="text" name="numeroDeSerie" placeholder="Digite o número de série" value={bike.numeroDeSerie} onChange={handleChange} required />
                        </div>

                        <div className="input-box-bicicleta">
                            <label htmlFor="text">Tipo de Seguro</label>
                            <select name="tipoSeguro" value={bike.tipoSeguro} onChange={handleChange} required>
                                <option value="nd">Escolha seu tipo de seguro</option>
                                <option value="ESSENCIAL">ESSENCIAL</option>
                                <option value="LEVE">LEVE</option>
                                <option value="ELITE">ELITE</option>
                            </select>
                        </div>

                        <div className="input-box-bicicleta">
                            <label htmlFor="valorNota">Valor da Nota Fiscal</label>
                            <input id="valorNota" type="number" name="valorNota" placeholder="Digite o valor da nota fiscal" value={bike.valorNota} onChange={handleChange} required />
                        </div>

                        <div className="input-box-bicicleta">
                            <label htmlFor="valorAtual">Valor Atual</label>
                            <input id="valorAtual" type="number" name="valorAtual" placeholder="Digite o valor atual da bike" value={bike.valorAtual} onChange={handleChange} required />
                        </div>

                    </div>

                    <div className="BotoesBi">
                        <button className="botao-Instrucoes" onClick={handleSubmit}>Cadastrar</button>

                    </div>
                    <div className="BotoesBi">

                        <Link href={`/paginaprincipal/${idCli}`} className="botao-Instrucoes" >Voltar</Link>


                    </div>

                </form>

            </div>

        </main>
    )
}