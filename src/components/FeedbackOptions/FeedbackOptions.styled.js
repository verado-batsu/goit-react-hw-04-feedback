import styled from "@emotion/styled";

export const FeedbackOptionsList = styled.ul`
	display: flex;
	gap: 5px;

	li > button {
		padding: 5px 10px;
		background-color: #fff;
		border: 1px solid #000;

		:hover,
		:focus {
			background-color: #000;
			color: #fff;
		}
	}
`;