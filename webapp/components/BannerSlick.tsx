import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadData } from "../action/subsciptionAction";
import BannerCard from "./BannerCard";
import { RootState } from "../store/store";

const BannerSlick: React.FC = () => {
    const { data, error, isloding } = useSelector((state: RootState) => state.subscription)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadData())
    }, [])
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
                {!isloding ? data.map((item: any, idx: any) => {
                    return (
                        <BannerCard
                            key={idx}
                            data={item}
                        />
                    )
                }) :
                    null}
            </Slider>
        </div>
    )
}
export default BannerSlick;