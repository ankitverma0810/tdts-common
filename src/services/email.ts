import nodemailer, { Transporter } from 'nodemailer';
import * as handlebars from 'handlebars';
import * as fs from 'fs';
import * as path from 'path';

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

	sendEmail = (options: { from: string, to: string, subject: string, url: string, data: Object }, callback?: Function) => {
		const filePath = path.join(__dirname, options.url);
		console.log('filePath', filePath);
		
		const source = fs.readFileSync(filePath, 'utf-8').toString();
		const template = handlebars.compile(source);
		const replacements = options.data;
		const htmlToSend = template(replacements);

		console.log('htmlToSend', htmlToSend);

		const mailOptions = {
			from: options.from,
			to: options.to,
			subject: options.subject,
			html: htmlToSend
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
