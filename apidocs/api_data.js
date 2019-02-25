define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/assignments",
    "title": "Create Assignment",
    "name": "CreateAssignment",
    "group": "Assignment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of Assignment.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of Assignment.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of Assignment.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"pre-stitched\"",
              "\"adaptive\"",
              "\"random\""
            ],
            "optional": false,
            "field": "type",
            "description": "<p>Type of Assignment.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "duration",
            "description": "<p>Name of Assignment.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "tags",
            "description": "<p>Tags of Assignment.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "{\n    \"name\": \"quiz-101\",\n    \"title\": \"Quiz 101\",\n    \"description\": \"MCAT Quiz - Introduction\",\n    \"type\": \"pre-stitched\",\n    \"duration\": 20,\n    \"tags\": [\"mcat\", \"biology\", \"genetics\"]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "FieldError",
            "description": "<p>One of the fields is not valid</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Assignment UUID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of Assignment.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of Assignment.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of Assignment.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"pre-stitched\"",
              "\"adaptive\"",
              "\"random\""
            ],
            "optional": false,
            "field": "type",
            "description": "<p>Type of Assignment.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "duration",
            "description": "<p>Name of Assignment.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "tags",
            "description": "<p>Tags of Assignment.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Example",
          "content": "  {\n    \"id\": \"f6a4db0b-97d0-4ee7-8649-613c6df142c1\",\n    \"name\": \"quiz-101\",\n    \"title\": \"Quiz 101\",\n    \"description\": \"MCAT Quiz - Introduction\",\n    \"type\": \"pre-stitched\",\n    \"duration\": 20,\n    \"tags\": [\n        \"mcat\",\n        \"biology\",\n        \"genetics\"\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Assignment"
  },
  {
    "type": "delete",
    "url": "/api/v1/assignments/:id",
    "title": "Delete Assignment",
    "name": "DeleteAssignment",
    "group": "Assignment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Assignment UUID.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>The <code>id</code> of the Assignment was not found.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Assignment UUID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of Assignment.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of Assignment.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of Assignment.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"pre-stitched\"",
              "\"adaptive\"",
              "\"random\""
            ],
            "optional": false,
            "field": "type",
            "description": "<p>Type of Assignment.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "duration",
            "description": "<p>Name of Assignment.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "tags",
            "description": "<p>Tags of Assignment.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Example",
          "content": "  {\n    \"id\": \"f6a4db0b-97d0-4ee7-8649-613c6df142c1\",\n    \"name\": \"quiz-101\",\n    \"title\": \"Quiz 101\",\n    \"description\": \"MCAT Quiz - Introduction\",\n    \"type\": \"pre-stitched\",\n    \"duration\": 20,\n    \"tags\": [\n        \"mcat\",\n        \"biology\",\n        \"genetics\"\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Assignment"
  },
  {
    "type": "get",
    "url": "/api/v1/assignments/:id",
    "title": "Get Assignment",
    "name": "GetAssignment",
    "group": "Assignment",
    "parameter": {
      "fields": {
        "url": [
          {
            "group": "url",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Assignment UUID.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>The <code>id</code> of the Assignment was not found.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Assignment UUID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of Assignment.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of Assignment.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of Assignment.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"pre-stitched\"",
              "\"adaptive\"",
              "\"random\""
            ],
            "optional": false,
            "field": "type",
            "description": "<p>Type of Assignment.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "duration",
            "description": "<p>Name of Assignment.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "tags",
            "description": "<p>Tags of Assignment.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Example",
          "content": "  {\n    \"id\": \"f6a4db0b-97d0-4ee7-8649-613c6df142c1\",\n    \"name\": \"quiz-101\",\n    \"title\": \"Quiz 101\",\n    \"description\": \"MCAT Quiz - Introduction\",\n    \"type\": \"pre-stitched\",\n    \"duration\": 20,\n    \"tags\": [\n        \"mcat\",\n        \"biology\",\n        \"genetics\"\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Assignment"
  },
  {
    "type": "get",
    "url": "/api/v1/assignments",
    "title": "Get Assignment List",
    "name": "ListAssignment",
    "group": "Assignment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tag",
            "description": "<p>Tag to search for.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "assignments",
            "description": "<p>The assignments.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assignments.id",
            "description": "<p>Assignment UUID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assignments.name",
            "description": "<p>Name of Assignment.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assignments.title",
            "description": "<p>Title of Assignment.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assignments.description",
            "description": "<p>Description of Assignment.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"pre-stitched\"",
              "\"adaptive\"",
              "\"random\""
            ],
            "optional": false,
            "field": "assignments.type",
            "description": "<p>Type of Assignment.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "assignments.duration",
            "description": "<p>Name of Assignment.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "assignments.tags",
            "description": "<p>Tags of Assignment.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Example",
          "content": "  [{\n    \"id\": \"f6a4db0b-97d0-4ee7-8649-613c6df142c1\",\n    \"name\": \"quiz-101\",\n    \"title\": \"Quiz 101\",\n    \"description\": \"MCAT Quiz - Introduction\",\n    \"type\": \"pre-stitched\",\n    \"duration\": 20,\n    \"tags\": [\n        \"mcat\",\n        \"biology\",\n        \"genetics\"\n    ]\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Assignment"
  },
  {
    "type": "put",
    "url": "/api/v1/assignments/:id",
    "title": "Update Assignment information",
    "name": "UpdateAssignment",
    "group": "Assignment",
    "parameter": {
      "fields": {
        "url": [
          {
            "group": "url",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Assignment UUID.</p>"
          }
        ],
        "body": [
          {
            "group": "body",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Name of Assignment.</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>Title of Assignment.</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>Description of Assignment.</p>"
          },
          {
            "group": "body",
            "type": "String",
            "allowedValues": [
              "\"pre-stitched\"",
              "\"adaptive\"",
              "\"random\""
            ],
            "optional": true,
            "field": "type",
            "description": "<p>Type of Assignment.</p>"
          },
          {
            "group": "body",
            "type": "Number",
            "optional": true,
            "field": "duration",
            "description": "<p>Name of Assignment.</p>"
          },
          {
            "group": "body",
            "type": "Array",
            "optional": true,
            "field": "tags",
            "description": "<p>Tags of Assignment.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "{\n    \"name\": \"changed\",\n    \"title\": \"Changed 101\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "FieldError",
            "description": "<p>One of the fields is not valid</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>The <code>id</code> of the Assignment was not found.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Assignment UUID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of Assignment.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of Assignment.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of Assignment.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"pre-stitched\"",
              "\"adaptive\"",
              "\"random\""
            ],
            "optional": false,
            "field": "type",
            "description": "<p>Type of Assignment.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "duration",
            "description": "<p>Name of Assignment.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "tags",
            "description": "<p>Tags of Assignment.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Example",
          "content": "  {\n    \"id\": \"f6a4db0b-97d0-4ee7-8649-613c6df142c1\",\n    \"name\": \"changed\",\n    \"title\": \"Changed 101\",\n    \"description\": \"MCAT Quiz - Introduction\",\n    \"type\": \"pre-stitched\",\n    \"duration\": 20,\n    \"tags\": [\n        \"mcat\",\n        \"biology\",\n        \"genetics\"\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Assignment"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./apidocs/main.js",
    "group": "C__Users_Thomas_King_projects_kaplan_apidocs_main_js",
    "groupTitle": "C__Users_Thomas_King_projects_kaplan_apidocs_main_js",
    "name": ""
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "C__Users_Thomas_King_projects_kaplan_doc_main_js",
    "groupTitle": "C__Users_Thomas_King_projects_kaplan_doc_main_js",
    "name": ""
  }
] });
