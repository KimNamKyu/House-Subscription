import { css } from "@emotion/react";
import { Input } from 'antd';
const Header:React.FC = () => {
    const {Search} = Input;
    const onSearch = () => {
        
    }
    return (
        <>
            <nav css={navStyle}>
                <div css={logoStyle}>
                    로고
                </div>
                <div>
                    <Search 
                        placeholder="분양 지역을 입력하세요." 
                        onSearch={onSearch} 
                        style={{ width: 300 }} 
                    />
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
const logoStyle = css`
    flex: 0 0 auto;
    align-items: center;
    margin-right: auto;
`

const navStyle = css`
    display: flex;
    align-items:center;
    padding: 0px 20px 0px 30px;
    width: 100%;
`
const navLeft = css`
    flex: 0 0 auto;
    align-items: center;
    margin-left: auto;
`

export default Header;