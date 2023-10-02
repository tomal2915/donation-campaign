import { Link } from "react-router-dom";

const Category = ({ category }) => {
    const { id, title, picture, categoryName, category_bg, text_button_bg, card_bg } = category;


    const cardStyle = {
        backgroundColor: card_bg,
    };
    const textBtn = {
        backgroundColor: card_bg,
        color: text_button_bg,
    };
    const categoryBg = {
        color: category_bg,
    };

    return (
        <Link to={`/category/${id}`}>
            <div className={`card shadow-xl cursor-pointer`} style={cardStyle}>
                <figure><img className="p-4" src={picture} alt="picture" /></figure>
                <div className="card-body">
                    <h2 className={`inline-flex p-2 w-max rounded-sm`} style={textBtn}>
                        {categoryName}
                    </h2>
                    <h2 className={`card-title`} style={categoryBg}>
                        {title}
                    </h2>
                </div>
            </div>
        </Link>
    );
};

export default Category;
