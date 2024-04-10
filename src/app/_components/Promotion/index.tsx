'use client'
/* eslint-disable import/no-duplicates */
/* eslint-disable simple-import-sort/imports */
/* eslint-disable prettier/prettier */
import { useEffect } from 'react'
import React, {useState} from 'react'
import classes from './index.module.scss'

const Promotion = () => {
    const [targetDate, setTargetDate] = useState(calculateTargetDate());
    const [time, settime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })
    useEffect(() => {
        const timerInterval = setInterval(() => {
          updateTimeRemaining();
        }, 1000);
    
        return () => clearInterval(timerInterval);
      }, []);
    
      function calculateTargetDate() {
        const currentDate = new Date();
        const targetDate = new Date(currentDate);
        targetDate.setDate(targetDate.getDate() + 7); // Add 7 days
        return targetDate;
      }
    
      function updateTimeRemaining() {
        const now = new Date().getTime();
        const distance = targetDate.getTime() - now;
    
        if (distance <= 0) {
          clearInterval(timerInterval);
          settime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        } else {
          const days = Math.floor(distance / (1000 * 60 * 60 * 24));
          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
          settime({ days, hours, minutes, seconds });
        }
      }

  return (
    <section className={classes.promotion}>
      <div className={classes.textBox}>
        <h3 className={classes.title}>Deals of the Month</h3>
        <p>
          Get ready for a shopping experience like never before with our Deals of the Month! Every
          purchase comes with exclusive perks and offers, making this month a celebration of savvy
          choices and amazing deals. Don't miss out! 🎁🛒
        </p>

        <ul className={classes.stats}>
        <StatBox label="Days" value={time.days} />
          <StatBox label="Hours" value={time.hours} />
          <StatBox label="Minutes" value={time.minutes} />
          <StatBox label="Seconds" value={time.seconds} />
        </ul>
      </div>
    </section>
  )
}
const StatBox = ({ label, value }: { label: string; value: number }) => (
    <li className={classes.statBox}>
      <h4>{value}</h4>
      <p>{label}</p>
    </li>
  )

export default Promotion
