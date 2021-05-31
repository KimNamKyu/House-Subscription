import { css } from "@emotion/react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { loadInfoDetail } from "../action/subsciptionAction";

const SelectInfo: React.FC = () => {
    const router = useRouter();
    const {info}:any = router.query;
    console.log(info)
    const dispath = useDispatch();
    useEffect(() => {
        dispath(loadInfoDetail(info))
    },[])
    return (
        <div css={wrapperMainStyle}>
            asdsad
        </div>
    )
}
export default SelectInfo;

const wrapperMainStyle = css`
    margin: 0 auto;
    padding-top: 48px;
    padding-bottom: 48px;
`