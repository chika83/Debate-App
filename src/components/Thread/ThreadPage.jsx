import React, { useState, useEffect } from 'react';
import styles from "../css/Thread.css";
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

    <div className='content-wrapper'>
      <div className="side-wrap">
        <div className="wrap-title">賛成</div>

        {/* 一覧でDBから取得した内容を表示 */}
        <ul className="comment-area">
          <li class="icon">img</li>
          <li class="text">コメントを表示</li>
        </ul>
        <ul className="comment-area">
          <li class="icon">img</li>
          <li class="text">コメントを表示</li>
        </ul>
        <ul className="comment-area">
          <li class="icon">img</li>
          <li class="text">コメントを表示</li>
        </ul>
        <ul className="comment-area">
          <li class="icon">img</li>
          <li class="text">コメントを表示</li>
        </ul>
        <ul className="comment-area">
          <li class="icon">img</li>
          <li class="text">コメントを表示</li>
        </ul>

      </div>

      <div className="center-wrap">
        <ul className="agenda-area">
          <li className='agenda-title'>アジェンダタイトルを表示</li>
          <li className='agenda-text'>アジェンダのテキストを表示</li>
        </ul>
        {/* Thread_sendエリア */}
      </div>

      <div className="side-wrap">
        <div className="wrap-title">反対</div>

        {/* 一覧でDBから取得した内容を表示 */}
        <ul className="comment-area">
          <li class="icon">img</li>
          <li class="text">コメントを表示</li>
        </ul>
        <ul className="comment-area">
          <li class="icon">img</li>
          <li class="text">コメントを表示</li>
        </ul>
        <ul className="comment-area">
          <li class="icon">img</li>
          <li class="text">コメントを表示</li>
        </ul>
        <ul className="comment-area">
          <li class="icon">img</li>
          <li class="text">コメントを表示</li>
        </ul>
        <ul className="comment-area">
          <li class="icon">img</li>
          <li class="text">コメントを表示</li>
        </ul>

      </div>
    </div>
  )
}

export default ThreadPage
