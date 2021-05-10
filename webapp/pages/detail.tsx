import Layout from "../components/Layout";
import Header from "../components/Header";
import MainList from "../components/MainList";

const detail:React.FC = () => {
    return (
        <>
            <Layout>
                <Layout.Header>
                    <Header />
                </Layout.Header>
                <Layout.Main>
                    <MainList />
                </Layout.Main>
            </Layout>
        </>
    )
}
export default detail;