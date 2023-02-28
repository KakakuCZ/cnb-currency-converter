import {Form} from "../components/form/Form";
import styled from "styled-components";
import {COLOR_MINESHAFT, SCREEN} from "../designConstants";
import {useQuery} from "react-query";
import {parseCnbTxtOutput} from "../model/cnb/parseCnbTxtOutput";
import {fetchCnbLatestCurrency} from "../model/cnb/fetch";
import {CurrencyTable} from "../components/currencyTable/CurrencyTable";
import {useState} from "react";

const Title = styled.h1`
	text-align: center;
	color: ${COLOR_MINESHAFT}
`

const FormWrapper = styled.div`
	width: 100%;
	border-radius: 20px;
	
	@media ${SCREEN.minM} {
		margin: 0 auto;
		width: 500px;
	}
`

const CurrencyTableWrapper = styled.div`
	@media ${SCREEN.minM} {
		margin: 40px auto 0 auto;
		width: 500px;
	}
`

const Heading2 = styled.h2`
	margin: 0 0 16px 0;
	text-align: center;
`

export const MainScreen: React.FunctionComponent = () => {
	const {isLoading, error, data} = useQuery("currencyRates", async () => {
		const responseText = await fetchCnbLatestCurrency();

		return parseCnbTxtOutput(responseText);
	});

	if (isLoading) {
		return <div>Loading...</div>
	}

	if (error) {
		return <div>Error</div>
	}

	if (data === undefined) {
		return <div>
			No data
		</div>
	}

	return <div>
		<Title>Awesome currency converter</Title>
		<FormWrapper>
			<Form
				cnbExchangeResult={data}
			/>
		</FormWrapper>

		<CurrencyTableWrapper>
			<Heading2>Currency table</Heading2>
			<CurrencyTable
				cnbExchangeResult={data}
			/>
		</CurrencyTableWrapper>
	</div>;
}
