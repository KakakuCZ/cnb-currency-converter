export interface TargetCurrencyInput {
	amount: number;
	rate: number;
}

export const convertCurrency = (
	fromAmount: number,
	targetCurrencyInput: TargetCurrencyInput,
): number => {
	const normalizedTargetCurrencyData = normalizeRateToBePerOneAmount(targetCurrencyInput);

	return fromAmount / normalizedTargetCurrencyData.rate;
}

const normalizeRateToBePerOneAmount = (targetCurrencyInput: TargetCurrencyInput): TargetCurrencyInput => {
	if (targetCurrencyInput.amount === 1) {
		return targetCurrencyInput;
	}

	return {
		amount: 1,
		rate: targetCurrencyInput.rate / targetCurrencyInput.amount,
	}
};
