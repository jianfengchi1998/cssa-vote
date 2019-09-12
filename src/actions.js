export const SET_STATE = 'SET_STATE'

export const setState = (state) => ({
  type: SET_STATE,
  singers: state.singers,
  singer: state.singer,
  isVote: state.isVote,
})
