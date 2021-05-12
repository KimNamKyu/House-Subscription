import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Tag } from 'antd';
interface itemProps {
    key: number;
    data: {
        area: string;
        division: string;
        parcel: string;
        houseName: string;
        constructionCompany: string;
        telNum: string;
        announcement: string;
        period: string;
        winnersPeriod: string;
        img: string;
    }
    // area: string;
    // division: string
}
const BannerCard: React.FC<itemProps> = ({key, data}) => {
    return (
        <>    
            <div css={cardHeader}><Tag color={'green'}>입주모집</Tag><span>{`${data.area}지역 ${data.parcel}`}</span></div>
            <div css={cardMainStyle}>
                <div css={cardNodeOne}>
                    <h1>{`${data.houseName}(${data.division})`}</h1>
                    <span>{`모집기간 : ${data.period}`}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                    <span>{`건설사 : ${data.constructionCompany}`}</span>
                </div>
            </div>
            {/* <div css={cardMainStyle2} >
                <img src={data.img}/>
            </div> */}
            <ImageDiv color={data.img}/>
            {/* <div>{data.telNum}</div>
            <div>{data.announcement}</div>
            <div>{data.winnersPeriod}</div> */}
        </>
    )
}
const cardHeader = css`
    display: flex;
`
const cardMainStyle = css`
    display: flex;
    justify-content: space-between;
`

const ImageDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: relative;
    height: 422px;
    box-shadow: rgba(34, 34, 34, 0.4) 0px 15px 50px 0px;
    background: url('${props => props.color}');
    background-repeat: no-repeat;
    background-position: center center;
`;

const cardNodeOne = css`
    padding-bottom: 15px;
    & > h1 {
        width: 480px;
        height: 41px;
        line-height: 41px;
        font-size: 28px;
        font-weight: 700;
        letter-spacing: -0.3px;
    }
    & > span {
        color: rgb(134, 134, 134);
        font-size: 14px;
        font-weight: 400;
        width: 480px;
        height: 20px;
        line-height: 20px;
        margin-top: 3px;
    }
`
export default BannerCard;