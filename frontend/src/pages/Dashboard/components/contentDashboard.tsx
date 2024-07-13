import { PlusOutlined } from '@ant-design/icons'
import { Layout, Table, Space, Button, TableProps } from 'antd';
import { useState } from 'react';

import type { ColumnsType, TablePaginationConfig } from 'antd/es/table/interface';
import { DataType } from './interfaces';

import { contentStyle, mainTitleStyle, tableStyle } from "../styles/dashboardStyles"

import HeaderComponent from "../../../components/headerComponent";

const { Content } = Layout;

const ContentDashboard = () => {
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

    return (
        <Layout>
            <Content style={contentStyle}>
                <HeaderComponent />

                <Content style={mainTitleStyle}>
                    <h1>Estudantes</h1>
                    <Button icon={<PlusOutlined />} type="primary">Estudante</Button>
                </Content>

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
