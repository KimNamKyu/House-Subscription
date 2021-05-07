import React from 'react';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Layout from '../components/Layout';
import MainList from '../components/MainList';
import Aside from '../components/Aside';

const App = () => {
    return (
        <>
            <Layout>
                <Layout.Header>
                    <Header />
                </Layout.Header>
                <Layout.Banner>
                    <Banner />
                </Layout.Banner>
                <Layout.Main>
                    <MainList />
                    {/* <Aside /> */}
                </Layout.Main>
            </Layout>
        </>
    )
}
export default App;