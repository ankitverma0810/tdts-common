import { Subjects } from './subjects';

// This would be the information that will be passed to the NATS server
export interface TicketNotificationEvent {
	subject: Subjects.TicketNotification;
	data: {
        ticketId: string;
        emailContent: string;
	}
}