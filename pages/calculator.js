import { useState } from 'react';

import { Layout}  from '@/components';

// Define input and output labels with units
const inputLabels = {
    bodValue: 'BOD Value (g/L)',
    minParticleSize: 'Minimum Particle Size (um)',
    tankVolume: 'Tank Volume (m³)',
    avgFlowRate: 'Average Flow Rate (L/min)',
    avgPH: 'Average pH',
    avgTemperature: 'Average Temperature (°C)'
  };
  
  const outputLabels = {
    manufacturingCost: 'Cost of Manufacturing (Per Year, £)',
    maintenanceCost: 'Cost of Maintenance (Per Year, £)',
    energyGeneratedYear: 'Energy Generated (Per Year, MWh)',
    energyGeneratedLifetime: 'Energy Generated (Lifetime, MWh)',
    productLifetime: 'Product Lifetime (years)',
    savingsYear: 'Savings Per Year (£)',
    savingsLifetime: 'Savings Lifetime (£)',
    carbonOffset: 'Carbon Offset (kg CO₂)'
  };

export default function Calculator() {
  // State for user inputs and outputs
  const [inputs, setInputs] = useState({
    bodValue: '3',
    minParticleSize: '1000',
    tankVolume: '50',
    avgFlowRate: '10',
    avgPH: '5',
    avgTemperature: '30'
  });

  const [outputs, setOutputs] = useState({
    manufacturingCost: 0,
    maintenanceCost: 0,
    energyGeneratedYear: 0,
    energyGeneratedLifetime: 0,
    productLifetime: 0,
    savingsYear: 0,
    savingsLifetime: 0,
    carbonOffset: 0
  });

  // Handler for updating input state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  // Handle calculation and update outputs (implement your calculations here)
  const calculateOutputs = () => {
    // Parse inputs to numbers
    const bodValue = parseFloat(inputs.bodValue) || 0;
    const volume = parseFloat(inputs.tankVolume) || 0;
    const particleSize = parseFloat(inputs.minParticleSize) || 0;
    const flowRate = parseFloat(inputs.avgFlowRate) || 1;

    const glucoseConcentration = bodValue / 4;

    // Calculate SA_ratio based on particle size (linear decrease from 20 to 5)
    const SA_ratio = particleSize <= 500 
      ? 20 
      : particleSize >= 3000 
      ? 5 
      : 20 - ((particleSize - 500) * (15 / 2500));

    // Calculate surface area and energy generated based on volume and SA_ratio
    const E_rate = 0.00196; // W/cm^2
    const V = volume * 1e9; // Convert volume from m^3 to mm^3
    const SA = V * SA_ratio * 0.01; // Surface area in cm^2
    const P_9g = E_rate * SA; // Power in W
    const P_per_g = P_9g / 9; // Power per g/L in W/(g/L)

    const P = P_per_g * glucoseConcentration; // Power based on single glucose concentration
    const flowEffect = flowRate <= 1 
      ? 1 
      : flowRate >= 30 
      ? 0.5 
      : 1 - ((flowRate - 1) * (0.5 / 29));
    const E_year = P * 24 * 365 * 1e-6 * flowEffect;
    const energyGeneratedYear = Math.round(E_year);
    
    // // Set up glucose concentration range and energy generated per year
    // const Conc = Array.from({ length: 10 }, (_, i) => i + 1); // Simplified glucose range (1 to 10 g/L)
    // const P = Conc.map(c => P_per_g * c); // Power based on concentration
    // const E_year = P.map(p => p * 24 * 365 * 1e-6 * flowEffect); // Adjusted annual energy (MWh)
    // // Use the first entry in E_year as representative energy output for display
    // const energyGeneratedYear = Math.round(E_year[0]);

    

    setOutputs({
      manufacturingCost: 1000, // Placeholder
      maintenanceCost: 500,    // Placeholder
      energyGeneratedYear,
      energyGeneratedLifetime: Math.round(energyGeneratedYear * outputs.productLifetime),
      productLifetime: 15,
      savingsYear: Math.round(energyGeneratedYear * 0.075), // Placeholder for savings calculations
      savingsLifetime: Math.round(energyGeneratedYear * outputs.productLifetime * 0.075),
      carbonOffset: Math.round(energyGeneratedYear * 0.65) // Placeholder for carbon offset calculation
    });
  };

  return (
    <Layout>
        <div className="container mx-auto py-40 flex">
        {/* Left Section: User Inputs */}
        <div className="w-1/3 pl-2 pr-20 bg-gray-100">
            <h3 className="font-bold text-lg mb-5">User Inputs</h3>
            {Object.keys(inputs).map((inputName) => (
            <div key={inputName} className="mb-4">
                <label className="block mb-2">
                {/* {inputName.replace(/([A-Z])/g, ' $1')} */}
                {inputLabels[inputName]}
                </label>
                <input
                    type="text"
                    name={inputName}
                    value={inputs[inputName]}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    placeholder={`Enter ${inputName}`}
                />
            </div>
            ))}
        </div>

        {/* Middle Section: Button and 3D Viewer */}
        <div className="w-1/3 p-5 flex flex-col items-center justify-center bg-gray-200">
            <button 
            className="bg-blue-500 text-white p-4 rounded mb-5"
            onClick={calculateOutputs}
            >
            Clean Energy
            </button>
            {/* Node.js viewer placeholder (replace with actual viewer component) */}
            <div className="w-full h-64 bg-gray-300 flex items-center justify-center">
            <p>3D Part Viewer (Node.js)</p>
            </div>
        </div>

        {/* Right Section: TankArc Outputs */}
        <div className="w-1/3 pl-10 pr-10 bg-gray-100">
            <h3 className="font-bold text-lg mb-8">TankArc Outputs</h3>
            <ul>
            {Object.keys(outputs).map((outputName) => (
                <li key={outputName} className="mb-10 flex justify-between">
                    <span className="capitalize">
                        {/* {outputName.replace(/([A-Z])/g, ' $1')}: */}
                        {outputLabels[outputName]}:
                    </span>
                    <span>{outputs[outputName]}</span>
                </li>
            ))}
            </ul>
        </div>
        </div>
    </Layout>
  );
}
