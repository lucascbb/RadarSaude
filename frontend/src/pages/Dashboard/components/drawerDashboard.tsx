import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
import { DataType } from '../interfaces/dashboardInterfaces';
import { useEffect } from 'react';
import dayjs from 'dayjs';

import { handleCreate, handleEdit } from '../services/dashboardServices'

const { Option } = Select;

const DrawerDashboard = ({ openDrawer, setOpenDrawerEdit, selectUser }: { openDrawer: boolean, setOpenDrawerEdit: () => void, selectUser: DataType | undefined }) => {
    const [form] = Form.useForm();

    const resetAndCloseForm = () => {
        form.resetFields();
        setOpenDrawerEdit();
    };

    const onFinish = (values: DataType) => {
        selectUser ? handleEdit(values) : handleCreate(values)
    };

    useEffect(() => {
        if (selectUser) {
            form.setFieldsValue({
                name: selectUser.name,
                gender: selectUser.gender,
                dateBirth: dayjs(selectUser.dateBirth, 'DD/MM/YYYY'),
                phone: selectUser.phone,
                email: selectUser.email,
            });
        }
    }, [selectUser, form]);

    return (
        <Drawer
            title={`${selectUser ? "Editar" : "Criar"} conta`}
            width={500}
            onClose={resetAndCloseForm}
            open={openDrawer}
            styles={{
                header: {
                    padding: "30px",
                },
                body: {
                    height: "100px"
                },
            }}
            extra={
                <Space>
                    <Button onClick={resetAndCloseForm} type='default'>
                        Cancelar
                    </Button>
                    <Button type="primary" htmlType="submit" onClick={() => form.submit()}>
                        Confirmar
                    </Button>
                </Space>
            }
        >
            <Form
                form={form}
                name="my_form"
                onFinish={onFinish}
                layout="vertical"
            >
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item
                            name="name"
                            label="Nome"
                            rules={[{ required: true, message: 'Insira o nome' }]}
                        >
                            <Input placeholder="Insira o nome" size='large' />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item
                            name="gender"
                            label="Sexo"
                            rules={[{ required: true, message: 'Insira o sexo' }]}
                        >
                            <Select placeholder="Insira o sexo" size='large'>
                                <Option value="male">Masculino</Option>
                                <Option value="female">Feminino</Option>
                                <Option value="other">Outro</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item
                            name="dateBirth"
                            label="Data de nascimento"
                            rules={[{ required: true, message: 'Insira data de nascimento' }]}
                        >
                            <DatePicker placeholder='Selecione a data' format={['DD/MM/YYYY']} style={{ width: "100%" }} size='large' />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item
                            name="phone"
                            label="Telefone"
                            rules={[
                                {
                                    required: true,
                                    message: 'Insira o telefone'
                                },
                                {
                                    pattern: /^[1-9]{2}9[1-9][0-9]{7}$/,
                                    message: 'Por favor, insira um número de telefone celular válido no formato (99) 99999-9999',
                                },
                            ]}
                        >
                            <Input placeholder="Insira o telefone" size='large' />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={24}>
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
                        >
                            <Input placeholder="Insira o e-mail" size='large' />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Drawer>
    );
};

export default DrawerDashboard;