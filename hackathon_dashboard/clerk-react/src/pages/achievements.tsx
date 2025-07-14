import React from "react";

const achievements = [
    {
        title: "Completed Coding Bootcamp 🎓",
        description: "You finished the intensive PerScholas coding bootcamp. Great job mastering new skills!",
    },
    {
        title: "Built Your First Project 💻",
        description: "You created and deployed your first real-world application. Keep building!",
    },
    {
        title: "Attended Networking Event 🤝",
        description: "You participated in a networking event and connected with industry professionals.",
    },
    {
        title: "Found a Mentor 🧑‍🏫",
        description: "You connected with a mentor to help guide your tech journey.",
    },
    {
        title: "Mock Interview Completed 🎤",
        description: "You practiced your interview skills and received valuable feedback.",
    },
    {
        title: "Landed Your First Tech Job 🚀",
        description: "Congratulations! You secured your first job in tech. The journey begins!",
    },
];

const AchievementsPage: React.FC = () => (
    <div style={{ maxWidth: 600, margin: "2rem auto", padding: "1rem" }}>
        <h1 style={{ textAlign: "center" }}>🏆 Achievements</h1>
        <p style={{ textAlign: "center", marginBottom: "2rem" }}>
            Track your progress as you work towards your tech career goals!
        </p>
        <ul style={{ listStyle: "none", padding: 0 }}>
            {achievements.map((ach, idx) => (
                <li
                    key={idx}
                    style={{
                        background: "#f9f9f9",
                        borderRadius: 8,
                        marginBottom: "1.5rem",
                        padding: "1rem 1.5rem",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                    }}
                >
                    <h2 style={{ margin: 0, fontSize: "1.2rem", color: 'black' }}>{ach.title}</h2>
                    <p style={{ margin: "0.5rem 0 0 0", color: "#555" }}>{ach.description}</p>
                </li>
            ))}
        </ul>
    </div>
);

export default AchievementsPage;