import "reflect-metadata";
import { createConnection, getRepository } from "typeorm";
import crawling from "../crawling";
import { subscription } from "../entity/subscription";

const dependencyInjectorLoader = async() => {
    return createConnection({
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "1234",
        database: "houser-subscription",
        synchronize: true,
        logging: false,
        entities: [
            "src/entity/*.ts"
        ],
    })
    .then(async connection => {
        const subscriptionRepo = getRepository(subscription);
        const data = await subscriptionRepo.findOne(1)
        if(data === undefined) {
            const crawllingData = await crawling();
            //crawling한데이터 SET
            const subscriptData = crawllingData.map((item, idx) => {
                const subSP = new subscription()
                subSP.area = item.area
                subSP.division = item.division
                subSP.parcel = item.parcel
                subSP.houseName = item.houseName
                subSP.constructionCompany = item.constructionCompany
                subSP.telNum = item.telNum
                subSP.announcement = item.announcement
                subSP.period = item.period
                subSP.winnersPeriod = item.winnersPeriod
                return subSP
            })
            await getRepository(subscription).save(subscriptData)
        }
        
    })
    .catch(error => console.log(error))
}
export default dependencyInjectorLoader;