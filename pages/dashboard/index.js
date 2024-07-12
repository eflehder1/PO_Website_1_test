import { useState } from 'react';
import Slider from '@mui/material/Slider';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

import styles from '../../styles/Tech4.module.css'; // Ensure the path is correct

import { Layout } from '@/components';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const calculateValues = (diameter, height) => {
  const E_rate = 0.00196; // W/cm^2
  const V_m = (height * Math.PI * diameter ** 2 / 4) / 2; // m^3
  const V = V_m * 1e9; // Convert m^3 to mm^3
  const SA_ratio = 20; // mm^2/mm^3
  const SA = V * SA_ratio * 0.01; // Convert mm^2 to cm^2
  const P_9g = E_rate * SA; // Power in Watts
  const P_per_g = P_9g / 9; // W/(g/L)

  let Conc = Array.from({ length: 11 }, (_, i) => parseFloat((i * (20 / 100)).toFixed(2)));
  let E_year = Conc.map(c => P_per_g * c * 24 * 365 * 1e-6); // Energy per year in MWh

  return { Conc, E_year };
};

function ProtectedContent({ diameter, setDiameter, height, setHeight, data }) {
  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Glucose Concentration (g/L)', // X-axis label
        },
      },
      y: {
        title: {
          display: true,
          text: 'Energy per year (MWh)', // Y-axis label
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: 'Glucose Concentration vs Annual Energy', // Chart title
      },
      legend: {
        display: false, // Optionally hide the legend if not required
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className={styles.BigDiv}>
      <div className={styles.tech4SliderContainer}>
        <p>Diameter (m): {diameter}</p>
        <Slider value={diameter} onChange={(e, newVal) => setDiameter(newVal)} min={0.1} max={10.0} step={0.01} />
        <p>Height (m): {height}</p>
        <Slider value={height} onChange={(e, newVal) => setHeight(newVal)} min={0.1} max={10.0} step={0.01} />
      </div>
      <div className={styles.tech4ChartContainer}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

const Dashboard = () => {
  const [diameter, setDiameter] = useState(3.57);
  const [height, setHeight] = useState(5.0);
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  const { Conc, E_year } = calculateValues(diameter, height);
  const data = {
    labels: Conc,
    datasets: [
      {
        label: 'Energy per year (MWh)',
        data: E_year,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
      
    ],
  };

  const verifyPassword = () => {
    const correctPassword = 'POCC2024!'; // Replace with your actual password
    
    if (password === correctPassword) {
      setAuthenticated(true);
    } else {
      alert('Incorrect Password');
    }
  };

  if (!authenticated) {
    return (
      <Layout>
        <div className={styles.tech4App2}>
          <input
            type="password"
            placeholder="Enter Password"
            className={styles.tech4Input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className={styles.tech4Button} onClick={verifyPassword}>
            Submit
          </button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className={styles.tech4App2}>
        <ProtectedContent
          diameter={diameter}
          setDiameter={setDiameter}
          height={height}
          setHeight={setHeight}
          data={data}
        />
      </div>
    </Layout>
  );
};

export default Dashboard;
