import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";
import PropTypes from "prop-types";

export function TimerSet({ name, timeLength, inc, dec }) {
	return (
		<div className="text-2xl">
			<p>{name}</p>
			<div className="flex flex-row items-center justify-center gap-4">
				<button onClick={dec} className="p-4">
					<FaArrowDown />
				</button>
				<span>{~~(timeLength / 60)}</span>
				<button onClick={inc} className="p-4">
					<FaArrowUp />
				</button>
			</div>
		</div>
	);
}

TimerSet.propTypes = {
	name: PropTypes.string,
	timeLength: PropTypes.number,
	inc: PropTypes.func,
	dec: PropTypes.func,
};
