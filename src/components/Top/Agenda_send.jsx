import React, { useState } from 'react';
import styles from "../css/Agenda.css";
import { db } from "../../firebase";
import firebase from 'firebase/compat/app';

const Agenda_send = () => {

  const [AgendaMsg, setAgendaMsg] = useState("");

  const sendAgenda = (e) => {
    e.preventDefault();

    db.collection("Agenda").add({
      text:AgendaMsg,
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
      // username:user.displayName,
      username:"test",
    })

    setAgendaMsg("");
  }

  return (
    <div className="form-wrapper">
      <form onSubmit={sendAgenda}>
        <div className="Agenda_form">
          <label>新しいスレッドを投稿する</label>
          <input
            className="Agenda_input"
            type="text"
            value={AgendaMsg}
            onChange={(e)=>setAgendaMsg(e.target.value)}
            />
        </div>
        <button
          type="submit"
          disabled={!AgendaMsg}
          className="Agenda_button"
          >
          投稿
        </button>
      </form>
    </div>
  )
}

export default Agenda_send
