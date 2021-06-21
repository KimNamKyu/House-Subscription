import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';

const useMagamApt = (func: Function) => {
    const { magamData, error, isloding } = useSelector((state: RootState) => state.subscription)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(func())
    }, [])
    return { magamData, error, isloding };
};

export default useMagamApt;