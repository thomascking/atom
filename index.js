const express = require('express');
const uuid = require('uuid/v4');
const Joi = require('joi');

const app = express();

app.use(express.json());

const types = {
    PRE_STITCHED: 'pre-stitched',
    ADAPTIVE: 'adaptive',
    RANDOM: 'random'
}

const assignments = [
    {
        id: 'f6a4db0b-97d0-4ee7-8649-613c6df142c1',
        name: 'quiz-101',
        title: 'Quiz 101',
        description: 'MCAT Quiz - Introduction',
        type: types.PRE_STITCHED,
        duration: 20,
        tags: ['mcat', 'biology', 'genetics']
    },
    {
        id: uuid(),
        name: 'quiz-102',
        title: 'Quiz 102',
        description: 'MCAT Quiz - Introduction',
        type: types.PRE_STITCHED,
        duration: 20,
        tags: ['mcat', 'other', 'third']
    }
];

const assignmentSchema = Joi.object({
    name: Joi.string().min(3).regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    title: Joi.string().min(3),
    description: Joi.string(),
    type: Joi.string().only(Object.values(types)),
    duration: Joi.number().integer().min(0),
    tags: Joi.array().items(Joi.string()).unique()
});

/**
 * @api {get} /api/v1/assignments Get Assignment List
 * @apiName ListAssignment
 * @apiGroup Assignment
 *
 * @apiParam {String} [tag] Tag to search for.
 *
 * @apiSuccess {Array} assignments The assignments.
 * @apiSuccess {String} assignments.id Assignment UUID.
 * @apiSuccess {String} assignments.name Name of Assignment.
 * @apiSuccess {String} assignments.title Title of Assignment.
 * @apiSuccess {String} assignments.description Description of Assignment.
 * @apiSuccess {String="pre-stitched", "adaptive", "random"} assignments.type Type of Assignment.
 * @apiSuccess {Number} assignments.duration Name of Assignment.
 * @apiSuccess {Array} assignments.tags Tags of Assignment.
 * 
 * @apiSuccessExample {json} Response-Example
 *     [{
 *       "id": "f6a4db0b-97d0-4ee7-8649-613c6df142c1",
 *       "name": "quiz-101",
 *       "title": "Quiz 101",
 *       "description": "MCAT Quiz - Introduction",
 *       "type": "pre-stitched",
 *       "duration": 20,
 *       "tags": [
 *           "mcat",
 *           "biology",
 *           "genetics"
 *       ]
 *   }]
 */
app.get('/api/v1/assignments', (req, res) => {
    if (req.query.tag) {
        res.send(assignments.filter((a) => a.tags.indexOf(req.query.tag) >= 0));
        return;
    }
    res.send(assignments);
});

/**
 * @api {get} /api/v1/assignments/:id Get Assignment
 * @apiName GetAssignment
 * @apiGroup Assignment
 *
 * @apiParam (url) {String} id Assignment UUID.
 * 
 * @apiError (404) NotFound The <code>id</code> of the Assignment was not found.
 *
 * @apiSuccess {String} id Assignment UUID.
 * @apiSuccess {String} name Name of Assignment.
 * @apiSuccess {String} title Title of Assignment.
 * @apiSuccess {String} description Description of Assignment.
 * @apiSuccess {String="pre-stitched", "adaptive", "random"} type Type of Assignment.
 * @apiSuccess {Number} duration Name of Assignment.
 * @apiSuccess {Array} tags Tags of Assignment.
 * @apiSuccessExample {json} Response-Example
 *     {
 *       "id": "f6a4db0b-97d0-4ee7-8649-613c6df142c1",
 *       "name": "quiz-101",
 *       "title": "Quiz 101",
 *       "description": "MCAT Quiz - Introduction",
 *       "type": "pre-stitched",
 *       "duration": 20,
 *       "tags": [
 *           "mcat",
 *           "biology",
 *           "genetics"
 *       ]
 *   }
 */
app.get('/api/v1/assignments/:id', (req, res) => {
    const assignment = assignments.find(
        (item) => item.id === req.params.id);

    if (!assignment) {
        res.status(404).send('Assignment with given ID was not found');
        return;
    }

    res.send(assignment);
});

/**
 * @api {post} /api/v1/assignments Create Assignment
 * @apiName CreateAssignment
 * @apiGroup Assignment
 *
 * @apiParam {String} name Name of Assignment.
 * @apiParam {String} title Title of Assignment.
 * @apiParam {String} description Description of Assignment.
 * @apiParam {String="pre-stitched", "adaptive", "random"} type Type of Assignment.
 * @apiParam {Number} duration Name of Assignment.
 * @apiParam {Array} tags Tags of Assignment.
 * 
 * @apiParamExample {json} Request-Example
 *   {
 *       "name": "quiz-101",
 *       "title": "Quiz 101",
 *       "description": "MCAT Quiz - Introduction",
 *       "type": "pre-stitched",
 *       "duration": 20,
 *       "tags": ["mcat", "biology", "genetics"]
 *   }
 * 
 * @apiError (400) FieldError One of the fields is not valid
 *
 * @apiSuccess {String} id Assignment UUID.
 * @apiSuccess {String} name Name of Assignment.
 * @apiSuccess {String} title Title of Assignment.
 * @apiSuccess {String} description Description of Assignment.
 * @apiSuccess {String="pre-stitched", "adaptive", "random"} type Type of Assignment.
 * @apiSuccess {Number} duration Name of Assignment.
 * @apiSuccess {Array} tags Tags of Assignment.
 * 
 * @apiSuccessExample {json} Response-Example
 *     {
 *       "id": "f6a4db0b-97d0-4ee7-8649-613c6df142c1",
 *       "name": "quiz-101",
 *       "title": "Quiz 101",
 *       "description": "MCAT Quiz - Introduction",
 *       "type": "pre-stitched",
 *       "duration": 20,
 *       "tags": [
 *           "mcat",
 *           "biology",
 *           "genetics"
 *       ]
 *   }
 */
