import faker from 'faker';
const _data = {
    User: {
        id: 1,
        nickName: 'magicMouse',
    },
    subscribe: [
        {
            area: '서울',
            division: '민영',
            parcel: '분양주택',
            houseName: '세운 푸르지오 헤리시티 아파트',
            constructionCompany: '(주)대우건설',
            telNum: '☎ 1577-2237',
            announcement: '2021-05-04',
            period: '2021-05-14 ~ 2021-05-20',
            winnersPeriod: '2021-05-26',
            img: faker.image.image()
        },
        {
            area: '서울',
            division: '민영',
            parcel: '분양주택',
            houseName: '쌍문역 시티프라디움',
            constructionCompany: '(주)시티종합건설,(주)시티건설',
            telNum: '☎ 1661-7509',
            announcement: '2021-04-15',
            period: '2021-04-27 ~ 2021-04-30',
            winnersPeriod: '2021-05-07',
            img: faker.image.image()
        },
    ]
}
export default _data