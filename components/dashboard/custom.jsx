import Image from "next/image"

export function Header({cliente}) {
  
  return(
    <>
    <header className="h-16 mt-8 flex items-center justify-between">
      <section className="block">
        <h1 className="font-medium text-xl">{cliente}</h1>
        <p className="font-medium text-sm text-gray-800">Período: 01/02/2023 - 28/02/2023</p>
      </section>
        <Image className="flex items-center" width={200} height={200} src="/logo.png" alt="ads logo 4GrowthBR"/>
    </header>
    <div className="bg-gray-200 w-full h-1 mt-2 rounded-md"/>
    </>
  )
}


export function DataSection({title, value}) {
  return (
    <section className="uppercase w-40 h-20 mt-5">
      <p className="text-md font-light text-slate-700">{title}</p>
      <p className="text-3xl font-medium mt-4">{value}</p>
      <div className="bg-gray-300 w-full h-1 mt-2 rounded-md"/>
    </section>
  )
}

export function Description() {
  return(
    <section className="mt-20 text-justify">
      <p className="mt-10">As campanhas do <strong>Google Ads</strong> durante o período de 01/02/2023 a 28/02/2023 originaram <strong>747 cliques </strong>
        (visitas ao site) e 9.598 impressões dos anúncios com um CTR de 7,78%, que é a proporção da frequência
        com que as pessoas que visualizaram os anúncios clicaram nele</p>
      <p className="mt-10">Foi investido <strong>R$663,96</strong> no período analisado. O custo por clique (CPC) foi de <strong>R$0,89</strong>.</p>
      <p className="mt-10"><strong>Conversões: Cliques no botão do WhatsApp</strong></p>
    </section>
  )
}

export function Title({icon,title}) {
  return(
    <section className="flex mt-10 h-10">
      <Image className="w-8 h-8" width={200} height={200} src={icon} alt="ads logo"/>
      <h1 className="text-2xl font-medium">{title}</h1>
    </section>
  )
}