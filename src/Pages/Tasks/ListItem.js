export default function ListItem(props) {
    return (
      <li>
          {props.item}
          <button className="action" onClick={
          () => {props.handleRemove(props.itemIndex)}
        }>
        x
      </button>
      </li>
    );
  }