import {CnbExchangeResult} from "../../model/cnb/CnbExchangeResult";
import styled from "styled-components";
import {COLOR_ALTO, COLOR_MINESHAFT} from "../../designConstants";
import * as React from "react";

interface Props {
	cnbExchangeResult: CnbExchangeResult;
}

const Table = styled.table`
	width: 100%;
	border-collapse: collapse;
`

const TableHeadCell = styled.th`
	text-align: center;
	border: 1px solid ${COLOR_MINESHAFT};
	padding: 8px 16px;
`

const TableCell = styled.td`
	text-align: center;
	border: 1px solid ${COLOR_MINESHAFT};
	padding: 8px 16px;
`

const TableRow = styled.tr`
`

export const CurrencyTable: React.FunctionComponent<Props> = (props) => {
	return <Table>
		<thead>
			<TableRow>
				<TableHeadCell>Country</TableHeadCell>
				<TableHeadCell>Currency code</TableHeadCell>
				<TableHeadCell>Amount</TableHeadCell>
				<TableHeadCell>Rate</TableHeadCell>
			</TableRow>
		</thead>
		<tbody>
			{props.cnbExchangeResult.results.map((result) => {
				return <TableRow
					key={result.code}
				>
					<TableCell>{result.country}</TableCell>
					<TableCell>{result.code}</TableCell>
					<TableCell>{result.amount}</TableCell>
					<TableCell>{result.rate}</TableCell>
				</TableRow>
			})}
		</tbody>
	</Table>
}
