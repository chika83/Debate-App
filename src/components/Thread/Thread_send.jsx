import React, { useState } from 'react';
import styles from "../css/Thread_send.module.css";
import { db } from "../../firebase";
import firebase from 'firebase/compat/app';
import { useNavigate, Navigate, } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';

const Thread_send = () => {

  const [ThreadTitle, setThreadTitle] = useState("");
  const [ThreadText, setThreadText] = useState("");
  const navigate = useNavigate();
  const { user } = useAuthContext();

  const sendThread = (e) => {

    if (!user) {
      console.log("/loginへ飛ばす")
      // navigate.push('/login');
    } else {

      e.preventDefault();

      db.collection("Thread").add({
        uid:user.uid,
        username:user.displayName,
        title:ThreadTitle,
        text:ThreadText,
        timestamp:firebase.firestore.FieldValue.serverTimestamp(),
      })
    }

    setThreadTitle("");
    setThreadText("");
  }

  return (
    <div className={styles.form_wrapper}>
      <form onSubmit={sendThread}>
        <div className={styles.Thread_form}>
          <label>新しいスレッドを投稿する</label>
          <input
            className={styles.Thread_input}
            type="text"
            value={ThreadTitle}
            onChange={(e) => setThreadTitle(e.target.value)}
            required
            />
        </div>
        <div className={styles.Thread_form}>
          <label>詳細を記入</label>
          <textarea
            className={styles.Thread_textarea}
            type="text"
            value={ThreadText}
            onChange={(e) => setThreadText(e.target.value)}
            required
            maxLength="100"
            placeholder='100文字以内'
          />
        </div>
        <button
          type="submit"
          disabled={!ThreadTitle}
          className={styles.Thread_button}
          >
          投稿
        </button>
      </form>
    </div>
  )
}

export default Thread_send
