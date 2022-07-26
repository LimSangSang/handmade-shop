import { css } from '@emotion/react'

const global = css`
    
    @font-face {
        font-family: 'Gangwon';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/GangwonEduPowerExtraBoldA.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'MICEGothic';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-01@1.0/MICEGothic.woff2') format('woff2');
        font-weight: 700;
        font-style: normal;
    }

    @font-face {
        font-family: 'LeferiPoint';
        src: url('../fonts/LeferiBaseRegular.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'LeferiPoint';
        src: url('../fonts/LeferiBaseBold.ttf') format('truetype');
        font-weight: bold;
        font-style: normal;
    }

    * {
        font-family: 'LeferiPoint', serif;
        font-size: 13px;
    }

    .flexRow {
        display: flex;
        flex-direction: row;
    }

    .flexColumn {
        display: flex;
        flex-direction: column;
    }
`

export default global;