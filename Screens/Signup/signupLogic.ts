import { supabase } from "../../utils/supabase"; 
interface SignupInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface SignupResult {
  success: boolean;
  message: string;
}

export const validateSignup = async (
  input: SignupInput
): Promise<SignupResult> => {
  const { firstName, lastName, email, password } = input;

  // Basic input validation
  if (!firstName || !lastName || !email || !password) {
    return { success: false, message: "All fields are required." };
  }

  if (!validateEmail(email)) {
    return { success: false, message: "Please enter a valid email address." };
  }

  if (password.length < 6) {
    return {
      success: false,
      message: "Password must be at least 6 characters long.",
    };
  }

  try {

    // Check if the email already exists in the database
    const { data: existingUser, error: queryError } = await supabase
      .from("users")
      .select("email")
      .eq("email", email)
      .single();

    if (queryError && queryError.code !== "PGRST116") {
      // If the error isn't due to no matching rows (email not found), throw an error
      return { success: false, message: queryError.message };
    }

    if (existingUser) {
      return { success: false, message: "The email address already exists." };
    }
    
    // Sign up the user in Supabase authentication
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: firstName,
          last_name: lastName,
        },
      },
    });
    
    if (authError) {
      return { success: false, message: authError.message };
    }
    // Ensure authData contains the user object
    if (!authData.user) {
      return { success: false, message: "Error: Auth user not created." };
    }

    console.log("Auth Data:", authData);
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);

    // Store additional user data in the "users" table
    const { error: dbError } = await supabase.from("users").insert({
      id: authData.user.id,
      first_name: firstName,
      last_name: lastName,
      email,
    });

    if (dbError) {
      return { success: false, message: dbError.message };
    }

    return {
      success: true,
      message: "Signup successful! Please check your email for confirmation.",
    };
  } catch (error) {
    console.error("Signup error:", error);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    };
  }
};


const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
