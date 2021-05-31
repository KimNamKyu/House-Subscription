import { css } from "@emotion/react";
import { Input } from 'antd';
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { useState } from "react";
import Link from "next/link";
import SignModal from "./SignModal";
import { logoutReducer } from "../reducer/loginSlice";

const Header: React.FC = () => {
    const { data, isloged, error } = useSelector((state: RootState) => state.header)
    const [modalFlag, setModalFlag] = useState(false)
    const dispatch = useDispatch();
    const { Search } = Input;
    const onSearch = () => {

    }
    const onHandleClcikModal = (e:any) => {
        e.preventDefault;
        setModalFlag(true)
    }
    const onClickLogOut = () => {
        dispatch(logoutReducer({data: undefined}))
        setModalFlag(false)
    }
    return (
        <>
            <nav css={navStyle}>
                <div css={logoStyle}>
                    <Link href='/'><a>로고</a></Link>
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
                        data.User ?
                            <div css={wrapLogInfo}>
                                <div><Link href='/'><a>구독 APT</a></Link></div>
                                <div><a onClick={onClickLogOut}>로그아웃</a></div>
                            </div>
                            :
                            <div style={{ marginLeft: '30px' }}>
                                <a onClick={onHandleClcikModal}>로그인</a>
                                {modalFlag && <SignModal onClickModalClose={() => setModalFlag(false)}/>}
                            </div>
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
    & > a {
        color: black;
    }
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
        cursor: pointer;
        & > a {
            color: black;
        }
    }
`

const wrapLogInfo = css`
    display: flex;
    & > div {
        margin-left: 30px;
        cursor: pointer;
        & > a {
            color: black;
        }
    }
`

export default Header;