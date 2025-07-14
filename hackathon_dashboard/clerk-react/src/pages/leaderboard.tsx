import'../components/boardstyle.css';
import Board from '../components/board';
import logo from '../images/logo.png';

export default function Leaderboard() {
    return (
        <div className="leaderboard-container" style={{
            background: "blue", justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column", marginLeft: "500px", padding: "20px"}}>
            <header className="leaderboard-header">
                <Board></Board>
                <br />
                <h1>Current Leaderboard</h1>
                <br />
            </header>
            <main className="leaderboard-content">
                <ol>
                    <li>Jolene Marks</li>
                    <li>Alexi Romani</li>
                    <li>Gary Daniels</li>

                </ol>
            </main>
        </div>
    );
}
