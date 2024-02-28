import { useNavigate } from "react-router-dom";

export const useSignup = ({ setIsAuthenticated, email, password, passwordConfirm }) => {
    const navigate = useNavigate(); 

    const handleSignup = async () => {
        if (password !== passwordConfirm) {
            console.error("Passwords do not match");
            console.log(password,passwordConfirm)
            return;
        }
        try {
            console.log(email, password, passwordConfirm)
            const response = await fetch("/api/user/signup", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({email, password}),
            });
            if (response.ok) {
                const user = await response.json();
                sessionStorage.setItem("user", JSON.stringify(user));
                console.log("User signed up successfully!");
                setIsAuthenticated(true);
                navigate("/");
            } else {
                console.error("Signup failed");
            }
        }   catch (error) {
            console.error("Error during login:", error);            
        }  
    };
return { handleSignup };

};