import { Subjects } from './subjects';

// This would be the information that will be passed to the NATS server
export interface UserUpdatedEvent {
	subject: Subjects.UserUpdated;
	data: {
		id: string;
		firstName: string;
		lastName: number;
		email: string;
		version: number;
	}
}