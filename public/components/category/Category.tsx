import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'
import CategoryItem from './CategoryItem';

const categoryList = [
    {
        name: '목걸이',
        category: 1
    },
    {
        name: '귀걸이',
        category: 2
    },
    {
        name: '반지',
        category: 3
    },
    {
        name: '헤어',
        category: 4
    },
]

const containerCss = {
    title: css({
        display: 'flex',
        flexDirection:'column',
        width: 300
    })
}

const Category: React.FC = () => {
    
  return (
    <div css={containerCss.title}>
        {categoryList.map(x=> <CategoryItem key={x.category} name={x.name} category={x.category} />)}
    </div>
  )
}
export default Category