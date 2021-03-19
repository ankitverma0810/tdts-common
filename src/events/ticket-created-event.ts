import { Subjects } from './subjects';
import { IssueType } from './types/issue-type';
import { TicketStatus } from './types/ticket-status';

// This would be the information that will be passed to the NATS server
export interface TicketCreatedEvent {
	subject: Subjects.TicketCreated;
	data: {
		id: string;
		issueType: IssueType;
		responsibleSupplier: string;
		status: TicketStatus;
		version: number;
	}
}