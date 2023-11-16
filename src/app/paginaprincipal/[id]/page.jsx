"use client"

import Link from "next/link";
import Image from "next/image";

export default function PaginaPrincipal({ params }){    

    const idCli = params.id == 0 ? '' : params.id


    return(
        <div className="PaginaPrincipal">
            <div className="Campo1">
                <h1>PERFIL</h1>
                <Image src={'/bicicleta2.png'} alt='bicicleta' width={800} height={700}/>
            </div>
            <div className="Campo2">
                <Link href= '/dadospessoais/[id]' as={`/dadospessoais/${idCli}`} className='botao-pp'>Dados Pessoais</Link>
                <Link href= '/bicicleta/cadastrar/[id]' as={`/bicicleta/cadastrar/${idCli}`}className='botao-pp'>Fazer Seguro</Link>
                <Link href= '/status' className='botao-pp'>Consultar Status da Vistoria</Link>
            </div>
            
        </div>
    )
}