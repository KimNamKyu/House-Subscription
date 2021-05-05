import React from 'react';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Layout from '../components/Layout';

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
                    메인
                </Layout.Main>
            </Layout>
        </>
    )
}
export default App;