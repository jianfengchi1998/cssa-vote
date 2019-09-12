import React, { useState, useContext } from 'react'
import { Context } from '../reducer'
import SingerCard from '../components/card'

export default function User() {
  const { state } = useContext(Context)

  console.log(state)

  const [isLike, setLike] = useState(false)
  const voteClick = () => {
    // send vote to backend
    // restriction on vote number
    // after click, icon turn red
    setLike(!isLike)
  }
  return (
    <SingerCard isLike={isLike} voteClick={() => voteClick()} iconType="like" />
  )
}
