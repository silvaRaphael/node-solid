import { Request, Response } from 'express';
import { UserService } from '../services/UserService';

export class UserController {
	private userService: UserService;

	constructor(userService: UserService) {
		this.userService = userService;
	}

	async createUser(request: Request, response: Response): Promise<Response> {
		const { name, email, password } = request.body;

		try {
			const user = await this.userService.createUser({
				name,
				email,
				password,
			});

			return response.status(201).json(user);
		} catch (error: any) {
			return response.status(400).json({
				message: error.message,
			});
		}
	}

	async getUser(request: Request, response: Response): Promise<Response> {
		const { id } = request.params;

		try {
			const user = await this.userService.getUser(id);

			return response.json(user);
		} catch (error: any) {
			return response.status(400).json({
				message: error.message,
			});
		}
	}

	async updateUser(request: Request, response: Response): Promise<Response> {
		const { id } = request.params;
		const { name, email, password } = request.body;

		try {
			const user = await this.userService.updateUser({
				id,
				name,
				email,
				password,
			});

			return response.json(user);
		} catch (error: any) {
			return response.status(400).json({
				message: error.message,
			});
		}
	}
}
