import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {loadData} from "../action/subsciptionAction";

const BannerSlick = () => {
    const {data, error, isloding} = useSelector(state => state.subscription)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadData())
    },[])
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div>
            <Slider {...settings}>
            {!isloding ? data.map((item:any, idx:any) => {
                return (
                    <div
                        key={idx}
                    >
                        <div>{item.area}</div>
                        <div>{item.area}</div>
                        <div>{item.division}</div>
                        <div>{item.parcel}</div>
                        <div>{item.houseName}</div>
                        <div>{item.constructionCompany}</div>
                        <div>{item.telNum}</div>
                        <div>{item.announcement}</div>
                        <div>{item.period}</div>
                        <div>{item.winnersPeriod}</div>
                    </div>
                )
            }) :
            null}
            </Slider>
        </div>
    )
}
export default BannerSlick;