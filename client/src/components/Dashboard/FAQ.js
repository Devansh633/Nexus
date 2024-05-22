import React from "react";
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";
import { AiFillCalendar } from "react-icons/ai";
import { MdSecurity} from "react-icons/md";
import {AiOutlineSolution} from "react-icons/ai";
import { IoMdCash } from "react-icons/io";
import { cardStyles } from "./ReusableStyles";
export default function FAQ() {
  const faqs = [
    {
      icon: <AiFillCalendar />,
      text: "How to manage energy efficiently",
    },
    {
      icon: <MdSecurity />,
      text: "New Security Features",
    },
    {
      icon: <AiOutlineSolution/>,
      text: "Intuitive Solutions",
    },
  ];
  return (
    <Section>
      <div className="title">
        <h2>Daily Feed</h2>
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
  ${cardStyles};
  .title {
    h2 {
      color: #fff;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
    }
  }
  .faqs {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
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
      &:nth-of-type(2) {
        border-top: 0.01rem solid #6c6e6e;
        border-bottom: 0.01rem solid #6c6e6e;
        padding: 0.8rem 0;
      }
    }
  }
  @media (min-width: 280px) and (max-width: 1080px) {
    svg {
      font-size: 2rem !important;
    }
  }
`;