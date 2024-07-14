import { PlusOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Layout, Table, Space, Button, TableProps, Modal } from 'antd';
import { useEffect, useState } from 'react';

import type { ColumnsType, TablePaginationConfig } from 'antd/es/table/interface';
import { DataType } from '../interfaces/dashboardInterfaces';

import { contentStyle, mainTitleStyle, tableStyle, confirmTextStyle, iconBtnDeleteStyle, iconBtnEditStyle } from "../styles/dashboardStyles"

import HeaderComponent from "../../../components/headerComponent";
import DrawerAddOrEdit from '../components/drawerDashboard'

import { handleGet, handleDelete } from '../services/dashboardServices'


const ContentDashboard = () => {
    const { Content } = Layout;

    const [openModalDelete, setOpenModalDelete] = useState(false);
    const [openDrawerEdit, setOpenDrawerEdit] = useState(false);

    const [selectUser, setSelectUser] = useState<DataType>();
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
            render: (student) => (
                <Space size="middle">
                    <div onClick={() => { setSelectUser(student); setOpenDrawerEdit(true) }} style={iconBtnEditStyle}>
                        <EditOutlined />
                    </div>
                    <div onClick={() => { setSelectUser(student); setOpenModalDelete(true) }} style={iconBtnDeleteStyle}>
                        <DeleteOutlined />
                    </div>
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

    useEffect(() => {
        const users = handleGet();
        console.log(users);
        
    }, [])

    return (
        <Layout>
            <Content style={contentStyle}>
                <HeaderComponent />

                <Content style={mainTitleStyle}>
                    <h1>Estudantes</h1>
                    <Button icon={<PlusOutlined />} type="primary" onClick={() => { setSelectUser(undefined); setOpenDrawerEdit(true) }}>Estudante</Button>
                </Content>

                <Table
                    columns={columns}
                    dataSource={data}
                    pagination={pagination}
                    onChange={handleTableChange}
                    style={tableStyle}
                />

                <Modal
                    title="Confirmar exclusão"
                    centered
                    open={openModalDelete}
                    onOk={() => { if (selectUser) handleDelete(selectUser.key); }}
                    okText='Deletar'
                    okType='danger'
                    onCancel={() => setOpenModalDelete(false)}
                    cancelText='Cancelar'
                    width={'400px'}
                    style={{ borderRadius: "10px" }}
                >
                    <p style={confirmTextStyle}>Deseja realmente confirmar a exclusão do usuário {selectUser?.name || 'selecionado'}?</p>
                </Modal>

                <DrawerAddOrEdit openDrawer={openDrawerEdit} setOpenDrawerEdit={() => setOpenDrawerEdit(false)} selectUser={selectUser} />

            </Content>
        </Layout>
    );
};

export default ContentDashboard;
