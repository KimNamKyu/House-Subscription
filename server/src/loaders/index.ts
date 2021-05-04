import expressLoader from './express';
import crawling from '../crawling';

export default async ({expressApp}) => {
    // const data = await crawling();
    
    await expressLoader({ app: expressApp });
}