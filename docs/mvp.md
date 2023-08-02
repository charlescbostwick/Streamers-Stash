# Streamer's Stash MVP

## 1. System Architecture:

- **Backend**: Django (with PostgreSQL)
- **Frontend**: React (web/desktop)
- **Hosting**: Self-hosted on a zimaboard

## 2. Data Model:

### Product:

- ID: Auto-incremental primary key
- Name: String
- ASIN: Unique Amazon identifier
- Amazon Link: URL
- Status: ChoiceField (on sale, normal)

## 3. Essential Backend Features:

### API Endpoints:

- Add item
- Update item
- Delete item
- List all items

### Integration:

- Basic integration with the Amazon Product Advertising API for item status.

## 4. Essential Frontend Features:

### GUI/Web Interface:

#### Main Views:

- **Dashboard**: List of all items with status icons
- **Add Item Form**: Fields for adding products
- **Edit Item Form**: Pre-filled form for updating products

#### Dynamic Features:

- On Sale filter
- Search bar based on product name or ASIN

## 5. Simplified Implementation:

- Set up a PostgreSQL database and Django ORM
- Backend development using Django
- Frontend development using a basic React template

## 6. Basic Security:

- Secure storage of API keys using environment variables
- HTTPS for secure connections (can use Let's Encrypt for a free certificate)
