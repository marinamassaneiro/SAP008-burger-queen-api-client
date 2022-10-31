export function Inputs({ value, type, placeholder }) {
	return (
		<input type={type} className="input-auth" placeholder={placeholder} value={value} />
	);
}

export function FooterAuth({ text1, text2, href }) {
	return (
		<p className="footer-auth">{text1} <a href={href}>{text2}</a></p>
	);
}

export function OptionSelect({ value }) {
	return (
		<option value={value}>{value}</option>
	)
}


