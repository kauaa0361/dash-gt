import Head from 'next/head'
import Dashboard from '@/components/dashboard'
import Link from 'next/link'

export default function Home() {

  return (
    <>
      <Head>
        <title>Dash 4growth</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="mt-10 grid center text-center">
        <h1 className='text-5xl'>Bem vindo ao Dashboard</h1>
        <h1>4 growth br</h1>
        <section className='grid gap-y-0 grid-flow-row-dense place-items-center mt-20
      grid-col-2 lg:grid-flow-col lg:grid-rows-1'>
          <CustomSection/>
          <CustomSection/>
          <CustomSection/>
          <CustomSection/>
        </section>
        <section className="grid pt-10 justify-center grid-flow-row-dense gap-5 w-full grid-col-1">
          <Link href="/pagina2" >Acessar</Link>
      </section>
      </main>
    </>
  )
}

function CustomSection() {
  return(
    <div className='w-64 h-48 bg-gray-500 rounded-lg hover:scale-125'>
      <p className='mt-20 text-center text-gray-800'>Marca / Cliente</p>
    </div>
  )
}