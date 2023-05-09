import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

export const pureAddUser = (name: string, setError: (error: string)=>void, setName: (name: string) => void, addUserCallback: (name : string) => void) => {
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
    if(name.trim() === '') {
        setError('Ошибка! Введите имя!')
        return
    }
    addUserCallback(name)
    setName('')
}

export const pureOnBlur = (name: string, setError: (error: string)=>void) => { // если имя пустое - показать ошибку
    if (name.trim() === '') {
        setError('Ошибка! Введите имя!')
    }
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: any) => { // если нажата кнопка Enter - добавить
    if (e.key === 'Enter') {
        addUser()
    }
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (event: ChangeEvent<HTMLInputElement>) => { // need to fix any
        // Метод trim() удаляет пробельные символы с начала и конца строки
        const nameWithoutSpace = event.currentTarget.value // need to fix
        if (nameWithoutSpace !== '') { // тут проверка на пустую строку имени
            setName(nameWithoutSpace)
            error && setError('') // тут обнуляем ошибку, если она была
        } else {
            setName('')
            setError('Ошибка! Введите имя!')
        }

    }

    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
            pureOnEnter(e, addUser)
    }

    const totalUsers = users.length // need to fix
    const lastUserName =  users[totalUsers - 1]?.name // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
