import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className="Home">
      <div className='Home-container'>
        <Image src={'/bicicleta1.png'} alt='bicicleta' width={500} height={500}/>
        <div className="TextoHome">
          <h2>SEGURO</h2><h4>DE</h4><h3>BICICLETAS</h3>
          <p>Confira nossos serviços</p>
                
          <button>Saiba Mais</button>
        </div>   
      </div>
    </main>
  )
}
