// // import React, { useState } from "react";
// // import axios from "axios";

// // function New() {
// //   const [inputs, setInputs] = useState({
// //     temperature: 140,
// //     caustic: 180,
// //     flow_rate: 1,
// //     bauxite_feed: 100,
// //     moisture: 5,
// //   });

// //   const [result, setResult] = useState(null);
// //   const [loading, setLoading] = useState(false);
// //   const [history, setHistory] = useState([]); // For feedback display

// //   // Handle input change
// //   const handleChange = (e) => {
// //     setInputs({
// //       ...inputs,
// //       [e.target.name]: parseFloat(e.target.value),
// //     });
// //   };

// //   // Send data to Python backend
// //   const runSimulation = async () => {
// //     setLoading(true);
// //     try {
// //       const res = await axios.post("http://127.0.0.1:8000/simulate/", inputs);
// //       setResult(res.data);

// //       // Store feedback (recursive numeric feedback simulation)
// //       const newEntry = {
// //         ...inputs,
// //         alumina_output: res.data.alumina_output,
// //         red_mud: res.data.red_mud,
// //         reward: res.data.reward,
// //       };
// //       setHistory((prev) => [...prev, newEntry]);
// //     } catch (error) {
// //       console.error("Error:", error);
// //       alert("Backend not connected. Start FastAPI first!");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div style={styles.container}>
// //       <h1 style={styles.header}>⚙️ Aluminum Extraction Process Simulation</h1>

// //       <div style={styles.inputContainer}>
// //         {Object.keys(inputs).map((key) => (
// //           <div key={key} style={styles.inputRow}>
// //             <label style={styles.label}>{key.replace("_", " ")}:</label>
// //             <input
// //               type="number"
// //               name={key}
// //               value={inputs[key]}
// //               onChange={handleChange}
// //               style={styles.input}
// //             />
// //           </div>
// //         ))}
// //       </div>

// //       <button onClick={runSimulation} style={styles.button} disabled={loading}>
// //         {loading ? "Running..." : "Run Simulation"}
// //       </button>

// //       {result && (
// //         <div style={styles.resultBox}>
// //           <h3>📊 Simulation Result</h3>
// //           <p><strong>Alumina Output:</strong> {result.alumina_output} kg</p>
// //           <p><strong>Red Mud:</strong> {result.red_mud} kg</p>
// //           <p><strong>Reward (Yield–Waste):</strong> {result.reward}</p>
// //         </div>
// //       )}

// //       {history.length > 0 && (
// //         <div style={styles.historyBox}>
// //           <h3>🔁 Feedback History</h3>
// //           <table style={styles.table}>
// //             <thead>
// //               <tr>
// //                 <th>Temp (°C)</th>
// //                 <th>Caustic</th>
// //                 <th>Flow</th>
// //                 <th>Bauxite</th>
// //                 <th>Moisture</th>
// //                 <th>Alumina</th>
// //                 <th>Red Mud</th>
// //                 <th>Reward</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {history.map((row, i) => (
// //                 <tr key={i}>
// //                   <td>{row.temperature}</td>
// //                   <td>{row.caustic}</td>
// //                   <td>{row.flow_rate}</td>
// //                   <td>{row.bauxite_feed}</td>
// //                   <td>{row.moisture}</td>
// //                   <td>{row.alumina_output}</td>
// //                   <td>{row.red_mud}</td>
// //                   <td>{row.reward}</td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }


