import Layout from "../../components/Layout";
import Header from "../../components/Header";
import SelectInfo from "../../components/SelectInfo";

const Info:React.FC = () => {
    return (
        <>
            <Layout>
                <Layout.Header>
                    <Header />
                </Layout.Header>
                <Layout.Main>
                    <SelectInfo />
                </Layout.Main>
            </Layout>
        </>
    )
}
export default Info;