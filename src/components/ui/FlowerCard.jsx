const FlowerCard = ({ img, title, price }) => {
  return (
    <article className="bg-white rounded-2xl">
      <div className="p-5">
        <img className="rounded-2xl" src={img} alt="" />
      </div>
      <div className="pt-2 pb-5 px-5">
        <h4 className="text-xl font-semibold text-greenText">{title}</h4>
        <p className="text-greenText">${price}</p>
      </div>
    </article>
  );
};

export default FlowerCard;
