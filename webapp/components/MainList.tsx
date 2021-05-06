import { css } from "@emotion/react";

const MainList = () => {
    return (
        <div css={wrapperMainStyle}>
            메인
        </div>
    )
}

const wrapperMainStyle = css`
    flex: 1 1 70%;
`

export default MainList;