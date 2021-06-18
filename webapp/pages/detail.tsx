import Layout from "../components/LayoutSection/Layout";
import Header from "../components/LayoutSection/Header";
import { DetailList } from "../components/DetailSection";

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