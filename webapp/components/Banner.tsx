import { css } from "@emotion/react";

const Banner = () => {
    return (
        <>
            <div css={wrapperStyle}>
                <div css={slicStyle}>
                    <div css={postStyle}>
                        오늘의 분양
                    </div>
                </div>
            </div>
        </>
    )
}

const wrapperStyle = css`
    display: flex;
    width: 1200px;
    height: 100%;
    margin: 0px auto;
    padding: 0px 10px;
    align-items: center;
    position: relative;
    border-bottom: 1px solid rgb(231,231,231);
`
const slicStyle = css`
    padding-top: 40px;
    padding: 0px 84px;
    text-align: center;
`

const postStyle = css`
    width: 867px;
    display: inline-block;
    background-color: rgb(241, 242, 244);
    height: 510px;
`
export default Banner;