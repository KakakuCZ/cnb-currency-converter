import styled from "styled-components";
import {COLOR_GREY, SCREEN} from "../../designConstants";
import {CnbExchangeResult} from "../../model/cnb/CnbExchangeResult";
import {useMemo, useState} from "react";
import * as React from "react";
import {convertCurrency} from "../../model/conversion/convertCurrency";

const INPUT_HEIGHT = "40px";
const INPUT_FONT_SIZE = "18px";

interface Props {
	cnbExchangeResult: CnbExchangeResult;
}

const FormWrapper = styled.div`
	border: 1px solid ${COLOR_GREY};
	padding: 40px 24px;
	
	@media ${SCREEN.minM} {
		padding: 40px 56px;
	}
`

const FormInputSection = styled.div`	
	@media ${SCREEN.minM} {
		display: flex;
		justify-content: space-between;
	}
`

const FormColumn = styled.div`
	width: 100%;

	@media ${SCREEN.minM} {
		width: 40%;
	}
`

const SubmitSection = styled.div`
	text-align: center;
`

const Heading3 = styled.h3`
	margin: 8px 0 16px 0;
	
	@media ${SCREEN.minM} {
		margin: 0 0 8px 0;
	}
`

const TextInput = styled.input`
	margin-bottom: 4px;
	padding: 4px 8px;
	width: 100%;
	height: ${INPUT_HEIGHT};
	font-size: ${INPUT_FONT_SIZE};
	
	-moz-appearance: textfield;
	
	::-webkit-inner-spin-button {
	  -webkit-appearance: none;
	  margin: 0;
	}
	
	:disabled {
		color: ${COLOR_GREY}
	}
`

const SubmitButton = styled.button`
	margin-top: 32px;
	padding: 4px 8px;
	width: 100%;
	height: ${INPUT_HEIGHT};
	font-size: ${INPUT_FONT_SIZE};
	background-color: green;
	color: white;
	
	:hover {
		cursor: pointer;
	}
`

const SelectInput = styled.select`
	margin-bottom: 16px;
	padding: 4px 8px;
	width: 100%;
	height: ${INPUT_HEIGHT};
	font-size: ${INPUT_FONT_SIZE};
	
	@media ${SCREEN.minM} {
		margin-bottom: 4px;
	}
`

const ResultParagraph = styled.p`
	font-size: 18px;
	text-align: center;
`

export const Form: React.FunctionComponent<Props> = (props) => {
	const [inputValue, setInputValue] = useState<string>("");
	const [selectValue, setSelectValue] = useState<string | undefined>(props.cnbExchangeResult.results[0]?.code);
	const [conversionResult, setConversionResult] = useState<number | undefined>(undefined);

	const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
		setConversionResult(undefined);
	}

	const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectValue(e.target.value);
		setConversionResult(undefined);
	}

	const onSubmit = () => {
		if (!inputValue) {
			alert("Error! Amount of czech crowns must be typed :(");
		}

		const activeCurrency = props.cnbExchangeResult.results
			.find((result) => result.code === selectValue);

		if (!activeCurrency) {
			alert("Error! Currency must be chosen :(");
		}

		const result = convertCurrency(
			Number(inputValue),
			{rate: activeCurrency!.rate, amount: activeCurrency!.amount}
		);

		setConversionResult(Number(result.toFixed(2)))
	}

	return <FormWrapper>
		<FormInputSection>
			<FormColumn>
				<Heading3>From</Heading3>
				<TextInput
					type={"number"}
					placeholder={"Type amount"}
					value={inputValue}
					onChange={onInputChange}
					onKeyPress={(e) => {
						e.key === "Enter" && onSubmit();
					}}
				/>
				<SelectInput
					value={"CZK"}
					disabled
				>
					<option>CZK</option>
				</SelectInput>
			</FormColumn>
			<FormColumn>
				<Heading3>To</Heading3>
				<TextInput
					type={"number"}
					placeholder={"-"}
					value={conversionResult ?? ""}
					disabled
				/>
				<SelectInput
					value={selectValue}
					onChange={onSelectChange}
				>
					{props.cnbExchangeResult.results.map((result) => {
						return <option
							key={result.code}
							value={result.code}
						>
							{result.code}
						</option>
					})}
				</SelectInput>
			</FormColumn>
		</FormInputSection>

		<SubmitSection>
			<SubmitButton onClick={onSubmit}>
				Convert
			</SubmitButton>
		</SubmitSection>

		<ResultParagraph>
			{conversionResult
				? <>{inputValue} Kč is <strong>{conversionResult} {selectValue}</strong></>
				: <>–</>
			}
		</ResultParagraph>

	</FormWrapper>
}
