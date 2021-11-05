import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import { ApiError, fetch, logger, SelectOption } from "../../lib";
import Select from "../Select";
import Image from "next/image";
import { PulseLoader } from "react-spinners";
import { alert, success } from "../../lib/notifications";

interface Props {
	handleClose: () => void;
}

const RankcardModal: React.FC<Props> = ({ handleClose }) => {
	const [options, setOptions] = useState<SelectOption[]>();
	const [option, setOption] = useState<number>(1);
	const [loading, setLoading] = useState(false);

	const save = async () => {
		setLoading(true);

		try {
			await fetch("/api/background", { method: "PUT", data: { backgroundId: option } });
			success("Successfully updated", `Successfully updated your background to ${option}!`);
		} catch (err) {
			const error = err as AxiosError<ApiError>;
			if (!("isAxiosError" in error)) {
				console.log(error);
				return;
			}

			logger.error(error.response?.data.error ?? error.message);
			alert("Error while updating your background", error.response?.data.message ?? "Something went wrong, please try again later.");
		}

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
			<Select
				className="rankcard-select"
				options={options}
				isMulti={false}
				defaultValue={{ label: "Background 1", value: 1 }}
				onChange={(value) => setOption((value as SelectOption).value)}
			/>
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
