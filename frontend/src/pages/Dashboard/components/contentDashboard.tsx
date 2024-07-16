import { PlusOutlined, DeleteOutlined, EditOutlined, CloseCircleFilled } from '@ant-design/icons';
import { Layout, Table, Space, Button, Modal, Input } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { format } from 'date-fns';

import type { ColumnsType } from 'antd/es/table/interface';
import { DataType } from '../interfaces/dashboardInterfaces';

import {
    contentStyle,
    mainTitleStyle,
    tableStyle,
    confirmTextStyle,
    iconBtnDeleteStyle,
    iconBtnEditStyle,
    inputStyle,
    mainSearchStyle,
    searchRemoveStyle,
    iconRemoveStyle
} from "../styles/dashboardStyles";

import HeaderComponent from "../../../components/headerComponent";
import DrawerAddOrEdit from './drawerDashboard';

import { handleGet, handleDelete } from '../services/dashboardServices';

import { GlobalContext } from '../../../context/GlobalContex';

const ContentDashboard = () => {
    const { Search } = Input;
    const { Content } = Layout;

    const context = useContext(GlobalContext);
    if (!context) throw new Error("useContext must be used within a GlobalContextProvider");

    const { usersUpdate, setUsersUpdate } = context;

    const [users, setUsers] = useState([]);
    const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
    const [openDrawerEdit, setOpenDrawerEdit] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const [selectUser, setSelectUser] = useState<DataType>();
    const [searchUser, setSearchUser] = useState<string | undefined>('');
    const [pagination, setPagination] = useState<number | undefined>(1);
    const [totalPeople, setTotalPeople] = useState<number>(1);

    const handleTableChange = (pagination: number | undefined) => {
        setPagination(pagination);
    };

    const getUsers = async (page: number | undefined) => {
        setIsLoading(true);

        const data = await handleGet(searchUser, page);
        setUsers(data.response);
        setTotalPeople(data.countPeople);
        setIsLoading(false);
    };

    const deleteUser = async () => {
        if (selectUser) {
            await handleDelete(selectUser.id);
            getUsers(pagination);
        }
        setOpenModalDelete(false);
    };

    const handleSearchClear = () => {
        setSearchUser('');
        setUsersUpdate(prevState => !prevState);
    };

    useEffect(() => {
        getUsers(pagination);
    }, [usersUpdate, pagination]);

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
            dataIndex: 'birthDate',
            key: 'birthDate',
            render: (text) => {
                return format(new Date(text), 'dd/MM/yyyy');
            },
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
            render: (user) => (
                <Space size="small" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div onClick={() => { setSelectUser(user); setOpenDrawerEdit(true) }} style={iconBtnEditStyle}>
                        <EditOutlined />
                    </div>
                    <div onClick={() => { setSelectUser(user); setOpenModalDelete(true) }} style={iconBtnDeleteStyle}>
                        <DeleteOutlined />
                    </div>
                </Space>
            ),
        },
    ];

    return (
        <Layout>
            <Content style={contentStyle}>
                <HeaderComponent />

                <Content style={mainTitleStyle}>
                    <h1>Estudantes</h1>
                    <div style={mainSearchStyle}>
                        {
                            searchUser
                            &&
                            <div style={searchRemoveStyle} onClick={handleSearchClear}>
                                <p>Apagar pesquisa</p>
                                <CloseCircleFilled style={iconRemoveStyle} />
                            </div>
                        }

                        <Search
                            style={inputStyle}
                            placeholder='Pesquisa por nome/e-mail'
                            onChange={(text) => setSearchUser(text.target.value)}
                            onSearch={() => getUsers(1)}
                            value={searchUser}
                        />
                        <Button icon={<PlusOutlined />} type="primary" onClick={() => { setSelectUser(undefined); setOpenDrawerEdit(true) }}>Estudante</Button>
                    </div>
                </Content>

                <Table
                    columns={columns}
                    dataSource={users}
                    pagination={{
                        current: pagination,
                        pageSize: 10,
                        showSizeChanger: false,
                        total: totalPeople,
                    }}
                    onChange={(pagination) => handleTableChange(pagination.current)}
                    style={tableStyle}
                    bordered={true}
                    loading={isLoading}
                />

                <Modal
                    title="Confirmar exclusão"
                    centered
                    open={openModalDelete}
                    onOk={deleteUser}
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
