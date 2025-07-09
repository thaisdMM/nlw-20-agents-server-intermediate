# NLW Agents

This is the **backend** of a project developed during a Rocketseat event, demonstrating the use of intelligent agents on the web.

-----

## 🚀 Technologies

  * **Node.js 18+** - JavaScript runtime
  * **TypeScript 5.8** - JavaScript superset with static typing
  * **Express.js** - Web application framework
  * **Prisma** - Next-generation ORM
  * **PostgreSQL** - Relational database
  * **Zod** - Schema declaration and validation library
  * **OpenAI API** - For integrating AI capabilities
  * **Fastify** - Fast and low-overhead web framework (if you're using this instead of Express, please specify\!)

-----

## 📂 Design Patterns

  * **API RESTful** - Standard for web APIs
  * **MVC (Model-View-Controller)** - (If applicable, specify your chosen architecture, e.g., "Service Layer" for business logic)
  * **Dependency Injection** - For managing dependencies
  * **Repository Pattern** - For data access abstraction

-----

## ⚙️ Project Setup

### Prerequisites

  * Node.js (version 18 or higher)
  * npm or yarn
  * PostgreSQL database instance

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2.  Install dependencies:
    ```bash
    npm install
    # or yarn install
    ```
3.  Configure your environment variables. Create a `.env` file in the project root based on `.env.example` and fill in your database connection string and any API keys (e.g., `DATABASE_URL`, `OPENAI_API_KEY`).
4.  Run database migrations:
    ```bash
    npx prisma migrate dev
    ```
5.  Run the development server:
    ```bash
    npm run dev
    # or yarn dev
    ```
6.  The backend API will be accessible at `http://localhost:3333` (or your configured port).

### Available Scripts

  * `npm run dev` - Starts the development server
  * `npm run build` - Generates a production build
  * `npm run start` - Starts the production server
  * `npm run test` - Runs tests (if applicable)

### Frontend

This backend project provides the API consumed by the frontend. Ensure this backend is running before starting the frontend application, which expects the API to be available on port 3333.

-----

## 🛠️ Project Structure

```
src/
├── controllers/      # Handles incoming requests
├── services/         # Contains business logic
├── repositories/     # Data access layer
├── routes/           # API routes definitions
├── database/         # Database configuration (e.g., Prisma client)
├── lib/              # Utilities and external integrations (e.g., OpenAI client)
└── server.ts         # Main application entry point
```
