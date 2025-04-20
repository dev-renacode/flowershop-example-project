import quote from "../../assets/icons/quote.svg";

const CommentsCard = ({ text, author }) => {
  return (
    <article className="flex flex-col items-center">
      <img className="w-16" src={quote} alt="" />
      <div className="text-greenText font-medium px-10">
        <p className="text-xl italic">{text}</p>
        <p className="font-semibold pl-5">{author}</p>
      </div>
    </article>
  );
};

export default CommentsCard;
