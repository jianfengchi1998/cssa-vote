import { singers } from '../config'

export const state = {
  singers: [],
  singer: '',
  isVote: false,
}

export const setSingers = (singerIds) => {
  state.singers = singers.filter((singer) => (
    singerIds.includes(singer.id)
  ))

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
}
