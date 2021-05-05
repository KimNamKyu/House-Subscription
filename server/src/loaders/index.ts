import expressLoader from './express';
import crawling from '../crawling';
import dependencyInjectorLoader from './dependencyInjectorLoader';

export default async ({expressApp}) => {
    // const data = await crawling();

    await dependencyInjectorLoader();
    await expressLoader({ app: expressApp });
}