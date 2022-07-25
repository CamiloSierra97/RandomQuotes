import React from 'react'

const Introduction = ({ click, setSearch, search }) => {

    const submit = () => {
        setSearch(!search)
        click()
    }

    console.log(search)

    return (
        <article className="introduction">
            <main>
                <p>Welcome, please press the button to find famous Quotes</p>
                <button onClick={submit}>Let's try!</button>
            </main>
        </article>
    )
}

export default Introduction