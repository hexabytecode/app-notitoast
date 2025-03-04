# Toast Notification System

This project implements a fully functional and customizable toast notification system in React. The system is built to be independent, reusable, and easily integrated into any part of an application.

## Live Demo

- **Live Deployment:** [NotiToast 🍞](https://next-notistack.vercel.app/)
- **Preview Video:** [Live Demo](https://github.com/user-attachments/assets/2b176bc4-0558-4b67-9e87-089276410fd2)

## Features

- **Independent and Reusable:** The toast system is self-contained and can be used across multiple parts of the application without dependencies.
- **Configurable Delay:** Toasts support customizable display durations.
- **Actionable Toasts:** Supports user interactions like buttons or other actions directly within the toast.
- **Predefined Toast Types:** Includes success, info, error, and warning message styles.
- **Custom Toast Support:** Allows unique content and custom styling for more flexibility.
- **Dynamic Width Adjustment:** Toast width adapts based on its content.
- **Closable Toasts:** Option to manually dismiss a toast.

## Project Structure

```
.
└── src                       
    └── components            # UI and logic components
        ├── mainCard.jsx      # Main card component
        ├── mainForm.jsx      # Main form component
        ├── notitoast         # Toast notification system
        │   ├── Toast.jsx        # Individual toast message
        │   ├── ToastContainer.jsx # Manages multiple toasts
        │   ├── ToastProvider.jsx  # Context provider for toast state
        │   ├── toastUtils.js     # Helper functions for toast operations
        │   └── useToast.js       # Custom hook for adding toasts
        └── ui                 # ShadCn Components
            └── ...

```
## Key Components

- **Toast.jsx:** Renders individual toast messages.
- **ToastContainer.jsx:** Manages the layout and display of multiple toasts.
- **ToastProvider.jsx:** Provides context and manages toast state.
- **useToast.js:** Custom hook for triggering toasts.
- **toastUtils.js:** Helper functions for toast operations.

## How to Use

1. **Wrap your app in the `ToastProvider`:**
```jsx
import { ToastProvider } from './src/components/notitoast/ToastProvider';

function MyApp({ Component, pageProps }) {
  return (
    <ToastProvider>
      <Component {...pageProps} />
    </ToastProvider>
  );
}
export default MyApp;
```

2. **Trigger a toast notification:**
```jsx
import { useToast } from './src/components/notitoast/useToast';

function MyComponent() {
  const { addToast } = useToast();

  const showToast = () => {
    addToast({
      variant: 'success',
      message: 'Hey! Welcome to NotiStack 🍞',
      duration: 5000,
    });
  };

  return <button onClick={showToast}>Show Toast</button>;
}
```

## Installation

1. Clone the repository:
```sh
git clone https://github.com/hexabytecode/next-notistack
```

2. Navigate into the project directory:
```sh
cd next-notistack
```

3. Install dependencies:
```sh
npm install
```

4. Run the development server:
```sh
npm run dev
```

## Future Improvements

- Add tests for core components.
- Enhance animations.
- Port to TypeScript.

