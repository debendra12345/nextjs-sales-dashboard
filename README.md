# Next.js Sales Dashboard

A modern, responsive, and full-stack-ready frontend project built with Next.js 15, TypeScript, Tailwind CSS, and Recharts. This project follows Atomic Design Principles to ensure a scalable and maintainable codebase.

## 🚀 Features

- **Dashboard:** Displays yearly and monthly sales performance data.
- **Dynamic Charts:** Built with Recharts, allowing toggle between Bar, Line, and Pie charts.
- **Custom Filters:** Filter sales data dynamically by setting a minimum sales threshold.
- **API Simulation:** Integrates a mock API with realistic simulated network delays to demonstrate loading states (Skeleton/Spinner UI).
- **Responsive Design:** Optimized for mobile, tablet, and desktop views using Tailwind CSS.
- **Clean Architecture:** Organized strictly following Atomic Design Principles (Atoms, Molecules, Organisms).

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Charts:** [Recharts](https://recharts.org/)
- **Icons:** [Lucide React](https://lucide.dev/)

## 📂 Folder Structure

```
src/
├── app/                  # Next.js App Router
│   ├── dashboard/        # Dashboard Page Route
│   ├── layout.tsx        # Root Layout
│   └── page.tsx          # Root Redirect
├── components/           # Atomic Design Components
│   ├── atoms/            # UI Primitives (Card, Button, Input, Spinner)
│   ├── molecules/        # Component Groups (FilterInput, ChartTypeToggle)
│   └── organisms/        # Complex Sections (SalesChart, DashboardPanel)
├── lib/                  # Utilities and Libraries
│   └── api/              # Mock API Services
└── types/                # Global TypeScript Interfaces
```

## ⚙️ Setup Instructions

Follow these steps to get the project up and running locally:

### 1. Clone or Download the Repository

Make sure you are in the project root directory.

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. You will be automatically redirected to the dashboard.

## 🔮 Future Improvements

- Integrate a real backend API (e.g., Node.js/Express or serverless functions).
- Add user authentication to protect the dashboard route.
- Include end-to-end (E2E) testing with Cypress or Playwright.
- Implement more advanced filtering criteria (e.g., date ranges, product categories).
- Add PDF/CSV export functionality for the reports.
