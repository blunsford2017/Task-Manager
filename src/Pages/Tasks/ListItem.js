export default function ListItem(props) {
    return (
      <ul> 

      <li>
        {props.item}
        <button className="action" onClick={
          () => {props.handleDelete(props.itemIndex)}
        }>
        x
        </button>
      </li>

      <li>
       {props.item}
       <button className="action" onClick={
       () => {props.handleUpdate(props.itemIndex)}
     }>
     x
     </button>
   </li>
      
      </ul>
    );
  }