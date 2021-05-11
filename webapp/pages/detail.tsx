import Layout from "../components/Layout";
import Header from "../components/Header";
import MainList from "../components/MainList";
import DetailList from "../components/DetailList";

const detail:React.FC = () => {
    return (
        <>
            <Layout>
                <Layout.Header>
                    <Header />
                </Layout.Header>
                <Layout.Main>
                    <DetailList />
                </Layout.Main>
            </Layout>
        </>
    )
}
export default detail;