// // const styles = {
// //   container: {
// //     fontFamily: "Arial, sans-serif",
// //     padding: "40px",
// //     maxWidth: "900px",
// //     margin: "auto",
// //     backgroundColor: "#f9f9f9",
// //     borderRadius: "10px",
// //     boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
// //   },
// //   header: {
// //     textAlign: "center",
// //     marginBottom: "20px",
// //   },
// //   inputContainer: {
// //     display: "grid",
// //     gridTemplateColumns: "1fr 1fr",
// //     gap: "15px",
// //     marginBottom: "20px",
// //   },
// //   inputRow: {
// //     display: "flex",
// //     justifyContent: "space-between",
// //     alignItems: "center",
// //   },
// //   label: {
// //     fontWeight: "bold",
// //   },
// //   input: {
// //     padding: "5px",
// //     width: "60%",
// //     borderRadius: "5px",
// //     border: "1px solid #ccc",
// //   },
// //   button: {
// //     backgroundColor: "green",
// //     color: "white",
// //     border: "none",
// //     padding: "10px 20px",
// //     borderRadius: "5px",
// //     cursor: "pointer",
// //     fontSize: "16px",
// //     marginTop: "10px",
// //   },
// //   resultBox: {
// //     marginTop: "30px",
// //     padding: "15px",
// //     backgroundColor: "#e8f5e9",
// //     borderRadius: "10px",
// //   },
// //   historyBox: {
// //     marginTop: "30px",
// //     backgroundColor: "#fff3e0",
// //     padding: "15px",
// //     borderRadius: "10px",
// //   },
// //   table: {
// //     width: "100%",
// //     borderCollapse: "collapse",
// //   },
// // };



// // export default New


// // import React, { useState } from "react";

// // function New() {
// //   const [bauxite, setBauxite] = useState("");
// //   const [soda, setSoda] = useState("");
// //   const [temperature, setTemperature] = useState("");
// //   const [result, setResult] = useState(null);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     const response = await fetch("http://127.0.0.1:8000/api/feedback/", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify({
// //         bauxite: parseFloat(bauxite),
// //         soda: parseFloat(soda),
// //         temperature: parseFloat(temperature),
// //       }),
// //     });

// //     const data = await response.json();
// //     setResult(data);
// //   };

// //   return (
// //     <div style={styles.container}>
// //       <h1>Aluminum Extraction Feedback System</h1>
// //       <form onSubmit={handleSubmit} style={styles.form}>
// //         <label>Bauxite (kg):</label>
// //         <input
// //           type="number"
// //           value={bauxite}
// //           onChange={(e) => setBauxite(e.target.value)}
// //         />

// //         <label>Caustic Soda (kg):</label>
// //         <input
// //           type="number"
// //           value={soda}
// //           onChange={(e) => setSoda(e.target.value)}
// //         />

// //         <label>Temperature (°C):</label>
// //         <input
// //           type="number"
// //           value={temperature}
// //           onChange={(e) => setTemperature(e.target.value)}
// //         />

// //         <button type="submit">Run Process</button>
// //       </form>

// //       {result && (
// //         <div style={styles.result}>
// //           <h3>Process Results:</h3>
// //           <p>Aluminum Yield: {result.aluminum_yield} kg</p>
// //           <p>Waste (Red Mud): {result.waste} kg</p>
// //           <p><strong>Feedback:</strong> {result.feedback}</p>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // const styles = {
// //   container: {
// //     padding: "30px",
// //     textAlign: "center",
// //     fontFamily: "Arial",
// //     backgroundColor: "#f5f7fa",
// //     minHeight: "100vh",
// //   },
// //   form: {
// //     display: "flex",
// //     flexDirection: "column",
// //     maxWidth: "300px",
// //     margin: "0 auto",
// //     gap: "10px",
// //   },
// //   result: {
// //     backgroundColor: "#fff",
// //     padding: "20px",
// //     marginTop: "20px",
// //     borderRadius: "10px",
// //     boxShadow: "0 0 5px rgba(0,0,0,0.1)",
// //   },
// // };

// // export default New;


// import React from "react";

// function About() {
//   return (
//     <div style={styles.container}>
//       <h1 style={styles.heading}>About the Project</h1>

//       <section style={styles.section}>
//         <h2>3.3 Existing System</h2>
//         <p>
//           The current system for aluminum extraction and by-product management is largely
//           fragmented, relying on manual processes with minimal coordination among
//           stakeholders. Agents involved in processing raw materials often use outdated
//           methods to predict material outputs, which can result in inefficiencies and
//           inaccurate assessments. Furthermore, there is no centralized platform to
//           streamline the registration and approval process for agents and scrap
//           management teams, causing delays in communication and workflow execution.
//         </p>
//         <p>
//           By-product management, including the handling of red mud and manganese alloys,
//           is poorly optimized, leading to the underutilization of potentially valuable
//           resources. The absence of automation and advanced analytical tools further
//           exacerbates these challenges, as there is no integrated system to enhance the
//           precision and efficiency of aluminum extraction and processing. Overall, the
//           lack of a unified and intelligent solution hampers the effectiveness of the
//           existing system.
//         </p>
//       </section>

