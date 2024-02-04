import React from 'react'

interface Props {
    title: string
    content: string
    commentQty: number
    tags: string[] 

    // enum
    category: Category
}

export enum Category {
    JS = 'javascript',
    TS = 'typescript',
    P = 'python'
}

const Destructuring = ({title, content, commentQty, tags, category}: Props) => {
  return (
    <div>
        Destructuring
        <h2>{title}</h2>
        <p>{content}</p>
        <p>{commentQty}</p>
        <div>
            {tags.map(tag => (
                <span>#{tag}</span>
            ))}
        </div>
        <h4>Categoria: {category}</h4>
    </div>
  )
}

export default Destructuring