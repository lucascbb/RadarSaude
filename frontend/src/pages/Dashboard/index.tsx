import { Layout } from 'antd';
import SiderComponent from "../../components/sider";

const { Footer, Content } = Layout;

const Dashboard = () => {
    const contentStyle: React.CSSProperties = {
        textAlign: 'center',
        minHeight: 120,
        lineHeight: '120px',
        color: '#fff',
        backgroundColor: '#fffaff',
    };

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
                <Content style={contentStyle}>Content</Content>
                {/* <Footer style={footerStyle}>Footer</Footer> */}
            </Layout>
        </Layout>
    );
};

export default Dashboard;
