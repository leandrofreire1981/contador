import React, { useState } from 'react'

export const Home = () => {

  const [ files, setFiles ] = useState([]);
  const [ results, setResults ] = useState([])

  function handleOnInput(e){
    if(files.length === 0)
      setFiles([...e.target.files])
    else
      setFiles([...files, ...e.target.files])
    console.log('archivos: ', files)
  }

  async function handleOnButton(e){
    console.log('archivos: ', files)
    //const f = new FileReader()
    //f.readAsText(files[0])

    const f = []
    const auxF = []
    for (let i = 0; i < files.length; i++) {
      f[i] = new FileReader()
      f[i].readAsText(files[i])

      f[i].onload = () => {
        for (let j = 0; j < f[i].result.length; j++) {
          let aux = f[i].result.slice(j, j + 5)
          if(aux === 'Build'){
            auxF.push(f[i].result.slice(j))
            if(results.length === 0)
              setResults([f[i].result.slice(j)])
            else  
              setResults([results, f[i].result.slice(j)])
            i++
            break
          }
        }
        console.log('mostrar: ', auxF)
      }

      f[i].onerror = () => {
        console.log('error: ', f.error)
      }
    } 
    
  }

  return (
    <div>
        <br/>
        <input type='file' name='files' accept='.gcode' multiple onChange={handleOnInput} />
        <br/><br/>
        <button onClick={handleOnButton}>Agregar</button>
        <br></br>
        <br></br>
        <div>
          Mostrando resultados
        </div>
        <div>
          {results.length>0 && results.map((r, i) => (
            <div key={'code' + i}>{r} </div>
          ))}
        </div>
    </div>
 
    )
}