app.post('/api/v1/assignments', (req, res) => {
    const { error } = assignmentSchema.validate(req.body);
    if (error) {
        res.status(400).send(error.details.map((e) => e.message));
        return;
    }

    if (assignments.find(
        (item) => item.name === req.params.name)) {
        res.status(400).send('"name" must be unique.');
    }

    const assignment = {
        id: uuid(),
        name: req.body.name || '',
        title: req.body.title || '',
        description: req.body.description || '',
        type: req.body.type || types.RANDOM,
        duration: req.body.duration || 0,
        tags: req.body.tags || []
    };

    assignments.push(assignment);
    res.send(assignment);
});

/**
 * @api {put} /api/v1/assignments/:id Update Assignment information
 * @apiName UpdateAssignment
 * @apiGroup Assignment
 *
 * @apiParam (url) {String} id Assignment UUID.
 * @apiParam (body) {String} [name] Name of Assignment.
 * @apiParam (body) {String} [title] Title of Assignment.
 * @apiParam (body) {String} [description] Description of Assignment.
 * @apiParam (body) {String="pre-stitched", "adaptive", "random"} [type] Type of Assignment.
 * @apiParam (body) {Number} [duration] Name of Assignment.
 * @apiParam (body) {Array} [tags] Tags of Assignment.
 * 
 * @apiParamExample {json} Request-Example
 *   {
 *       "name": "changed",
 *       "title": "Changed 101"
 *   }
 * 
 * @apiError (404) NotFound The <code>id</code> of the Assignment was not found.
 * @apiError (400) FieldError One of the fields is not valid
 *
 * @apiSuccess {String} id Assignment UUID.
 * @apiSuccess {String} name Name of Assignment.
 * @apiSuccess {String} title Title of Assignment.
 * @apiSuccess {String} description Description of Assignment.
 * @apiSuccess {String="pre-stitched", "adaptive", "random"} type Type of Assignment.
 * @apiSuccess {Number} duration Name of Assignment.
 * @apiSuccess {Array} tags Tags of Assignment.
 * 
 * @apiSuccessExample {json} Response-Example
 *     {
 *       "id": "f6a4db0b-97d0-4ee7-8649-613c6df142c1",
 *       "name": "changed",
 *       "title": "Changed 101",
 *       "description": "MCAT Quiz - Introduction",
 *       "type": "pre-stitched",
 *       "duration": 20,
 *       "tags": [
 *           "mcat",
 *           "biology",
 *           "genetics"
 *       ]
 *   }
 */
app.put('/api/v1/assignments/:id', (req, res) => {
    const assignment = assignments.find(
        (item) => item.id === req.params.id);

    if (!assignment) {
        res.status(404).send('Assignment with given ID was not found');
        return;
    }

    if (assignment.name !== req.body.name && assignments.find(
        (item) => item.name === req.params.name)) {
        res.status(400).send('"name" must be unique.');
    }

    const { error } = assignmentSchema.validate(req.body);
    if (error) {
        res.status(400).send(error.details.map((e) => e.message));
        return;
    }

    assignment.name = req.body.name || assignment.name;
    assignment.title = req.body.title || assignment.title;
    assignment.description = req.body.description || assignment.description;
    assignment.type = req.body.type || assignment.type;
    assignment.duration = req.body.duration || assignment.duration;
    assignment.tags = req.body.tags || assignment.tags;

    res.send(assignment);
});

/**
 * @api {delete} /api/v1/assignments/:id Delete Assignment
 * @apiName DeleteAssignment
 * @apiGroup Assignment
 *
 * @apiParam {String} id Assignment UUID.
 * 
 * @apiError (404) NotFound The <code>id</code> of the Assignment was not found.
 *
 * @apiSuccess {String} id Assignment UUID.
 * @apiSuccess {String} name Name of Assignment.
 * @apiSuccess {String} title Title of Assignment.
 * @apiSuccess {String} description Description of Assignment.
 * @apiSuccess {String="pre-stitched", "adaptive", "random"} type Type of Assignment.
 * @apiSuccess {Number} duration Name of Assignment.
 * @apiSuccess {Array} tags Tags of Assignment.
 * 
 * @apiSuccessExample {json} Response-Example
 *     {
 *       "id": "f6a4db0b-97d0-4ee7-8649-613c6df142c1",
 *       "name": "quiz-101",
 *       "title": "Quiz 101",
 *       "description": "MCAT Quiz - Introduction",
 *       "type": "pre-stitched",
 *       "duration": 20,
 *       "tags": [
 *           "mcat",
 *           "biology",
 *           "genetics"
 *       ]
 *   }
 */
app.delete('/api/v1/assignments/:id', (req, res) => {
    const assignment = assignments.find(
        (item) => item.id === req.params.id);

    if (!assignment) {
        res.status(404).send('Assignment with given ID was not found');
        return;
    }

    const index = assignments.indexOf(assignment);
    assignments.splice(index, 1);

    res.send(assignment);
});

app.listen(3000, 
    () => console.log('Running server on port 3000...'));
