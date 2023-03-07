import { Header,Title,DataSection,Description } from "./custom";
import Chart  from "./chart";

export default function Dashboard() {

  return(
    <main className="ml-10 mr-10">
      <Header cliente="Dra Daniele"/>
      <Title icon="/ads.png" title="Visao Geral Google Ads"/>
      <section className="grid justify-left grid-flow-row-dense 
      grid-col-1 lg:grid-flow-col lg:grid-rows-2">
        <DataSection title="cliques" value="747"/>
        <DataSection title="impressoes" value="9.589"/>
        <DataSection title="custo por clique" value="0,89"/>
        <DataSection title="custo" value="663,96"/>
        <DataSection title="todas as conversoes" value="61,00"/>
      </section>
      <Description/>
      <section className="grid gap-y-0 grid-flow-row-dense place-items-center
      grid-col-1 lg:grid-flow-col lg:grid-rows-2">
        <Title icon="/ads.png" title="Tipo de dispositivo"/>
        <Chart/>
        <Title icon="/ads.png" title="Tipo de dispositivo"/>
        <Chart/>
      </section>
    </main>
  )
}

