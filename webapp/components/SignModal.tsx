import { FC, useCallback, useState, useEffect, useRef } from "react";
import Modal from "./Modal";
import { Form, Input, Button } from "antd";
import { css } from "@emotion/react";
import { signin } from "../action/LoginAction";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../hooks/useInput";

interface Props {
    onClickModalClose: (...args: any) => any;
}

const SignModal: FC<Props> = ({ onClickModalClose }) => {
    const dispatch = useDispatch();
    const mdRef = useRef<HTMLDivElement>(null);
    const [email, onChangeEmail] = useInput('')
    const [password, onChnagePassword] = useInput('');

    useEffect(() => {
        window.addEventListener('click', outSideModlaClick);
        return window.addEventListener('click', outSideModlaClick)
    })

    const outSideModlaClick = useCallback((e) => {
        if(mdRef.current === e.target){
            onClickModalClose();
        }
    },[])

    const onSubmit = useCallback(async (e) => {
        return await dispatch(signin({
            email: email,
            password: password
        }))
    },[email, password])
    return (
        <Modal ref={mdRef}>
            <div css={headerStyle}>
                <h2>로그인</h2>
                <Button css={buttonStyle} onClick={onClickModalClose} type="text">X</Button>
            </div>
            <Form css={inputStyle} onFinish={onSubmit}>
                <div>
                    <Input name='user-email' type='email' placeholder={'이메일을 입력해 주세요.'} value={email} onChange={onChangeEmail}/>
                </div>
                <div>
                    <Input type='password' placeholder={'비밀번호를 입력해주세요.'} value={password} onChange={onChnagePassword}/>
                </div>
                <div>
                    <Button block htmlType="submit">로그인</Button>
                </div>
            </Form>
        </Modal>
    )
}

const headerStyle = css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`

const buttonStyle = css`
    position: absolute;
    top: -10px;
    right: -10px;
    font-weight: 700;
    font-size: 20px;
`
const inputStyle = css`
    & > div {
        display: flex;
        & > Button {
            background-color: green;
            color: white;
        }
    }
`
export default SignModal;