export const TodoItem = ({ title, status, id, handleRemoveItem }) => {
    console.log("Id", title, id);
    return (
        <div>
          {title}
          <button onClick={() => handleRemoveItem(id)}>Done</button>
        </div>
     
    );
  };