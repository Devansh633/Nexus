import React from "react";
import styled from "styled-components";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import { cardStyles } from "./ReusableStyles";
const data = [
  { units: 4.0 },
  {
    units: 3.8,
  },
  {
    units: 3.7,
  },
  {
    units: 3.8,
  },
  {
    units: 3.6,
  },
  {
    units: 3.4,
  },
  {
    units: 3.0,
  },
  {
    units: 3.1,
  },
  {
    units: 5.0,
  },
  {
    units: 5.2,
  },
  {
    units: 5.3,
  },
  {
    units: 6.0,
  },
  {
    units: 5.8,
  },
  {
    units: 5.5,
  },
  {
    units: 5.0,
  },
  {
    units: 1.4,
  },
  {
    units: 1.6,
  },
  {
    units: 1.3,
  },
  {
    units: 1.7,
  },
  {
    units: 2.1,
  },
  {
    units: 5.7,
  },
  {
    units: 6.2,
  },
  {
    units: 5.7,
  },
  {
    units: 6.0,
  },
  {
    units: 5.1,
  }
];
export default function Earnings() {
  return (
    <Section>
      <div className="top">
        <div className="info">
          <h5>Daily Unit Consumption</h5>
          <h1>120.8</h1>

        </div>
      </div>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
          >
            <Tooltip cursor={false} />
            <Area
              animationBegin={800}
              animationDuration={2000}
              type="monotone"
              dataKey="units"
              stroke="#01bf71"
              fill="#5ACA90"
              strokeWidth={4}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Section>
  );
}
const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 20rem;
  ${cardStyles}
  padding: 2rem 0 0 0;
  .top {
    .info {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.2rem;
      h1 {
        font-size: 2rem;
      }
      .growth {
        background-color: #d7e41e1d;
        padding: 0.5rem;
        border-radius: 1rem;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #ffc107;
          span {
            color: black;
          }
        }
        span {
          color: #ffc107;
        }
      }
    }
  }
  .chart {
    height: 70%;
    .recharts-default-tooltip {
      background-color: black !important;
      border-color: black !important;
    }
  }
  @media (min-width: 280px) and (max-width: 1080px) {
  }
`;