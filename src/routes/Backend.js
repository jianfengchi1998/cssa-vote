import React, { memo, useState, useContext } from 'react'
import { Row, Select, Button } from 'antd'
// import Select from 'react-select'
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
      <Row>
        <Select
          mode="multiple"
          style={{ width: '100%' }}
          defaultValue={singersSelected}
          onChange={(e) => {
            setSingerSelected(e)
          }}
        >
          {
            singers.map((singer, i) => (
              <Select.Option
                key={i}
                value={singer.id}
              >
                {singer.name}
              </Select.Option>
            ))
          }
        </Select>
      </Row>
      <Row>
        <Button
          onClick={async () => {
            const newState = await postServerData('/setSingers', singersSelected)
            dispatch(setState(newState))
          }}
        >
          start
        </Button>
        <Button
          onClick={async () => {
            const newState = await postServerData('/setSingers', [])
            dispatch(setState(newState))
          }}
        >
          stop
        </Button>
      </Row>
      <Row>
        <Select
          style={{ width: '100%' }}
          value={state.singer}
          onChange={async (e) => {
            const newState = await postServerData('/setSinger', { singer: e })
            dispatch(setState(newState))
          }}
        >
          {
            state.singers.map((singer, i) => (
              <Select.Option
                key={i}
                value={singer.id}
              >
                {singer.name}
              </Select.Option>
            ))
          }
        </Select>
      </Row>
      <Row>
        <Button
          disabled={state.singers.map((singer) => singer.id).indexOf(state.singer) === state.singers.length - 1}
          onClick={async () => {
            const newSinger = state.singers[state.singers.map((singer) => singer.id).indexOf(state.singer) + 1].id
            const newState = await postServerData('/setSinger', { singer: newSinger })
            dispatch(setState(newState))
          }}
        >
          next
        </Button>
      </Row>
      <Row>
        <Button
          disabled={state.isVote}
          onClick={async () => {
            const newState = await postServerData('/setIsVote', { isVote: true })
            dispatch(setState(newState))
          }}
        >
          start voting
        </Button>
        <Button
          disabled={!state.isVote}
          onClick={async () => {
            const newState = await postServerData('/setIsVote', { isVote: false })
            dispatch(setState(newState))
          }}
        >
          end voting
        </Button>
      </Row>
    </>
  )
})
