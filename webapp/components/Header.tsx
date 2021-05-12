import { css } from "@emotion/react";
import { Input } from 'antd';
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { useEffect } from "react";
import { logedIn } from "../action/LoginAction";
import Link from "next/link";
const Header:React.FC = () => {
    const {data, isloged, error} = useSelector((state:RootState) => state.header)
    console.log(data)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(logedIn())
    },[])
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
                    <div>
                        <Link href='/detail'><a>분양정보</a></Link>
                    </div>
                    {
                        data ? 
                        <div>로그아웃</div> : 
                        <div>로그인</div>
                    }
                    
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
    display: flex;
    align-items: center;
    margin-left: auto;
    & > div {
        margin-left: 30px;
        cursor: pointer;
        & > a {
            color: black;
        }
    }
`

export default Header;