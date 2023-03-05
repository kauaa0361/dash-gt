import Image from "next/image"

export function CustomPage() {
  const a = require("/apiteste.json")
  console.log(a);
  return(
    <main className="ml-10 mr-10">
      <Title icon="/ads.jpg" title="Visao Geral Google Ads"/>
      <section className="grid justify-left grid-flow-row-dense 
      grid-col-1 lg:grid-flow-col lg:grid-rows-2">
        <DataSection title="cliques" value="747"/>
        <DataSection title="impressoes" value="9.589"/>
        <DataSection title="custo por clique" value="0,89"/>
        <DataSection title="custo" value="663,96"/>
        <DataSection title="todas as conversoes" value="61,00"/>
      </section>
      <CustomContent/>
      <Title icon="/ads.jpg" title="Tipo de dispositivo"/>
    </main>
  )
}

function DataSection({title, value}) {
  return (
    <section className="uppercase w-40 h-20 mt-5">
      <p className="text-md font-light text-slate-700">{title}</p>
      <p className="text-3xl font-medium mt-4">{value}</p>
      <div className="bg-slate-200 w-full h-2 mt-2 rounded-md"/>
    </section>
  )
}

function Title({icon,title}) {
  return(
    <section className="flex mt-10">
      <Image className="w-8 h-8" width={200} height={200} src={icon} alt="ads logo"/>
      <h1 className="text-2xl font-medium">{title}</h1>
  </section>
  )
}

function CustomContent() {
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