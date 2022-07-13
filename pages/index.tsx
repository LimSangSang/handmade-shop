import type { NextPage } from 'next'
import { css } from '@emotion/react'
import Category from '../public/components/category/Category';
import Header from '../public/components/header/Header';
import List from '../public/components/list/List';

const bodyCss = {
  body: css({
      display: 'flex',
      flexDirection:'row'
  })
}

const Home: NextPage = () => {
  return (
    <div>
      {/* header */}
      <Header />
      <div css={bodyCss.body}>
        <Category />
        <List />
      </div>
    </div>
  )
}

export default Home
