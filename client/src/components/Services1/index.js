import React from 'react';
import Icon1 from '../../images/Light.svg';
import Icon2 from '../../images/Security.svg';
import Icon3 from '../../images/Comfort.svg';

import {
    ServicesContainer,
    ServicesH1,
    ServicesH2,
    ServicesIcon,
    ServicesP,
    ServicesWrapper,
    ServicesCard} from './ServicesElements';

const Services1 = () => {
  return (
    <ServicesContainer id="services">
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}z />
                <ServicesH2>Lighting & Shades</ServicesH2>
                <ServicesP>
                    Control lights and shades throughout the house with the touch of a 
                    button ,with automated schedules or right from your mobile device.
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}z />
                <ServicesH2>Safety & Security</ServicesH2>
                <ServicesP>
                    Connect your locks , lights ,thermostats and cameras to 
                    provide complete peace of mind to you and your family.
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}z />
                <ServicesH2>Comfort & Convenience</ServicesH2>
                <ServicesP>
                    Simple voice commands to change the temperature,activate lighting 
                    scenes, lock the front door or arm the security system.
                </ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
        
  )
}

export default Services1;