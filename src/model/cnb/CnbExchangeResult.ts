import {CurrencyDetail} from "../currency/CurrencyDetail";

export interface CnbExchangeResult {
	date: string;
	results: CurrencyDetail[];
}
