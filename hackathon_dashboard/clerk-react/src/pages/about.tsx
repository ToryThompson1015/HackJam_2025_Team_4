import SideBar from "../components/sidebar";
import { useNavigate } from "react-router-dom";

const user = {
    name: "Jane Doe",
    streak: 12,
    xp: 3400,
    avatar: "https://ui-avatars.com/api/?name=Jane+Doe",
};

export default function About() {
    const navigate = useNavigate();
    return (
        <div style={{ display: "flex", minHeight: "100vh", minWidth: '100vw', background: "#f7f7fb" }}>
            {/* Sidebar */}
            <SideBar />
            {/* Main Content */}
            <main style={{ flex: 1, padding: "40px 60px" }}>
                {/* Header */}
                <header
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 32,
                    }}
                >
                    <div>
                        <h1 style={{ margin: 0, fontWeight: 700, fontSize: 32, color: "black" }}>
                            Welcome back, {user.name.split(" ")[0]}!
                        </h1>
                        <p style={{ color: "black", marginTop: 8 }}>
                            Keep up your streak and earn more XP!
                        </p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
                        <div
                            style={{
                                background: "#fff",
                                borderRadius: 12,
                                padding: "12px 20px",
                                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                                fontWeight: 600,
                                color:"black"
                            }}
                        >
                            🔥 {user.streak} day streak
                        </div>
                        <div
                            style={{
                                background: "#fff",
                                borderRadius: 12,
                                padding: "12px 20px",
                                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                                fontWeight: 600,
                                color:"black"
                            }}
                        >
                            🏆 {user.xp} XP
                        </div>
                    </div>
                </header>

                {/* Dashboard Cards */}
                <section
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                        gap: 32,
                    }}
                >
                    <div
                        style={{
                            color:"black",
                            background: "#fff",
                            borderRadius: 16,
                            padding: 32,
                            boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                        }}
                    >
                        <h2 style={{ margin: 0, fontSize: 20, fontWeight: 700, color:"black"}}>
                            Continue Learning
                        </h2>
                        <p style={{ color: "black", margin: "12px 0 0" }}>
                            Resume your last lesson and keep your streak alive!
                        </p>
                        <button onClick={() => navigate("/challenges")}
                            style={{
                                marginTop: 20,
                                background: "#58cc02",
                                color: "color",
                                border: "none",
                                borderRadius: 8,
                                padding: "10px 24px",
                                fontWeight: 600,
                                cursor: "pointer",
                                fontSize: 16,
                            }}
                        >
                            Continue
                        </button>
                    </div>
                    <div
                        style={{
                            background: "#fff",
                            borderRadius: 16,
                            padding: 32,
                            boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            color:"black"
                        }}
                    >
                        <h2 style={{ color:"black", margin: 0, fontSize: 20, fontWeight: 700 }}>
                            Achievements
                        </h2>
                        <p style={{ color: "black", margin: "12px 0 0" }}>
                            Unlock badges and track your progress.
                        </p>
                        <div style={{ marginTop: 20, display: "flex", gap: 12 }}>
                            <span style={{ fontSize: 28 }}>🏅</span>
                            <span style={{ fontSize: 28 }}>🎯</span>
                            <span style={{ fontSize: 28 }}>🥇</span>
                        </div>
                    </div>
                    <div
                        style={{
                            background: "#fff",
                            borderRadius: 16,
                            padding: 32,
                            boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                        }}
                    >
                        <h2 style={{ margin: 0, fontSize: 20, fontWeight: 700, color:"black"}}>
                            Leaderboard
                        </h2>
                        <p style={{ color: "black", margin: "12px 0 0" }}>
                            Compete with friends and climb the ranks!
                        </p>
                        <button
                            onClick={()=> navigate("/leaderboard")}
                            style={{
                                marginTop: 20,
                                background: "#fff",
                                color: "#58cc02",
                                border: "2px solid #58cc02",
                                borderRadius: 8,
                                padding: "10px 24px",
                                fontWeight: 600,
                                cursor: "pointer",
                                fontSize: 16,
                            }}
                        >
                            View Leaderboard
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
}