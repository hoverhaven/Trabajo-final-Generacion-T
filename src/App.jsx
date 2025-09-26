import lista_Materiales from "./db/elemntos.json"
import { useEffect, useState } from "react"
import { Materiales } from "./components/Materiales"

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

export default App

