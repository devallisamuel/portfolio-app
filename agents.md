# AGENTS.md

## Project Overview

This is a React + TypeScript frontend application.

The primary goals are:

- Maintainable, readable, and scalable code
- Strong typing using TypeScript
- Component reusability
- Good separation of concerns
- High testability

---

# Tech Stack

- React 18+
- TypeScript
- React Router
- Axios / Fetch
- React Query (if available)
- Zustand / Redux Toolkit (if applicable)
- TailwindCSS / CSS Modules / Styled Components
- Jest + React Testing Library

---

# Project Structure

```
src/
    assets/
    components/
        common/
        layout/
        ui/

    features/
        auth/
        dashboard/
        users/

    hooks/

    pages/

    routes/

    services/
        api/
        auth/

    store/

    types/

    utils/

    constants/

    contexts/

    providers/

    styles/

    App.tsx
    main.tsx
```

---

# General Guidelines

## Keep Components Small

- One responsibility per component.
- Split components once they exceed ~200 lines.
- Avoid deeply nested JSX.

Good:

```
Dashboard
    ├── Header
    ├── Sidebar
    ├── AnalyticsCard
    └── RecentOrders
```

---

## Prefer Functional Components

Always use functional components.

```tsx
export function Button() {
    return <button>Save</button>;
}
```

---

## TypeScript

Avoid using:

```ts
any
```

Prefer:

```ts
unknown

interface

type

generics
```

Example:

```ts
interface User {
    id: string;
    name: string;
}
```

---

# Component Rules

Components should:

- Receive data through props.
- Avoid unnecessary state.
- Be reusable.
- Be presentation-focused whenever possible.

Avoid business logic inside UI components.

Bad:

```tsx
<UserCard />
```

Fetching data internally.

Good:

```
Page
    ↓
fetch data
    ↓
<UserCard />
```

---

# State Management

Use state according to scope.

## Local state

```
useState
```

For:

- Modals
- Forms
- UI interactions

---

## Shared state

Use Context/Zustand/Redux only when state is shared.

Examples:

- Authentication
- Theme
- Notifications

Avoid global state for local UI concerns.

---

# API Layer

Never call APIs directly inside components.

Bad:

```tsx
axios.get(...)
```

inside JSX components.

Instead:

```
Component
    ↓
Hook
    ↓
Service
    ↓
API
```

Example:

```
services/
    users.service.ts

hooks/
    useUsers.ts
```

---

# Custom Hooks

Move reusable logic into hooks.

Good:

```
usePagination()

useDebounce()

useAuth()

useModal()
```

Avoid duplicate logic across components.

---

# Styling

Prefer consistent styling.

Do not mix:

- Tailwind
- Styled Components
- CSS Modules

within the same feature unless necessary.

---

# Routing

Routes belong under:

```
routes/
```

Lazy load large pages.

Example:

```tsx
const Dashboard = lazy(() => import("../pages/Dashboard"));
```

---

# Folder Ownership

## components/

Reusable UI.

## pages/

Route-level components.

## features/

Feature-specific logic.

## services/

HTTP communication.

## hooks/

Reusable React hooks.

## utils/

Pure helper functions.

## types/

Shared interfaces.

---

# Performance

Prefer:

- React.memo when necessary
- useMemo for expensive computations
- useCallback for stable callbacks
- Lazy loading
- Code splitting

Do not prematurely optimize.

---

# Error Handling

Always:

- Handle API errors
- Show loading states
- Show empty states
- Show error states

Never silently ignore failures.

---

# Forms

Validate user input.

Prefer:

- React Hook Form
- Formik

with

- Zod
- Yup

---

# Testing

Write tests for:

- Components
- Hooks
- Utility functions

Prefer testing behavior over implementation details.

---

# Naming Conventions

Components:

```
UserCard.tsx
```

Hooks:

```
useAuth.ts
```

Utilities:

```
formatDate.ts
```

Types:

```
user.types.ts
```

Constants:

```
api.constants.ts
```

---

# Imports

Import order:

1. React
2. Third-party libraries
3. Internal modules
4. Styles

Example:

```tsx
import { useState } from "react";

import { useQuery } from "@tanstack/react-query";

import { Button } from "@/components";

import "./styles.css";
```

---

# Code Quality

Always:

- Keep functions focused
- Prefer early returns
- Remove dead code
- Avoid duplication (DRY)
- Follow SOLID principles where applicable

---

# Accessibility

Ensure:

- Semantic HTML
- Proper labels
- Keyboard navigation
- ARIA attributes where necessary

---

# Before Creating New Code

Search for existing:

- Components
- Hooks
- Utilities
- Types

Reuse existing implementations whenever possible.

---

# Before Committing

Ensure:

- TypeScript passes
- Lint passes
- Tests pass
- No unused imports
- No console.log statements
- No commented-out code

---

# Agent Instructions

When modifying this project:

1. Follow the existing architecture.
2. Reuse existing components whenever possible.
3. Do not introduce new libraries without justification.
4. Keep components small and reusable.
5. Preserve strong TypeScript typing.
6. Maintain consistent styling.
7. Update tests when behavior changes.
8. Do not break existing public APIs unless explicitly requested.
9. Prefer composition over inheritance.
10. Leave the codebase cleaner than you found it.

# Project to be Implemented
Refer to the Implementation.md for the plan of the product to be implemented