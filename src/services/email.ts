import nodemailer, { Transporter } from "nodemailer";
import * as handlebars from "handlebars";
import * as fs from "fs";

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
			},
		});
	}

	sendEmail = async (
		options: {
			from: string;
			to: string;
			subject: string;
			filePath: string;
			data: Object;
		},
		callback?: Function
	) => {
		console.log("filePath", options.filePath);

		const source = fs.readFileSync(options.filePath, "utf-8").toString();
		const template = handlebars.compile(source);
		const replacements = options.data;
		const htmlToSend = template(replacements);

		console.log("htmlToSend", htmlToSend);

		const mailOptions = {
			from: options.from,
			to: options.to,
			subject: options.subject,
			html: htmlToSend,
		};

		try {
			const info = await this.transporter.sendMail(mailOptions);
			console.log("Email sent: ", info.messageId);
			if (callback) {
				callback(mailOptions);
			}
		} catch (err) {
			console.log(err);
		}
	};
}
