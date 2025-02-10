require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// Test Route
app.get('/', (req, res) => {
    res.send('Backend is running!');
});

// API Route to generate structured proposal
app.post('/generate-proposal', (req, res) => {
    const { name, input, process, output, duration, budget } = req.body;

    // Convert input fields to structured proposal format
    const proposal = {
        projectName: name,
        executiveSummary: input,
        objective: process,
        targetAudience: "To be defined",
        projectComponents: output,
        timeline: `Planning Duration: ${duration}`,
        budget: budget,
        monitoringEvaluation: "To be tracked",
        potentialPartnership: "To be explored",
        conclusion: "This project aims to achieve its goals efficiently."
    };

    res.json(proposal);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
