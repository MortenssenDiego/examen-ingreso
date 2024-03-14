export interface ICountry {
    label: string;
    checked: boolean;
    onClick: () => void;
}

export default function CountryCheckbox({ label, checked, onClick }: ICountry) {
    return (
        <div>
            <input onClick={onClick} checked={checked} type="checkbox" id={label} name={label} value={label}/>
            <label style={{userSelect: "none"}} htmlFor={label}>{label}</label>
        </div>
    );
}
