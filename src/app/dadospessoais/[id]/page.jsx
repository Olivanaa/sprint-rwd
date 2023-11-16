"use client"
import Link from "next/link";
import { useEffect, useRef, useState } from "react";


export default function DadosPessoais({ params }) {

    const idCli = params.id == 0 ? '' : params.id

    const numeroRef = useRef(null);

    const [usuario, setUsuario] = useState({
        nome: '',
        sobrenome: '',
        cpf: '',
        genero: '',
        dtaNasc: '',
        cep: '',
        logradouro: '',
        numero: '',
        complemento: '',
        bairro: '',
        cidade: '',
        estado: '',
        telefone: '',
        email: '',
        login: '',
        senha: '',

    });

    const handleChange = e => {
        setUsuario({ ...usuario, [e.target.name]: e.target.value })
    }

    const buscarCep = (e) => {
        const cep = e.target.value;
        fetch(`https://viacep.com.br/ws/${cep}/json`)
            .then((resp) => resp.json())
            .then((data) => {
                setUsuario({
                    ...usuario,
                    cep: cep,
                    logradouro: data.logradouro,
                    numero: "",
                    complemento: "",
                    bairro: data.bairro,
                    cidade: data.localidade,
                    estado: data.uf
                })
                numeroRef.current.focus();
            })
            .catch((error) => {
                console.error("Erro ao buscar CEP:", error);
            });

    }

    const handleSubmit = e => {

        e.preventDefault();

        fetch(`http://localhost:8080/Sprint4/api/cliente/${idCli}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(usuario)
        })
            .then(window.location = `/paginaprincipal/${idCli}`)
            .catch(error => console.error(error))
    }

    useEffect(() => {
        if (idCli) {
            fetch(`http://localhost:8080/Sprint4/api/cliente/${idCli}`)
                .then(resp => resp.json())
                .then(resp => setUsuario(resp))
                .catch(error => console.error(error))
        }
    }, [idCli])

    return (
        <main className="DadosPessoais">

            <div className='ContainerDadosPessoais'>
                <Link href='/paginaprincipal/[id]' as={`/paginaprincipal/${idCli}`} className='botaoVoltar'>Voltar</Link>
                <h1>DADOS PESSOAIS</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-input-alterar">
                        <div className="input-box-alterar">
                            <label htmlFor="name">Nome</label>
                            <input type="text" name='nome' value={usuario.nome}
                                placeholder="Nome" onChange={handleChange} required />
                        </div>
                        <div className="input-box-alterar">
                            <label htmlFor="sobrenome">Sobrenome</label>
                            <input type="text" name='sobrenome' value={usuario.sobrenome}
                                placeholder="Sobrenome" onChange={handleChange} required />
                        </div>
                        <div className="input-box-alterar">
                            <label htmlFor="genero">Genero</label>
                            <input type="text" name='genero' value={usuario.genero}
                                placeholder="Genero" onChange={handleChange} required />
                        </div>

                        <div className="input-box-alterar">
                            <label htmlFor="cep">CEP</label>
                            <input type="text" name='cep' value={usuario.cep}
                                placeholder="Digite seu CEP" onChange={handleChange} onBlur={buscarCep} required />
                        </div>
                        <div className="input-box-alterar">
                            <label htmlFor="logradouro">Logradouro</label>
                            <input type="text" name='logradouro' value={usuario.logradouro}
                                placeholder="Logradouro" onChange={handleChange} required />
                        </div>

                        <div className="input-box-alterar">
                            <label htmlFor="numero">Número</label>
                            <input ref={numeroRef} type="text" name='numero' value={usuario.numero}
                                placeholder="Numero" onChange={handleChange} required />
                        </div>

                        <div className="input-box-alterar">
                            <label htmlFor="complemento">Complemento</label>
                            <input type="text" name='complemento' value={usuario.complemento}
                                placeholder="Complemento" onChange={handleChange} />
                        </div>


                        <div className="input-box-alterar">
                            <label htmlFor="bairro">Bairro</label>
                            <input type="text" name='bairro' value={usuario.bairro}
                                placeholder="Bairro" onChange={handleChange} required />
                        </div>

                        <div className="input-box-alterar">
                            <label htmlFor="cidade">Cidade</label>
                            <input type="text" name='cidade' value={usuario.cidade}
                                placeholder="Cidade" onChange={handleChange} required />
                        </div>
                        <div className="input-box-alterar">
                            <label htmlFor="estado">Estado</label>
                            <input type="text" name='estado' value={usuario.estado}
                                placeholder="Estado" onChange={handleChange} required />
                        </div>
                        <div className="input-box-alterar">
                            <label htmlFor="telefone">Telefone</label>
                            <input id="telefone" type="tel" name="telefone" value={usuario.telefone} placeholder="Digite seu telefone" onChange={handleChange} required />
                        </div>

                        <div className="input-box-alterar">
                            <label htmlFor="email">Email</label>
                            <input id="email" type="email" name="email" value={usuario.email} placeholder="Digite seu email" onChange={handleChange} required />
                        </div>
                    </div>

                    <button type="submit" className="Botao-Alterar">Alterar Dados</button>
                </form>

            </div>
        </main>
    )

}