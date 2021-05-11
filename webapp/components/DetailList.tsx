import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { useState } from "react";
import { loadDetailData } from "../action/subsciptionAction";
import { css } from "@emotion/react";
import { Select } from 'antd';
import { DatePicker, Space } from 'antd';
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import moment from 'moment';
import DetailTable from "./DetailTable";


const DetailList:React.FC = () => {
    const { allData, error, isloding } = useSelector((state: RootState) => state.subscription)
    const category = ['전체', '강원', '경기', '경남', '경북', '광주', '대구', '대전', '부산', '서울', '세종', '울산', '인천', '전남', '전북', '제주', '충남', '충북']
    const format1 = "YYYY-MM-DD"
    const { RangePicker } = DatePicker;
    const { Option } = Select;
    const dispatch = useDispatch();
    const [searchData, setSearchData] = useState({ area: '', period: { first: '', second: '' } })
    
    const handleChangeCategory = (value: any) => {
        setSearchData({
            ...searchData,
            area: value.value
        })
    }
    const onhandlerDatePicker = (value: any) => {
        let firstDate = moment(value[0]).format(format1)
        let secondDate = moment(value[1]).format(format1)
        setSearchData({
            ...searchData,
            period: {
                first: firstDate,
                second: secondDate
            }
        })
    }
    const onClickHandler = () => {
        const {
            area,
            period
        } = searchData
        if (area !== '' && (period.first !== '' && period.second !== '')) {
            dispatch(loadDetailData())
        }
    }
    
    return (
        <div css={wrapperMainStyle}>
            <div style={{paddingBottom:'48px'}}>
                <span>지역 : </span>
                <Select
                    labelInValue
                    defaultValue={{ value: '전체' }}
                    style={{ width: 120 }}
                    onChange={handleChangeCategory}
                >
                    {
                        category.map((iter, idx) => {
                            return (
                                <Option key={idx} value={iter}>{iter}</Option>
                            )
                        })
                    }
                </Select>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span>기간 : </span>
                <Space direction="vertical" size={12}>
                    <RangePicker
                        onChange={onhandlerDatePicker}
                    />
                </Space>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Button
                    type="primary"
                    icon={<SearchOutlined/>}
                    onClick={onClickHandler}
                >
                    Search
                </Button>
            </div>
            <div><h3>분양목록 : {allData.length} 건</h3></div>
            <DetailTable data={allData}/>
        </div>
    )
}
export default DetailList;

const wrapperMainStyle = css`
    margin: 0 auto;
    padding-top : 48px;
    align-items: left;
    width: 1200px;
`