import { Subjects } from './subjects';
import { UserStatus } from './types/user-status';
import { UserNotificationStatus } from './types/user-notification-status';

// This would be the information that will be passed to the NATS server
export interface UserUpdatedEvent {
	subject: Subjects.UserUpdated;
	data: {
		id: string;
		firstName: string;
		lastName: string;
		email: string;
		status: UserStatus;
		notificationStatus: UserNotificationStatus;
		version: number;
	}
}