import { Subjects } from './subjects';

// This would be the information that will be passed to the NATS server
export interface TicketCreatedEvent {
	subject: Subjects.TicketCreated;
	data: {
		id: string;
		title: string;
		price: number;
		userId: string;
		version: number;
	}
}