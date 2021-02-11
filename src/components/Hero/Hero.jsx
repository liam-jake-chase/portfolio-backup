import React, { Component } from 'react'
import './Hero.scss'
import { motion } from 'framer-motion';

export default class Hero extends Component {
    render() {

        const pageTransition = {
            in: {
                opacity: 1,

            },
            out: {
                opacity: 0,
            }
        };
        return (
            <div className="project__layout">
                <a href="https://josh-fusillo.github.io/josh-fusillo-capstone-muews/" className="card__link"><motion.div className="project__one project__card" whileHover={{ scale: 1.25 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}></motion.div></a>
                {/* <motion.div className="project__two project__card" whileHover={{ scale: 1.25}} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>IN-STOCK</motion.div> */}
                <a href="https://josh-fusillo.github.io/brainflixx/" className="card__link"><motion.div className="project__three project__card" whileHover={{ scale: 1.25 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}></motion.div></a>
                <a href="https://josh-fusillo.github.io/Bandsite/" className="card__link"><motion.div className="project__four project__card" whileHover={{ scale: 1.25 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}></motion.div></a>
                <a href="https://josh-fusillo.github.io/travel-site/" className="card__link"><motion.div className="project__five project__card" whileHover={{ scale: 1.25}} animate={{ scale: 1 }} transition={{ duration: 0.5 }}></motion.div></a>
                <a href="https://josh-fusillo.github.io/MealRocket/" className="card__link"><motion.div className="project__six project__card" whileHover={{ scale: 1.25 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}></motion.div></a>
            </div>
        )
    }
}
