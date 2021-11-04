import axios from "axios";
import React, { useEffect, useState } from "react";
import { fetch, SelectOption } from "../../lib";
import Select from "../Select";
import Image from "next/image";
import { PulseLoader } from "react-spinners";

interface Props {
	handleClose: () => void;
}

const RankcardModal: React.FC<Props> = ({ handleClose }) => {
	const [options, setOptions] = useState<SelectOption[]>();
	const [option, setOption] = useState<number>(1);
	const [loading, setLoading] = useState(false);

	const save = async () => {
		setLoading(true);
		await new Promise((res) => setTimeout(res, 5e3));
		setLoading(false);
		handleClose();
	};

	useEffect(() => {
		const { cancel, token } = axios.CancelToken.source();
		fetch<{ length: number }>("/api/backgrounds/length", { method: "GET", cancelToken: token })
			.then((res) =>
				setOptions(
					Array(res.data.length)
						.fill(null)
						.map((_, i) => ({ label: `Background ${i + 1}`, value: i + 1 }))
				)
			)
			.catch(() => void 0);

		return () => cancel();
	}, []);

	return (
		<div className="rankcard-modal">
			<i className="fas fa-times" onClick={handleClose} />
			<h1>Edit your rankcard background</h1>
			<Select className="rankcard-select" options={options} isMulti={false} onChange={(value) => setOption((value as SelectOption).value)} />
			<Image src={`${process.env.NEXT_PUBLIC_API}/api/backgrounds/${option}`} alt="background" width={500} height={200} />
			<div className="rankcard-save">
				{loading ? (
					<PulseLoader color="rgb(200, 195, 188)" />
				) : (
					<button className="rankcard-button" onClick={save}>
						<i className="fas fa-save" /> save
					</button>
				)}
			</div>
		</div>
	);
};

export default RankcardModal;
