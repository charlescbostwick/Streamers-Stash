# Contributing to Streamer's Stash System

Thank you for your interest in contributing to Streamer's Stash System! I welcome contributions from the community and appreciate your effort in making this project better. Everything is in its infancy and I am just populating stuff as I go while I takle this project!

## Table of Contents
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Setting Up the Development Environment](#setting-up-the-development-environment)
- [Contributing Guidelines](#contributing-guidelines)
  - [Bug Reports](#bug-reports)
  - [Feature Requests](#feature-requests)
  - [Code Contributions](#code-contributions)
- [Development Workflow](#development-workflow)
- [Code of Conduct](#code-of-conduct)
- [License](#license)

## Getting Started

### Prerequisites
Before you start contributing, ensure you have the following installed on your system:
- Docker: Make sure you have Docker installed and running on your machine.
- Git: You will need Git installed to clone the project repository and manage version control.

### Setting Up the Development Environment
1. Clone the Streamer's Stash System repository from GitHub: https://github.com/AwaywithCharles/Streamers-Stash

2. Navigate to the root folder of the project (`Streamers-Stash`) and build the Docker images for both the backend and frontend: 

docker-compose build


3. Start the Docker containers for the backend and frontend:

docker-compose up


4. Access the application at the following URLs:
- Django backend: `http://localhost:8000`
- React Native frontend: `http://localhost:3000`

## Contributing Guidelines

### Bug Reports
If you encounter any bugs or issues while using the Streamer's Stash System, please [open a new issue](https://github.com/awaywithcharles/Streamers-Stash/issues/new) on GitHub. Be sure to provide detailed information about the problem, including steps to reproduce it.

### Feature Requests
We value your ideas and suggestions for improving Streamer's Stash System. If you have a feature request, please [open a new issue](https://github.com/yawaywithcharles/Streamers-Stash/issues/new) with a clear description of the feature and its benefits.

### Code Contributions
We welcome code contributions from the community. If you'd like to contribute to the project, follow these steps:

1. Fork the Streamer's Stash System repository to your GitHub account.
2. Create a new branch for your changes: git checkout -b feature/your-feature-name

Replace `your-feature-name` with a descriptive name for your changes.

3. Make your code changes and test them within the containerized environment.
4. Commit your changes to your branch with descriptive commit messages:  git commit -m "Add feature/fix for XYZ"

6. Open a pull request from your branch to the `main` branch of the main repository.

## Development Workflow
- Before you start working on a feature or bug fix, check if there's an existing issue for it. If not, create a new issue for better collaboration.
- Follow the coding style and best practices for the project. Use descriptive variable names and add comments for complex logic.
- Write unit tests whenever applicable to ensure code quality.
- Be open to feedback and be respectful to other contributors.

## Code of Conduct
Please review and adhere to our [Code of Conduct](CODE_OF_CONDUCT.md) to maintain a positive and inclusive community environment. (inwork)

## License
By contributing to Streamer's Stash System, you agree that your contributions will be licensed under the project's [LICENSE](LICENSE).

Thank you for contributing to Streamer's Stash System! Your efforts and support are highly appreciated.


