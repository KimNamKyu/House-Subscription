import { css } from "@emotion/react";
import BannerSlick from "./BannerSlick";
import Subscription from './subscription'
const Banner:React.FC = () => {
    return (
        <>
            <div css={wrapperStyle}>
                <div css={slicStyle}>
                    <div css={postStyle}>
                        <BannerSlick />
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
`
const slicStyle = css`
    margin: 0 auto;
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