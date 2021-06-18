import React, { useState } from 'react';
import { css } from '@emotion/react';
import { loadData } from '../../action/subsciptionAction';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import useLoadApt from '../../hooks/useLoadApt';
export type BannerSectionProps = {}

type imgProp = {
    key: number;
    img: string;
}

function BannerSection({ }: BannerSectionProps) {
    const {data, error, isloding} = useLoadApt(loadData);
    const TOTAL_DATA = data.length;
    const [current, setCurrent] = useState(0)
    const onClickLeft = () => {
        setCurrent(current === TOTAL_DATA - 1 ? 0 : current + 1)
    }
    const onClickRight = () => {
        setCurrent(current === 0 ? TOTAL_DATA - 1 : current - 1)
    }
    
    return (
        <article css={wrapper}>
            <div css={BanneStyle}>
                <LeftOutlined className='left' onClick={onClickLeft}/>
                {data !== undefined && data.map((item:any, index: number) => (
                    <div className={index === current ? 'slide active' : 'slide'}>
                        {index === current && (<img src={item.img} alt="" />)}
                    </div>
                ))}
                <RightOutlined className='right' onClick={onClickRight}/>
            </div>
        </article>
    )
}
export default BannerSection;

const wrapper = css`
    position: relative;
    
`
const BanneStyle = css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    & > .left {
        position: relative;
        top: 50%;
        left: 50px;
        cursor: pointer;
        z-index: 10;
        font-size: 1.5rem;
        color: lightgray;
    }
    & > .right {
        position: relative;
        top: 50%;
        right: 50px;
        cursor: pointer;
        z-index: 10;
        font-size: 1.5rem;
        color: lightgray;
    }
    & img {
        width: 1080px;
        height: 300px;
    }
`