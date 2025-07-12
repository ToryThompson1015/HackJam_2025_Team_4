export default function Header() {
    return (
        <header style={{
            background: "#00CCCC",
            padding: "10px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#fff"
        }}>
            <img src={Logo} alt="Logo" style={{ width: 50, height: 50 }} />
            <h1 style={{ margin: 0 }}>PerScholas: LevelUp</h1>
        </header>
    );
}