import {useState} from "react";

const Shopping = () => {
    const [items, setItems] = useState([]);
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted without refreshing!");
        if(!name || !quantity){
            if(!name) return alert("Please enter name");
            else return alert("Please enter quantity");
        }
        const newItems = {
            name,
            quantity : parseInt(quantity),
        }
        setItems((prev) => [...prev, newItems]);
        setName("");
        setQuantity("");
    }
  return (
    <section>
        <div>Shopping List</div>
        <form onSubmit={handleSubmit}>
            <input type={"text"} value={name} onChange={(e) => setName(e.target.value)} />
            <input type={"text"} value={quantity} onChange={(e) => setQuantity(e.target.value)} />
            <button type="submit">Add Shopping</button>
        </form>
        <ul>
            {items.map((item, index) => (
                <li key={index}>
                    {item.name} - Quantity: {item.quantity}
                </li>
            ))}
        </ul>
    </section>
  );
};

export default Shopping;
