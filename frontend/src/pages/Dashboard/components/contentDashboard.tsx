import { PlusOutlined } from '@ant-design/icons'
import { Layout, Table, Space, Button, TableProps } from 'antd';
import { useState } from 'react';

import type { ColumnsType, TablePaginationConfig } from 'antd/es/table/interface';
import { DataType } from '../interfaces/dashboardInterfaces';

import { contentStyle, mainTitleStyle, tableStyle } from "../styles/dashboardStyles"

import HeaderComponent from "../../../components/headerComponent";

import { handleEdit, handleDelete } from '../services/dashboardServices'

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
            render: (student, record) => (
                <Space size="middle">
                    <div onClick={() => handleEdit(student)}>Editar</div>
                    <div onClick={() => handleDelete(student.id)}>Excluir</div>
                </Space >
            ),
        },
    ];

const data: DataType[] = [
    {
        key: String(1),
        name: 'lucas',
        gender: 'Masculino',
        dateBirth: '08/08/1998',
        phone: '(11) 94384-4378',
        email: 'lucas@email.com',
    }
];

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
