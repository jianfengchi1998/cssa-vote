import { Row, Col, Card } from 'antd'
import React, { memo, useMemo, useContext } from 'react'
// import io from 'socket.io-client'

import { Context } from '../reducer'
import { chunk } from '../../utils'
// import SingerCard from '../components/card'

// import { backendURL } from '../../config'

// const axios = require('axios')

// const socket = io(backendURL)

export default memo(() => {
  const { state } = useContext(Context)

  const singers = useMemo(() => {
    const res = state.singers.filter((s) => (
      s.isVote
    )).sort((a, b) => {
      if (a.numVote >= b.numVote) {
        return 1
      }
  
      return -1
    })

    return chunk(res, 3)
  }, [state.singers])

  return (
    <>
      {
        singers.map((row, i) => (
          <Row key={i} type="flex" gutter={100} justify="center">
            {row.map((singer, j) => (
              <Col key={j} span={5}>
                <Card
                  cover={(
                    <img
                      alt={singer.name}
                      src={singer.photo}
                    />
                  )}            
                >
                  <Card.Meta
                    title={singer.name}
                    description={singer.numVote}
                  />
                </Card>
              </Col>
            ))}
          </Row>
        ))
      }
    </>
  )
})
