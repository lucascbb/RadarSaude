import { Layout } from 'antd';
import SiderComponent from "../../components/siderComponent";
import ContetDashboard from "./components/contentDashboard"

const Dashboard = () => {
    const layoutStyle: React.CSSProperties = {
        overflow: 'hidden',
        width: '100%',
        height: '100vh',
    };

    return (
        <Layout style={layoutStyle}>
            <SiderComponent />

            <Layout>
                <ContetDashboard />
            </Layout>
        </Layout>
    );
};

export default Dashboard;
