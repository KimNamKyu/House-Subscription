import React from 'react';
import Layout from '../components/Layout';

const App = () => {
    return (
        <>
            <Layout>
                <Layout.Header>
                    헤더
                </Layout.Header>
                <Layout.Banner>
                    banner
                </Layout.Banner>
                <Layout.Main>
                    메인
                </Layout.Main>
            </Layout>
        </>
    )
}
export default App;