import React, { Component } from "react";
import "./Hero.scss";
import { motion } from "framer-motion";

export default class Hero extends Component {
  render() {
    const pageTransition = {
      in: {
        opacity: 1,
      },
      out: {
        opacity: 0,
      },
    };
    return (
      <>
        <h1>JOSH FUSILLO'S PROJECTS</h1>
        <div className="project">
          <div className="project__layout">
            <div className="project__container">
              <div className="project__title">MUEWS</div>
              <a
                href="https://josh-fusillo.github.io/josh-fusillo-capstone-muews/"
                className="card__link"
              >
                <motion.div
                  className="project__one project__card"
                  whileHover={{ scale: 1.25 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                ></motion.div>
              </a>
              <a
                href="https://github.com/josh-fusillo/josh-fusillo-capstone-muews/tree/main/client"
                className="project__button"
              >
                VIEW CODE
              </a>
            </div>
            <div className="project__container">
              <div className="project__title">BRAINFLIX</div>
              <a
                href="https://josh-fusillo.github.io/brainflix/"
                className="card__link"
              >
                <motion.div
                  className="project__three project__card"
                  whileHover={{ scale: 1.25 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                ></motion.div>
              </a>
              <a
                href="https://github.com/josh-fusillo/brainflix"
                className="project__button"
              >
                VIEW CODE
              </a>
            </div>
            <div className="project__container">
              <div className="project__title">BANDSITE</div>
              <a
                href="https://josh-fusillo.github.io/Bandsite/"
                className="card__link"
              >
                <motion.div
                  className="project__four project__card"
                  whileHover={{ scale: 1.25 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                ></motion.div>
              </a>
              <a
                href="https://github.com/josh-fusillo/Bandsite/tree/master/Sprint%203%20Work"
                className="project__button"
              >
                VIEW CODE
              </a>
            </div>
            <div className="project__container">
              <div className="project__title">TRAVEL SITE</div>
              <a
                href="https://josh-fusillo.github.io/travel-site/"
                className="card__link"
              >
                <motion.div
                  className="project__five project__card"
                  whileHover={{ scale: 1.25 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                ></motion.div>
              </a>
              <a
                href="https://github.com/josh-fusillo/travel-site"
                className="project__button"
              >
                VIEW CODE
              </a>
            </div>
            <div className="project__container">
              <div className="project__title">MEAL ROCKET</div>
              <a
                href="https://josh-fusillo.github.io/MealRocket/"
                className="card__link"
              >
                <motion.div
                  className="project__six project__card"
                  whileHover={{ scale: 1.25 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                ></motion.div>
              </a>
              <a
                href="https://github.com/josh-fusillo/MealRocket"
                className="project__button"
              >
                VIEW CODE
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
