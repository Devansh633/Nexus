import React,{useState} from "react";
import styled from "styled-components";
import { MdBatterySaver } from "react-icons/md";
import { IoStatsChart } from "react-icons/io5";
import { GiTheaterCurtains } from "react-icons/gi";
import { MdSensors } from "react-icons/md";
import { MdSecurity } from "react-icons/md";
import { cardStyles } from "./ReusableStyles";
import ToggleButton from "./ToggleButton";

export default function Analytics() {

  const [value1, setValue1] = useState(50);

  const handleClick1 = () => {
    setValue1(!value1);
  };

  const [value2, setValue2] = useState(50);

  const handleClick2 = () => {
    setValue2(!value2);
  };

  const [value3, setValue3] = useState(50);

  const handleClick3 = () => {
    setValue3(!value3);
  };

  const [value4, setValue4] = useState(50);

  const handleClick4 = () => {
    setValue4(!value4);
  };

  return (
    <Section>
      <div className="analytic">
        <div className="logo">
          <GiTheaterCurtains />
        </div>
        <div className="content">
          <h4>Curtain Automation</h4>
          <ToggleButton value={value1} handleClick={handleClick1} />
        </div>
      </div>
      <div className="analytic">
        <div className="logo">
          <MdSensors />
        </div>
        <div className="content">
        <h4>Sensors</h4>
          <ToggleButton value={value2} handleClick={handleClick2} />
        </div>
      </div>
      <div className="analytic">
        <div className="logo">
          <MdSecurity />
        </div>
        <div className="content">
          <h4>Security</h4>
          <ToggleButton value={value3} handleClick={handleClick3} />
        </div>
      </div>
      <div className="analytic">
        <div className="logo">
          <MdBatterySaver />
        </div>
        <div className="content">
        <h4>Energy Saver Mode</h4>
        <ToggleButton value={value4} handleClick={handleClick4} />
        </div>
      </div>
    </Section>
  );
}
const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  .analytic {
    ${cardStyles};
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    transition: 0.5s ease-in-out;
    h4 {
      padding: 0.5rem;
    }
    .logo {
      background-color: black;
      border-radius: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1.5rem;
      svg {
        font-size: 1.5rem;
      }
    }
  }
  @media (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  }
`;