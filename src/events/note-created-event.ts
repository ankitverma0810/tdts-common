import { Subjects } from './subjects';

// This would be the information that will be passed to the NATS server
export interface NoteCreatedEvent {
	subject: Subjects.NoteCreated;
	data: {
		id: string;
        ticketId: string;
        userId: string;
		version: number;
	}
}