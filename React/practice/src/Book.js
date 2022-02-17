// shortcut rafce

import React from 'react'

function Book(props) {

    // or function Book({ img, title, author, children }) {
    const { img, title, author } = props

    // attribute, eventHandler

    const onClickHandler = (e) => {
        console.log(e.target)
    }
    const complexExample = (author) => {
        console.log(author);
    }

    const mouseOver = (title) => {
       // console.log(title);
    }


    return (
        <article className='book' onMouseOver={() => { mouseOver(title) }}>
            <Image img={img} />
            <Title title={title} />
            <Author author={author} />
            <button type='button' onClick={(e) => { onClickHandler(e) }}>reference example</button>
            <button type='button' onClick={() => { complexExample(author) }}>complex example</button>
            {/* {props.children} */}
        </article>
    )
}

const Image = (props) => {
    return (<img src={props.img} alt="Lose belly fat" />)
}

const Title = (props) => {
    return (<h3>{props.title}</h3>)
}

const Author = (props) => {
    return (<p>
        {props.author}
    </p>)
}

export default Book