//       <section style={styles.section}>
//         <h3>3.3.1 Disadvantages</h3>
//         <ul>
//           <li>Excessive Reinforcement: Overloads can compromise effectiveness.</li>
//           <li>Data-Intensive: Requires large amounts of data and computation.</li>
//           <li>Maintenance-Heavy: High maintenance adds operational complexity.</li>
//           <li>Industrial Focus: Limited adaptability for small-scale use.</li>
//           <li>Time-Consuming: The process duration remains long despite efficiency.</li>
//         </ul>
//       </section>

//       <section style={styles.section}>
//         <h2>3.4 Proposed System</h2>
//         <p>
//           The proposed system is a powerful, user-focused platform aimed at optimizing
//           the aluminum extraction and processing workflow while ensuring effective
//           resource utilization. With secure, role-based access controls, the platform
//           restricts participation to authorized users, safeguarding the system's
//           integrity.
//         </p>
//         <p>
//           To enhance efficiency, the platform integrates advanced predictive analysis to
//           estimate aluminum yield prior to processing, enabling precise execution of the
//           Bayer process for aluminum oxide production. The system also incorporates
//           by-product management features, utilizing intelligent algorithms to identify
//           potential applications for residues such as red mud and manganese, promoting
//           sustainability and minimizing waste.
//         </p>
//         <p>
//           Administrators are equipped with tools to oversee system operations, regulate
//           user access, and coordinate communications across all processing stages. This
//           results in a streamlined, environmentally conscious approach to aluminum
//           production, fostering higher efficiency and better resource management.
//         </p>
//       </section>

//       <section style={styles.section}>
//         <h3>3.4.1 Advantages</h3>
//         <ul>
//           <li>Ease of Implementation: Simple deployment and training.</li>
//           <li>Minimal Data Requirements: Needs limited data preparation.</li>
//           <li>Versatility: Handles multiple outputs or use cases.</li>
//           <li>Clarity: Easy to understand and interpret.</li>
//           <li>Efficiency: Fast, smooth, and user-friendly operation.</li>
//         </ul>
//       </section>

//       <section style={styles.section}>
//         <h2>4. Bottom Line and Future Enhancement</h2>
//         <h3>Bottom Line</h3>
//         <p>
//           The proposed system effectively overcomes the challenges associated with
//           resource recovery and optimization in aluminum extraction by delivering a
//           secure, streamlined, and eco-conscious workflow. By leveraging predictive
//           analytics, role-specific access controls, and advanced by-product management
//           strategies, the system enhances aluminum yield while fostering sustainability.
//         </p>
//         <p>
//           This approach minimizes waste and maximizes the potential of residual
//           materials, ensuring that the extraction and processing methods are both
//           cost-effective and environmentally friendly.
//         </p>

//         <h3>Future Work</h3>
//         <p>
//           Future developments will aim to extend the system’s functionality by
//           integrating more sophisticated machine learning models to improve aluminum
//           yield predictions and identify additional applications for by-products.
//           Efforts will also focus on recovering other valuable materials from processing
//           residues and adopting renewable energy solutions within production stages to
//           enhance sustainability and efficiency.
//         </p>
//       </section>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     padding: "40px",
//     backgroundColor: "#f9fafc",
//     fontFamily: "Segoe UI, Arial, sans-serif",
//     lineHeight: 1.7,
//     color: "#333",
//   },
//   heading: {
//     textAlign: "center",
//     color: "#1a3e72",
//     marginBottom: "30px",
//   },
//   section: {
//     backgroundColor: "#fff",
//     padding: "20px",
//     borderRadius: "10px",
//     boxShadow: "0 0 10px rgba(0,0,0,0.1)",
//     marginBottom: "30px",
//   },
// };

