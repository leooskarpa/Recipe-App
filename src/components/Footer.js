const Footer = ({ deleteRecipe, editRecipe }) => {
    return (
        <div className="footer-holder">
            <div className="footer-edit-recipe-btn footer-btn" onClick={editRecipe}>
                EDIT
            </div>
            <div className="footer-delete-recipe-btn footer-btn" onClick={deleteRecipe}>
                DELETE
            </div>
        </div>
    );
}

export default Footer;