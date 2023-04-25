import React, {useState} from 'react'
import Affairs from './affairs/Affairs'
import s2 from '../../s1-main/App.module.css'

/*
* 1 - описать типы AffairPriorityType, AffairType
* 2 - указать нужный тип для defaultAffairs
* 3 - дописать типы и логику функции filterAffairs и проверить её тестами
* 4 - выполнить пункт 3 для функции deleteAffair
* 5 - указать нужный тип в useState с affairs
* 6 - дописать тип и логику функции deleteAffairCallback
* 7 - в файле Affairs.tsx дописать типизацию пропсов
* 8 - в файле Affairs.tsx дописать логику функций setAll, setHigh, setMiddle, setLow
* 9 - в файле Affair.tsx дописать типизацию пропсов
* 10 - в файле Affair.tsx дописать функции deleteCallback и использовать
* 11 - в файле Affair.tsx отобразить приходящие данные
* */

// types
export type AffairPriorityType = 'low' | 'middle' |  'high' // need to fix any - сделал, ALL - НЕ НАДО, ЭТО НЕ ПРИОРИТЕТ
export type AffairType = {
    _id: number // need to fix any, сделал из констант
    name: string // need to fix any, сделал из констант
    priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType // или 'all' | 'low' | 'middle' |  'high'

// constants
const defaultAffairs: AffairType[] = [ // need to fix any, сделал, массив эффэйрТипа
    {_id: 1, name: 'React', priority: 'high'}, // студенты могут изменить содержимое name и количество элементов в массиве, ...priority не менять!
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] => { // need to fix any
    debugger
    if (filter === 'all') {
        return affairs
    }
    return affairs.filter(el => el.priority === filter) // need to fix, исправил
}
export const deleteAffair = (affairs: AffairType[], _id: number): AffairType[] => { // need to fix any, исправил
    debugger
    return affairs.filter(el => el._id !== _id) // need to fix, исправил
}

function HW2() {
    const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs) // need to fix any, исправил
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => { // need to fix any, исправил, добавил хук сетЭффеирс
        // need to fix, исправил
        setAffairs(deleteAffair(affairs,_id))
    }

    return (
        <div id={'hw2'}>
            <div className={s2.hwTitle}>Homework #2</div>
            <div className={s2.hw}>
                <Affairs
                    data={filteredAffairs}
                    setFilter={setFilter}
                    deleteAffairCallback={deleteAffairCallback}
                    filter={filter}
                />
            </div>
        </div>
    )
}

export default HW2
