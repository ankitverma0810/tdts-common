import { Subjects } from './subjects';

// This would be the information that will be passed to the NATS server
export interface PartUpdatedEvent {
	subject: Subjects.PartUpdated;
	data: {
		id: string;
		number: string;
		description: string;
		version: number;
	}
}