interface SignupInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const existingUsers = [
  { id: 1, email: "testuser@example.com" },
  { id: 2, email: "johndoe@example.com" },
];

export const validateSignup = ({
  firstName,
  lastName,
  email,
  password,
}: SignupInput) => {
  if (!firstName || !lastName || !email || !password) {
    return {
      success: false,
      message: "All fields are required.",
    };
  }

  const emailExists = existingUsers.some((user) => user.email === email);
  if (emailExists) {
    return {
      success: false,
      message: "Email already exists.",
    };
  }

  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!validEmail) {
    return {
      success: false,
      message: "Invalid email.",
    };
  }

  const validPassword =
    password.length >= 8 &&
    password.match(/[A-Z]/) &&
    password.match(/[a-z]/) &&
    password.match(/[0-9]/) &&
    password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/);
  if (!validPassword) {
    return {
      success: false,
      message: `
        Password must be:
        - at least 8 characters long
        - contain at least one uppercase letter
        - contain at least one lowercase letter
        - contain at least one number
        - contain at least one special character`,
    };
  }

  return {
    success: true,
    message: "Signup successful.",
  };
};
