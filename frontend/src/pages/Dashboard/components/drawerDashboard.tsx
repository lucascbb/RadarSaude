import React, { useContext, useEffect } from 'react';
import { Button, DatePicker, Drawer, Form, Input, Select } from 'antd';
import moment from 'moment';
import dayjs from 'dayjs';
import { DataType } from '../interfaces/dashboardInterfaces';

import { handleCreate, handleEdit } from '../services/dashboardServices';
import { GlobalContext } from '../../../context/GlobalContex';

const { Option } = Select;

const DrawerDashboard = ({ openDrawer, setOpenDrawerEdit, selectUser }: { openDrawer: boolean, setOpenDrawerEdit: () => void, selectUser: DataType | undefined }) => {
    const [form] = Form.useForm();

    const mainLabelStyle: React.CSSProperties = {
        display: "flex",
        width: "100%",
        flexDirection: "column",
        height: "90px",
        marginBottom: "10px"
    }

    const context = useContext(GlobalContext);
    if (!context) throw new Error("useContext must be used within a GlobalContextProvider");
    const { setUsersUpdate } = context;

    const onFinish = async (values: DataType) => {
        selectUser ? handleEdit(values, selectUser.id) : handleCreate(values);
        resetAndCloseForm();
        setUsersUpdate((prevState: boolean) => !prevState);
    };

    const resetAndCloseForm = () => {
        form.resetFields();
        setOpenDrawerEdit();
    };

    useEffect(() => {
        if (selectUser) {
            form.setFieldsValue({
                name: selectUser.name,
                gender: selectUser.gender,
                phone: selectUser.phone,
                email: selectUser.email,
                dateBirth: selectUser.birthDate ? dayjs(moment(selectUser.birthDate).format('DD/MM/YYYY'), 'DD/MM/YYYY') : '',
            });

        }
    }, [selectUser, form, openDrawer]);

    return (
        <Drawer
            title={`${selectUser ? "Editar" : "Criar"} conta`}
            width={500}
            onClose={resetAndCloseForm}
            open={openDrawer}
            styles={{
                header: {
                    padding: "30px 20px",
                }
            }}
        >
            <Form
                name="basic"
                form={form}
                validateTrigger={['onChange', 'onSubmit']}
                onFinish={onFinish}
                autoComplete="off"
                style={{ display: "flex", flexDirection: "column" }}
                layout="vertical"
                scrollToFirstError
            >
                <Form.Item
                    name="name"
                    label="Nome"
                    rules={[{ required: true, message: 'Insira o nome' }]}
                    style={mainLabelStyle}
                >
                    <Input placeholder="Insira o nome" size='large' />
                </Form.Item>

                <Form.Item
                    name="gender"
                    label="Sexo"
                    rules={[{ required: true, message: 'Insira o sexo' }]}
                    style={mainLabelStyle}
                >
                    <Select placeholder="Insira o sexo" size='large'>
                        <Option value="Male">Masculino</Option>
                        <Option value="Female">Feminino</Option>
                        <Option value="Other">Outro</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name="dateBirth"
                    label="Data de nascimento"
                    rules={[{ required: true, message: 'Insira data de nascimento' }]}
                    style={mainLabelStyle}
                >
                    <DatePicker maxDate={dayjs(moment(new Date()).format('DD/MM/YYYY'), 'DD/MM/YYYY')} placeholder='Selecione a data' format="DD/MM/YYYY" style={{ width: "100%" }} size='large' />
                </Form.Item>

                <Form.Item
                    name="phone"
                    label="Telefone"
                    rules={[
                        {
                            required: true,
                            message: 'Insira o telefone'
                        },
                        {
                            pattern: /^[0-9]{2}9[0-9]{8}$/,
                            message: 'Insira um telefone celular válido no formato 99999999999',
                        },
                    ]}
                    style={mainLabelStyle}
                >
                    <Input placeholder="Insira o telefone" size='large' type='tel' />
                </Form.Item>

                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                        {
                            required: true,
                            message: 'Insira o e-mail'
                        },
                        {
                            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: 'Por favor, insira um e-mail válido',
                        },
                    ]}
                    style={mainLabelStyle}
                >
                    <Input placeholder="Insira o e-mail" size='large' />
                </Form.Item>

                <Form.Item style={{ display: "flex", gap: "20px" }}>
                    <Button onClick={resetAndCloseForm} type='default'>
                        Cancelar
                    </Button>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Drawer >
    );
};

export default DrawerDashboard;
