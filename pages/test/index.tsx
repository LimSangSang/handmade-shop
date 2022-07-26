import React, { memo } from 'react';
import Image, { ImageProps } from 'next/image';
import equal from 'fast-deep-equal';
import AutoHeightImage from '../../public/dummy/AutoHeightImage';


const AA = ({ ...props }: ImageProps): React.ReactElement => (
  <AutoHeightImage src='https://img.29cm.co.kr/next-product/2020/02/25/b77819fc025c4d20ac14a76047697caa_20200225091522.jpg?width=1000' />
);

export default AA;