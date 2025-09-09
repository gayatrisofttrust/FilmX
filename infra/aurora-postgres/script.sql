-- users table
CREATE TABLE users (
                       id SERIAL PRIMARY KEY,
                       name VARCHAR(100) NOT NULL,
                       email VARCHAR(100) UNIQUE NOT NULL,
                       is_active BOOLEAN DEFAULT TRUE
);

-- subscriptions table
CREATE TABLE subscriptions (
                               id SERIAL PRIMARY KEY,
                               user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
                               active BOOLEAN DEFAULT FALSE,
                               start_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- payments table
CREATE TABLE payments (
                          id SERIAL PRIMARY KEY,
                          user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
                          amount NUMERIC(10, 2) NOT NULL,
                          payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
