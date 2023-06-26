import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import { Calendar } from 'primereact/calendar';
import { useState } from 'react';
import moment from 'moment';

export default function Home() {
  const [firstDate, setFirstDate] = useState('');
  const [secondDate, setSecondDate] = useState('');
  const [calculatedDate, setCalculatedDate] = useState(null);

  function calculate() {
    const a = moment(firstDate);
    const b = moment(secondDate);
    var years = a.diff(b, 'year');
    b.add(years, 'years');

    const noOfDaysInb = b.daysInMonth();
    const noOfDaysIna = a.daysInMonth();
    let months = 0;
    if (noOfDaysInb > noOfDaysIna) {
      months = b.diff(a, 'months');
      a.add(months, 'months');
    } else {
      months = a.diff(b, 'months');
      b.add(months, 'months');
    }
    var days = a.diff(b, 'days');

    var totalYears = Math.abs(years);
    var totalMonths = Math.abs(months);
    var totalDays = Math.abs(days);

    if (totalMonths == 0 && totalDays == 0 && totalYears > 0) {
      const temp = `Happy Birthday! 🎉 You're ${totalYears} years old!`;
      setCalculatedDate(temp);
    }

    const temp = `${totalYears} Years ${totalMonths} Months ${totalDays} Days`;
    setCalculatedDate(temp);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Age Calculator</title>
      </Head>
      <div className="h-screen w-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="h-screen flex items-center justify-center">
          <div className="bg-white    p-12 rounded shadow-lg">
            <div className="flex justify-between   items-center">
              <span className="p-float-label mr-2">
                <Calendar
                  inputId="first_date"
                  value={firstDate}
                  onChange={(e) => setFirstDate(e.value)}
                  showIcon
                />
                <label htmlFor="first_date">First Date</label>
              </span>
              <br />
              <span className="p-float-label mr-2">
                <Calendar
                  inputId="second_date"
                  value={secondDate}
                  onChange={(e) => setSecondDate(e.value)}
                  showIcon
                />
                <label htmlFor="second_date">Second Date</label>
              </span>
              <Button
                onClick={calculate}
                severity="success"
                label="Calculate"
              />
            </div>
            {calculatedDate ? (
              <div className="text-center mt-6">
                <span>Calculated : </span>
                <span>{calculatedDate}</span>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
