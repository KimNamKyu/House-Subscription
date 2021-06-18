import { Dispatch, SetStateAction, useCallback, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { loadData } from '../action/subsciptionAction';


const useLoadApt = (func: Function) => {
    const { data, error, isloding } = useSelector((state: RootState) => state.subscription)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(func())
    }, [])
    return {data, error, isloding};
};

export default useLoadApt;