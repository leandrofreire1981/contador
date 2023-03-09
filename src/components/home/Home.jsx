import React, { useState } from 'react'

export const Home = () => {

  const [ files, setFiles ] = useState('');

  function handleOnInput(e){
    setFiles(e.target.files[0])
    console.log('archivos: ', files)
  }

  async function handleOnButton(e){
    console.log('archivos: ', files)
    const f = new FileReader()
    f.readAsText(files)

    f.onload = () => {
     // for (let i = 0; i < 7; i++) {
        
     console.log(f.result.includes('Build'))

      //}
    }
    f.onerror = () => {
      console.log('error: ', f.error)
    }
 

 
  }

  return (
    <div>
        <br/>
        <input type='file' name='files' accept='.gcode' multiple onChange={handleOnInput} />
        <br/><br/>
        <button onClick={handleOnButton}>Agregar</button>
    </div>
 
    )
}
