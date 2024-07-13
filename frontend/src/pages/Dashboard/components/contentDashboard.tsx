import { Layout, Table, Space } from 'antd';
import HeaderComponent from "../../../components/headerComponent";
import type { TableProps } from 'antd';
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table/interface';
import { useState } from 'react';

const { Content } = Layout;

const ContentDashboard = () => {
    interface DataType {
        key: string;
        name: string;
        gender: string;
        dateBirth: string;
        phone: string;
        email: string;
    }

    const [pagination, setPagination] = useState<TablePaginationConfig>({
        current: 1,
        pageSize: 10,
        showSizeChanger: false,
    });

    const handleTableChange: TableProps<DataType>['onChange'] = (
        pagination: TablePaginationConfig,
    ) => {
        setPagination(pagination);
    };

    const columns: ColumnsType<DataType> = [
        {
            title: 'Nome',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Sexo',
            dataIndex: 'gender',
            key: 'gender',
        },
        {
            title: 'Data Nascimento',
            dataIndex: 'dateBirth',
            key: 'dateBirth',
        },
        {
            title: 'Telefone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'E-mail',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Ação',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a>Editar</a>
                    <a>Excluir</a>
                </Space>
            ),
        },
    ];

    const data: DataType[] = [];

    for (let i = 0; i < 100; i++) {
        data.push({
            key: String(i),
            name: 'Jane Doe',
            gender: 'Female',
            dateBirth: `19${i}-01-01`,
            phone: `(11) 941328-90${i}`,
            email: 'jane.doe@example.com',
        });
    }

    const contentStyle: React.CSSProperties = {
        maxHeight: "100vh",
        color: '#fff',
        backgroundColor: '#fffaff',
        overflowY: "auto",
    };

    const tableStyle: React.CSSProperties = {
        margin: "0 auto",
        width: '100%',
        padding: '40px',
    };

    return (
        <Layout>
            <Content style={contentStyle}>
                <HeaderComponent />
                <Table
                    columns={columns}
                    dataSource={data}
                    pagination={pagination}
                    onChange={handleTableChange}
                    style={tableStyle}
                />
            </Content>
        </Layout>
    );
};

export default ContentDashboard;
