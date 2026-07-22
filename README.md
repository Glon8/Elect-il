# Elect-il

**Elect-il** is an election simulation platform for Israel designed to demonstrate **anonymous voting** and **live vote tracking**.

Users can sign in, cast anonymous votes, and view up-to-date election results. Information about participating political parties is collected from publicly available sources and structured with the assistance of AI.

> **Note:** This project is intended as a technical demonstration and is **not** an official voting system.

## Features

- Anonymous voting
- User authentication
- Live vote tracking
- AI-assisted processing of publicly available party information
- Focus on voter privacy and data separation

## Privacy & Data Design

The backend is planned to use **MongoDB**.

To preserve voter anonymity, the design separates participant information from vote data:

- Participants are stored only as **hashed identifiers**.
- No voting choice is stored alongside participant information.
- Votes are stored separately and contain only aggregated vote counts (integers) for each option.
- This separation is intended to prevent linking a participant to a specific vote.

The participant list is intended to be retained only until the voting process has concluded, allowing the total number of participants to be verified. After a short retention period (a few hours), the participant records are planned to be permanently discarded.

## Technologies

- React (Vite)
- JavaScript
- Node.js
- MongoDB (planned)
- AI-assisted data processing

## Project Status

🚧 **In Progress**
