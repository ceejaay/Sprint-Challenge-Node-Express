
const actionDb = require('../data/helpers/actionModel.js')
const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
  actionDb.get()
    .then(actions => {
      res.status(200).json(actions)
    })
  .catch(err => {
    res.status(500).json({message: 'There was a problem getting the actions'})
  })
})

router.get('/:id', (req, res) => {
  actionDb.get(req.params.id)
    .then(action => {
        res.status(200).json(action)
    })
  .catch(err => {
    console.log(err)
    res.status(500).json({message: 'There was a problem getting the action'})
  })
})

router.post('/', (req, res) => {
  const actionData = req.body
    actionDb.insert(actionData).then(actionId => {
      actionDb.get(actionId).then(newAction => {
        res.status(201).json(newAction)
      })
    }).catch(err =>{ res.status(500).json({message: 'there was a problem adding an action'}) } )

})

router.delete('/:id', (req, res) => {
  actionDb.remove(req.params.id)
    .then(count => {
        res.status(200).json({message: `${count} action was deleted`})
    })
  .catch(err => {
    console.log(err)
    res.status(500).json({message: 'There was a problem deleting the action'})
  })
})

module.exports = router;
