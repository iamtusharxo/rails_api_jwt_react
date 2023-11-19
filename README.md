# rails_api_jwt_react

rails_api_jwt_react is a web application built on the Ruby on Rails framework, serving as the backend API. It utilizes JSON Web Tokens (JWT) for secure authentication. The frontend is developed using React, providing a dynamic and responsive user interface. This stack offers a robust foundation for building modern and scalable web applications with a decoupled frontend and backend architecture.

## Clone Application

### Backend

1. Clone the repository:

    ```bash
    git clone https://github.com/iamtusharxo/rails_api_jwt_react.git
    ```

2. Navigate to the backend directory:

    ```bash
    cd rails_api_jwt_react/backend
    ```

3. Install dependencies:

    ```bash
    bundle install
    ```

4. Set up the database and run migrations:

    ```bash
    rails db:create db:migrate
    ```

5. Seed the database with sample data:

    ```bash
    rails db:seed
    ```

6. Start the Rails server:

    ```bash
    rails server
    ```

### Frontend

1. Navigate to the frontend directory:

    ```bash
    cd rails_api_jwt_react/frontend
    ```

2. Install Node.js dependencies:

    ```bash
    npm install
    ```

3. Start the React development server:

    ```bash
    npm start
    ```

## Usage

Access the application in your browser at [http://localhost:3001](http://localhost:3001). The backend runs on port 3001, and the frontend should automatically open in your default browser.

Feel free to explore the features and functionalities of the application. You can use the seeded data for testing purposes.

## Additional Notes

- Make sure you have Ruby 3.0, Rails > 7.0, and Node.js installed on your machine before following the installation steps.
