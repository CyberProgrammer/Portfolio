import './styles/filterButton.css'

interface Params{
    text: string;
    className: string;
    onClick: () => void;
}
const FilterButton = ({text, className, onClick}:Params) => {

    return(
        <button className={className} onClick={onClick}>
            {text}
        </button>
    )
}

export default FilterButton;