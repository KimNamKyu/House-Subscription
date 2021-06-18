import { css } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadMagam } from "../../action/subsciptionAction";
import MainTable from "./MainTable";
import { RootState } from "../../store/store";

const MainList:React.FC = () => {
    const { magamData, error, isloding } = useSelector((state:RootState) => state.subscription)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadMagam())
    }, [])
    return (
        <div css={wrapperMainStyle}>
            <div css={wrapContent}>
                <h2>분양정보</h2>
                <MainTable data={magamData} />
            </div>
        </div>
    )
}

const wrapperMainStyle = css`
    margin: 0 auto;
    display: flex;
    width: 1080px;
`

const wrapContent = css`
    flex: 1;
    padding-top: 20px;
    padding-bottom: 20px; 
    padding-left: 68px;
    padding-right: 68px;
`

export default MainList;