import "./Card.scss";

const Card = (props) => {
    const { image, rate, iconDes } = props;
    return (
        <div class="card-main max-w-sm overflow-hidden py-4">
            <img
                class="card-img w-full"
                src={image}
                alt="Sunset in the mountains"
            />
            <div class="px-6 pt-4">
                <div class="card-rate font-bold text-xl mb-2">{rate}</div>
                <p class="card-des text-gray-700 text-base mb-0">
                   {iconDes}
                </p>
            </div>
        </div>
    );
};

export default Card;
