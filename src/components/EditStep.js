const EditStep = ({ stepNo, desc }) => {
    return (
        <div className="step-template">
            <div className="step-no-holder">
                <span>{stepNo}.</span>
            </div>
            <div className="step-desc-container">
                <span>{desc}</span>
            </div>
        </div>
    );
}

export default EditStep;