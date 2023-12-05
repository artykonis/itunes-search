import '../App.css';

const ClearButton = ({ handleButtonClick, buttonText }) => {

    return (
        <button className='clear-button' type='button' onClick={handleButtonClick}>
            {buttonText}
        </button>
    );
};

export default ClearButton;