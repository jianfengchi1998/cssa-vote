import { memo, useEffect, useContext } from 'react'
import { Context } from '../reducer'
import { setState } from '../actions'
import { getServerData } from '../../utils'

export default memo(() => {
  const { dispatch } = useContext(Context)

  useEffect(() => {
    (async () => {
      const state = await getServerData('/getState')
      dispatch(setState(state))
    })()
  }, [])

  return null
})
