import React from 'react'

const Quote = ({ randomQuote, click }) => {


    return (
        <article className="quote" >
            <p className="text" >
                {randomQuote.quote}
                <br />
                <sub className="author">
                    "{randomQuote.author}"
                </sub>
            </p>
            <div className="skip">
                <button className="button" onClick={click}>
                    <i className='bx bx-chevrons-right'></i>
                </button>
            </div>
        </article>
    )
}

export default Quote