'use client';
import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import '../../assets/styles/circular_menu.css';

const CircularMenu = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  useEffect(() => {
    const fields = $('.itemDot');
    const container = $('.dotCircle');
    const width = container.width();
    const radius = width / 2.5;
    const height = container.height();
    const step = (2 * Math.PI) / fields.length;
    let angle = 0;

    fields.each(function () {
      const x = Math.round(width / 2 + radius * Math.cos(angle) - $(this).width() / 2);
      const y = Math.round(height / 2 + radius * Math.sin(angle) - $(this).height() / 2);
      $(this).css({
        left: `${x}px`,
        top: `${y}px`,
      });
      angle += step;
    });

    const handleDotClick = (dataTab) => {
      setActiveIndex(dataTab);
      $('.itemDot').removeClass('active');
      $(`[data-tab="${dataTab}"]`).addClass('active');
      $('.CirItem').removeClass('active');
      $(`.CirItem${dataTab}`).addClass('active');

      $('.dotCircle').css({
        transform: `rotate(${360 - (dataTab - 1) * 36}deg)`,
        transition: '2s',
      });
      $('.itemDot').css({
        transform: `rotate(${(dataTab - 1) * 36}deg)`,
        transition: '1s',
      });
    };

    $('.itemDot').click(function () {
      const dataTab = $(this).data('tab');
      handleDotClick(dataTab);
    });

    const interval = setInterval(() => {
      let dataTab = $('.itemDot.active').data('tab');
      if (dataTab > 6 || activeIndex > 6) {
        dataTab = 1;
        setActiveIndex(1);
      } else {
        setActiveIndex(activeIndex + 1);
      }

      $('.itemDot').removeClass('active');
      $(`[data-tab="${activeIndex}"]`).addClass('active');
      $('.CirItem').removeClass('active');
      $(`.CirItem${activeIndex}`).addClass('active');

      $('.dotCircle').css({
        transform: `rotate(${360 - (activeIndex - 2) * 36}deg)`,
        transition: '2s',
      });
      $('.itemDot').css({
        transform: `rotate(${(activeIndex - 2) * 36}deg)`,
        transition: '1s',
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section className="iq-features">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3 col-md-12"></div>
          <div className="col-lg-6 col-md-12">
            <div className="holderCircle">
              <div className="round"></div>
              <div className="dotCircle">
                <span className="itemDot active itemDot1" data-tab="1">
                  <i className="fa fa-clock-o"></i>
                  <span className="forActive"></span>
                </span>
                <span className="itemDot itemDot2" data-tab="2">
                  <i className="fa fa-comments"></i>
                  <span className="forActive"></span>
                </span>
                <span className="itemDot itemDot3" data-tab="3">
                  <i className="fa fa-user"></i>
                  <span className="forActive"></span>
                </span>
                <span className="itemDot itemDot4" data-tab="4">
                  <i className="fa fa-tags"></i>
                  <span className="forActive"></span>
                </span>
                <span className="itemDot itemDot5" data-tab="5">
                  <i className="fa fa-upload"></i>
                  <span className="forActive"></span>
                </span>
                <span className="itemDot itemDot6" data-tab="6">
                  <i className="fa fa-briefcase"></i>
                  <span className="forActive"></span>
                </span>
              </div>
              <div className="contentCircle">
                <div className="CirItem title-box active CirItem1">
                  <h2 className="title">
                    <span>Automate</span>
                  </h2>
                  <p>tfhdfghfghfghfgjtyjtyhfg ftgfthtyjyutg rthtryjdrhrt tyjdrytyjuty tjtyjtyjtdy</p>
                  <i className="fa fa-clock-o"></i>
                </div>
                <div className="CirItem title-box CirItem2">
                  <h2 className="title">
                    <span>Chat</span>
                  </h2>
                  <p>tfhdfghfghfghfgjtyjtyhfg ftgfthtyjyutg rthtryjdrhrt tyjdrytyjuty tjtyjtyjtdy</p>
                  <i className="fa fa-comments"></i>
                </div>
                <div className="CirItem title-box CirItem3">
                  <h2 className="title">
                    <span>Responses</span>
                  </h2>
                  <p>tfhdfghfghfghfgjtyjtyhfg ftgfthtyjyutg rthtryjdrhrt tyjdrytyjuty tjtyjtyjtdy</p>
                  <i className="fa fa-user"></i>
                </div>
                <div className="CirItem title-box CirItem4">
                  <h2 className="title">
                    <span>Tags</span>
                  </h2>
                  <p>tfhdfghfghfghfgjtyjtyhfg ftgfthtyjyutg rthtryjdrhrt tyjdrytyjuty tjtyjtyjtdy</p>
                  <i className="fa fa-tags"></i>
                </div>
                <div className="CirItem title-box CirItem5">
                  <h2 className="title">
                    <span>Sharing</span>
                  </h2>
                  <p>tfhdfghfghfghfgjtyjtyhfg ftgfthtyjyutg rthtryjdrhrt tyjdrytyjuty tjtyjtyjtdy</p>
                  <i className="fa fa-upload"></i>
                </div>
                <div className="CirItem title-box CirItem6">
                  <h2 className="title">
                    <span>Support</span>
                  </h2>
                  <p>tfhdfghfghfghfgjtyjtyhfg ftgfthtyjyutg rthtryjdrhrt tyjdrytyjuty tjtyjtyjtdy</p>
                  <i className="fa fa-briefcase"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-12"></div>
        </div>
      </div>
    </section>
  );
};

export default CircularMenu;
