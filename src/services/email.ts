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

	sendEmail = (options: { from: string, to: string, subject: string, html: string }, callback?: Function) => {

		const mailOptions = {
			from: options.from,
			to: options.to,
			subject: options.subject,
			html: options.html
		};

		this.transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				console.log(error);
			} else {
				console.log('Email sent: ' + info.response);
				if (callback) {
					callback();
				}
			}
		});
	}
}
