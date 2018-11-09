
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

router.get('/:id/actions', (req, res) => {
  projectDb.getProjectActions(req.params.id)
    .then(projectActions => {
        res.status(200).json(projectActions)
    })
  .catch(err => {
    res.status(500).json({message: 'There was a problem getting the project actions'})
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
      if(project) {
        res.status(201).json(project)
      } else {
         res.status(404).json({message: 'There is no project with that id'})
      }
    }).catch(err =>{ res.status(500).json({message: 'there was a problem updating the  project'}) } )

})

router.delete('/:id', (req, res) => {
  projectDb.remove(req.params.id)
    .then(count => {
      if(count) {
        res.status(200).json({message: 'deleted project'})
      } else {
         res.status(404).json({message: 'There is no project with that id'})
      }
    })
  .catch(err => {
    res.status(500).json({message: 'There was a problem deleting the project'})
  })
})
module.exports = router;
