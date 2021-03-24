import { Subjects } from './subjects';

// This would be the information that will be passed to the NATS server
export interface PartCreatedEvent {
	subject: Subjects.PartCreated;
	data: {
		id: string;
		number: string;
		description: string;
		version: number;
	}
}