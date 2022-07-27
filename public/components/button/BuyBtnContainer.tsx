import React from 'react'
import { css } from '@emotion/react'
import Link from 'next/link'

interface Props {
    children: React.ReactNode
}

interface ItemProps {
    value: string,
    background: string,
    color: string,
    width: string,
    height: string,
    onClick?: React.MouseEventHandler,
    href?: string
}

const BuyBtnContainer = ({children}: Props) => {
    return (
        <div css={css`display:flex; justify-content:space-between`}>{children}</div>
    )
}

const Button = ({value, background, color, width, height, onClick}: ItemProps) => {
    const itemCss = {
        button: css({
          height,
          background,
          color,
          width,
          borderColor: 'transparent',
        })
    }
    return <button onClick={onClick} css={itemCss.button}>{value}</button>
}

const LinkButton = ({value, background, color, width, height, href}: ItemProps) => {
    const itemCss = {
        button: css({
          height,
          background,
          color,
          width,
          borderColor: 'transparent',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        })
    }
    return <Link href={href? href:''}>
        <a css={itemCss.button}>{value}</a>
    </Link>
}

BuyBtnContainer.Button = Button
BuyBtnContainer.LinkButton = LinkButton

export default BuyBtnContainer 