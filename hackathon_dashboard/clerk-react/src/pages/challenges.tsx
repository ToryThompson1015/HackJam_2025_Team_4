import React from "react";

const challenges = [
    {
        title: "Build Your LinkedIn Profile",
        description:
            "Create or update your LinkedIn profile to showcase your skills, projects, and certifications. Connect with at least 10 professionals in your desired tech field.",
        tags: ["Networking", "Personal Branding"],
    },
    {
        title: "Mock Technical Interview",
        description:
            "Pair up with a peer or mentor and conduct a mock technical interview. Practice answering common coding and behavioral questions.",
        tags: ["Interview Prep", "Mentoring"],
    },
    {
        title: "Open Source Contribution",
        description:
            "Find a beginner-friendly open source project on GitHub and make your first pull request. Share your experience with the community.",
        tags: ["Coding", "Networking"],
    },
    {
        title: "Resume Review",
        description:
            "Submit your resume for feedback from a mentor or peer. Implement suggested improvements and upload the revised version.",
        tags: ["Career Prep", "Mentoring"],
    },
    {
        title: "Attend a Tech Meetup",
        description:
            "Join a virtual or in-person tech meetup or webinar. Network with at least 3 new people and share a summary of what you learned.",
        tags: ["Networking", "Learning"],
    },
];

const ChallengesPage: React.FC = () => {
    return (
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem" }}>
            <h1>Career Challenges for Per Scholas Graduates</h1>
            <p>
                Boost your tech career by completing these curated challenges. Each activity is designed to help you network, find mentors, and land your first tech job!
            </p>
            <div style={{ marginTop: "2rem" }}>
                {challenges.map((challenge, idx) => (
                    <div
                        key={idx}
                        style={{
                            border: "1px solid #e0e0e0",
                            borderRadius: 8,
                            padding: "1.5rem",
                            marginBottom: "1.5rem",
                            background: "#fafbfc",
                        }}
                    >
                        <h2 style={{ margin: 0 }}>{challenge.title}</h2>
                        <p style={{ margin: "0.5rem 0 1rem 0" }}>{challenge.description}</p>
                        <div>
                            {challenge.tags.map((tag) => (
                                <span
                                    key={tag}
                                    style={{
                                        display: "inline-block",
                                        background: "#e3f2fd",
                                        color: "#1976d2",
                                        borderRadius: 4,
                                        padding: "0.2rem 0.7rem",
                                        fontSize: "0.85rem",
                                        marginRight: "0.5rem",
                                    }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChallengesPage;