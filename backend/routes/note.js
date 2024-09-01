const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const Notes = require("../models/Notes");
const fetchUserData = require("../middleware/FetchData");

// ROUTER 1: For Fetching user notes from the database - GET request
router.get("/fetchusernotes", fetchUserData, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// ROUTER 2: For Adding New Notes from User - POST request
router.post(
  "/addnotes",
  fetchUserData,
  [
    body("title", "Enter a Title").isLength({ min: 3 }),
    body(
      "description",
      "Description should be at least 5 characters long"
    ).isLength({ min: 5 }),
  ],
  async (req, res) => {
    try {
      if (!req.user) {
        return res.status(401).send({ error: "User not authenticated" });
      }
      const { title, description } = req.body;
      const result = validationResult(req);
      if (!result.isEmpty()) {
        return res.status(400).json({ errors: result.array() });
      }
      const note = new Notes({
        title,
        description,
        user: req.user.id,
      });
      const saveUserNotes = await note.save();
      res.json(saveUserNotes);
    } catch (error) {
      res.status(500).send("Internal Server Error");
    }
  }
);

//ROUTER 3 : For update exesting Note- Login must be Required- I use put fro update notes
router.put("/updatenotes/:id", fetchUserData, async (req, res) => {
  try {
    const { title, description } = req.body;
    const updateNote = {};

    if (title) updateNote.title = title;
    if (description) updateNote.description = description;

    // Find the note by ID
    let note = await Notes.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not Found");
    }

    // Check if the note belongs to the user
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Authorized");
    }

    // Update the note
    note = await Notes.findByIdAndUpdate(
      req.params.id,
      { $set: updateNote },
      { new: true }
    );

    res.json({ note });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }

});

//ROUTE 4: FOR DROP/DELETE Notes. ITS delete request 
router.delete("/deletenote/:id", fetchUserData, async (req, res) => {

  // Find the note by ID
  let note = await Notes.findById(req.params.id);
  try {
    if (!note) {
      return res.status(404).send("Not Found");
    }


    // Check if the note belongs to the user
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Authorized");
    }

    // Delete the note
    note = await Notes.findByIdAndDelete(req.params.id);
    res.json({ "Sucess": "Note has been deleted" });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }

});
module.exports = router;
