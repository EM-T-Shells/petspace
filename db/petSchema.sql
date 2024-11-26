CREATE TABLE pets (
    id SERIAL PRIMARY KEY, 
    user_id INT REFERENCES users(id) ON DELETE CASCADE, 
    pet_name VARCHAR(100),
    pet_type VARCHAR(50), 
    pet_age INT, 
    pet_breed VARCHAR(100), 
    profile_picture_url TEXT, 
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);
