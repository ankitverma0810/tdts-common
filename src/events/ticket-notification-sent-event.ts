import { Subjects } from './subjects';

// This would be the information that will be passed to the NATS server
export interface TicketNotificationSentEvent {
	subject: Subjects.TicketNotificationSent;
	data: {
        ticketId: string;
        emailContent: string;
	}
}