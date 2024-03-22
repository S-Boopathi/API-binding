import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Task() {
  const [photo,setPhoto]=useState([])
  const [num,setNum]=useState()
  useEffect(()=>{
    const fetchdata=async()=>{
      const final= await axios.get("https://jsonplaceholder.typicode.com/photos")
      setPhoto(final.data)
    }
    fetchdata();
  })
  const filterdata=photo.filter((e)=>e.id === num)
  return (
    <div>
      <label >Sort by ID</label>
      <select onChange={(e)=>setNum(Number(e.target.value))}>
      {
        photo.map((e)=>(
          <option key={e.id} value={e.id}>{e.id}</option>
        ))
      }
      </select>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>AlbumID</th>
              <th>Title</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
              {
                filterdata.map((e)=>(
                  <tr key={e.id}>
                    <td>{e.id}</td>
                    <td>{e.albumId}</td>
                    <td>{e.title}</td>
                    <td><img src={e.url} alt="" /></td>
                  </tr>
                ))
              }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Task