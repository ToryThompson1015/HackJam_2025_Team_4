'use client';

import { useNavigate } from "react-router-dom";
import Logo from "../images/logo.png"; 

export default function Home() {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/login");
    };

    const handleSignUp = () => {
        navigate("/signup");
    };

    return (
        <div style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "#ffffff", // fixed color
        }}>
            {/* Logo */}
            <img
                src={Logo}
                alt="Logo"
                style={{ width: 250, height: 250, marginBottom: 5 }}
            />

            {/* Title */}
            <h1 style={{ margin: 0, fontSize: "2.5rem", fontWeight: 700, color: "#00CCCC" }}>
                Welcome to PerScholas: LevelUp 🚀
            </h1>

            {/* Subtitle */}
            <p style={{
                marginTop: 12,
                marginBottom: 32,
                fontSize: "1.25rem",
                color: "#FFA500", // fixed hex case
                fontWeight: 900
            }}>
                Join or sign up to get started!
            </p>

            {/* Buttons */}
            <div style={{ display: "flex", gap: 16 }}>
                <button
                    onClick={handleLogin}
                    style={{
                        padding: "12px 32px",
                        fontSize: "1rem",
                        borderRadius: 6,
                        border: "none",
                        background: "#00CCCC",
                        color: "#fff",
                        cursor: "pointer"
                    }}
                >
                    Log In
                </button>
                <button
                    onClick={handleSignUp}
                    style={{
                        padding: "12px 32px",
                        fontSize: "1rem",
                        borderRadius: 6,
                        border: "1px solid #00CCCC",
                        background: "#fff",
                        color: "#00CCCC",
                        cursor: "pointer"
                    }}
                >
                    Sign Up
                </button>
            </div>
        </div>
    );
}
