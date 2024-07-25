# reformed-api
This API provides access to various Reformed creeds and confessions, including details and metadata. You can retrieve all creeds, search for specific creeds, and get detailed metadata.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mrnazu/reformed-api
   cd reformed-api
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the server:**
   ```bash
   npm start
   ```

   The server will run on `http://localhost:3000`.

## API Endpoints

### 1. Creeds

- **Get All Creeds**
  - **URL:** `/api/creeds`
  - **Method:** `GET`
  - **Success Response:**
    - **Code:** 200
    - **Content:** List of all creeds with metadata.

- **Get Creed by ID**
  - **URL:** `/api/creeds/:id`
  - **Method:** `GET`
  - **URL Params:** 
    - `id` (string): The ID of the creed.
  - **Success Response:**
    - **Code:** 200
    - **Content:** Detailed information about the creed.

### 2. Metadata

- **Get All Metadata**
  - **URL:** `/api/metadata`
  - **Method:** `GET`
  - **Success Response:**
    - **Code:** 200
    - **Content:** List of metadata for all creeds.

- **Get Metadata by ID**
  - **URL:** `/api/metadata/:id`
  - **Method:** `GET`
  - **URL Params:**
    - `id` (string): The ID of the creed.
  - **Success Response:**
    - **Code:** 200
    - **Content:** Metadata for the specified creed.

### 3. Search

- **Search Creeds**
  - **URL:** `/api/search`
  - **Method:** `GET`
  - **Query Parameters:**
    - `query` (string): The search term.
  - **Success Response:**
    - **Code:** 200
    - **Content:** List of creeds matching the search term.
    
## Error Handling

Errors are handled with a generic message and a 500 status code. Custom error handling can be added if needed.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.