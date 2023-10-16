

const CoffeeCard = ({coffee}) => {
    const {name, chef, supplier, taste, category, details, photo, price} = coffee
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={photo} alt="coffee"/></figure>
            <div className="card-body">
                <h2 className="card-title">New movie is released!</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;