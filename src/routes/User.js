import React, { useMemo, useContext } from 'react'
import { Context } from '../reducer'
import { Card, Icon } from 'antd'
import { setState } from '../actions'
import { postServerData } from '../../utils'

export default function User() {
  const { state, dispatch } = useContext(Context)

  const singer = useMemo(() => {
    if (state.singers.length === 0) {
      return null
    }

    return state.singers.find((s) => (
      s.id === state.singer
    ))
  }, [state.singers, state.singer])

  const voteId = localStorage.getItem('cssa-vote-id')
  if (voteId === state.singer) {
    return <h4>You have vote one time. Please wait...</h4>
  }

  if (!singer || !state.isVote) {
    return <h4>Voting does not start. Please wait...</h4>
  }

  return (
    <Card
      style={{
        width: '90%',
        margin: 'auto',
      }}
      cover={(
        <img
          alt={singer.name}
          src={singer.photo}
        />
      )}
      actions={[
        <Icon
          key="like"
          type="like"
          onClick={async () => {
            const newState = await postServerData('/vote')
            localStorage.setItem('cssa-vote-id', state.singer)
            dispatch(setState(newState))
          }}
        />,
      ]}
    >
      <Card.Meta
        title={singer.name}
        description={singer.description}
      />
    </Card>
  )
}
