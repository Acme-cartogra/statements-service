'use strict'
const express = require('express')
const app = express()
app.use(express.json())
app.get('/actuator/health', (_, res) => res.json({ status: 'UP' }))
app.get('/statements', (_, res) => res.json({ status: 'ok' }))
app.post('/statements', (_, res) => res.json({ status: 'ok' }))
app.get('/statements/:id', (_, res) => res.json({ status: 'ok' }))
app.listen(process.env.PORT || 8114)
