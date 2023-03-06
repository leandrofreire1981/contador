import React, { useState } from 'react'

export const Home = () => {

  const [ files, setFiles ] = useState([]);

  function handleOnInput(e){
    setFiles([...files, e.target.files])
    console.log('archivos: ', files)
  }

  async function handleOnButton(e){
    console.log('archivos: ', files)
    const f = new FormData();

    for (let i = 0; i < files.length; i++) {
      f.append("files", files[i]);
    }

    console.log('mostrar: ', f)
  }

  return (
    <div>
        <br/>
        <input type='file' name='files' accept='.jpg' multiple onChange={handleOnInput} />
        <br/><br/>
        <button onClick={handleOnButton}>Agregar</button>
    </div>
 
    )
}
