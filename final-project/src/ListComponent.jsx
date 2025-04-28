const ListComponent = ({quote}) => {
  return (
    <li className="list-item">
      <h3 className="list-title">{quote.content}</h3>
      <p className="list-author">{quote.author}</p>
    </li>
  );
};

export default ListComponent;
