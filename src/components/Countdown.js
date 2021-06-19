import React,{useRef, useEffect, useState} from 'react';
import '../assets/styles/Countdown.css'


const Countdown = ()=>{

        const [timerDays, setTimerDays] = useState('00')
        const [timerHours, setTimerHours] = useState('00')
        const [timerMinutes, setTimerMinutes] = useState('00')
        const [timerSeconds, setTimerSeconds] = useState('00')

        let interval = useRef()

        const startTimer = ()=>{
            const countdownDate = new Date('2021,06,24 20:30:00')
            interval = setInterval(()=>{
                const now = new Date()
                const distance = countdownDate - now
                const days = Math.floor(distance / (1000 * 60 * 60 * 24))
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
                const seconds = Math.floor((distance % (1000 * 60))/1000)

                if(distance < 0){
                    //stop our timer
                    clearInterval(interval.current)

                }else{
                    //update timer
                    setTimerDays(days)
                    setTimerHours(hours)
                    setTimerMinutes(minutes)
                    setTimerSeconds(seconds)

                }

            },1000)
        }

        // componenDidMount
        useEffect(()=>{
            startTimer()
            return  ()=>{
                clearInterval(interval)
            }
        })

        return (  
            <div className="countdown">

                <div className="days">
                    <span>{timerDays}</span>
                    <p>Dias</p>
                </div>
                <div className="hours">
                    <span>{timerHours}</span>
                    <p>Horas</p>
                </div>
                <div className="minutes">
                    <span>{timerMinutes}</span>
                    <p>Minutos</p>
                </div>
                <div className="seconds">
                    <span>{timerSeconds}</span>
                    <p>Segundos</p>
                </div>
            </div>
        );
}
 
export default Countdown;