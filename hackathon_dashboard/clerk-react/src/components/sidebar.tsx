import { useNavigate } from "react-router-dom";
import Logo from "../images/logo.png";
import { SignOutButton } from '@clerk/clerk-react'

const sidebarItems = [
    { icon: "🏠", label: "Home", path: "/" },
    { icon: "📚", label: "Challenges", path: "/challenges" },
    { icon: "⭐", label: "Achievements", path: "/achievements" },
    { icon: "👤", label: "Profiles", path: "/profiles" },
    { icon: "⚙️", label: "Settings", path: "/settings" },
];

export default function SideBar() {
    const navigate = useNavigate()
    return (
        <aside
                style={{
                    width: "150px",
                    background: "#fff",
                    borderRight: "1px solid #ececec",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "24px 0",
                }}
            >
                <img
                    src={Logo}
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
                        onClick={() => navigate(item.path)}
                    >
                        <span>{item.icon}</span>
                        <span style={{ fontSize: 10, marginTop: 4 }}>{item.label}</span>
                    </div>
                    
                ))}
                <div className="sign-out-button" style={{ marginTop: "auto", backgroundColor: "white", color: "#fff", borderRadius: 0, cursor: "pointer" }} onClick={() => navigate("/login")}>
                 <SignOutButton />
                </div>
            </aside>

    );
}-
''