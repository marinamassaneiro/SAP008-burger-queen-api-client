import './inputs.css'

export function Inputs({ value, type, placeholder, onClick, onChange, className }) {
	return (
		<input type={type} className={className} placeholder={placeholder} value={value} 
		onClick={onClick} onChange={onChange} />
	);
}

export function OptionSelect({ value }) {
	return (
		<option value={value}>{value}</option>
	)
}