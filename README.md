Smart QR

A modern, interactive QR Code Generator built with React. Generate, preview, download, copy, and save QR codes with full customization. Manage your saved QR codes with a sleek UI and modal popups.

💡 Features

Generate QR Codes: Enter a URL or text and instantly generate a QR code.

Customize QR Codes:

Change size (150×150, 200×200, 250×250)

Choose foreground and background colors

Download in PNG, JPEG, or WEBP

Copy QR Codes: Copy generated QR to clipboard with one click.

Saved QR Codes: Save your QR codes and manage them.

QR Modal Popup: Click a saved QR code to:

View a larger preview

Copy its link

Delete it

Search Functionality: Quickly find saved QR codes by name.

Local Storage: All saved QR codes persist in your browser.

🖥️ Screenshots

Generate QR Code

<img width="1540" height="828" alt="image" src="https://github.com/user-attachments/assets/6ba75fc3-cfc3-407a-b9c5-c99634aef38b" />
<img width="1388" height="692" alt="image" src="https://github.com/user-attachments/assets/e1e89324-8c9c-40a1-99bc-fc2a35e3f759" />

🚀 Tech Stack

Frontend: React (Functional Components, Hooks)

QR Code Generation: qrcode.react library

Storage: Browser localStorage

Styling: CSS3 (Flexbox, hover effects, modal overlay)

📂 Folder Structure
qr-code-generator/
├── public/
│   └── index.html
├── src/
│   ├── Components/
│   │   ├── GenerateQR.jsx
│   │   ├── QRSavedList.jsx
│   │   └── QRModal.jsx
│   ├── App.jsx
│   ├── App.css
│   └── index.js
├── package.json
└── README.md

⚡ Installation & Usage

Clone the repository:

git clone https://github.com/Mesandu2007/Smart-QR/new/main?filename=README.md
cd qr-code-generator


Install dependencies:

npm install


Start the development server:

npm start


Open your browser and go to http://localhost:3000

🎨 How It Works

Generate QR: Enter a name and link → customize → preview.

Save QR: Click Save to add it to the saved list.

View QR: Click a saved QR → modal opens → copy, download, or delete.

Search: Use the search bar to filter QR codes by name.
