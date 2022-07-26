import React,{Dispatch, SetStateAction}  from 'react'
import { css } from '@emotion/react'

interface Props {
  counter: number,
  setCounter: Dispatch<SetStateAction<number>>
}

const itemCss = {
  button: css({
      display: 'flex',
      width:50,
      height: 30,
      borderWidth: 1,
      borderStyle: 'solid',
      justifyContent: 'center',
      alignItems: 'center',
      borderColor:'#d9d7d7',
      fontSize: 16,
      fontWeight: 'bold'
  }),
  container: css({
    marginTop: 30
  })
}

const ProductCounter = ({counter, setCounter}: Props) => {
  return (
    <div className='flexRow' css={itemCss.container}>
        <div css={itemCss.button}>-</div>
        <div css={itemCss.button}>{counter}</div>
        <div css={itemCss.button}>+</div>
    </div>
  )
}

export default ProductCounter