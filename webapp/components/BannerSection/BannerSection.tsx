import React, { useEffect, useState, useRef } from 'react';
import { css } from '@emotion/react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { loadData } from '../../action/subsciptionAction';
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
    const [target, setTarget] = useState(0)
    const slideRef = useRef(null);
    useEffect(() => {
        // slideRef.current.style.transition = "all 0.5s ease-in-out";
        // slideRef.current.style.transform = `translateX(-${target}00%)`;
    }, [target])
    const onClickLeft = () => {

    }
    const onClickRight = () => {

    }
    return (
        <div css={wrapper}>
            <div css={BanneStyle} ref={slideRef}>
                {data.map((item:any) => (
                    <div>
                        <img src={item.img} />
                    </div>
                ))}
            </div>
            <button className='left' onClick={onClickLeft}>{`<`}</button>
            <button className='right' onClick={onClickRight}>{`>`}</button>
        </div>
    )
}
export default BannerSection;

const wrapper = css`
    margin: 0 auto;
    width: 1080px;
    & > .left {
        background: yellow;
    }
    & > .right {
        background: yellow;
    }
`

const BanneStyle = css`
    display: flex;
    width: 100%;
    height: 300px;
    overflow: hidden;
    & > div {
        width: 1080px;
        & > img {
            width: 100%;
        }
    }
`

const imgStyle = (img:any) => css`
    width: 1080px;
    background: url(${img})
`