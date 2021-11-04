import React from "react";
import ReactSelect from "react-select";
import type { Theme, Props } from "react-select";
import type { SelectOption } from "../../lib";

const Select: React.FC<Props<SelectOption>> = (props) => {
	const setTheme = (theme: Theme): Theme => {
		theme.colors = {
			...theme.colors,
			neutral0: "#14161A",
			neutral10: "#333841",
			neutral20: "rgba(255, 255, 255, 0.2)",
			primary25: "#5865f2",
			primary: "#5865f2",
			neutral80: "#fbfdfe"
		};

		return theme;
	};

	return <ReactSelect {...props} theme={setTheme} />;
};

export default Select;
