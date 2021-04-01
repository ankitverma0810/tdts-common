import { Subjects } from './subjects';

// This would be the information that will be passed to the NATS server
export interface UserUpdatedEvent {
	subject: Subjects.UserUpdated;
	data: {
		id: string;
		firstName: string;
		lastName: string;
		email: string;
		status: string;
		notificationStatus: string;
		version: number;
	}
}