import { Layout } from 'antd';
import SiderComponent from "../../components/siderComponent";
import ContentDashboard from './components/contentDashboard';

const Dashboard = () => {
    // const footerStyle: React.CSSProperties = {
    //     textAlign: 'center',
    //     color: '#fff',
    //     backgroundColor: '#000039',
    // };

    const layoutStyle: React.CSSProperties = {
        overflow: 'hidden',
        width: '100%',
        height: '100vh',
    };


    return (
        <Layout style={layoutStyle}>
            <SiderComponent />

            <Layout>
                <ContentDashboard />
                {/* <Footer style={footerStyle}>Footer</Footer> */}
            </Layout>
        </Layout>
    );
};

export default Dashboard;
