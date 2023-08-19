import Link from 'next/link'
import Image from 'next/image'
import carrinhoImg from '../assets/img/carrinho.png'
import voltarImg from '../assets/img/Voltar.png'
import caixa from '../assets/img/Caixa.png'

export default function ShoppingCart() {
  return (
    <>
      <Link href='/'>
        <Image src={voltarImg} alt='Voltar' width={40} height={40}></Image>
      </Link>
      <div className='flex items-center'>
        <Image src={carrinhoImg} alt='Carrinho' width={40} height={40}></Image>

        <p>Carrinho de compras</p>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <Image src={caixa} alt='Caixa' width={350} height={350}></Image>
        <p className='font-bold'>Seu carrinho está vazio</p>
      </div>
    </>
  )
}
