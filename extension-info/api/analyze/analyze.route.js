const express = require('express')
const router = express.Router()
const AnalyzeController = require('./analyze.controller')

router.post('/', AnalyzeController.analyze)
router.post('/dynamic', AnalyzeController.DynamicAnalyzer)

module.exports = router