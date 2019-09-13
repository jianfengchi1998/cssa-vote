import { getSingerIndex } from '../utils'
import { singers } from '../config'

export const state = {
  singers: [],
  singer: '',
  isVote: false,
}

export const setSingers = (singerIds) => {
  state.singers = singers.filter((singer) => (
    singerIds.includes(singer.id)
  )).map((singer) => ({
    ...singer,
    isVote: false,
    numVote: 0,
  }))

  if (singerIds.length === 0) {
    state.singer = ''
    return
  }

  state.singer = state.singers[0].id
}

export const setSinger = (singer) => {
  state.singer = singer
}

export const setIsVote = (isVote) => {
  state.isVote = isVote

  if (isVote) {
    const index = getSingerIndex(state.singers, state.singer)
    state.singers[index].isVote = true
  }
}

export const addNumVote = () => {
  console.log('aaa')
  const index = getSingerIndex(state.singers, state.singer)
  state.singers[index].numVote += 1
}
