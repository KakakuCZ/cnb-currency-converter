export class CnbParsingError extends Error {
	constructor(message: string) {
		super(message);
		this.name = "CnbParsingError";
		this.message = message;

		Object.setPrototypeOf(this, CnbParsingError.prototype);
	}
}
