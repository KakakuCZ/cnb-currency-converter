import styled from "styled-components";
import {COLOR_GREY, SCREEN} from "../../designConstants";

const INPUT_HEIGHT = "40px";
const INPUT_FONT_SIZE = "18px";

interface Props {

}

const FormWrapper = styled.div`
	border: 1px solid ${COLOR_GREY};
	padding: 40px 24px;
	
	@media ${SCREEN.minL} {
		padding: 40px 56px;
	}
`

const FormInputSection = styled.div`	
	@media ${SCREEN.minL} {
		display: flex;
		justify-content: space-between;
	}
`

const FormColumn = styled.div`
	width: 100%;

	@media ${SCREEN.minL} {
		width: 40%;
	}
`

const SubmitSection = styled.div`
	text-align: center;
`

const Heading3 = styled.h3`
	margin: 8px 0 16px 0;
	
	@media ${SCREEN.minL} {
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
	
	@media ${SCREEN.minL} {
		margin-bottom: 4px;
	}
`

export const Form: React.FunctionComponent<Props> = () => {
	return <FormWrapper>
		<FormInputSection>
			<FormColumn>
				<Heading3>From</Heading3>
				<TextInput
					type={"number"}
					placeholder={"Type amount"}
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
					disabled
				/>
				<SelectInput>
					<option>EUR</option>
					<option>PLN</option>
				</SelectInput>
			</FormColumn>
		</FormInputSection>

		<SubmitSection>
			<SubmitButton>
				Convert
			</SubmitButton>
		</SubmitSection>
	</FormWrapper>
}
