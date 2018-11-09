
const projectDb = require('../data/helpers/projectModel.js')
const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
  projectDb.get()
    .then(projects => {
      res.status(200).json(projects)
    })
  .catch(err => {
    res.status(500).json({message: 'There was a problem getting the project'})
  })
})

router.get('/:id', (req, res) => {
  projectDb.get(req.params.id)
    .then(project => {
        res.status(200).json(project)
    })
  .catch(err => {
    res.status(500).json({message: 'There was a problem getting the project'})
  })
})

router.post('/', (req, res) => {
  const projectData = req.body
    projectDb.insert(projectData).then(projectId => {
      res.status(201).json(projectId)
    }).catch(err =>{ res.status(500).json({message: 'there was a problem adding an project'}) } )

})

router.put('/:id', (req, res) => {
  const projectData = req.body
    projectDb.update(req.params.id, projectData).then(project => {
      res.status(201).json(project)
    }).catch(err =>{ res.status(500).json({message: 'there was a problem updating the  project'}) } )

})

router.delete('/:id', (req, res) => {
  projectDb.remove(req.params.id)
    .then(project => {
        res.status(200).json(project)
    })
  .catch(err => {
    res.status(500).json({message: 'There was a problem deleting the project'})
  })
})
module.exports = router;
