// import React from "react";

// const leaderboardData = [
//     { rank: 1, name: "Alice", score: 1500 },
//     { rank: 2, name: "Bob", score: 1200 },
//     { rank: 3, name: "Charlie", score: 1100 },
//     { rank: 4, name: "Dana", score: 950 },
//     { rank: 5, name: "Eve", score: 900 },
// ];

// const Dashboard: React.FC = () => {
//     return (
//         <div style={{ maxWidth: 600, margin: "2rem auto", padding: "2rem", background: "#fff", borderRadius: 8, boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
//             <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Leaderboard</h1>
//             <table style={{ width: "100%", borderCollapse: "collapse" }}>
//                 <thead>
//                     <tr>
//                         <th style={{ textAlign: "left", padding: "0.5rem", borderBottom: "2px solid #fffff" }}>Rank</th>
//                         <th style={{ textAlign: "left", padding: "0.5rem", borderBottom: "2px solid #eee" }}>Name</th>
//                         <th style={{ textAlign: "left", padding: "0.5rem", borderBottom: "2px solid #eee" }}>Score</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {leaderboardData.map((user) => (
//                         <tr key={user.rank}>
//                             <td style={{ padding: "0.5rem", borderBottom: "1px solid #f5f5f5" }}>{user.rank}</td>
//                             <td style={{ padding: "0.5rem", borderBottom: "1px solid #f5f5f5" }}>{user.name}</td>
//                             <td style={{ padding: "0.5rem", borderBottom: "1px solid #f5f5f5" }}>{user.score}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };



import'../components/boardstyle.css';
import Board from '../components/board';
import logo from '../images/logo.png';

export default function Leaderboard() {
    return (
        <div className="leaderboard-container">
            <header className="leaderboard-header">
                <img src={logo} alt="Logo" className="leaderboard-logo" />
                <Board></Board>
                <h1>Leaderboard</h1>
            </header>
            <main className="leaderboard-content">
                <p>Leaderboard content goes here.</p>
            </main>
        </div>
    );
}
