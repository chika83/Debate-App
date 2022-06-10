import React, { useState, useEffect } from 'react';
import styles from "../css/Top.module.css";
import Agenda_send from './Agenda_send';
import { db } from "../../firebase";
import { BrowserRouter } from 'react-router-dom';
import HeaderBox from '../Header/Header';

const TopPage = () => {
  const [agendas, setAgendas] = useState([
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
      .collection("Agenda")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setAgendas(
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
  }, [agendas.id]);

  return (
    // <HeaderBox />
    <div className={styles.content_wrapper}>
      <div className={styles.top_inner}>
        <div className={styles.sideber}>
          <h2 className={styles.sideber_title}>ここはサイドバーです。</h2>
          <Agenda_send />
        </div>
        <div className={styles.main_conten}>
          <h2 className={styles.main_title}>メインコンテンツ</h2>
          <div className={styles.agenda_wrapper}>

            {agendas[0]?.id && (
              <>
                {
                  agendas.map((agenda) => (
                    // <button className={styles.agenda_wrap_btn}>
                      <div className={styles.agenda_wrap}>
                        <div className={styles.agenda_left}>
                          <div className={styles.agenda_title}>
                            <p>{ agenda.title }</p>
                          </div>
                          <div className={styles.agenda_totalling}>
                            <p>賛成:1 反対:2 計:3</p>
                          </div>
                        </div>
                        <div className={styles.agenda_post}>
                          <p className={styles.agenda_text}>
                            { agenda.text }
                          </p>
                          <p className={styles.text_time}>
                            {new Date(agenda.timestamp?.toDate()).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    // </button>
                  ))
                }
              </>
            )}


          </div>
        </div>
      </div>
    </div>
  )
}

export default TopPage
