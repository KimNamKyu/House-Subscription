import { css } from "@emotion/react";
import BannerSlick from "./BannerSlick";
const Banner: React.FC = () => {
    return (
        <div css={wrapperStyle}>
            <span css={slicStyle}></span>
            <div css={postStyle}>
                <BannerSlick />
            </div>
        </div>
    )
}

const wrapperStyle = css`
    position: relative;
    overflow-x: hidden;
    height: 650px;
`
const slicStyle = css`
    position: absolute;
    width: 100%;
    height: 510px;
    top: 0px;
    left: 0px;
    background-color: rgb(241, 242, 244);
`

const postStyle = css`
    width: 1200px;
    height: 100%;
    margin: 0px auto;
    padding: 0px 10px;
`
export default Banner;