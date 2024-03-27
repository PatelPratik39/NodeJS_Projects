const http = require("http");
const url = require("url");

// Define capital data
const capitalData = {
  Alabama: "Montgomery",
  Alaska: "Juneau",
  Arizona: "Phoenix",
  Arkansas: "Little Rock",
  California: "Sacramento",
  Colorado: "Denver",
  Connecticut: "Hartford",
  Delaware: "Dover",
  Florida: "Tallahassee",
  Georgia: "Atlanta",
  Hawaii: "Honolulu",
  Idaho: "Boise",
  Illinois: "Springfield",
  Indiana: "Indianapolis",
  Iowa: "Des Moines",
  Kansas: "Topeka",
  Kentucky: "Frankfort",
  Louisiana: "Baton Rouge",
  Maine: "Augusta",
  Maryland: "Annapolis",
  Massachusetts: "Boston",
  Michigan: "Lansing",
  Minnesota: "Saint Paul",
  Mississippi: "Jackson",
  Missouri: "Jefferson City",
  Montana: "Helena",
  Nebraska: "Lincoln",
  Nevada: "Carson City",
  "New Hampshire": "Concord",
  "New Jersey": "Trenton",
  "New Mexico": "Santa Fe",
  "New York ": "Albany",
  "North Carolina": "Raleigh",
  "North Dakota": "Bismarck",
  Ohio: "Columbus",
  Oklahoma: "Oklahoma City",
  Oregon: "Salem",
  Pennsylvania: "Harrisburg",
  "Rhode Island": "Providence",
  "South Carolina": "Columbia",
  "South Dakota": "Pierre",
  Tennessee: "Nashville",
  Texas: "Austin",
  Utah: "Salt Lake City",
  Vermont: "Montpelier",
  Virginia: "Richmond",
  Washington: "Olympia",
  "West Virginia": "Charleston",
  Wisconsin: "Madison",
  Wyoming: "Cheyenne"
};

// Create HTTP server
const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url, true);

  if (pathname === "/getCapital" && query.state) {
    const state = query.state;
    const capital = capitalData[state];

    if (capital) {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(`The capital of ${state} is ${capital}`);
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end(`Capital data for ${state} not found`);
    }
  } else if (pathname === "/") {
    // Serve HTML page for the root path
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>State Capital Fetcher</title>
      </head>
      <body >
        <h1>State Capital Fetcher</h1>
        <form id="stateForm">
          <label for="stateInput">Enter State Name:</label>
          <input type="text" id="stateInput" name="state">
          <button type="submit">Fetch Capital</button>
        </form>
        <div id="capitalDisplay"></div>

        <script>
          document.getElementById('stateForm').addEventListener('submit', async (event) => {
            event.preventDefault();
            const state = document.getElementById('stateInput').value;

            try {
              const response = await fetch(\`/getCapital?state=\${encodeURIComponent(state)}\`);
              const data = await response.text();
              document.getElementById('capitalDisplay').textContent = data;
            } catch (error) {
              console.error('Error fetching capital:', error);
              document.getElementById('capitalDisplay').textContent = 'Error fetching capital';
            }
          });
        </script>
      </body>
      </html>
    `);
  } else {
    res.writeHead(400, { "Content-Type": "text/plain" });
    res.end("Invalid request");
  }
});

// Start server on port 3000
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
