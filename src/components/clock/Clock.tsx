import React from "react";
import { useEffect, useState } from "react";
import { getCoords } from "./utils/getCoords";
import './Clock.css'

const SIZE = 425; // size of the clock

function Clock({ showSeconds = false }: { showSeconds?: boolean }) {
    const [seconds, setSeconds] = useState('0deg')
    const [minutes, setMinutes] = useState('0deg')
    const [hour, setHour] = useState('0deg')

    // effect for update the clock
    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds(((new Date().getSeconds() * 6) - 180) + 'deg');
            setMinutes(((new Date().getMinutes() * 6) - 180) + 'deg');
            setHour(((new Date().getHours() * 30) - 180) + 'deg');
        }, 1000); // update every second

        return () => clearInterval(intervalId);
    }, [])

    return (
        <>
            <div className='container' style={{ height: SIZE + 'px', width: SIZE + 'px' }}>
                <div className='dot'></div>
                <div className='stylus-seconds' style={{ rotate: seconds, height: '180px' }} />
                <div className='stylus-minutes' style={{ rotate: minutes, height: '120px' }} />
                <div className='stylus-hour' style={{ rotate: hour, height: '100px' }} />
                <CircleWithNumbers></CircleWithNumbers>
                <CircleSeconds showSeconds={showSeconds}></CircleSeconds>
            </div>

        </>
    )
}

const CircleWithNumbers = () => {
    // Number of numbers you want to place
    const numeroDeNumeros = 12;

    // Array to store numbers with coordinates
    const numerosConCoordenadas = getCoords(SIZE, true, true, numeroDeNumeros)

    return (
        <div className="container-numbers" >
            {numerosConCoordenadas.map((numeroConCoordenadas, index) => (
                <div
                    key={index}
                    className="number"
                    style={{ left: `${numeroConCoordenadas.x}px`, top: `${numeroConCoordenadas.y}px` }}
                >
                    {numeroConCoordenadas.numero}
                </div>
            ))}
        </div>
    );
};



const CircleSeconds = ({ showSeconds = false }: { showSeconds?: boolean }) => {
    // Number of numbers you want to place
    const numeroDeNumeros = 60;

    // Array to store numbers with coordinates
    const numerosConCoordenadas = getCoords(SIZE, showSeconds, false, numeroDeNumeros)

    return (
        <div className="container-seconds" >
            {numerosConCoordenadas.map((numeroConCoordenadas, index) => (
                <div
                    key={index}
                    className="number-seconds"
                    style={{ left: `${numeroConCoordenadas.x}px`, top: `${numeroConCoordenadas.y}px` }}
                >
                    {numeroConCoordenadas.numero}
                </div>
            ))}
        </div>
    );
};

export default Clock