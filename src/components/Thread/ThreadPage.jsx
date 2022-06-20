import React, { useState, useEffect } from 'react';
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import styles from "../css/Thread.module.css";
import Thread_send from './Thread_send';
import { db } from "../../firebase";
import { BrowserRouter, useLocation } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
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

  const { user } = useAuthContext();
  const location = useLocation();
  const [agenda, setAgendaId] = useState(location.state.agenda);
  const [judge, setJudge] = useState("");

  const handleButton = (positive) => {
    if (!user) {
      console.log("/loginへ飛ばす")
      // navigate.push('/login');
    } else {

      // 賛成ボタン押された時
      if (positive) {
        console.log("賛成");

        // 状態判定
        // 現状賛成なら操作なし
        // 現状反対なら反対を削除し賛成に追加
        // 現状どちらでもないなら賛成に追加
        if (judge == 1) {
          console.log("重複あり");
        } else {
          console.log("重複なし");
          // 1のコレクションにuidを入れる
          // judgeに1を入れる
          db.collection("Agenda").doc(agenda.id).collection("1").add({
            uid: user.uid,
          });
          setJudge(1);
        }
      } else {

        // 反対ボタン押された時
        console.log("反対");

        // 状態判定
        // 現状反対なら操作なし
        // 現状賛成なら賛成を削除し反対に追加
        // 現状どちらでもないなら反対に追加
        if (judge == 0) {
          console.log("重複あり");
        } else {
          console.log("重複なし");
          // 0のコレクションにuidを入れる
          // judgeに0を入れる
          db.collection("Agenda").doc(agenda.id).collection("0").add({
            uid: user.uid,
          });
          setJudge(0);
        }
      }
    }
  }

  useEffect(() => {

    // レンダリング時ユーザーが賛成派なのか反対派なのかどちらでもないのかを判定したい
    // DBにユーザー情報があるかを照合して、状態をsetJudgeに入れたい

    const db_positive = db.collection("Agenda").doc(agenda.id).collection("1").doc(user.uid).get();
    const db_negative = db.collection("Agenda").doc(agenda.id).collection("0").doc(user.uid).get();
    // console.log(db_positive, db_negative);

    // uid情報が拾えない、てか拾えてるかわかんない
    if (db_positive != null) {
      setJudge(1);
    }
    if (db_negative != null) {
      setJudge(0);
    }
    console.log(judge);

  }, []);

  return (
    // <HeaderBox />

    <div className={styles.content_wrapper}>
      <div className={styles.side_wrap}>
        <button
          className={styles.wrap_title}
          onClick={() => { handleButton(true) }}
        >賛成</button>

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
        <button
          className={styles.wrap_title}
          onClick={() => { handleButton(false) }}
        >反対</button>

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
