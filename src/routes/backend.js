import React, { memo, useState, useContext } from 'react'
import { Row } from 'antd'
import Select from 'react-select'
import { Context } from '../reducer'
import {
  setSingers, clean, setSinger, setIsVote,
} from '../actions'
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
        onClick={() => {
          dispatch(setSingers(singersSelected))
        }}
      >
        start
      </button>
      <button
        onClick={() => {
          dispatch(clean())
        }}
      >
        stop
      </button>
      <Row>
        <select
          value={state.singer}
          onChange={(e) => {
            dispatch(setSinger(e.target.value))
          }}
        >
          {
            singers.filter((singer) => (
              state.singers.includes(singer.id)
            )).map((singer, i) => (
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
          disabled={state.singers.indexOf(state.singer) === state.singers.length - 1}
          onClick={() => {
            const newSinger = state.singers[state.singers.indexOf(state.singer) + 1]
            dispatch(setSinger(newSinger))
          }}
        >
          next
        </button>
      </Row>
      <Row>
        <button
          disabled={state.isVote}
          onClick={() => {
            dispatch(setIsVote(true))
          }}
        >
          start voting
        </button>
        <button
          disabled={!state.isVote}
          onClick={() => {
            dispatch(setIsVote(false))
          }}
        >
          end voting
        </button>
      </Row>
    </>
  )
})
