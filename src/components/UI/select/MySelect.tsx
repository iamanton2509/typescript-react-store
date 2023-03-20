import './main.css';

import {IOptions} from './../../../types';

interface SelectProps {
    defaultValue: string;
    value: string;
    onChange: (str: string) => void;
    options: IOptions[];
}

const MySelect: React.FC<SelectProps> = ({options, defaultValue, value, onChange}) => {
    return (
        <select value={value} onChange={(event) => onChange(event.target.value)} className="mySelect">
            <option disabled value="">{defaultValue}</option>
            {options.map((option) => 
                <option 
                    value={option.value} 
                    key={option.value} 
                >
                    {option.name}
                </option>
            )}
        </select>
    );
}

export default MySelect;