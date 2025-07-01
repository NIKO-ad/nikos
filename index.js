const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/metrics', (req, res) => {
  res.json([
    { label: "Total Revenue", value: "$1,250" },
    { label: "Clicks", value: "8,400" },
    { label: "Conversions", value: "630" },
    { label: "Videos Generated", value: "120" }
  ]);
});

app.get('/api/products', (req, res) => {
  res.json([
    { name: "Product A", score: 82 },
    { name: "Product B", score: 74 },
    { name: "Product C", score: 67 }
  ]);
});

app.get('/api/links', (req, res) => {
  res.json([
    { name: "Link 1", clicks: "1,500", conversions: "120" },
    { name: "Link 2", clicks: "1,200", conversions: "90" }
  ]);
});

app.listen(5000, () => {
  console.log('✅ Server is running on http://localhost:5000');
});
