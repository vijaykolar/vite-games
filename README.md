# Vite + TypeScript + RAWG API + Chakra UI App

Welcome to the readme file for our Vite, TypeScript, RAWG API, and Chakra UI-based web application! This document will guide you through setting up, running, and understanding the structure of this project.

Table of Contents
* Introduction
* Features
* Prerequisites
* Getting Started
* Project Structure
* Configuration
* Usage
* Contributing


## Introduction

Our application is a web-based game catalog that allows users to discover and explore various video games using the RAWG API. We've built it using modern web development technologies, including Vite for fast development, TypeScript for type safety, Chakra UI for a responsive and accessible user interface, and the RAWG API for game data.

## Features

* Search for games by name.
* Browse games by genre and platform.
* Responsive and visually appealing user interface.
* Fast development and hot module replacement with Vite.
* Type-safe development with TypeScript.
* Integration with the RAWG API for up-to-date game data.


## Prerequisites

Before you begin, ensure you have met the following requirements:

* Node.js and npm installed on your development machine.
* A RAWG API key. You can obtain one by signing up at RAWG API.


## Getting Started

1. Clone this repository to your local machine:
`git clone https://github.com/vijaykolar/vite-games.git`
2. Navigate to the project folder:
`cd vite-games`
3. Install project dependencies:
`npm install or yarn`
4. Create a .env file in the project root and add your RAWG API key as follows:
`VITE_RAWG_API_KEY=your-api-key-here`
5. Start the development server:
`bash npm run dev`
6. Open your browser and navigate to http://localhost:5173 to see the application in action.


## Project Structure

The project structure is organized as follows:


* src/: Contains the application's source code.
    * assets/: images, favicon etc 
    * components/: Reusable UI components.
    * hooks/: Custom hooks
    * services/: API calls
    * utils/: Utility functions.
* vite.config.js: Vite configuration file.
* tsconfig.json: TypeScript configuration file.
* public/: Public assets like images and icons.
* .env.example: Example environment variable file.


## Configuration
You can configure the application by modifying the .env file in the project root. The primary configuration option is the VITE_RAWG_API_KEY, which should be set to your RAWG API key.

## Usage
You can use this application to explore and discover video games easily. Search for games by name, browse by genre or platform, and sort for information.


## Contributing
We welcome contributions from the community! If you'd like to contribute to this project, please raise a PR.












