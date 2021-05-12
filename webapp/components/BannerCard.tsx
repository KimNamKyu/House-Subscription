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
    }
    // area: string;
    // division: string
}
const BannerCard: React.FC<itemProps> = ({key, data}) => {
    return (
        <div
            key={key}
        >
            <div>{data.area}</div>
            <div>{data.division}</div>
            <div>{data.parcel}</div>
            <div>{data.houseName}</div>
            <div>{data.constructionCompany}</div>
            <div>{data.telNum}</div>
            <div>{data.announcement}</div>
            <div>{data.period}</div>
            <div>{data.winnersPeriod}</div>
        </div>
    )
}
export default BannerCard;