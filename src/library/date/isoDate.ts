export const getIsoDate = (date: Date): string => {
	const year = date.getFullYear();
	const month = `${("0" + (date.getMonth() + 1)).slice(-2)}`;
	const day = `${("0" + date.getDate()).slice(-2)}`;

	assertNumber(year);
	assertNumber(month);
	assertNumber(day);

	return `${year}-${month}-${day}`;
}

const assertNumber = (possibleNumber: unknown): void => {
	if (isNaN(Number(possibleNumber))) {
		throw new Error(`Value "${possibleNumber}" is not numeric`)
	}
}
