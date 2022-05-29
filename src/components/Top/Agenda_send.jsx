import React, { useState } from 'react';
import styles from "../css/Agenda.css";
import { db } from "../../firebase";
import firebase from 'firebase/compat/app';

const Agenda_send = () => {

  const [AgendaTitle, setAgendaTitle] = useState("");
  const [AgendaText, setAgendaText] = useState("");

  const sendAgenda = (e) => {
    e.preventDefault();

    db.collection("Agenda").add({
      title:AgendaTitle,
      text:AgendaText,
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
      // username:user.displayName,
      username:"test",
    })

    setAgendaTitle("");
    setAgendaText("");
  }

  return (
    <div className="form-wrapper">
      <form onSubmit={sendAgenda}>
        <div className="Agenda_form">
          <label>新しいスレッドを投稿する</label>
          <input
            className="Agenda_input"
            type="text"
            value={AgendaTitle}
            onChange={(e) => setAgendaTitle(e.target.value)}
            required
            />
        </div>
        <div className="Agenda_form">
          <label>詳細を記入</label>
          <textarea
            className="Agenda_textarea"
            type="text"
            value={AgendaText}
            onChange={(e) => setAgendaText(e.target.value)}
            required
            maxLength="100"
            placeholder='100文字以内'
          />
        </div>
        <button
          type="submit"
          disabled={!AgendaTitle}
          className="Agenda_button"
          >
          投稿
        </button>
      </form>
    </div>
  )
}

export default Agenda_send
