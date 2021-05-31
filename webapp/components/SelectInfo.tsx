import { css } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { loadInfoDetail } from "../action/subsciptionAction";
import { RootState } from "../store/store";

const SelectInfo: React.FC = () => {
    const router = useRouter();
    const {info}:any = router.query;
    const { selectData, error, isloding } = useSelector((state:RootState) => state.subscription)
    console.log(selectData)
    const dispath = useDispatch();
    useEffect(() => {
        dispath(loadInfoDetail(info))
    },[info])
    return (
        <div css={wrapperMainStyle}>
            <div>{selectData[0].announcement}</div>
            <div>{selectData[0].area}</div>
            <div>{selectData[0].constructionCompany}</div>
            <div>{selectData[0].division}</div>
            <div>{selectData[0].houseName}</div>
            <div>{selectData[0].img}</div>
            <div>{selectData[0].key}</div>
            <div>{selectData[0].parcel}</div>
            <div>{selectData[0].period}</div>
            <div>{selectData[0].telNum}</div>
            <div>{selectData[0].winnersPeriod}</div>
        </div>
    )
}
export default SelectInfo;

const wrapperMainStyle = css`
    margin: 0 auto;
    padding-top: 48px;
    padding-bottom: 48px;
`