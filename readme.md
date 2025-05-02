# Color Detector

## Overview
The **Color Detector** project is a full-stack application that allows users to detect and identify colors from images or through user input. It consists of a backend for processing color data and a frontend for user interaction.

## Features
### Backend
- **Color Detection**: Identifies the closest color name from a predefined dataset based on RGB or HEX values.
- **Image Processing**: Extracts dominant colors from uploaded images.
- **API Support**: Provides RESTful APIs for color detection and image processing.
- **Custom Color Dataset**: Allows adding custom colors to the dataset for detection.
- **Error Handling**: Handles invalid inputs gracefully.

### Frontend
- **User-Friendly Interface**: Intuitive design for uploading images or entering color codes.
- **Real-Time Detection**: Displays detected colors instantly.
- **Color Palette Display**: Shows a palette of dominant colors from uploaded images.
- **Interactive Input**: Accepts RGB, HEX, or image files for detection.
- **Responsive Design**: Works seamlessly on desktop and mobile devices.

## Installation
### Prerequisites
- Python 3.x
- Node.js
- npm or yarn
- Required Python libraries: `flask`, `opencv-python`, `numpy`, `pillow`
- Required frontend libraries: React, Axios

### Steps
1. Clone the repository:
    ```bash
    git clone https://github.com/your-repo/color-detector.git
    cd color-detector
    ```
2. Install backend dependencies:
    ```bash
    pip install -r requirements.txt
    ```
3. Install frontend dependencies:
    ```bash
    cd frontend
    npm install
    ```
4. Start the backend server:
    ```bash
    python app.py
    ```
5. Start the frontend server:
    ```bash
    cd frontend
    npm start
    ```

## Usage
1. Open the application in your browser.
2. Upload an image or input a color code (RGB/HEX).
3. View the detected color name and palette.

## Project Structure
```
color-detector/
├── backend/
│   ├── app.py
│   ├── color_data.json
│   ├── utils/
│   │   ├── color_detection.py
│   │   └── image_processing.py
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   └── styles.css
│   ├── public/
│   └── package.json
├── README.md
└── requirements.txt
```

## Contributing
1. Fork the repository.
2. Create a new branch for your feature/bug fix.
3. Submit a pull request.

