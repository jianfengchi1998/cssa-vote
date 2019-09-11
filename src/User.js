import React, { useState, Component } from 'react'
import SingerCard from './components/card'

export default function User() {
    const [isLike, setLike] = useState(false);
    const voteClick = ()  => {
        //send vote to backend
        //restriction on vote number
        //after click, icon turn red
        setLike(!isLike);
    }
    return (
        <SingerCard isLike={isLike} voteClick={() => voteClick()} iconType="like"></SingerCard>
    )
}
