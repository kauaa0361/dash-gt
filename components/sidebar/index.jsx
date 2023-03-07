import Link from "next/link"

export function Sidebar() {
  return(
    <section className="grid grid-rows justify-center bg-gray-700 w-64 rounded-xl ml-2 mt-10">
      <CustomLink/>
      <CustomLink/>
      <CustomLink/>
      <CustomLink/>
    </section>
  )
}

function CustomLink({nome}) {
  return (
    <Link href="" className="text-left text-gray-200 rounded-xl my-10 py-2 w-32 h-10 
    hover:text-green-400 transition-all duration-200 ease-in">{nome ? nome : "vazio"}</Link>
  )
}