const express = require('express');
const path = require('path');
const fileupload = require('express-fileupload');
app.get("/:blog", (req, res) => {
    res.sendFile(path.join(initial_path, "blog.html"));app.get('/editor', (req, res) => {
    res.sendFile(path.join(initial_path, "editor.html"));
})
})

app.use((req, res) => {
    res.json("404");
})