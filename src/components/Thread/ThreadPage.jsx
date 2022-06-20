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
          db.collection("Agenda").doc(agenda.id).collection("judge").doc("1").set({
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
          db.collection("Agenda").doc(agenda.id).collection("judge").doc("0").set({
            uid: user.uid,
          });
          setJudge(0);
        }
      }
    }
  }

  // 一応賛成は判定できた
  // 反対も同じようにやるとuseDocumentは同時にできませんみたいなエラーでる
  // レンダリングの中に入れることもできないみたいで微妙
  // const ReadDb = () => {
    const [docDetails, loading, error] = useDocument(
      db.collection("Agenda")
        .doc(agenda.id)
        .collection("judge")
        .doc("1")
    );
    const positive_data = [docDetails?.data().uid];
    const positive_data_check = positive_data.includes(user.uid);
    console.log(positive_data_check);

    if (positive_data_check) {
      setJudge(1);
    }
  // ReadDb();

  useEffect(() => {

    // レンダリング時ユーザーが賛成派なのか反対派なのかどちらでもないのかを判定したい
    // DBにユーザー情報があるかを照合して、状態をsetJudgeに入れたい

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
