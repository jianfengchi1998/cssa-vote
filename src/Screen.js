import { Row, Col } from 'antd'
import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'
import shortid from 'shortid'
import SingerCard from './components/card'
import { backendURL } from './constants'

const axios = require('axios')

const socket = io(backendURL)

export default function Screen() {
  const [singers, setSingers] = useState([])
  const displayVote = () => {
    // grab vote number from backend and display on card
  }

  useEffect(() => {
    // socket.on("connect", function() {
    //   socket.emit("getAllSingers");
    //   socket.on("allSingers", data => {
    //     console.log(data);
    //   });
    // });

    axios
      .get(`${backendURL}/getAllSingers`)
      .then((response) => {
        // handle success
        console.log(response.data)
        setSingers(response.data)
      })
      .catch((error) => {
        // handle error
        console.log(error)
      })
      .finally(() => {
        // always executed
      })
  }, [])
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
        {singers.map((singer) => (
          <Col span={5} key={shortid.generate()}>
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
