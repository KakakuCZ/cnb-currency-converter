import {Form} from "../components/form/Form";
import styled from "styled-components";
import {COLOR_MINESHAFT, SCREEN} from "../designConstants";

const Title = styled.h1`
	text-align: center;
	color: ${COLOR_MINESHAFT}
`

const FormWrapper = styled.div`
	width: 100%;
	margin: 0 auto;
	border-radius: 20px;
	
	@media ${SCREEN.minL} {
		width: 500px;
	}
`

export const MainScreen: React.FunctionComponent = () => {
	return <div>
		<Title>Awesome currency converter</Title>
		<FormWrapper>
			<Form />
		</FormWrapper>
	</div>;
}