// export default About;



// import React, { useState } from "react";
// import axios from "axios";

// function New() {
//   const [inputs, setInputs] = useState({
//     temperature: 140,
//     caustic: 180,
//     flow_rate: 1,
//     bauxite_feed: 100,
//     moisture: 5,
//   });

//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [history, setHistory] = useState([]); // For feedback display

//   // Handle input change
//   const handleChange = (e) => {
//     setInputs({
//       ...inputs,
//       [e.target.name]: parseFloat(e.target.value),
//     });
//   };

//   // Send data to Python backend
//   const runSimulation = async () => {
//     setLoading(true);
//     try {
//       const res = await axios.post("http://127.0.0.1:8000/simulate/", inputs);
//       setResult(res.data);

//       // Store feedback (recursive numeric feedback simulation)
//       const newEntry = {
//         ...inputs,
//         alumina_output: res.data.alumina_output,
//         red_mud: res.data.red_mud,
//         reward: res.data.reward,
//       };
//       setHistory((prev) => [...prev, newEntry]);
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Backend not connected. Start FastAPI first!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.header}>⚙️ Aluminum Extraction Process Simulation</h1>

//       <div style={styles.inputContainer}>
//         {Object.keys(inputs).map((key) => (
//           <div key={key} style={styles.inputRow}>
//             <label style={styles.label}>{key.replace("_", " ")}:</label>
//             <input
//               type="number"
//               name={key}
//               value={inputs[key]}
//               onChange={handleChange}
//               style={styles.input}
//             />
//           </div>
//         ))}
//       </div>

//       <button onClick={runSimulation} style={styles.button} disabled={loading}>
//         {loading ? "Running..." : "Run Simulation"}
//       </button>

//       {result && (
//         <div style={styles.resultBox}>
//           <h3>📊 Simulation Result</h3>
//           <p><strong>Alumina Output:</strong> {result.alumina_output} kg</p>
//           <p><strong>Red Mud:</strong> {result.red_mud} kg</p>
//           <p><strong>Reward (Yield–Waste):</strong> {result.reward}</p>
//         </div>
//       )}

//       {history.length > 0 && (
//         <div style={styles.historyBox}>
//           <h3>🔁 Feedback History</h3>
//           <table style={styles.table}>
//             <thead>
//               <tr>
//                 <th>Temp (°C)</th>
//                 <th>Caustic</th>
//                 <th>Flow</th>
//                 <th>Bauxite</th>
//                 <th>Moisture</th>
//                 <th>Alumina</th>
//                 <th>Red Mud</th>
//                 <th>Reward</th>
//               </tr>
//             </thead>
//             <tbody>
//               {history.map((row, i) => (
//                 <tr key={i}>
//                   <td>{row.temperature}</td>
//                   <td>{row.caustic}</td>
//                   <td>{row.flow_rate}</td>
//                   <td>{row.bauxite_feed}</td>
//                   <td>{row.moisture}</td>
//                   <td>{row.alumina_output}</td>
//                   <td>{row.red_mud}</td>
//                   <td>{row.reward}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }


// const styles = {
//   container: {
//     fontFamily: "Arial, sans-serif",
//     padding: "40px",
//     maxWidth: "900px",
//     margin: "auto",
//     backgroundColor: "#f9f9f9",
//     borderRadius: "10px",
//     boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
//   },
//   header: {
//     textAlign: "center",
//     marginBottom: "20px",
//   },
//   inputContainer: {
//     display: "grid",
//     gridTemplateColumns: "1fr 1fr",
//     gap: "15px",
//     marginBottom: "20px",
//   },
//   inputRow: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   label: {
//     fontWeight: "bold",
//   },
//   input: {
//     padding: "5px",
//     width: "60%",
//     borderRadius: "5px",
//     border: "1px solid #ccc",
//   },
//   button: {
//     backgroundColor: "green",
//     color: "white",
//     border: "none",
//     padding: "10px 20px",
//     borderRadius: "5px",
//     cursor: "pointer",
//     fontSize: "16px",
//     marginTop: "10px",
//   },
//   resultBox: {
//     marginTop: "30px",
//     padding: "15px",
//     backgroundColor: "#e8f5e9",
//     borderRadius: "10px",
//   },
//   historyBox: {
//     marginTop: "30px",
//     backgroundColor: "#fff3e0",
//     padding: "15px",
//     borderRadius: "10px",
//   },
//   table: {
//     width: "100%",
//     borderCollapse: "collapse",
//   },
// };



