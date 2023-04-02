import React from 'react'

import { NavLink } from 'react-router-dom'
import { routeMain as routeNewsDetail } from 'pages/NewsDetail'
import { INewsDetail } from 'types/INewsDetails'
import DateView from 'components/DateView'

import './styles.scss'

interface INewsItemParams {
   item: INewsDetail
}

const NewsItem: React.FC<INewsItemParams> = ({ item }) => {
   return (
      <NavLink to={routeNewsDetail(item._id)} className='newsItem'>
         <div className='newsItemWrapper'>
            <div className='title'>{item.title}</div>
         </div>
         <div className='bottomWrapper'>
            <p className='source'>{item.clean_url}</p>
            <DateView value={item.published_date} />
         </div>
      </NavLink>
   )
}

export default NewsItem
