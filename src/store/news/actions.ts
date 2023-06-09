import { Dispatch } from 'redux'
import getNews from 'services/getNews'
import { IStore } from './types'

export const setNewsAction = (list: IStore['list']) => {
   return {
      type: 'news/setNews',
      payload: list,
   }
}

export const loadNews = ():any => async (dispatch: Dispatch) => {
   try {
      const response = await getNews()
      dispatch(setNewsAction(response.data.articles))
   } catch (error) {
      console.log(error, 'err')
   }
}
