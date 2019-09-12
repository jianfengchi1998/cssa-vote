import { Row, Col } from 'antd'
import React from 'react'
// import io from 'socket.io-client'
// import shortid from 'shortid'
import SingerCard from '../components/card'
import singers from '../../data/data'
// import { backendURL } from '../../config'

const axios = require('axios')

// const socket = io(backendURL)

export default function Screen() {
  // const [singers, setSingers] = useState([])
  const displayVote = () => {
    // grab vote number from backend and display on card
  }

  return (
  // Here, you use map function to map each values into the props.
    /**
     * example
     * const singers = [
     * {name: cunhua, },
     * {name: cunhua, },
     * {name: cunhua, },
     * ]
     *
     * singers.map(singer =>{
     *     <SingerCard name=singer.name islike=singer.isLike  />
     * })
     *
     *
     */
    <div>
      <Row type="flex" gutter={100} justify="center">
        {singers.map((singer, i) => (
          <Col span={5} key={i}>
            <SingerCard
              isLike={singer.isLike}
              voteClick={() => displayVote()}
              iconType="question-circle"
            />
          </Col>
        ))}
      </Row>
    </div>
  )
}
