import React, { useState, useEffect } from 'react';
import styles from "../css/Thread.module.css";
import Thread_send from './Thread_send';
import { db } from "../../firebase";
import { BrowserRouter } from 'react-router-dom';
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

  useEffect(() => {
    const unSub = db
      .collection("thread")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setThreads(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            text: doc.data().text,
            timestamp: doc.data().timestamp,
            title: doc.data().title,
            username: doc.data().username,
          }))
        )
      );
    return () => {
      unSub();
    }
  }, [threads.id]);

  return (
    // <HeaderBox />

    <div className={styles.content_wrapper}>
      <div className={styles.side_wrap}>
        <div className={styles.wrap_title}>賛成</div>

        {/* 一覧でDBから取得した内容を表示 */}
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
          <li className={styles.agenda_title}>アジェンダタイトルを表示</li>
          <li className={styles.agenda_text}>アジェンダのテキストを表示</li>
        </ul>
        {/* Thread_sendエリア */}
      </div>

      <div className={styles.side_wrap}>
        <div className={styles.wrap_title}>反対</div>

        {/* 一覧でDBから取得した内容を表示 */}
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
