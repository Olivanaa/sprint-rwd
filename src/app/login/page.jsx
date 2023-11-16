"use client"

import Link from "next/link";
import { useState } from "react"


export default function Login({params}){

    const idCli = params.id == 0 ? '' : params.id

    const [usuario, setUsuario] = useState({
        login: '',
        senha: '',
        id:''
    })

    const handleChange = e=>{
        setUsuario({...usuario, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    
        fetch(`http://localhost:8080/Sprint4/api/cliente/login?login=${usuario.login}&senha=${usuario.senha}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                console.error('Login falhou.');
                throw new Error('Login falhou.');
            }
        })
        .then(data => {
            console.log('Dados do cliente:', data.IdCliente);
            setUsuario(user => ({
                ...usuario,
                id: data.IdCliente
            }));
            window.location = `/paginaprincipal/${data.IdCliente}`;
        }).catch(error => console.error(error));
    };

    

    return(
        <div className='Login'>
            
            <div className='LoginContainer'>
                
                <div className='LoginCampo1'>
                    <div className='LoginTexto'>
                        <h1>Bem-vindo</h1>
                        <h2>De volta</h2>
                    </div>
                </div>
                <div className='LoginCampo2'>
                    <form onSubmit={handleSubmit}>   
                        <div className='LoginTitulo'>
                            <h1>LOGIN</h1>
                        </div>
                        <div className="form-input-login">

                            <div className="input-box-login">
                                <label htmlFor="login">Login</label>
                                <input id="login" type="text" name="login" value={usuario.login} placeholder="Digite seu login" onChange={handleChange} required/>
                            </div>

                            <div className="input-box-login">
                                <label htmlFor="Senha">Senha</label>
                                <input id="senha" type="password" name="senha" value={usuario.senha} placeholder="Digite sua senha" onChange={handleChange} required/>
                            </div>

                        </div>
                        <div>
                            <button type="submit" className ='botao-Login' value={usuario.id}>Enviar</button>
                        </div>
                            
                    </form>

                    <div className='TextoBaixo'>
                        <p>Ainda não possui conta?</p> 
                        <Link href='/criarconta'>Criar conta</Link>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

