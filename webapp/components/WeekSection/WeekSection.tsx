import React from 'react';
import { css } from '@emotion/react';
import CardSection from '../CardSection';
import { loadData } from '../../action/subsciptionAction';
import useLoadApt from '../../hooks/useLoadApt';
export type WeekSectionProps = {}

function WeekSection({ }: WeekSectionProps) {
    const {data, error, isloding} = useLoadApt(loadData);
    return (
        <div css={wrapper}>
            <div css={weekStyle}>
                <h2>금주의 분양정보</h2>
                <div css={cardStyle}>
                    {!isloding ? data.map((item: any, idx: any) => {
                        return (
                            <CardSection
                                key={idx}
                                data={item}
                            />
                        )
                    }) :
                        null}
                </div>
            </div>
        </div>
    )
}
export default WeekSection

const wrapper = css`
    margin: 0 auto;
    display: flex;
    width: 1080px;
`
const weekStyle = css`
    flex: 1;
    padding-top: 20px;
    padding-bottom: 20px; 
    padding-left: 68px;
    padding-right: 68px;
`

const cardStyle = css`
    display: flex;
    flex-flow: row nowrap;
`