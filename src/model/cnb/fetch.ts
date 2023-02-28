import {CURRENCY_RATES_DATA_SOURCE_URL} from "../../constants";

export const fetchCnbLatestCurrency = async (): Promise<string> => {
	return await (
		await fetch(
			CURRENCY_RATES_DATA_SOURCE_URL,
			{
				method: "GET",
			}
		)
	).text();
}
