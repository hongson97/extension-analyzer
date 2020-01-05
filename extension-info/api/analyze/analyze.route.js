const express = require('express')
const router = express.Router()
const AnalyzeController = require('./analyze.controller')

router.post('/', AnalyzeController.analyze)
router.post('/dynamic', AnalyzeController.DynamicAnalyzer)
router.post('/get-static', AnalyzeController.getStaticStatus)
router.get('/get-result', AnalyzeController.getStatusAnalyzer)

module.exports = router