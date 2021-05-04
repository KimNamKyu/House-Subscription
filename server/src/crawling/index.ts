const puppeteer = require('puppeteer');

const crawling = async () => {
    console.log("크롤링 시작")
    const brower = await puppeteer.launch({headless: true});
    const page = await brower.newPage();
    await page.setDefaultNavigationTimeout(0);
    await page.setViewport({
        width: 1920,
        height: 1080,
      });
    await page.goto(`https://www.applyhome.co.kr/ai/aia/selectAPTLttotPblancListView.do`);
    // 강원
    // 경기
    // 경남
    // 경북
    // 광주
    // 대구
    // 대전
    // 부산
    // 서울
    // 세종
    // 울산
    // 인천
    // 전남
    // 전북
    // 제주
    // 충남
    // 충북
    page.waitForNavigation();
    await page.select("select#cate02", "서울")
    await Promise.all([
        page.click('#pbSearchForm > div.search_row:nth-child(2) > button'),
        page.waitForNavigation({ waitUntil: "networkidle2" }),
    ]);
    
    let dataMap = []
    const pageLength = await page.$$eval('#paging > a', (element) => element.length)
    console.log(pageLength)

    for(let i = 1; i <= pageLength; i++){
        if(i !== 1){
            await Promise.all([
                page.click(`#paging > a:nth-child(${i})`),
                page.waitForNavigation({ waitUntil: "networkidle2" })
            ])
        }
        const trLength = await page.$$eval(`div.mt_10 > table > tbody > tr`, (element) => element.length);
        console.log(trLength)
        for(let idx = 0; idx < trLength; idx++){
            const dataList = await getTd(page, idx)
            dataMap.push(dataList);
        }
    }
    console.log(dataMap);

    page.waitForTimeout(3000);
    page.close();
    brower.close();
    console.log("크롤링 종료")
    return dataMap;
}

const getTd = async (page, idx) => {
    idx = idx + 1
    let data = {
        area: await page.$eval(`div.mt_10 > table > tbody > tr:nth-child(${idx}) > td:nth-child(1)`, (element) => element.innerText),
        division: await page.$eval(`div.mt_10 > table > tbody > tr:nth-child(${idx}) > td:nth-child(2)`, (element) => element.innerText),
        parcel: await page.$eval(`div.mt_10 > table > tbody > tr:nth-child(${idx}) > td:nth-child(3)`, (element) => element.innerText),
        houseName: await page.$eval(`div.mt_10 > table > tbody > tr:nth-child(${idx}) > td:nth-child(4)`, (element) => element.innerText),
        constructionCompany: await page.$eval(`div.mt_10 > table > tbody > tr:nth-child(${idx}) > td:nth-child(5)`, (element) => element.innerText),
        telNum: await page.$eval(`div.mt_10 > table > tbody > tr:nth-child(${idx}) > td:nth-child(6)`, (element) => element.innerText),
        announcement: await page.$eval(`div.mt_10 > table > tbody > tr:nth-child(${idx}) > td:nth-child(7)`, (element) => element.innerText),
        period: await page.$eval(`div.mt_10 > table > tbody > tr:nth-child(${idx}) > td:nth-child(8)`, (element) => element.innerText),
        winnersPeriod: await page.$eval(`div.mt_10 > table > tbody > tr:nth-child(${idx}) > td:nth-child(9)`, (element) => element.innerText),
    }
    return Promise.resolve(data)
}

export default crawling;




