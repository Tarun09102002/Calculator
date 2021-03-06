import './App.scss';
import { useReducer } from 'react';
import DigitButton from './DigitButton';
// import React from 'react';

export const Action = {
	ADD_DIGIT: "add-digit",
	CHOOSE_OPERATION: "choose-operation",
	CLEAR: "clear",
	DELETE_DIGIT: "delete-digit",
	EVALUATE: "evaluate"
}


const reducer = (state, { type, payload }) => {
	switch (type) {
		case Action.ADD_DIGIT:
			if (payload.digit === ".") {
				if (state.recentOperand.includes(".")) {
					return { ...state }
				}
			}

			return {
				...state,
				recentOperand: `${state.recentOperand || ""}${payload.digit}`
			}
			break;

		case Action.DELETE_DIGIT:
			return {
				...state,
				recentOperand: state.recentOperand ? state.recentOperand.slice(0, -1) : ""
			}

		case Action.CLEAR:
			return {
				recentOperand: "",
				previousOperand: "",
				Operand: ""
			}

		case Action.CHOOSE_OPERATION:
			if (state.Operand) {
				return { ...state }
			}
			else {
				return {
					previousOperand: state.recentOperand,
					recentOperand: "",
					Operand: payload.digit,
				}
			}

		case Action.EVALUATE:
			if (!state.Operand || !state.previousOperand || !state.recentOperand) {
				return { ...state }
			}
			const { Operand, previousOperand, recentOperand } = state;
			const previousOperandFloat = parseFloat(previousOperand);
			const recentOperandFloat = parseFloat(recentOperand);
			let value = 0;
			// else {
			switch (Operand) {
				case "+":
					value = previousOperandFloat + recentOperandFloat;
					break;

				case "-":
					value = previousOperandFloat - recentOperandFloat;
					break;
				case "*":
					value = previousOperandFloat * recentOperandFloat;
					break;
				case "÷":
					value = previousOperandFloat / recentOperandFloat;
					break;

				default:
					break;
			}
			return {
				previousOperand: "",
				Operand: "",
				recentOperand: `${value}`
			}
		// }

		default:
			break;
	}
}

function App() {
	const [{ recentOperand, previousOperand, Operand }, dispatch] = useReducer(reducer, {})
	// dispatch()

	return (
		<div className="calculator-grid">
			<div className="wrapper">
				<div className="output">
					<div className="previous-operand">{previousOperand}{Operand}
					</div>
					<div className="recent-operand">{recentOperand}</div>
				</div>
				<DigitButton digit={"AC"} dispatch={dispatch}></DigitButton>
				<DigitButton digit={"DEL"} dispatch={dispatch}></DigitButton>
				<DigitButton digit={"÷"} dispatch={dispatch}></DigitButton>
				<DigitButton digit={"1"} dispatch={dispatch}></DigitButton>
				<DigitButton digit={"2"} dispatch={dispatch}></DigitButton>
				<DigitButton digit={"3"} dispatch={dispatch}></DigitButton>
				<DigitButton digit={"*"} dispatch={dispatch}></DigitButton>
				<DigitButton digit={"4"} dispatch={dispatch}></DigitButton>
				<DigitButton digit={"5"} dispatch={dispatch}></DigitButton>
				<DigitButton digit={"6"} dispatch={dispatch}></DigitButton>
				<DigitButton digit={"+"} dispatch={dispatch}></DigitButton>
				<DigitButton digit={"7"} dispatch={dispatch}></DigitButton>
				<DigitButton digit={"8"} dispatch={dispatch}></DigitButton>
				<DigitButton digit={"9"} dispatch={dispatch}></DigitButton>
				<DigitButton digit={"-"} dispatch={dispatch}></DigitButton>
				<DigitButton digit={"."} dispatch={dispatch}></DigitButton>
				<DigitButton digit={"0"} dispatch={dispatch}></DigitButton>
				<DigitButton digit={"="} dispatch={dispatch}></DigitButton>
				{/* <button className='span-two'>=</button> */}

			</div>
		</div>
	)
}

export default App;
