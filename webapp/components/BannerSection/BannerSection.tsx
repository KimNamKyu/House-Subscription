import React from 'react';
import { css } from '@emotion/react';
export type BannerSectionProps = {}

function BannerSection({}:BannerSectionProps) {
    return (
        <div css={wrapper}>
            <div css={BanneStyle}>
                <button>{`<`}</button>
                <button>{`>`}</button>
            </div>
        </div>
    )
}
export default BannerSection;

const wrapper = css`
    margin: 0 auto;
    display: flex;
    width: 1080px;
`

const BanneStyle = css`
    flex: 1;
    height: 300px;
    background: black;

    & > button {
        background: yellow;
    }
`