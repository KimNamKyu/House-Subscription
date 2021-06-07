import React, { useCallback } from 'react';
import { css } from '@emotion/react';
import { Tag } from 'antd';
import { useRouter } from 'next/router';
export type CardSectionProps = {
    key: number;
    data: any;
}

function CardSection({ key, data }: CardSectionProps) {
    const router = useRouter();
    const onClickHandle = useCallback((e:any) => {
        router.push(`/info/${data.key}`)
    },[])
    return (
        <div css={cardItem} onClick={onClickHandle}>
            <div css={cardBoxTop(data.img)} />
            <div css={cardBoxBottom}>
                <span><Tag color={'green'}>입주모집</Tag></span>
                <span>{`${data.area}지역 ${data.parcel}`}</span>
                <p>{`${data.houseName}(${data.division})`}</p>
                <p>{`모집기간 : ${data.period}`}</p>
                <p>{`건설사 : ${data.constructionCompany}`}</p>
            </div>
        </div>
    )
}
export default CardSection

const cardItem = css`
    display: flex;
    flex-direction: column;
    flex: 1 1 0%;
    width: 144px;
    margin-left: 20px;
    cursor: pointer;
    border: 1px solid rgb(231,231,231);]
`

const cardBoxTop = (img: any) => css`
    height: 200px;
    background: url(${img});
    background-repeat: no-repeat;
    background-position: center center;
`

const cardBoxBottom = css`
    padding: 20px;
`