---

# Amazon Search API

## Introduction

The Amazon Search API is a robust Node.js application tailored for searching and extracting product data from Amazon's website. It's designed to aid developers in acquiring detailed product information for use in data analysis, market research, and e-commerce applications.

## Features

- **Advanced Data Search:** Retrieves comprehensive product information, including names, prices, descriptions, ratings, and reviews.
- **Flexible Search Parameters:** Users can specify search criteria such as keywords, categories, or specific products.
- **JSON and CSV Data Output:** Delivers search results in both JSON and CSV formats for versatile data handling.
- **Reliable Error Handling:** Effectively manages common issues like network interruptions or website structure changes.
- **Responsible Search Practices:** Implements rate limiting and IP rotation to maintain compliance with Amazon's website policies.

## Installation

Prerequisites include Node.js (version 14 or higher). Clone the repository:

```bash
git clone https://github.com/solletivivek/amazone-search-api.git
cd amazon-search-api
```

Install necessary dependencies:

```bash
npm install
```

## Usage

Run the search process:

```bash
node index.js
```

To customize searches, modify the `config.json` with your desired search parameters.

## Configuration

Update the `config.json` file to set up your search preferences:

```json
{
  "searchUrl": "https://www.amazon.com",
  "searchKeywords": ["electronics", "latest books"],
  "outputFormat": "json",
  "proxySettings": {
    "enableProxy": true,
    "proxyList": ["http://example-proxy.com:8080", "http://another-proxy.com:8080"]
  }
}
```

## API Endpoints

- **GET `/search`**: Starts the search operation based on configured parameters.
- **GET `/results`**: Retrieves the latest search results in the chosen format.

## Contributing

Contributions to improve or expand the API are highly appreciated:

1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Make your changes.
4. Push to your branch.
5. Create a pull request.

## Documentation

Additional documentation, located in the `docs` folder, includes detailed information on advanced configurations, proxy management, and troubleshooting.

## Disclaimer

The Amazon Search API is intended solely for educational and research purposes. Ensure compliance with Amazon's terms of service and legal guidelines, as unauthorized data retrieval may breach these terms.

---
