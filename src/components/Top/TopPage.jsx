import React, { useState, useEffect } from 'react';
import styles from "../css/Top.css";
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
    <>
    <HeaderBox/>
    <div className='content-wrapper'>
      <div className="top-inner">
        <div className="sideber">
          <h2 className="sideber-title">ここはサイドバーです。</h2>
          <Agenda_send />
        </div>
        <div className="main-content">
          <h2 className="main-title">メインコンテンツ</h2>
          <div className="agenda-wrapper">

            {agendas[0]?.id && (
              <>
                {
                  agendas.map((agenda) => (
                    <div className="agenda-wrap">
                      <div className="agenda-left">
                        <a href='#'>
                          <div className="agenda-title">
                            <p>{ agenda.title }</p>
                          </div>
                          <div className="agenda-totalling">
                            <p>賛成:1 反対:2 計:3</p>
                          </div>
                        </a>
                      </div>
                      <div className="agenda-post">
                        <a href='#'>
                          <p className="agenda-text">
                            { agenda.text }
                          </p>
                          <p className="text-time">
                            {new Date(agenda.timestamp?.toDate()).toLocaleString()}
                          </p>
                        </a>
                      </div>
                    </div>
                  ))
                }
              </>
            )}


          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default TopPage
