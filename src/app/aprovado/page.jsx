import Link from "next/link";

export default function Aprovado(){
    return(
        <main className="Aprovado">
            <div className="AprovadoContainer">
                <h1>Seu cadastro foi finalizado com sucesso!</h1>
                <h4>Aguarde até ser aprovado!</h4>
                <Link href= '/'>Voltar para a página inicial.</Link>
            </div>
            
            
        </main>
    )
}