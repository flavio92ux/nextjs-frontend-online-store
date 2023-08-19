import Image from 'next/image'
import Link from 'next/link'
import voltarImg from '../assets/img/Voltar.png'
import carrinhoImg from '../assets/img/carrinho.png'

export default function ProductDetail() {
  return (
    <>
      <div className='flex justify-between'>
        <Link href='/'>
          <Image src={voltarImg} alt='Voltar' width={40} height={40}></Image>
        </Link>
        <Link href='/carrinho'>
          <Image
            src={carrinhoImg}
            alt='Carrinho'
            width={40}
            height={40}
          ></Image>
        </Link>
      </div>

      <p className='font-bold'>Produto 1 - R$ XXX,XX</p>

      <div className='flex flex-row gap-7'>
        <div className='w-[350px] h-[260px] border'></div>
        <div className='w-[350px] h-[260px] border'>
          <p className='font-bold'>Especificacoes técnicas</p>
          <ul className='ml-6 list-disc'>
            <li>Especificacao 1</li>
            <li>Especificacao 2</li>
            <li>Especificacao 3</li>
            <li>Especificacao 4</li>
          </ul>
        </div>
      </div>
    </>
  )
}
