import React from 'react';
import Header from '../components/LayoutSection/Header';
import Layout from '../components/LayoutSection/Layout';
import BannerSection from '../components/BannerSection';
import WeekSection from '../components/WeekSection';
import { MainList } from '../components/MainSection';

const App:React.FC = () => {
    return (
        <>
            <Layout>
                <Layout.Header>
                    <Header />
                </Layout.Header>
                <Layout.Banner>
                    <BannerSection />
                </Layout.Banner>
                <Layout.Main>
                    <WeekSection />
                    <MainList />
                </Layout.Main>
            </Layout>
        </>
    )
}
export default App;