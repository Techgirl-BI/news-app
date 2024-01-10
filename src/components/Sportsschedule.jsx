import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import LeagueTable from './LeagueTable';

const Sportsschedule = () => {
    const divStyle = {
        backgroundImage: "url('src/assets/soccerStadium.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '24rem', // Adjust the height as needed
      };
    const [date, setDate] = useState(new Date());

    const onChange = (newDate) => {
      setDate(newDate);
    };
    const teamsData = [
        { id: 1, name: 'Team A', played: 10, wins: 6, draws: 2, losses: 2, points: 20 },
        { id: 2, name: 'Team B', played: 10, wins: 5, draws: 3, losses: 2, points: 18 },
        // Add more teams as needed
      ];
    return (
        <div style={divStyle} className='flex px-20 py-10 justify-between'>
        <Calendar
          onChange={onChange}
          value={date}
          className="flex-1 bg-white rounded-lg shadow-md mr-4"
        />
        <div className="flex-1 bg-white rounded-lg p-4 shadow-md mr-4">
        <LeagueTable data={teamsData} />
        </div>
        <img src="src/assets/liverpool.jpeg" className='rounded-lg'/>
      </div>
    )
}

export default Sportsschedule