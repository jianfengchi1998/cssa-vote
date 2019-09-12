import React, { memo, useState, useContext } from 'react'
import { Row } from 'antd'
import Select from 'react-select'
import { Context } from '../reducer'
import { postServerData } from '../../utils'
import { setState } from '../actions'

import { singers } from '../../config'

// import "./components/dataManage";
// import "./components/data";
export default memo(() => {
  const { state, dispatch } = useContext(Context)
  const [singersSelected, setSingerSelected] = useState([])

  return (
    <>
      <Select
        defaultValue={singersSelected}
        isMulti
        options={singers.map((singer) => ({
          value: singer.id,
          label: singer.name,
        }))}
        onChange={(e) => {
          setSingerSelected(e.map((item) => item.value))
        }}
      />
      <button
        onClick={async () => {
          const newState = await postServerData('/setSingers', singersSelected)
          dispatch(setState(newState))
        }}
      >
        start
      </button>
      <button
        onClick={async () => {
          const newState = await postServerData('/setSingers', [])
          dispatch(setState(newState))
        }}      
      >
        stop
      </button>
      <Row>
        <select
          value={state.singer}
          onChange={async (e) => {
            const newState = await postServerData('/setSinger', { singer: e.target.value })
            dispatch(setState(newState))
          }}
        >
          {
            state.singers.map((singer, i) => (
              <option
                key={i}
                value={singer.id}
              >
                {singer.name}
              </option>
            ))
          }
        </select>
      </Row>
      <Row>
        <button
          disabled={state.singers.map((singer) => singer.id).indexOf(state.singer) === state.singers.length - 1}
          onClick={async () => {
            const newSinger = state.singers[state.singers.map((singer) => singer.id).indexOf(state.singer) + 1].id
            const newState = await postServerData('/setSinger', { singer: newSinger })
            dispatch(setState(newState))
          }}
        >
          next
        </button>
      </Row>
      <Row>
        <button
          disabled={state.isVote}
          onClick={async () => {
            const newState = await postServerData('/setIsVote', { isVote: true })
            dispatch(setState(newState))
          }}
        >
          start voting
        </button>
        <button
          disabled={!state.isVote}
          onClick={async () => {
            const newState = await postServerData('/setIsVote', { isVote: false })
            dispatch(setState(newState))
          }}
        >
          end voting
        </button>
      </Row>
    </>
  )
})
