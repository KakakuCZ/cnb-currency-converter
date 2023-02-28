import {parseCnbTxtOutput} from "./parseCnbTxtOutput";
import {CnbExchangeResult} from "./CnbExchangeResult";
import {CnbParsingError} from "./CnbParsingError";

const txtFile = `
	28 Feb 2023 #42
	Country|Currency|Amount|Code|Rate
	Australia|dollar|1|AUD|14.910
	Brazil|real|1|BRL|4.252
	Hungary|forint|100|HUF|6.221
	USA|dollar|1|USD|22.123
`;

const invalidTxtFile = [
	`
		safasdf
	`,
	`
	Country|Currency|Amount|Code|Rate
	Australia|dollar|1|AUD|14.910
	Brazil|real|1|BRL|4.252
	Hungary|forint|100|HUF|6.221
	USA|dollar|1|USD|22.123
	`,
	`
	Country|Currency|Amount|Code|Rate
	Australia|dollar|1|AUD|14.910
	Brazil|real|1|BRL|4.252
	Hungary|forint|100|HUF|6.221
	USA|dollar|1|USD22.123
	`

];

const expectedOutput: CnbExchangeResult = {
	date: "2023-02-28",
	results: [
		{
			country: "Australia",
			code: "AUD",
			amount: 1,
			rate: 14.910,
		},
		{
			country: "Brazil",
			code: "BRL",
			amount: 1,
			rate: 4.252,
		},
		{
			country: "Hungary",
			code: "HUF",
			amount: 100,
			rate: 6.221,
		},
		{
			country: "USA",
			code: "USD",
			amount: 1,
			rate: 22.123,
		},
	]
}

test("Test parse CNB txt successfull parse", () => {
	expect(parseCnbTxtOutput(txtFile)).toEqual(expectedOutput);
})

test("Test for invalid txt file throws an exception", () => {
	invalidTxtFile.forEach((txtFile) => {
		try {
			parseCnbTxtOutput(txtFile)
		} catch (e) {
			expect(e)
				.toBeInstanceOf(CnbParsingError)
		}
	})
})
