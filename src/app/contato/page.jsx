

export default function Contato(){

    return(
        <main className="Contato">
            <div className='Contato1'>
                <div className="FormContato">

                    <div className="TituloContato">
                        <h1>Entre em contato</h1>
                    </div>

                    <div className="form-input">

                        <div className="input-box">
                            <label htmlFor="email">Email</label>
                            <input id="email" type="email" name="email" placeholder="Digite seu email" required/>
                        </div>

                        <div className="input-box">
                            <label htmlFor="telefone">Telefone</label>
                            <input id="telefone" type="tel" name="telefone" placeholder="(xx) xxxx-xxxx" required/>
                        </div>

                        <div className="input-box">
                            <label htmlFor="mensageml">Sua mensagem</label>
                            <input id="mensagem" type="text" name="mensagem" placeholder="Digite sua mensagem" required/>
                        </div>

                    </div>

                </div>
                <div className="Enviar-botao">
                    <button>Enviar</button>
                </div>
            </div>
           
        </main>
    )
}