import React from "react";

const styles = {
    container: {
        display: "flex",
        height: "100vh",
        background: "#1976d2", 
        alignItems: "center",
        justifyContent: "center",
    },
    logoSection: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        paddingRight: "60px",
    },
    logo: {
        width: "180px",
        height: "auto",
    },
    formSection: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingLeft: "60px",
    },
    form: {
        background: "#fff",
        padding: "40px",
        borderRadius: "12px",
        boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
        display: "flex",
        flexDirection: "column",
        minWidth: "320px",
    },
    input: {
        marginBottom: "20px",
        padding: "12px",
        borderRadius: "6px",
        border: "1px solid #ccc",
        fontSize: "16px",
    },
    button: {
        padding: "12px",
        borderRadius: "6px",
        border: "none",
        background: "#1976d2",
        color: "#fff",
        fontWeight: "bold",
        fontSize: "16px",
        cursor: "pointer",
    },
};

export default function LoginPage() {
    return (
        <div style={styles.container}>
            <div style={styles.logoSection}>
                {/* Replace src with your logo path */}
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                    alt="Logo"
                    style={styles.logo}
                />
            </div>
            <div style={styles.formSection}>
                <form style={styles.form}>
                    <h2 style={{ marginBottom: "24px", color: "#1976d2" }}>Login</h2>
                    <input
                        type="email"
                        placeholder="Email"
                        style={styles.input}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        style={styles.input}
                        required
                    />
                    <button type="submit" style={styles.button}>
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}