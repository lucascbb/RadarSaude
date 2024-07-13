import { Layout } from 'antd';
import HeaderComponent from "../../../components/headerComponent"

const { Content } = Layout;

const ContentDashboard = () => {
    const contentStyle: React.CSSProperties = {
        minHeight: 120,
        color: '#fff',
        backgroundColor: '#fffaff',
    };

    return (
        <Layout>
            <Content style={contentStyle}>
                <HeaderComponent />
                

            </Content>
        </Layout>
    );
};

export default ContentDashboard;
