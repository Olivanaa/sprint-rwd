"use client"

import Link from "next/link"
import { useState, useRef } from "react"



export default function criarConta() {

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

        fetch(`http://localhost:8080/Sprint4/api/cliente/criarconta`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(usuario)
        })
            .then(window.location = '/login')
            .catch(error => console.error(error))
    }


    return (
        <div className="Cadastrar">

            <div className="CadastrarContainer">
                <div className='CadastrarCampo1'>
                    <div className='CadastrarTexto'>
                        <h1>Seja</h1>
                        <h2>Bem-vindo</h2>
                    </div>
                </div>
                <div className='CadastrarCampo2'>
                    <form onSubmit={handleSubmit}>
                        <div className='CadastrarTitulo'>
                            <h1>CRIAR CONTA</h1>
                        </div>
                        <div className="form-input-cadastrar">
                            <div className="input-box-cadastrar">
                                <label htmlFor="name">Nome</label>
                                <input type="text" name='nome' value={usuario.nome}
                                    placeholder="Digite seu primeiro nome" onChange={handleChange} required />

                            </div>

                            <div className="input-box-cadastrar">
                                <label htmlFor="sobrenome">Sobrenome</label>
                                <input type="text" name='sobrenome' value={usuario.sobrenome}
                                    placeholder="Digite seu sobrenome" onChange={handleChange} required />

                            </div>

                            <div className="input-box-cadastrar">
                                <label htmlFor="cpf">CPF</label>
                                <input type="text" name='cpf' value={usuario.cpf}
                                    placeholder="Digite seu cpf" onChange={handleChange} required />
                            </div>

                            <div className="input-box-cadastrar">
                                <label htmlFor="genero">Gênero</label>
                                <select name="genero" className="tamanho" onChange={handleChange} required value={usuario.genero}>
                                    <option value="nd">Escolha seu gênero</option>
                                    <option value="M">Masculino</option>
                                    <option value="F">Feminino</option>
                                    <option value="NB">Não-binário</option>
                                    <option value="NR">Prefiro não dizer</option>
                                </select>
                            </div>

                            <div className="input-box-cadastrar">
                                <label htmlFor="dtaNasc">Data de Nascimento</label>
                                <input type="date" name='dtaNasc' value={usuario.dtaNasc}
                                    onChange={handleChange} required />
                            </div>

                            <div className="input-box-cadastrar">
                                <label htmlFor="cep">CEP</label>
                                <input type="text" name='cep' value={usuario.cep}
                                    placeholder="Digite seu CEP" onChange={handleChange} onBlur={buscarCep} required />
                            </div>

                            <div className="input-box-cadastrar">
                                <label htmlFor="logradouro">Logradouro</label>
                                <input type="text" name='logradouro' value={usuario.logradouro}
                                    placeholder="Logradouro" onChange={handleChange} required />
                            </div>

                            <div className="input-box-cadastrar">
                                <label htmlFor="numero">Número</label>
                                <input ref={numeroRef} type="text" name='numero' value={usuario.numero}
                                    placeholder="Numero" onChange={handleChange} required />
                            </div>

                            <div className="input-box-cadastrar">
                                <label htmlFor="complemento">Complemento</label>
                                <input type="text" name='complemento' value={usuario.complemento}
                                    placeholder="Complemento" onChange={handleChange} />
                            </div>


                            <div className="input-box-cadastrar">
                                <label htmlFor="bairro">Bairro</label>
                                <input type="text" name='bairro' value={usuario.bairro}
                                    placeholder="Bairro" onChange={handleChange} required />
                            </div>

                            <div className="input-box-cadastrar">
                                <label htmlFor="cidade">Cidade</label>
                                <input type="text" name='cidade' value={usuario.cidade}
                                    placeholder="Cidade" onChange={handleChange} required />
                            </div>
                            <div className="input-box-cadastrar">
                                <label htmlFor="estado">Estado</label>
                                <input type="text" name='estado' value={usuario.estado}
                                    placeholder="Estado" onChange={handleChange} required />
                            </div>
                            <div className="input-box-cadastrar">
                                <label htmlFor="email">Email</label>
                                <input id="email" type="email" name="email" value={usuario.email} placeholder="Digite seu email" onChange={handleChange} required />
                            </div>

                            <div className="input-box-cadastrar">
                                <label htmlFor="telefone">Telefone</label>
                                <input id="telefone" type="tel" name="telefone" value={usuario.telefone} placeholder="Digite seu telefone" onChange={handleChange} required />
                            </div>

                            <div className="input-box-cadastrar">
                                <label htmlFor="login">Login</label>
                                <input id="login" type="text" name="login" value={usuario.login} placeholder="Digite seu login" onChange={handleChange} required />
                            </div>

                            <div className="input-box-cadastrar">
                                <label htmlFor="senha">Senha</label>
                                <input id="senha" type="password" name="senha" value={usuario.senha} placeholder="Digite sua senha" onChange={handleChange} required />
                            </div>
                            <Link href={'/'}  className='botao-Cancelar'>Cancelar</Link>
                            <button type='submit' className='botao-Cadastrar'>Criar conta</button>
                        </div>     
                    </form>
                    <div className='TextoBaixo'>
                        <p>Já possui uma conta?</p>
                        <Link href='/login'>Faça login</Link>
                    </div>
                </div>
                </div>
                </div>

    )
}