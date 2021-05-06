import { css } from "@emotion/react";

const Aside = () => {
    return (
        <aside css={wrapperAsideStyle}>
            사이드
        </aside>
    )
}

const wrapperAsideStyle = css`
    flex: 1 1 30%;
`

export default Aside;