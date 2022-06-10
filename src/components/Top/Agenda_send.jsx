import React, { useState } from 'react';
import styles from "../css/Agenda.module.css";
import { db } from "../../firebase";
import firebase from 'firebase/compat/app';
import { useNavigate, Navigate, } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';

const Agenda_send = () => {

  const [AgendaTitle, setAgendaTitle] = useState("");
  const [AgendaText, setAgendaText] = useState("");
  const navigate = useNavigate();
  const { user } = useAuthContext();

  const sendAgenda = (e) => {

    if (!user) {
      console.log("/loginへ飛ばす")
      // navigate.push('/login');
    } else {

      e.preventDefault();

      db.collection("Agenda").add({
        uid:user.uid,
        username:user.displayName,
        title:AgendaTitle,
        text:AgendaText,
        timestamp:firebase.firestore.FieldValue.serverTimestamp(),
      })
    }

    setAgendaTitle("");
    setAgendaText("");
  }

  return (
    <div className={styles.form_wrapper}>
      <form onSubmit={sendAgenda}>
        <div className={styles.agenda_form}>
          <label>新しいスレッドを投稿する</label>
          <input
            className={styles.agenda_input}
            type="text"
            value={AgendaTitle}
            onChange={(e) => setAgendaTitle(e.target.value)}
            required
            />
        </div>
        <div className={styles.agenda_form}>
          <label>詳細を記入</label>
          <textarea
            className={styles.agenda_textarea}
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
          className={styles.agenda_button}
          >
          投稿
        </button>
      </form>
    </div>
  )
}

export default Agenda_send
