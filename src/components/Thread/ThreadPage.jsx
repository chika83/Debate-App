import React, { useState, useEffect } from 'react';
import styles from "../css/Thread.module.css";
import Thread_send from './Thread_send';
import { db } from "../../firebase";
import { BrowserRouter,useLocation } from 'react-router-dom';
import HeaderBox from '../Header/Header';

const ThreadPage = () => {
  const [threads, setThreads] = useState([
    {
      id: "",
      text: "",
      timestamp: null,
      title: "",
      username: "",
    },
  ]);
  const location = useLocation();
  const [agenda, setAgendaId] = useState(location.state.agenda);
  // console.log(agenda);

  return (
    // <HeaderBox />

    <div className={styles.content_wrapper}>
      <div className={styles.side_wrap}>
        <div className={styles.wrap_title}>賛成</div>

        <ul className={styles.comment_area}>
          <li className={styles.icon}>img</li>
          <li className={styles.text}>コメントを表示</li>
        </ul>
        <ul className={styles.comment_area}>
          <li className={styles.icon}>img</li>
          <li className={styles.text}>コメントを表示</li>
        </ul>
        <ul className={styles.comment_area}>
          <li className={styles.icon}>img</li>
          <li className={styles.text}>コメントを表示</li>
        </ul>
        <ul className={styles.comment_area}>
          <li className={styles.icon}>img</li>
          <li className={styles.text}>コメントを表示</li>
        </ul>
        <ul className={styles.comment_area}>
          <li className={styles.icon}>img</li>
          <li className={styles.text}>コメントを表示</li>
        </ul>

      </div>

      <div className={styles.center_wrap}>
        <ul className={styles.agenda_area}>
          <li className={styles.agenda_title}>{agenda.title}</li>
          <li className={styles.agenda_text}>{agenda.text}</li>
        </ul>
        <Thread_send />
      </div>

      <div className={styles.side_wrap}>
        <div className={styles.wrap_title}>反対</div>

        <ul className={styles.comment_area}>
          <li className={styles.icon}>img</li>
          <li className={styles.text}>コメントを表示</li>
        </ul>
        <ul className={styles.comment_area}>
          <li className={styles.icon}>img</li>
          <li className={styles.text}>コメントを表示</li>
        </ul>
        <ul className={styles.comment_area}>
          <li className={styles.icon}>img</li>
          <li className={styles.text}>コメントを表示</li>
        </ul>
        <ul className={styles.comment_area}>
          <li className={styles.icon}>img</li>
          <li className={styles.text}>コメントを表示</li>
        </ul>
      </div>
    </div>
  )
}

export default ThreadPage
