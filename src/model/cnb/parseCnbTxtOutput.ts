import {CnbExchangeResult} from "./CnbExchangeResult";
import {trimIncludingNewLinesChar} from "../../library/string/trim";
import {getIsoDate} from "../../library/date/isoDate";
import {CnbParsingError} from "./CnbParsingError";

export const parseCnbTxtOutput = (txtFileContent: string): CnbExchangeResult => {
	try {
		const trimmedTxtFileContent = trimIncludingNewLinesChar(txtFileContent);

		const lines = trimmedTxtFileContent.split("\n");

		return {
			date: getIsoDate(parseDateFromDateRow(lines[0])),
			results: lines.slice(2)
				.map((line) => {
					const [
						country,
						_,
						amount,
						code,
						rate
					] = line.trim().split("|");

					return {
						country,
						code,
						rate: Number(rate),
						amount: Number(amount)
					};
				}),
		}
	} catch (err) {
		throw new CnbParsingError("Error while parsing CNB output: " + (err as any).message);
	}
};

const parseDateFromDateRow = (dateRow: string): Date => {
	return new Date(dateRow.slice(0, dateRow.indexOf("#") - 1));
}
