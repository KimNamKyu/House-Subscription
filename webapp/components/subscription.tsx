import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {loadData} from "../action/subsciptionAction";

const Subscription = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch();
    const onClick = useCallback(() => {
        dispatch(loadData())
    },[],)
    return (
        <>
            <button onClick={onClick}>클릭</button>
        </>
    )
}
export default Subscription;