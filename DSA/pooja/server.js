const express = require("express");
const { exec } = require("child_process");
const app = express();
const PORT = 3002;  // different from your Trie port

app.get("/login", (req, res) => {
    let roll = req.query.roll;
    let password = req.query.password;

    exec(`student_backend.exe "${roll}" "${password}"`, (err, stdout) => {
        if (err) return res.send("ERROR");
        res.send(stdout.trim());
    });
});

app.listen(PORT, () => {
    console.log("Student Portal Server running on port 3002");
});
