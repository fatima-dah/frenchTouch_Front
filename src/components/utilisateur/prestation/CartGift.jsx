import React, { useState, useEffect } from "react"; 
import "./CartGift.css";
import axios from "axios";
import { FETCH } from "./../../../Fetch";

function CartGift() {
  const [gift, setGift] = useState([]);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    axios.get(`${FETCH}/gifts`).then((res) => setGift(res.data));
  }, []);

  return (
    <div>
      <h2 className="titleGift">Cheque cadeaux</h2>
      <div className="cartGift">
        <div>
        <div>{title}</div>
        <div>{message}</div>
        <div>{date}</div>
        <div>{price}</div>
        </div>
     <div>
        <form onSubmit={(event) => event.preventDefault()}>
          <div>
            <label> Title : 
              <input
                type="title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </label>
          </div>
          <div>
            <label> Message : 
              <input
                type="message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
            </label>
          </div>{" "}
          <div>
            <label> Date de validité : 
              <input
                type="date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
              />
            </label>
          </div>{" "}
          <div>
            <label> valeur du chèque : 
              <select
                type="price"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
              >
                <option>Autre montant</option>
                <option>50</option>
                <option>60</option>
                <option>70</option>
                <option>80</option>
                <option>90</option>
                <option>100</option>
              </select>
            </label>
          </div>{" "}
        </form>
        </div>
      </div>
    </div>
  );
}

export default CartGift;
