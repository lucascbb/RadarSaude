import { Request, Response } from 'express';

class PersonController {
    async getPerson(_req: Request, res: Response): Promise<Response> {
        try {
            const response = ''

            return res.status(200).json(response);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async createPerson(req: Request, res: Response): Promise<Response> {
        const { name, gender, email, birthDate, phone } = req.body;

        try {
            const response = ''

            return res.status(201).json(response);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async editPerson(req: Request, res: Response): Promise<Response> {
        const { id, name, gender, email, birthDate, phone } = req.body;

        try {
            const response = ''

            return res.status(200).json(response);
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async deletePerson(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        try {
            const response = ''

            return res.status(200).json(response);
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

module.exports = new PersonController();