// export default New


// import React, { useState } from "react";

// function New() {
//   const [bauxite, setBauxite] = useState("");
//   const [soda, setSoda] = useState("");
//   const [temperature, setTemperature] = useState("");
//   const [result, setResult] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const response = await fetch("http://127.0.0.1:8000/api/feedback/", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         bauxite: parseFloat(bauxite),
//         soda: parseFloat(soda),
//         temperature: parseFloat(temperature),
//       }),
//     });

//     const data = await response.json();
//     setResult(data);
//   };

//   return (
//     <div style={styles.container}>
//       <h1>Aluminum Extraction Feedback System</h1>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <label>Bauxite (kg):</label>
//         <input
//           type="number"
//           value={bauxite}
//           onChange={(e) => setBauxite(e.target.value)}
//         />

//         <label>Caustic Soda (kg):</label>
//         <input
//           type="number"
//           value={soda}
//           onChange={(e) => setSoda(e.target.value)}
//         />

//         <label>Temperature (°C):</label>
//         <input
//           type="number"
//           value={temperature}
//           onChange={(e) => setTemperature(e.target.value)}
//         />

//         <button type="submit">Run Process</button>
//       </form>

//       {result && (
//         <div style={styles.result}>
//           <h3>Process Results:</h3>
//           <p>Aluminum Yield: {result.aluminum_yield} kg</p>
//           <p>Waste (Red Mud): {result.waste} kg</p>
//           <p><strong>Feedback:</strong> {result.feedback}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// const styles = {
//   container: {
//     padding: "30px",
//     textAlign: "center",
//     fontFamily: "Arial",
//     backgroundColor: "#f5f7fa",
//     minHeight: "100vh",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     maxWidth: "300px",
//     margin: "0 auto",
//     gap: "10px",
//   },
//   result: {
//     backgroundColor: "#fff",
//     padding: "20px",
//     marginTop: "20px",
//     borderRadius: "10px",
//     boxShadow: "0 0 5px rgba(0,0,0,0.1)",
//   },
// };

// export default New;


// import React from "react";

// function About() {
//   return (
//     <div style={styles.container}>
//       <h1 style={styles.heading}>About the Project</h1>

//       <section style={styles.section}>
//         <h2>3.3 Existing System</h2>
//         <p>
//           The current system for aluminum extraction and by-product management is largely
//           fragmented, relying on manual processes with minimal coordination among
//           stakeholders. Agents involved in processing raw materials often use outdated
//           methods to predict material outputs, which can result in inefficiencies and
//           inaccurate assessments. Furthermore, there is no centralized platform to
//           streamline the registration and approval process for agents and scrap
//           management teams, causing delays in communication and workflow execution.
//         </p>
//         <p>
//           By-product management, including the handling of red mud and manganese alloys,
//           is poorly optimized, leading to the underutilization of potentially valuable
//           resources. The absence of automation and advanced analytical tools further
//           exacerbates these challenges, as there is no integrated system to enhance the
//           precision and efficiency of aluminum extraction and processing. Overall, the
//           lack of a unified and intelligent solution hampers the effectiveness of the
//           existing system.
//         </p>
//       </section>

//       <section style={styles.section}>
//         <h3>3.3.1 Disadvantages</h3>
//         <ul>
//           <li>Excessive Reinforcement: Overloads can compromise effectiveness.</li>
//           <li>Data-Intensive: Requires large amounts of data and computation.</li>
//           <li>Maintenance-Heavy: High maintenance adds operational complexity.</li>
//           <li>Industrial Focus: Limited adaptability for small-scale use.</li>
//           <li>Time-Consuming: The process duration remains long despite efficiency.</li>
//         </ul>
//       </section>

