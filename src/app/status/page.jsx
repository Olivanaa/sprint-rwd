"use client"
import Link from "next/link";
import { useState } from "react";

export default function Status({params}){

    const idV = params.id == 0 ? '' : params.id


    const [seguro , setSeguro] = useState({
        nroApolice: '',
        dataVigencia: '',
        dataContratacao: '',
        tiposeguro:'',
    });

    const handleChange = e => {
        setSeguro({ ...seguro, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault();

        fetch(`http://localhost:8080/Sprint4/api/seguro/${idV}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(seguro)
        })
        .then(data => {
          console.log(data.idVistoria);
          setUsuario(s => ({
              ...vistoria,
              idVistoria: data.idVistoria
          }));
          window.location = `/seguro/${data.idVistoria}`;
        })
        .catch(error => console.error(error))
    }

    return(
        <main>
            <div className="Status">
                <p>Para verificar o status da vistoria, é necessário acessar informações externas, como a aprovação ou não do seguro.</p>
                <Link  href= '/'>Voltar</Link>
            </div>
        </main>
    )
}