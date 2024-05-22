import React from "react";
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";
import { IoMdContact } from "react-icons/io";
import { cardStyles } from "./Dashboard/ReusableStyles";
export default function AdminMenu() {
  const faqs = [
    {
      icon: <IoMdContact />,
      text: "Server gets busy frequently",
    },
    {
      icon: <IoMdContact />,
      text: "Sensors not working",
    },
    {
      icon: <IoMdContact />,
      text: "Website not updating",
    },
    {
      icon: <IoMdContact />,
      text: "Insufficient features and functionalit",
    },
    {
      icon: <IoMdContact />,
      text: "I want a maintainence check",
    },
    {
      icon: <IoMdContact />,
      text: "Still Waiting for Installation",
    },
    {
      icon: <IoMdContact />,
      text: "Sub systems not integrating",
    },
    {
      icon: <IoMdContact />,
      text: "Nerwork connectivity issues",
    },
    {
      icon: <IoMdContact />,
      text: "Lengthy delays during the construction of your project",
    },
  ];
  return (
    <Section>
      <div className="title">
        <h2>Complaints</h2>
      </div>
      <div className="faqs">
        {faqs.map((faq) => {
          return (
            <div className="faq">
              <div className="info">
                {faq.icon}
                <h4>{faq.text}</h4>
              </div>
              <IoIosArrowForward />
            </div>
          );
        })}
      </div>
    </Section>
  );
}
const Section = styled.section`
    margin: 100px 20px 20px 50px;
  ${cardStyles};
  .title {
    h2 {
      color: #fff;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
      padding: 1rem;
      border-bottom: 0.01rem solid #6c6e6e;
    }
  }
  .faqs {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 2rem;
    .faq {
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      .info {
        display: flex;
        gap: 1rem;
        align-items: center;
      }
      svg {
        font-size: 1.4rem;
      }
      /*&:nth-of-type(6) {
        border-top: 0.01rem solid #6c6e6e;
        border-bottom: 0.01rem solid #6c6e6e;
        padding: 0.8rem 0;
      }*/
    }
  }
  @media (min-width: 280px) and (max-width: 1080px) {
    svg {
      font-size: 2rem !important;
    }
  }
`;