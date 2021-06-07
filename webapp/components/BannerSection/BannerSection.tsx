import React, { useEffect, useState, useRef } from 'react';
import { css } from '@emotion/react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { loadData } from '../../action/subsciptionAction';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
export type BannerSectionProps = {}

type imgProp = {
    key: number;
    img: string;
}

function BannerSection({ }: BannerSectionProps) {
    const { data, error, isloding } = useSelector((state: RootState) => state.subscription)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadData())
    }, [])
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
            <div>
                <LeftOutlined className='left' onClick={onClickLeft}/>
            </div>
            
            <RightOutlined className='right' onClick={onClickRight}/>
            <div css={BanneStyle}>
                {data.map((item:any, index: number) => (
                    <div className={index === current ? 'slide active' : 'slide'}>
                        {index === current && (<img src={item.img} alt="" />)}
                    </div>
                ))}
            </div>
        </article>
    )
}
export default BannerSection;

const wrapper = css`
    position: relative;
        & > div > .left {
        position: absolute;
        top: 50%;
        left: 0px;
        cursor: pointer;
        z-index: 10;
        font-size: 1.5rem;
        color: yellow;
    }

    & > .right {
        position: absolute;
        top: 50%;
        cursor: pointer;
        z-index: 10;
        right: 22px;
        font-size: 1.5rem;
        color: yellow;
    }
`
const BanneStyle = css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    
    & img {
        width: 1080px;
        height: 300px;
    }
`