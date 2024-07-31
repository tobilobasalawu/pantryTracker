
# Pantry Tracker

Pantry Tracker is a simple inventory management application built with Next.js and Firebase. It allows users to manage and keep track of their pantry items, including the item name, quantity, expiration date, and price.

## Features

- Add new pantry items
- Update item quantity, expiration date, and price
- Remove items from the inventory
- Search for items in the inventory
- Responsive design for use on various devices

## Tech Stack

- **Frontend:** Next.js, Material-UI
- **Backend:** Firebase Firestore

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Firebase account

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/tobilobasalawu/pantryTracker.git
   cd pantryTracker
   ```

2. **Install dependencies:**

   ```sh
   npm install
   # or
   yarn install
   ```

3. **Setup Firebase:**

   - Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Set up Firestore in your Firebase project.
   - Create a `.env.local` file in the root of your project and add your Firebase configuration:

     ```env
     NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
     NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
     NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
     NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
     NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
     NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
     NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
     ```

### Running the App

1. **Start the development server:**

   ```sh
   npm run dev
   # or
   yarn dev
   ```

2. **Open your browser and navigate to:**

   ```
   http://localhost:3000
   ```

## Deployment

You can deploy your Next.js app to Vercel with the following steps:

1. **Push your code to GitHub.**

2. **Create a new project on [Vercel](https://vercel.com/):**

   - Import your GitHub repository.
   - During the setup, configure the environment variables as specified in the `.env.local` file.

3. **Deploy the project:**

   - Vercel will automatically build and deploy your project.

## Usage

1. **Add a new item:**
   - Click the "Add New Item" button.
   - Fill in the item details (name, quantity, expiration date, and price).
   - Click "Add" to save the item.

2. **Search for items:**
   - Use the search bar to filter items by name.

3. **Remove an item:**
   - Click the "Remove" button next to the item you want to delete.


## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Material-UI](https://mui.com/)
- [Firebase](https://firebase.google.com/)

