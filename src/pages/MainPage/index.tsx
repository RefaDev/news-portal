import React, { useEffect } from 'react'
import PageTitle from 'components/PageTitle/PageTitle'
import NewsList from 'components/NewsList'
import routeMain from './routes'
import { routeMain as routeNewsListPage } from 'pages/NewsListPage'
import { NavLink } from 'react-router-dom'

import './styles.scss'

import { useDispatch, useSelector } from 'react-redux'
import { loadNews } from 'store/news/actions'
import { selectList } from 'store/news/selector'

const MainPage = () => {
   const dispatch = useDispatch()
   const newsList = useSelector(selectList)

   useEffect(() => {
      dispatch(loadNews())
   }, [dispatch])
   return (
      <section className='mainPage'>
         <PageTitle
            title={
               <h2>
                  Всегда <br /> свежие <span>новости</span>
               </h2>
            }
         />
         {newsList.length > 0 && <NewsList list={newsList.slice(0, 6)} />}
         <div className='linkToNews'>
            <NavLink to={routeNewsListPage()} activeClassName='linkToNewsAnchor'>
               Быть в курсе событий
            </NavLink>
         </div>
      </section>
   )
}

export { routeMain }

export default MainPage
