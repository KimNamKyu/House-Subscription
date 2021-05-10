import { css } from "@emotion/react";

const Header:React.FC = () => {
    return (
        <>
            <nav css={navStyle}>
                <div>
                    <h4>로고</h4>
                </div>
                <div css={navLeft}>
                    분양정보
                    로그인 / 
                    로그아웃
                </div>
            </nav>
        </>
    )
}

const navStyle = css`
    display: flex;
    align-items:center;
    padding: 0px 20px 0px 30px;
    width: 100%;
    border-bottom: 1px solid rgb(231,231,231);
    background-color: transparent;
`
const navLeft = css`
    flex: 0 0 auto;
    align-items: center;
    margin-left: auto;
`

export default Header;