//       <section style={styles.section}>
//         <h2>3.4 Proposed System</h2>
//         <p>
//           The proposed system is a powerful, user-focused platform aimed at optimizing
//           the aluminum extraction and processing workflow while ensuring effective
//           resource utilization. With secure, role-based access controls, the platform
//           restricts participation to authorized users, safeguarding the system's
//           integrity.
//         </p>
//         <p>
//           To enhance efficiency, the platform integrates advanced predictive analysis to
//           estimate aluminum yield prior to processing, enabling precise execution of the
//           Bayer process for aluminum oxide production. The system also incorporates
//           by-product management features, utilizing intelligent algorithms to identify
//           potential applications for residues such as red mud and manganese, promoting
//           sustainability and minimizing waste.
//         </p>
//         <p>
//           Administrators are equipped with tools to oversee system operations, regulate
//           user access, and coordinate communications across all processing stages. This
//           results in a streamlined, environmentally conscious approach to aluminum
//           production, fostering higher efficiency and better resource management.
//         </p>
//       </section>

//       <section style={styles.section}>
//         <h3>3.4.1 Advantages</h3>
//         <ul>
//           <li>Ease of Implementation: Simple deployment and training.</li>
//           <li>Minimal Data Requirements: Needs limited data preparation.</li>
//           <li>Versatility: Handles multiple outputs or use cases.</li>
//           <li>Clarity: Easy to understand and interpret.</li>
//           <li>Efficiency: Fast, smooth, and user-friendly operation.</li>
//         </ul>
//       </section>

//       <section style={styles.section}>
//         <h2>4. Bottom Line and Future Enhancement</h2>
//         <h3>Bottom Line</h3>
//         <p>
//           The proposed system effectively overcomes the challenges associated with
//           resource recovery and optimization in aluminum extraction by delivering a
//           secure, streamlined, and eco-conscious workflow. By leveraging predictive
//           analytics, role-specific access controls, and advanced by-product management
//           strategies, the system enhances aluminum yield while fostering sustainability.
//         </p>
//         <p>
//           This approach minimizes waste and maximizes the potential of residual
//           materials, ensuring that the extraction and processing methods are both
//           cost-effective and environmentally friendly.
//         </p>

//         <h3>Future Work</h3>
//         <p>
//           Future developments will aim to extend the system’s functionality by
//           integrating more sophisticated machine learning models to improve aluminum
//           yield predictions and identify additional applications for by-products.
//           Efforts will also focus on recovering other valuable materials from processing
//           residues and adopting renewable energy solutions within production stages to
//           enhance sustainability and efficiency.
//         </p>
//       </section>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     padding: "40px",
//     backgroundColor: "#f9fafc",
//     fontFamily: "Segoe UI, Arial, sans-serif",
//     lineHeight: 1.7,
//     color: "#333",
//   },
//   heading: {
//     textAlign: "center",
//     color: "#1a3e72",
//     marginBottom: "30px",
//   },
//   section: {
//     backgroundColor: "#fff",
//     padding: "20px",
//     borderRadius: "10px",
//     boxShadow: "0 0 10px rgba(0,0,0,0.1)",
//     marginBottom: "30px",
//   },
// };

// export default About;

// import Userlogin from './components/userlogin'
// import {useState} from 'react'
// function New(){

//   const[showLogin , setShowLogin]=useState()
// return (
//   <main className="img">
//     {!showLogin ? (
//       <div>
//         <center>
//           <h1>REGISTER PAGE</h1>
//           <form>
//             <center>
//               {/* ... your table input fields ... */}
//               <tr>
//                 <td colSpan="2">
//                   Already have an account?{" "}
//                   <span
//                     style={{ color: "blue", cursor: "pointer" }}
//                     onClick={() => setShowLogin(true)}
//                   >
//                     Sign in
//                   </span>
//                 </td>
//               </tr>
//               <br />
//               <tr>
//                 <center>
//                   <button type="submit">REGISTER</button>
//                 </center>
//               </tr>
//             </center>
//           </form>
//         </center>
//       </div>
//     ) : (
//       <Userlogin />
//     )}
//   </main>
// );
// }
// export default New;

