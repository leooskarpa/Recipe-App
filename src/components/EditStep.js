import { useState } from 'react'

const EditStep = ({ step, saveStep, deleteStep }) => {

    const [stepNo] = useState(step.step);
    const [desc, setDesc] = useState(step.desc)

    const handleChange = (e) => {
        setDesc(e.target.value);
        e.target.rows = 5;

        const currentRows = 5 + (e.target.scrollHeight - 110) / 20;

        e.target.rows = currentRows;
    }

    return (
        <div className="edit-step-template">
            <div className="edit-step-no-holder">
                <span>Step {stepNo}.</span>
            </div>
            <div className="edit-step-desc-container">
                <textarea className="edit-text-input textarea-grow"
                    value={desc}
                    rows="5"
                    onChange={handleChange} />
            </div>
            <div className="edit-step-footer">
                <div className="edit-step-save-btn-holder">
                    <div className="edit-save-btn" onClick={() => saveStep(step.id, stepNo, desc)}>
                        Save
                    </div>
                </div>
                <div className="edit-step-delete-btn-holder">
                    <div className="edit-delete-btn" onClick={() => deleteStep(stepNo)}>
                        Delete
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditStep;