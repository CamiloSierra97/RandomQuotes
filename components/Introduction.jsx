import React from 'react'

const Introduction = ({ click, setSearch, search }) => {

    const submit = () => {
        setSearch(!search)
        click()
    }

    console.log(search)

    return (
        <section className="introduction">
            <article>
                <p>Welcome, please press the button to find famous Quotes</p>
                <button onClick={submit}>Let's try!</button>
            </article>
        </section>
    )
}

export default Introduction