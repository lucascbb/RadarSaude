import { DataType } from '../interfaces/dashboardInterfaces'
import api from '../../../api';
import { toast } from 'react-toastify';

const handleGet = async (search: string | undefined, page: number | undefined) => {
    try {
        const { data } = await api.get('/person', {
            params: {
                search,
                page,
            },
        });

        return data;
    } catch (error) {
        return toast.error("Erro ao buscar");
    }
}

const handleCreate = async (user: DataType) => {
    try {
        const { data } = await api.post('/person', user);
        return toast.success(data.message);
    } catch (error) {
        return toast.error("Erro ao criar");
    }
}

const handleEdit = async (user: DataType, id: string) => {
    try {
        user.id = id
        const { data } = await api.patch('/person', user);
        return toast.success(data.message);

    } catch (error) {
        return toast.error("Erro ao editar");
    }
}

const handleDelete = async (id: string) => {
    try {
        const { data } = await api.delete(`/person/${id}`);
        return toast.success(data.message);
    } catch (error) {
        return toast.error("Erro ao deletar");
    }
}

export { handleGet, handleCreate, handleEdit, handleDelete }