# StackOverflow Clone - Next.js

This repository is a clone of StackOverflow built using Next.js.

## Description

This project aims to replicate the core functionalities of the popular Q&A platform, StackOverflow. It allows users to post questions, provide answers, vote on posts, and more.

## Features

- User Authentication
- Ask Questions
- Provide Answers
- Vote on Questions and Answers
- Real-time updates

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/TheCoderAdi/stackoverflow-nextjs.git
   ```
2. Navigate to the project directory:
   ```bash
   cd stackoverflow-nextjs
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Create a `.env.local` file and add your environment variables:
   ```bash
   touch .env.local
   ```
   ```bash
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP__URL=/
   NEXT_PUBLIC_TINY_EDITOR_API_KEY=
   NEXT_CLERK_WEBHOOK_SECRET=
   MONGO_URI=
   ```
5. Start the development server:
   ```bash
    npm run dev
   ```

## Usage

1. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).
2. Register for a new account or log in with your existing credentials.
3. Start asking questions, providing answers, and voting on posts!

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add some feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Create a pull request.

## License

This project is licensed under the MIT License.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Vercel](https://vercel.com/)
- [StackOverflow](https://stackoverflow.com/)
