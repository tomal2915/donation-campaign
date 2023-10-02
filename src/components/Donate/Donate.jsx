

const Donate = ({ donate }) => {
    const { id, picture, categoryName, title, price, category_bg, card_bg, text_button_bg } = donate;

    const cardStyle = {
        backgroundColor: card_bg,
    };
    const textBtn = {
        backgroundColor: card_bg,
    };
    const categoryBg = {
        color: category_bg,
    };

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl" style={cardStyle}>
                <figure><img src={picture} alt="picture" /></figure>
                <div className="card-body">
                    <h2 className={`inline-flex p-2 w-max rounded-lg`} style={textBtn}>
                        {categoryName}
                    </h2>
                    <h2 className="card-title" style={categoryBg}>{title}</h2>
                    <p style={categoryBg}>{price}</p>
                    <div className="">
                        <button className="px-4 py-4 text-white font-semibold rounded-lg " style={textBtn}>View Details</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Donate