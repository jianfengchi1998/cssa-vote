import React from 'react'

import singers from '../../data/data'
// import "./components/dataManage";
// import "./components/data";
export default () => {
  return (
    <>
      <select
        onChange={(e) => {
          
        }}
      >
        {
          singers.map((singer, i) => (
            <option
              key={i}
              value={singer.id}
            >
              {singer.name}
            </option>
          ))
        }
      </select>
      <div>
        <button>click me</button>
      </div>
    </>
  )
}
