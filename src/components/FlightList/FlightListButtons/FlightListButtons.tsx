import { FlightState } from 'constants/common';

import usePreviousState from 'hooks/usePreviousState';
import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';

import FlightListButton from '../FlightListButton/FlightListButton';

interface FlightListButtonsProps {
  state: FlightState;
  onEnterConsole: () => void;
  onCheckFlightStatus: () => void;
}

export default function FlightListButtons(props: FlightListButtonsProps) {

  const[entered, setEntered] = useState<boolean>(false);

  const { state, onEnterConsole, onCheckFlightStatus } = props;

  const enterConsoleButton = useRef(null);
  const checkFlightStatusButton = useRef(null);
  const lastState = usePreviousState(state);

  useEffect(() => {



    if (!enterConsoleButton.current || !checkFlightStatusButton.current || lastState === state)
      return;

    if (lastState === FlightState.EnterScreen) {
      gsap.to(enterConsoleButton.current, {
        opacity: 0,
        pointerEvents: 'none',
        duration: 0.3
      });
    }
    if (lastState === FlightState.Console) {
      setEntered(true);
      gsap.to(checkFlightStatusButton.current, {
        opacity: 0,
        pointerEvents: 'none',
        duration: 0.3,
      });

    }
    if (state === FlightState.Console) {
      gsap.to(checkFlightStatusButton.current, {
        opacity: 1,
        pointerEvents: 'auto',
        duration: 1.6,
        delay: 1.2,
      });
    }
  }, [state, lastState]);

  


  if(!entered)
  return (
    <div className="h-full w-full relative">
      <div ref={enterConsoleButton} className="cover flex justify-center items-center">
        {/* <FlightListButton onClick={onEnterConsole}>ENTER CONSOLE</FlightListButton> */}
      </div>
      <div
        ref={checkFlightStatusButton}
        className="cover flex justify-center items-center pointer-events-none opacity-0"
      >
        <FlightListButton onClick={onCheckFlightStatus}>ENTER J.A.R.V.I.S</FlightListButton>
      </div>
    </div>
  );
}
