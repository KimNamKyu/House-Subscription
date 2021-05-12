import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadData } from "../action/subsciptionAction";
import BannerCard from "./BannerCard";
import { RootState } from "../store/store";
import { css } from "@emotion/react";

const BannerSlick: React.FC = () => {
    const { data, error, isloding } = useSelector((state: RootState) => state.subscription)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadData())
    }, [])
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div css={wrapperSlick}>
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
const wrapperSlick = css`
    width: 815px;
    padding: 40px 84px;
    margin: 0 auto;
    .slick-prev:before {
        color: black;
        font-size: 30px;
        position: absolute;
        left: -25px;
    }
    .slick-next:before {
        color: black;
        font-size: 30px;
        position: absolute;
        right: -25px;
    }
`
export default BannerSlick;