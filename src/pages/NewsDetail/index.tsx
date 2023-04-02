import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import routeMain from './routes'
import DateView from 'components/DateView'
import { ID } from 'types/ID'
import { INewsDetail } from 'types/INewsDetails'
import { prepareTitle } from 'utils/prepareTitle'
import { useSelector } from 'react-redux'
import { selectList } from 'store/news/selector'
import './styles.scss'



const NewsDetail = () => {
  const { id } = useParams<ID>()
  const [news, setNews] = useState<INewsDetail | undefined>(undefined)

  const newsList = useSelector(selectList)


  useEffect(() => {
    const currentNews = newsList?.find((item: INewsDetail) => item._id === id)
    setNews(currentNews)
  }, [id, newsList])

const str = prepareTitle(news?.title)

  return (
    <section className='newsDetailPage'>
      {news ? (
        <div className='newsDetailWrapper'>
          <div className='left'>
            <h2 className='newsDetailTitle'>{str.titleStart} <span>{str.titleEnd}</span></h2>
            <p className='source'>{news.clean_url}</p>
            <DateView value={news.published_date} />
          </div>
          <div className='right'>
            <img src={news.media} alt={news.media} />
            <p className='summary'>{news.summary}</p>
          </div>
        </div>
      ) : (
        <>Страница не найдена</>
      )}
    </section>
  )
}

export { routeMain }

export default NewsDetail
