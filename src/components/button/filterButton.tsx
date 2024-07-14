import './styles/filterButton.css'

interface Params{
    text: string;
    className: string;
    onClick: () => void;
}

import FilterIcon from '@assets/icons/filter.svg';

const FilterButton = ({text, className, onClick}:Params) => {

    return(
        <button className={className} onClick={onClick}>
            <p className={"button-text"}>{text}</p>
            <img className={"button-icon"} src={FilterIcon} alt={"icon"}/>
        </button>
    )
}

export default FilterButton;