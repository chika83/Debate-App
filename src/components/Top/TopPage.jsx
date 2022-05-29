import React, { useState, useEffect } from 'react';
import styles from "../css/Top.css";
import Agenda_send from './Agenda_send';

const TopPage = () => {
  return (
    <div className='content-wrapper'>
      <div className="top-inner">
        <div className="sideber">
          <h2 className="sideber-title">ここはサイドバーです。</h2>
          <Agenda_send />
        </div>
        <div className="main-content">
          <h2 className="main-title">メインコンテンツ</h2>
          <div className="agenda-wrapper">

            <div className="agenda-wrap">
              <div className="agenda-left">
                <div className="agenda-title">
                  <p>sample agenda</p>
                </div>
                <div className="agenda-totalling">
                  <p>賛成:1 反対:2 計:3</p>
                </div>
              </div>
              <div className="agenda-post">
                <p className="agenda-text">
                  sample text
                </p>
                <p className="text-time">
                  00/00/00:0
                </p>
              </div>
            </div>

            <div className="agenda-wrap">
              <div className="agenda-left">
                <div className="agenda-title">
                  <p>sample agenda</p>
                </div>
                <div className="agenda-totalling">
                  <p>賛成:1 反対:2 計:3</p>
                </div>
              </div>
              <div className="agenda-post">
                <p className="agenda-text">
                  sample text
                </p>
                <p className="text-time">
                  00/00/00:0
                </p>
              </div>
            </div>

            <div className="agenda-wrap">
              <div className="agenda-left">
                <div className="agenda-title">
                  <p>sample agenda</p>
                </div>
                <div className="agenda-totalling">
                  <p>賛成:1 反対:2 計:3</p>
                </div>
              </div>
              <div className="agenda-post">
                <p className="agenda-text">
                  sample text
                </p>
                <p className="text-time">
                  00/00/00:0
                </p>
              </div>
            </div>

            <div className="agenda-wrap">
              <div className="agenda-left">
                <div className="agenda-title">
                  <p>sample agenda</p>
                </div>
                <div className="agenda-totalling">
                  <p>賛成:1 反対:2 計:3</p>
                </div>
              </div>
              <div className="agenda-post">
                <p className="agenda-text">
                  sample text
                </p>
                <p className="text-time">
                  00/00/00:0
                </p>
              </div>
            </div>

            <div className="agenda-wrap">
              <div className="agenda-left">
                <div className="agenda-title">
                  <p>sample agenda</p>
                </div>
                <div className="agenda-totalling">
                  <p>賛成:1 反対:2 計:3</p>
                </div>
              </div>
              <div className="agenda-post">
                <p className="agenda-text">
                  sample text
                </p>
                <p className="text-time">
                  00/00/00:0
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default TopPage
