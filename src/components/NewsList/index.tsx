import React from 'react'
import NewsItem from './components/NewsItem'
import { INewsDetail } from 'types/INewsDetails'

import './styles.scss'

interface INewsListParams {
   list: INewsDetail[]
}

const NewsList: React.FC<INewsListParams> = ({ list }) => {
   return (
      <div className='newsList'>
         {list.map((news: INewsDetail) => (
            <NewsItem key={news._id} item={news} />
         ))}
      </div>
   )
}

export default NewsList
