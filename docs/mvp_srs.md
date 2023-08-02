# Software Requirements Specification (SRS) for Streamer's Stash MVP

## 1. Introduction:

### 1.1 Purpose:

This document specifies the requirements for the Streamer's Stash MVP, an inventory management system tailored for social media influencers focused on Amazon products.

### 1.2 Scope:

The MVP will provide influencers the ability to manage their product inventory, determine which products are on sale on Amazon, and prioritize their streaming or promotion strategy based on this data.

### 1.3 Definitions and Acronyms:

- **ASIN**: Amazon Standard Identification Number
- **API**: Application Programming Interface

## 2. System Overview:

### 2.1 System Architecture:

- **Backend**: Django (with PostgreSQL)
- **Frontend**: React (web/desktop)
- **Hosting**: Self-hosted on a zimaboard

### 2.2 Modules:

1. **Product Management**: Allows CRUD operations for products.
2. **Amazon Integration**: Checks product status on Amazon.

## 3. Functional Requirements:

### 3.1 Product Management:

- **FR1.1**: The system shall allow users to add new products.
- **FR1.2**: The system shall allow users to update existing products.
- **FR1.3**: The system shall allow users to delete products.
- **FR1.4**: The system shall list all added products.

### 3.2 Amazon Integration:

- **FR2.1**: The system shall connect to the Amazon Product Advertising API.
- **FR2.2**: The system shall periodically check if products are on sale using ASIN.

## 4. Non-functional Requirements:

### 4.1 Usability:

- **NFR1.1**: The system shall provide a user-friendly interface suitable for non-technical users.

### 4.2 Security:

- **NFR2.1**: The system shall securely store Amazon API credentials.
- **NFR2.2**: User interactions with the platform shall occur over secured channels (HTTPS).

### 4.3 Performance:

- **NFR3.1**: The system shall load the product dashboard in under 3 seconds on standard broadband connections.

## 5. System Constraints:

- **SC1**: The system is limited to checking the sale status of products only on Amazon.
- **SC2**: Hosting is constrained to the performance of the zimaboard.

## 6. Future Enhancements:

- Integration with other affiliate platforms.
- Analytics for product performance.
- Recommendations based on market trends.

