import {convertCurrency, TargetCurrencyInput} from "./convertCurrency";

interface Dataset {
	amount: number,
	targetCurrencyInput: TargetCurrencyInput,
	expectResult: number,
}

const dataToTest: Dataset[] = [
	{
		amount: 100,
		targetCurrencyInput: {
			amount: 1,
			rate: 25
		},
		expectResult: 4
	},
	{
		amount: 128,
		targetCurrencyInput: {
			amount: 8,
			rate: 64,
		},
		expectResult: 16,
	},
	{
		amount: 480,
		targetCurrencyInput: {
			amount: 0.5,
			rate: 120,
		},
		expectResult: 2,
	}
]

test("Test converting currency", () => {
	dataToTest.forEach((data) => {
		expect(convertCurrency(data.amount, data.targetCurrencyInput)).toEqual(data.expectResult);
	})
})
