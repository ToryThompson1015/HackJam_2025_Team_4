import React from "react";


const sidebarItems = [
    { icon: "🏠", label: "Home", onClick: () => window.location.href = "/" },
    { icon: "📚", label: "Courses", onClick: () => window.location.href = "/courses" },
    { icon: "⭐", label: "Achievements", onClick: () => window.location.href = "/achievements" },
    { icon: "👤", label: "Profile", onClick: () => window.location.href = "/profile" },
    { icon: "⚙️", label: "Settings", onClick: () => window.location.href = "/settings" },
];

const user = {
    name: "Jane Doe",
    streak: 12,
    xp: 3400,
    avatar: "https://ui-avatars.com/api/?name=Jane+Doe",
};

export default function About() {
    return (
        <div style={{ display: "flex", minHeight: "100vh", background: "#f7f7fb" }}>
            {/* Sidebar */}
            <aside
                style={{
                    width: 80,
                    background: "#fff",
                    borderRight: "1px solid #ececec",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "24px 0",
                }}
            >
                <img
                    src={user.avatar}
                    alt="avatar"
                    style={{
                        width: 48,
                        height: 48,
                        borderRadius: "50%",
                        marginBottom: 32,
                        border: "2px solid #58cc02",
                    }}
                />
                {sidebarItems.map((item) => (
                    <div
                        key={item.label}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            margin: "24px 0",
                            cursor: "pointer",
                            color: "#555",
                            fontSize: 24,
                        }}
                        title={item.label}
                    >
                        <span>{item.icon}</span>
                        <span style={{ fontSize: 10, marginTop: 4 }}>{item.label}</span>
                    </div>
                ))}
            </aside>

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
                        <h1 style={{ margin: 0, fontWeight: 700, fontSize: 32 }}>
                            Welcome back, {user.name.split(" ")[0]}!
                        </h1>
                        <p style={{ color: "#888", marginTop: 8 }}>
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
                            background: "#fff",
                            borderRadius: 16,
                            padding: 32,
                            boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                        }}
                    >
                        <h2 style={{ margin: 0, fontSize: 20, fontWeight: 700 }}>
                            Continue Learning
                        </h2>
                        <p style={{ color: "#888", margin: "12px 0 0" }}>
                            Resume your last lesson and keep your streak alive!
                        </p>
                        <button
                            style={{
                                marginTop: 20,
                                background: "#58cc02",
                                color: "#fff",
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
                        }}
                    >
                        <h2 style={{ margin: 0, fontSize: 20, fontWeight: 700 }}>
                            Achievements
                        </h2>
                        <p style={{ color: "#888", margin: "12px 0 0" }}>
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
                        <h2 style={{ margin: 0, fontSize: 20, fontWeight: 700 }}>
                            Leaderboard
                        </h2>
                        <p style={{ color: "#888", margin: "12px 0 0" }}>
                            Compete with friends and climb the ranks!
                        </p>
                        <button
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