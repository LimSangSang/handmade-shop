import React from 'react'
import { css } from '@emotion/react'

interface props {
    name: string,
    category: number
}

const itemCss = {
    title: css({
        fontSize: 20,
        ":hover": {
            textDecorationLine:'underline'
        },
        display: 'flex',
        whiteSpace:'nowrap'
    })
}

const CategoryItem: React.FC<props> = ({name, category}) => {    
    return (
        <div css={itemCss.title}>{name}</div>
    )
}
export default CategoryItem