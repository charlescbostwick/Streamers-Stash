# Software Requirements Specification for Streamer's Stash System

## 1. Introduction:

### 1.1 Purpose:

This document provides a detailed description of the requirements for the "Streamer's Stash System." The system is crafted for social media influencers, primarily on the Amazon platform, to manage their product inventory and analyze trends on Amazon efficiently.

### 1.2 Scope:

The Streamer's Stash System is a comprehensive tool designed to enable Amazon platform influencers to track their product inventory, analyze Amazon trends, and quickly identify products on sale. It offers a web interface and a cross-platform mobile app developed with React Native. Future enhancements include expansion to other social media platforms.

### 1.3 Definitions and Acronyms:

- **ORM**: Object Relational Mapping
- **API**: Application Programming Interface
- **ASIN**: Amazon Standard Identification Number

## 2. Overall Description:

### 2.1 Product Perspective:

The system will be a standalone application hosted on a Zimaboard. The backend uses Django, interfaces with a PostgreSQL database, and uses Python to manage business logic. The front end for the web interface is React, while the mobile application uses React Native for cross-platform accessibility.

### 2.2 Product Functions:

#### Inventory Management:
- Add and input items.
- Update item details.
- Delete items from inventory.
- List and locate items.
- Generate periodic reports.

#### Amazon Analytics:
- Interface with Amazon Product Advertising API.
- Analyze trends for users' products on Amazon.
- Identify products on sale or on the "movers and shakers" list.

## 3. System Features:

### 3.1 Inventory Management:

#### 3.1.1 Add Item:
Users can add a new item with the following details: Name, ASIN, URL, Current Price, Location, Status, Date of Purchase, and Warranty Info.

#### 3.1.2 Update Item:
Allows users to modify any details of an item in their inventory.

#### 3.1.3 Delete Item:
Permits users to remove an item from the inventory.

#### 3.1.4 Generate Report:
Users can generate a report of all items filtered by status or location.

### 3.2 Amazon Analytics:

#### 3.2.1 Trend Analysis:
The system will regularly query Amazon for the user's items to determine trending ones.

#### 3.2.2 Sales Analysis:
Identifies products that are currently on sale on Amazon.

## 4. Security Features:

- Secure storage of Amazon API credentials.
- User interactions with the platform occur over secured channels (HTTPS).

## 5. Future Enhancements:

### 5.1 Data Analysis and Visualization:
- Data visualization integration using Chart.js, D3.js, Seaborn, or Plotly.
- Advanced statistical insights using Scipy and Statsmodels.
- Machine learning analytics with Scikit-learn.

### 5.2 Integration with Other Platforms:
- Facebook
- Twitter
- Twitch.tv
- Instagram
- Patreon
- WordPress
- Pinterest

### 5.3 Database Optimization:
- Monitoring with Django Debug Toolbar.
- Database Indexing for faster and optimized queries.

### 5.4 Cache & Performance:
- Integrate caching mechanisms with Redis to enhance performance.
