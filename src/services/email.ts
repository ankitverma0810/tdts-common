import nodemailer, { Transporter } from 'nodemailer';

export class EmailService {
	transporter: Transporter;

	constructor(
		public host: string = "smtp.ethereal.email",
		public port: number = 587,
		public username: string,
		public password: string
	) {
		this.transporter = nodemailer.createTransport({
			host: host,
			port: port,
			secure: false, // true for 465, false for other ports
			auth: {
				user: username,
				pass: password,
			}
		});
	}

	sendEmail = async (from: string, to: string, subject: string, html: '') => {
		let info = await this.transporter.sendMail({
			from,
			to,
			subject,
			html
		});

		console.log("Message sent: %s", info.messageId);
	}
}
