import React from 'react'
import {Routes, Route, Navigate, HashRouter} from 'react-router-dom'
import Error404 from './pages/Error404'
import PreJunior from './pages/PreJunior'
import Junior from './pages/Junior'
import JuniorPlus from './pages/JuniorPlus'

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus',
    ERROR404: '/error404'
} as const

function Pages() {
    return (

            <div>
                {/*Routes выбирает первый подходящий роут*/}
                <Routes>
                    <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR} /> }/>
                    {/*роутинг будут писать студенты*/}
                    {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу /pre-junior*/}
                    {/*<Route ...*/}

                    <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                    <Route path={PATH.JUNIOR} element={<Junior/>}/>
                    <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>
                    <Route path={PATH.ERROR404} element={<Error404/>}/>

                    {/*роуты для /pre-junior, /junior, /junior-plus*/}
                    {/*<Route ...*/}
                    {/*<Route ...*/}
                    {/*<Route ...*/}

                    <Route path={'/*'} element={<Navigate to={PATH.ERROR404} /> }/>
                    {/*роут для несуществующей страницы должен отрисовать <Error404 />*/}
                    {/*<Route ...*/}
                </Routes>
            </div>


    )
}

export default Pages
