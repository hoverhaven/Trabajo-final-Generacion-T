import lista_Materiales from "./elemntos.json"
import { useEffect, useState } from "react"
import { Materiales } from "./Materiales"
import Footer from "./Footer.jsx"
function App() {
  

  return (
    <>
      {
        lista_Materiales.map(
          (p) => <Materiales key={p.id} datos={p}/>
        )
      }
    </>
  )
}


import Footer from "./Footer.jsx"
import main from ".main.jsx"
import nav from "nav.jsx"

export default App
