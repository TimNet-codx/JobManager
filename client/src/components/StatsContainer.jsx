import React from "react";
import { FaSuitcaseRolling, FaCalendarCheck, FaBug, FaWalking } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/StatsContainer';
import StatItem from "./StatItem";

const StatsContainer = ({defaultStats}) =>{
   const stats = [
        {
            title: 'pending application',
            count: defaultStats?.pending || 0,
            icon: <FaSuitcaseRolling/>,
            color: '#f59e0b',
            bcg: '#fef3c7',
        },
        {
            title: 'interviews scheduled',
            count: defaultStats?.interview || 0,
            icon: <FaCalendarCheck />,
            color: '#647acb',
            bcg: '#e0e8f9',
          },
          {
            title: 'jobs declined',
            count: defaultStats?.declined || 0,
            icon: <FaBug />,
            color: '#d66a6a',
            bcg: '#ffeeee',
          },
          {
            title: 'current working',
            count: defaultStats?.working || 0,
            icon: <FaWalking />,
            color: '#6ad697',
            bcg: '#ffeeee',
          },
   ];
   return (
    <Wrapper>
        {stats.map((item) => {
            return <StatItem key={item.title} {...item}/>;
        })

        }
    </Wrapper>
   )
};
export default StatsContainer;