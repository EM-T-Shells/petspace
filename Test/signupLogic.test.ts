interface SignupInput {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }
  
  // Simulated existing users array
  const existingUsers = [
    { id: 1, email: "testuser@example.com" },
    { id: 2, email: "johndoe@example.com" },
  ];
  
  const validateSignup = ({ firstName, lastName, email, password }: SignupInput) => {
    // Check if all fields are provided
    if (!firstName || !lastName || !email || !password) {
      return {
        success: false,
        message: "All fields are required.",
      };
    }
  
    // Check if email already exists in hardcoded data
    const emailExists = existingUsers.some((user) => user.email === email);
    if (emailExists) {
      return {
        success: false,
        message: "Email already exists.",
      };
    }
  
    // Validate email format
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!validEmail) {
      return {
        success: false,
        message: "Invalid email.",
      };
    }
  
    // Validate password format
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
  
  describe("Signup Logic", () => {
    it("should fail when first name is missing", () => {
      const result = validateSignup({
        firstName: "",
        lastName: "Doe",
        email: "newuser@example.com",
        password: "Password123!",
      });
      expect(result.success).toBe(false);
      expect(result.message).toBe("All fields are required.");
    });
  
    it("should fail when last name is missing", () => {
      const result = validateSignup({
        firstName: "John",
        lastName: "",
        email: "newuser@example.com",
        password: "Password123!",
      });
      expect(result.success).toBe(false);
      expect(result.message).toBe("All fields are required.");
    });
  
    it("should fail when email is missing", () => {
      const result = validateSignup({
        firstName: "John",
        lastName: "Doe",
        email: "",
        password: "Password123!",
      });
      expect(result.success).toBe(false);
      expect(result.message).toBe("All fields are required.");
    });
  
    it("should fail when password is missing", () => {
      const result = validateSignup({
        firstName: "John",
        lastName: "Doe",
        email: "newuser@example.com",
        password: "",
      });
      expect(result.success).toBe(false);
      expect(result.message).toBe("All fields are required.");
    });
  
    it("should fail when email already exists", () => {
      const result = validateSignup({
        firstName: "John",
        lastName: "Doe",
        email: "testuser@example.com", // Email from the hardcoded `existingUsers`
        password: "Password123!",
      });
      expect(result.success).toBe(false);
      expect(result.message).toBe("Email already exists.");
    });
  
    it("should fail for invalid email format", () => {
      const result = validateSignup({
        firstName: "John",
        lastName: "Doe",
        email: "invalid-email",
        password: "Password123!",
      });
      expect(result.success).toBe(false);
      expect(result.message).toBe("Invalid email.");
    });
  
    it("should fail for invalid password format", () => {
      const result = validateSignup({
        firstName: "John",
        lastName: "Doe",
        email: "newuser@example.com",
        password: "pass",
      });
      expect(result.success).toBe(false);
      expect(result.message).toContain("Password must be");
    });
  
    it("should pass for valid inputs", () => {
      const result = validateSignup({
        firstName: "John",
        lastName: "Doe",
        email: "uniqueuser@example.com", // Unique email not in `existingUsers`
        password: "Password123!",
      });
      expect(result.success).toBe(true);
      expect(result.message).toBe("Signup successful.");
    });
  });
  