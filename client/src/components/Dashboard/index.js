import React from 'react';
import styled from 'styled-components';
import FAQ from './FAQ';
import Analytics from './Analytics';
import Earnings from './Earning';


const Dashboard = () => {
  return (
    <>
        <Section>
            <div className="grid">
            <div className="row__one">
            <Analytics />
            <FAQ />
            </div>
            <div className="row__two">
            <Earnings />
            </div>
        </div>
        </Section>
    </>
  )
}

const Section = styled.section`
  margin-left: 2vw;
  padding: 5rem;
  height: 100%;
  .grid {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 1rem;
    margin-top: 2rem;
    .row__one {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      height: 50%;
      gap: 1rem;
    }
    .row__two {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 1rem;
      height: 50%;
    }
  }
  @media (min-width: 280px) and (max-width: 1080px) {
    margin-left: 0;
    .grid {
      .row__one,
      .row__two {
        grid-template-columns: 1fr;
      }
    }
  }
`;




export default Dashboard;