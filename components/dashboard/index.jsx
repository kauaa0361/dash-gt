import { useState,useEffect } from "react";
import { Title,DataSection,Description } from "./custom";
import Graph from "../graph";

export default function Dashboard() {

  const [download, setDownload] = useState(false)


  useEffect(() => {
    setDownload(true);
  },[]);

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
      <Description/>
      <Title icon="/ads.jpg" title="Tipo de dispositivo"/>
      {download && (
        <section className="grid justify-left grid-flow-row-dense 
        grid-col-1 lg:grid-flow-col lg:grid-rows-2">
          <Graph/>
        </section>
      )}
    </main>
  )
}

