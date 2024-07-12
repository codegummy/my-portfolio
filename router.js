const express = require("express")
const router = express.Router()

router.get("/", (req,res) => {
  res.render("index")
})

router.get("/arduino", (req,res) => {
  res.render("arduino")
 
})

router.get("/coding", (req,res) => {
  res.render("coding")
 
})
router.get("/coding-project-one", (req,res) => {
  const locals = {
    title: "Flutter Note App"
  }
  res.render("coding-project", locals)
 
})

module.exports = router