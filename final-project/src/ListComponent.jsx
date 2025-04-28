const ListComponent = (props) => {
  return (
    <li className="list-item">
      <h3 className="list-title">{props.content}</h3>
      <p className="list-author">{props.author}</p>
    </li>
  );
};

export default ListComponent;
