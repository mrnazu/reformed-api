# API Documentation

**API Base URL:** `http://localhost:3000/api`

#### 1. **Creeds**

**Get All Creeds**

- **Endpoint:** `/api/creeds`
- **Method:** `GET`
- **Description:** Retrieve a list of all creeds.
- **Response:**
  ```json
  [
    {
      "id": "apostles_creed",
      "title": "Apostles' Creed",
      "year": "710",
      "format": "Creed"
    }
    // More creed objects...
  ]
  ```

**Get Creed by ID**

- **Endpoint:** `/api/creeds/:id`
- **Method:** `GET`
- **Description:** Retrieve details of a specific creed by ID.
- **URL Parameters:**
  - `id` (string): The ID of the creed to retrieve.
- **Response:**
  ```json
  {
    "Metadata": {
      "Title": "Apostles' Creed",
      "AlternativeTitles": ["Apostolic Creed", "Symbol of the Apostles"],
      "Year": "710",
      "Authors": [],
      "Location": null,
      "OriginalLanguage": "Latin",
      "OriginStory": "The title Symbolum Apostolicum...",
      "SourceUrl": "https://www.crcna.org/welcome/beliefs/creeds/apostles-creed",
      "SourceAttribution": "Public Domain",
      "CreedFormat": "Creed"
    },
    "Data": {
      "Content": "I believe in God, the Father almighty..."
    }
  }
  ```

#### 2. **Metadata**

**Get All Metadata**

- **Endpoint:** `/api/metadata`
- **Method:** `GET`
- **Description:** Retrieve a list of metadata for all creeds.
- **Response:**
  ```json
  [
    {
      "id": "apostles_creed",
      "title": "Apostles' Creed",
      "year": "710",
      "format": "Creed"
    }
    // More metadata objects...
  ]
  ```

**Get Metadata by ID**

- **Endpoint:** `/api/metadata/:id`
- **Method:** `GET`
- **Description:** Retrieve metadata for a specific creed by ID.
- **URL Parameters:**
  - `id` (string): The ID of the creed to retrieve metadata for.
- **Response:**
  ```json
  {
    "id": "apostles_creed",
    "title": "Apostles' Creed",
    "year": "710",
    "format": "Creed"
  }
  ```

#### 3. **Search**

**Search Creeds**

- **Endpoint:** `/api/search`
- **Method:** `GET`
- **Description:** Search for creeds based on a query string.
- **Query Parameters:**
  - `query` (string): The search term to use.
- **Response:**
  ```json
  [
    {
      "id": "apostles_creed",
      "title": "Apostles' Creed",
      "year": "710",
      "format": "Creed"
    }
  ]
  ```

#### 4. **Question**

**Get Specific Question from Catechism**

- **Endpoint:** `/creeds/:id/questions/:questionNumber`
- **Method:** `GET`
- **Description:** Retrieves a specific question from a catechism by its ID and question number.
- **Response:**
  ```json
  [
    {
      "Number": "11",
      "Question": "...",
      "Answer": "..."
    }
  ]
  ```
  Thanks yall :)