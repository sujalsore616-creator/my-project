import UserContext from "./userContext";

function UserProvider({ children }) {
    const user = {
        name: "Sujal Sore",
        email: "Student"
    };

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;