export const SET_SINGERS = 'SET_SINGERS'
export const CLEAN = 'CLEAN'
export const SET_SINGER = 'SET_SINGER'
export const SET_ISVOTE = 'SET_ISVOTE'

export const setSingers = (singers) => ({
  type: SET_SINGERS,
  singers,
})

export const clean = () => ({
  type: CLEAN,
})

export const setSinger = (singer) => ({
  type: SET_SINGER,
  singer,
})

export const setIsVote = (isVote) => ({
  type: SET_ISVOTE,
  isVote,
})