function Customers() {
  const style = {
    container: {
      overflow: "hidden",
      whiteSpace: "nowrap",
      width: "100%",
      position: "relative",
      background: "#f5f5f5",
      padding: "20px 0",
      display:"flex",
      gap:"20px",
      flexDirection:"column",
    },
    slider: {
      display: "inline-flex",
      animation: "scroll 8s linear infinite",
    },
    sliders: {
      display: "inline-flex",
      animation: "scroll 5s linear infinite",
    },
    logoBox: {
      minWidth: "200px",
      height: "100px",
      margin: "0 15px",
      background: "white",
      borderRadius: "10px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
    },
    img: {
      maxWidth: "80%",
      maxHeight: "80%",
    },
  };

  return (
    <div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>

      <h2 style={{ textAlign: "center" }}>Our Customers</h2>

      <div style={style.container}>
        <div style={style.slider}>
          {Array(1)
            .fill([
              "https://upload.wikimedia.org/wikipedia/en/thumb/2/22/Hindalco_Logo.svg/1200px-Hindalco_Logo.svg.png",
              "https://pbs.twimg.com/profile_images/1790659357517983744/eONzj10b_400x400.jpg",
              "https://media.licdn.com/dms/image/v2/C560BAQHzkMYTrj33Tw/company-logo_200_200",
              "https://upload.wikimedia.org/wikipedia/commons/d/dc/BALCO_Logo.jpg?20170331094332",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVfTSEgAJMQfItAPgWrbJQNQLL1Ad2i65PJg&s",
              "https://download.logo.wine/logo/Ashok_Leyland/Ashok_Leyland-Logo.wine.png",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT98v-FpCZ1bqj7_GWsU-QDGg1FAfpGYgsZQ&s",
               "https://www.finolex.com/UploadedImages/Finolex-Logo.jpg" ,
               "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuLJJNmCRDhvk3b75IqrG4k7ueD0GSE6KSKQ&s" ,
               "https://images.jdmagicbox.com/v2/comp/delhi/79/011p2104779/catalogue/hindustan-tin-works-ltd-connaught-place-delhi-tin-container-manufacturers-15t65xh-250.jpg",
               "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQziSu5FcNXkp3INTZaBVUWKbWmgKCEkjFD9w&s" ,
               "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2BodmD0k4geFnBU8i4gW6YzkEPyHxGtlzJA&s",
               "https://etimg.etb2bimg.com/thumb/msid-122044005,width-1200,height-900,resizemode-4/.jpg" ,
               "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjtZT8fK2pzqZhv50LhcdvTtHedzQPwrcaOw&s" ,
            ])
            .flat()
            .map((logo, index) => (
              <div key={index} style={style.logoBox}>
                <img src={logo} alt="customer logo" style={style.img} />
              </div>
            ))}
        </div>
         <div style={style.sliders}>
          {Array(2)
            .fill([
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbARl5xuMvimxKmrUWq27WMmoIYBmjQxT86Q&s" ,
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0E8_aqXTAoal1A4-zR5-yyL_YxLO1XqgMRQ&s",
              "https://jswmi.in/jswm/storage/2020/04/jsw-logo-jv.png",
              "https://www.tatasteel.com/media/3396/ts_logo_guidelines03.jpg",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHwvAcT_Eh3TYPM1Ml-fvxhFWFJo40qjRU8w&s",
              "https://media.licdn.com/dms/image/v2/D5612AQEDr3b8X8wvmQ/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1732704437979?e=2147483647&v=beta&t=Ebs94JWn-M1EVZEJYD24f_k4cQvB3ydM5lHdabB66HI",
              "https://trendlyne-media-mumbai-new.s3.amazonaws.com/profilepicture/1264_profilepicture.png",
            ])
            .flat()
            .map((logo, index) => (
              <div key={index} style={style.logoBox}>
                <img src={logo} alt="customer logo" style={style.img} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Customers;
