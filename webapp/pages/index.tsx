import React from 'react';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Layout from '../components/Layout';
import MainList from '../components/MainList';
import Aside from '../components/Aside';
import BannerSection from '../components/BannerSection';
import WeekSection from '../components/WeekSection';

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
                    {/* <Aside /> */}
                </Layout.Main>
            </Layout>
        </>
    )
}
export default App;