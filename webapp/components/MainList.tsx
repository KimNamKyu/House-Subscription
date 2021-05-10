import { css } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadMagam } from "../action/subsciptionAction";
import MainTable from "./MainTable";
import { RootState } from "../store/store";

const MainList:React.FC = () => {
    const { magamData, error, isloding } = useSelector((state:RootState) => state.subscription)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadMagam())
    }, [])
    return (
        <div css={wrapperMainStyle}>
            <span><h1>분양정보</h1></span>
            <MainTable data={magamData} />
        </div>
    )
}

const wrapperMainStyle = css`
    margin: 0 auto;
    padding-top : 48px;
`

export default MainList;