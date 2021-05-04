import React from 'react';
import Layout from '../components/Layout';

const App = () => {
    return (
        <>
            <Layout>
                <Layout.Header>
                    <div>헤더</div>
                </Layout.Header>
                <Layout.Main>
                    메인
                </Layout.Main>
            </Layout>
        </>
    )
}
export default App;