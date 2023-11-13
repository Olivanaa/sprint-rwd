import Link from "next/link";

export default function Cabecalho(){
    return(
        <nav>
            <div className="NavPrincipal">
                <Link href='/'>Home</Link>
                <Link href='/sobrenos'>Sobre Nos</Link>
                <Link href='/contato'>Contato</Link>
                <Link href='/paginaprincipal'>Perfil</Link>
            </div>
            <div className="NavLogar">
                <Link href='/login' className="NavLogin">Login</Link>
                <Link href='/criarconta'  className="NavCadastrar">Cadastrar</Link>
            </div>
        </nav>
    )
}