import s from "./Contact.module.css";
import { IoPerson } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function Contact({ id, name, number, onDelete }) {
  return (
    <li>
      <div className={s.wrapper}>
        <p>
          <IoPerson className={s.icon} />
          {name}
        </p>
        <p>
          <BsFillTelephoneFill className={s.icon} />
          {number}
        </p>
      </div>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
}
