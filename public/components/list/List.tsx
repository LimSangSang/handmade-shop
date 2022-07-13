import React from 'react'
import ListItem from './ListItem'
import { css } from '@emotion/react'
import { dummy_list } from '../../dummy/dummy_list'

const bodyCss = {
    body: css({
        display: 'flex',
        flexDirection:'row',
        width: '100%',
        flexWrap: 'wrap'
    })
}

const List: React.FC = () => {    
    return (
        <div css={bodyCss.body}>
            { dummy_list.map(x => 
                    <ListItem key={x.id} img={x.img} brand={x.brand} name={x.name} price={x.price} id={x.id}/>

            )}
        </div>
    )
}
export default List