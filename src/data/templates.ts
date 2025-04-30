
export interface Template {
  id: string;
  title: string;
  category: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  timeSaving: string;
  integrations: string[];
  workflowId: string;
  rating: number;
  downloads: number;
}

export const templateCategories = [
  'All',
  'Sales',
  'IT Ops',
  'Marketing',
  'Engineering',
  'DevOps',
  'Design',
  'Finance',
  'HR',
  'Product',
  'Support',
  'AI',
  'SecOps',
  'Other'
];

export const templates: Template[] = [
  {
    id: 'template-1',
    title: 'AI Customer Support Email Responder',
    category: 'Support',
    description: 'Automatically analyze incoming customer support emails, categorize by intent, and generate appropriate responses using AI.',
    difficulty: 'Intermediate',
    timeSaving: '15 hours/week',
    integrations: ['Gmail', 'Zendesk', 'OpenAI'],
    workflowId: 'email-responder',
    rating: 4.8,
    downloads: 1240
  },
  {
    id: 'template-2',
    title: 'Lead Enrichment & Scoring Workflow',
    category: 'Sales',
    description: 'Enrich lead data from multiple sources, calculate lead scores based on custom criteria, and route high-quality leads to your sales team.',
    difficulty: 'Intermediate',
    timeSaving: '10 hours/week',
    integrations: ['HubSpot', 'Clearbit', 'Slack'],
    workflowId: 'lead-scoring',
    rating: 4.9,
    downloads: 2150
  },
  {
    id: 'template-3',
    title: 'Social Media Content Calendar Automation',
    category: 'Marketing',
    description: 'Create, schedule, and post social media content across multiple platforms from a single spreadsheet or Notion database.',
    difficulty: 'Beginner',
    timeSaving: '8 hours/week',
    integrations: ['Google Sheets', 'Buffer', 'Twitter', 'LinkedIn'],
    workflowId: 'social-calendar',
    rating: 4.7,
    downloads: 1876
  },
  {
    id: 'template-4',
    title: 'Server Monitoring & Alert System',
    category: 'IT Ops',
    description: 'Monitor server health metrics and automatically alert the right team members when thresholds are exceeded.',
    difficulty: 'Advanced',
    timeSaving: '5 hours/week',
    integrations: ['Prometheus', 'PagerDuty', 'Slack'],
    workflowId: 'server-monitor',
    rating: 4.6,
    downloads: 985
  },
  {
    id: 'template-5',
    title: 'Invoice Processing & Approval Workflow',
    category: 'Finance',
    description: 'Extract data from incoming invoices, route for appropriate approvals, and sync to your accounting system.',
    difficulty: 'Intermediate',
    timeSaving: '12 hours/week',
    integrations: ['DocParser', 'QuickBooks', 'Xero'],
    workflowId: 'invoice-processing',
    rating: 4.9,
    downloads: 1540
  },
  {
    id: 'template-6',
    title: 'Automated Bug Report Triage',
    category: 'Engineering',
    description: 'Process incoming bug reports, categorize by severity, assign to appropriate team members, and create tickets in your project management system.',
    difficulty: 'Advanced',
    timeSaving: '7 hours/week',
    integrations: ['GitHub', 'Jira', 'Slack'],
    workflowId: 'bug-triage',
    rating: 4.8,
    downloads: 1120
  },
  {
    id: 'template-7',
    title: 'Employee Onboarding Workflow',
    category: 'HR',
    description: 'Automate the employee onboarding process by creating accounts, assigning training, sending welcome materials, and notifying relevant departments.',
    difficulty: 'Intermediate',
    timeSaving: '6 hours/employee',
    integrations: ['Google Workspace', 'BambooHR', 'Slack'],
    workflowId: 'employee-onboarding',
    rating: 4.7,
    downloads: 980
  },
  {
    id: 'template-8',
    title: 'AI Content Generation Pipeline',
    category: 'AI',
    description: 'Generate blog posts, social media updates, and email newsletters from simple prompts using AI then route for human review.',
    difficulty: 'Intermediate',
    timeSaving: '20 hours/week',
    integrations: ['OpenAI', 'Google Docs', 'WordPress'],
    workflowId: 'content-generation',
    rating: 4.9,
    downloads: 2340
  },
  {
    id: 'template-9',
    title: 'Automated Security Vulnerability Scanner',
    category: 'SecOps',
    description: 'Scan your codebase and dependencies for security vulnerabilities and automatically create tickets for critical issues.',
    difficulty: 'Advanced',
    timeSaving: '8 hours/week',
    integrations: ['GitHub', 'Snyk', 'Jira'],
    workflowId: 'security-scanner',
    rating: 4.6,
    downloads: 760
  }
];

// Sample n8n workflows for templates
export const templateWorkflows = {
  'email-responder': {
    "nodes": [
      {
        "parameters": {},
        "name": "Start",
        "type": "n8n-nodes-base.start",
        "typeVersion": 1,
        "position": [
          250,
          300
        ]
      },
      {
        "parameters": {
          "authentication": "oauth2",
          "resource": "message",
          "operation": "get",
          "limit": 10,
          "filters": {
            "subject": "support"
          }
        },
        "name": "Gmail",
        "type": "n8n-nodes-base.gmail",
        "typeVersion": 1,
        "position": [
          450,
          300
        ]
      },
      {
        "parameters": {
          "content": "={{ $json.body }}",
          "options": {}
        },
        "name": "OpenAI",
        "type": "n8n-nodes-base.openAi",
        "typeVersion": 1,
        "position": [
          650,
          300
        ]
      },
      {
        "parameters": {
          "conditions": {
            "string": [
              {
                "value1": "={{ $json[\"sentiment\"] }}",
                "operation": "contains",
                "value2": "positive"
              }
            ]
          }
        },
        "name": "IF",
        "type": "n8n-nodes-base.if",
        "typeVersion": 1,
        "position": [
          850,
          300
        ]
      },
      {
        "parameters": {
          "fromEmail": "support@company.com",
          "toEmail": "={{ $json.from }}",
          "subject": "Re: {{ $json.subject }}",
          "text": "={{ $json.response }}"
        },
        "name": "Send Email",
        "type": "n8n-nodes-base.emailSend",
        "typeVersion": 1,
        "position": [
          1050,
          200
        ]
      },
      {
        "parameters": {
          "resource": "ticket",
          "operation": "create",
          "subject": "Customer Support: {{ $json.subject }}",
          "description": "Customer email:\n\n{{ $json.body }}"
        },
        "name": "Create Ticket",
        "type": "n8n-nodes-base.zendesk",
        "typeVersion": 1,
        "position": [
          1050,
          400
        ]
      }
    ],
    "connections": {
      "Start": {
        "main": [
          [
            {
              "node": "Gmail",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Gmail": {
        "main": [
          [
            {
              "node": "OpenAI",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "OpenAI": {
        "main": [
          [
            {
              "node": "IF",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "IF": {
        "main": [
          [
            {
              "node": "Send Email",
              "type": "main",
              "index": 0
            }
          ],
          [
            {
              "node": "Create Ticket",
              "type": "main",
              "index": 0
            }
          ]
        ]
      }
    }
  },
  'lead-scoring':{
    "meta": {
      "instanceId": "f0a68da631efd4ed052a324b63ff90f7a844426af0398a68338f44245d1dd9e5"
    },
    "nodes": [
      {
        "id": "04750e9b-6ce3-401b-89e7-f1f17f3a4a28",
        "name": "When clicking \"Execute Workflow\"",
        "type": "n8n-nodes-base.manualTrigger",
        "position": [
          -180,
          300
        ],
        "parameters": {},
        "typeVersion": 1
      },
      {
        "id": "7a8bb997-5a2d-4ee0-a1ca-bebe9fe32bc2",
        "name": "HTTP Request",
        "type": "n8n-nodes-base.httpRequest",
        "position": [
          640,
          460
        ],
        "parameters": {
          "url": "=https://www.{{ $node[\"Split In Batches\"].json[\"Domain\"] }}",
          "options": {
            "redirect": {
              "redirect": {
                "followRedirects": true
              }
            }
          }
        },
        "typeVersion": 3,
        "continueOnFail": true
      },
      {
        "id": "6409f0c4-bf93-4a1d-a74c-e294fb39895f",
        "name": "HTML Extract",
        "type": "n8n-nodes-base.htmlExtract",
        "position": [
          820,
          460
        ],
        "parameters": {
          "options": {
            "trimValues": false
          },
          "extractionValues": {
            "values": [
              {
                "key": "body",
                "cssSelector": "html"
              }
            ]
          }
        },
        "typeVersion": 1,
        "continueOnFail": true
      },
      {
        "id": "f45fcc6a-9ccd-43c9-9eaf-1797768e1e62",
        "name": "OpenAI",
        "type": "n8n-nodes-base.openAi",
        "position": [
          1140,
          460
        ],
        "parameters": {
          "prompt": "=This is the content of the website {{ $node[\"Split In Batches\"].json[\"Domain\"] }}:\"{{ $json[\"contentShort\"] }}\"\n\nIn a JSON format:\n\n- Give me the value proposition of the company. In less than 25 words. In English. Casual Tone. Format is: \"[Company Name] helps [target audience] [achieve desired outcome] and [additional benefit]\"\n\n- Give me the industry of the company. (Classify using this industry list: [Agriculture, Arts, Construction, Consumer Goods, Education, Entertainment, Finance, Other, Health Care, Legal, Manufacturing, Media & Communications, Public Administration, Advertisements, Real Estate, Recreation & Travel, Retail, Software, Transportation & Logistics, Wellness & Fitness] if it's ambiguous between Sofware and Consumer Goods, prefer Consumer Goods)\n\n- Guess the target audience of each company.(Classify and choose 1 from this list: [sales teams, marketing teams, HR teams, customer Service teams, consumers, C-levels] Write it in lowercase)\n\n- Tell me if they are B2B or B2C\n\nformat should be:\n{\"value_proposition\": value_proposition,\n\"industry\": industry,\n\"target_audience\": target_audience, \n\"market\": market }\n\nJSON:",
          "options": {
            "topP": 1,
            "maxTokens": 120,
            "temperature": 0
          }
        },
        "credentials": {
          "openAiApi": {
            "id": "67",
            "name": "Lucas Open AI"
          }
        },
        "typeVersion": 1,
        "continueOnFail": true
      },
      {
        "id": "8de6c3d4-316f-4e00-a9f5-a4deefce90b3",
        "name": "Merge",
        "type": "n8n-nodes-base.merge",
        "position": [
          1600,
          320
        ],
        "parameters": {
          "mode": "combine",
          "options": {},
          "combinationMode": "mergeByPosition"
        },
        "typeVersion": 2
      },
      {
        "id": "669f888e-1416-4291-a854-07ffbbbfcab1",
        "name": "Clean Content",
        "type": "n8n-nodes-base.code",
        "position": [
          980,
          460
        ],
        "parameters": {
          "mode": "runOnceForEachItem",
          "jsCode": "if ($input.item.json.body){\n\n\n\n$input.item.json.content = $input.item.json.body.replaceAll('/^\\s+|\\s+$/g', '').replace('/(\\r\\n|\\n|\\r)/gm', \"\").replace(/\\s+/g, ' ')\n\n\n  $input.item.json.contentShort = $input.item.json.content.slice(0, 10000)\n}\n\n\n\n\nreturn $input.item"
        },
        "executeOnce": false,
        "typeVersion": 1,
        "continueOnFail": true,
        "alwaysOutputData": true
      },
      {
        "id": "dbd5f866-2f5e-4adf-b1b5-a27b08c0425a",
        "name": "Update Google Sheets",
        "type": "n8n-nodes-base.googleSheets",
        "position": [
          1840,
          320
        ],
        "parameters": {
          "options": {},
          "fieldsUi": {
            "values": [
              {
                "column": "Market",
                "fieldValue": "={{ $json[\"market\"] }}"
              },
              {
                "column": "Industry",
                "fieldValue": "={{ $json[\"industry\"] }}"
              },
              {
                "column": "Value Proposition",
                "fieldValue": "={{ $json[\"value_proposition\"] }}"
              },
              {
                "column": "Target Audience",
                "fieldValue": "={{ $json[\"target_audience\"] }}"
              }
            ]
          },
          "operation": "update",
          "sheetName": {
            "__rl": true,
            "mode": "list",
            "value": "gid=0",
            "cachedResultUrl": "https://docs.google.com/spreadsheets/d/13h8HPWKha5kZHDeKxAPQvQqAOonof5cgpxzh79tIQfY/edit#gid=0",
            "cachedResultName": "Sheet1"
          },
          "documentId": {
            "__rl": true,
            "mode": "url",
            "value": "https://docs.google.com/spreadsheets/d/18iZ59I0q2AeElqcEpyJECNlSv4M6iJll9PQzXQkqEUk/edit#gid=0",
            "__regex": "https:\\/\\/(?:drive|docs)\\.google\\.com\\/\\w+\\/d\\/([0-9a-zA-Z\\-_]+)(?:\\/.*|)"
          },
          "valueToMatchOn": "={{ $json[\"Domain\"] }}",
          "columnToMatchOn": "Domain"
        },
        "credentials": {
          "googleSheetsOAuth2Api": {
            "id": "2",
            "name": "Google Sheets account lucas"
          }
        },
        "typeVersion": 3
      },
      {
        "id": "f8bf8b70-6070-447b-af22-4d4e1ffe3539",
        "name": "Parse JSON",
        "type": "n8n-nodes-base.code",
        "position": [
          1300,
          460
        ],
        "parameters": {
          "mode": "runOnceForEachItem",
          "jsCode": "// Add a new field called 'myNewField' to the\n// JSON of the item\n$input.item.json.value_proposition=JSON.parse($input.item.json.text).value_proposition\n\n$input.item.json.industry=JSON.parse($input.item.json.text).industry\n\n$input.item.json.market=JSON.parse($input.item.json.text).market\n\n$input.item.json.target_audience=JSON.parse($input.item.json.text).target_audience\n\nreturn $input.item;"
        },
        "typeVersion": 1
      },
      {
        "id": "2754c6e1-9cf6-47d4-ad97-0797ec9155df",
        "name": "Read Google Sheets",
        "type": "n8n-nodes-base.googleSheets",
        "position": [
          40,
          300
        ],
        "parameters": {
          "options": {},
          "sheetName": {
            "__rl": true,
            "mode": "list",
            "value": "gid=0",
            "cachedResultUrl": "https://docs.google.com/spreadsheets/d/13h8HPWKha5kZHDeKxAPQvQqAOonof5cgpxzh79tIQfY/edit#gid=0",
            "cachedResultName": "Sheet1"
          },
          "documentId": {
            "__rl": true,
            "mode": "url",
            "value": "https://docs.google.com/spreadsheets/d/18iZ59I0q2AeElqcEpyJECNlSv4M6iJll9PQzXQkqEUk/edit#gid=0",
            "__regex": "https:\\/\\/(?:drive|docs)\\.google\\.com\\/\\w+\\/d\\/([0-9a-zA-Z\\-_]+)(?:\\/.*|)"
          }
        },
        "credentials": {
          "googleSheetsOAuth2Api": {
            "id": "2",
            "name": "Google Sheets account lucas"
          }
        },
        "typeVersion": 3
      },
      {
        "id": "c2b93428-0dcc-4c02-bb81-496c12442284",
        "name": "Split In Batches",
        "type": "n8n-nodes-base.splitInBatches",
        "position": [
          260,
          300
        ],
        "parameters": {
          "options": {}
        },
        "typeVersion": 1
      },
      {
        "id": "eccf1dc8-a0bb-40f6-9471-95eac8020b02",
        "name": "Wait",
        "type": "n8n-nodes-base.wait",
        "position": [
          2060,
          560
        ],
        "webhookId": "d44bc024-1c21-44e0-b2b4-5cff6fb9f402",
        "parameters": {
          "unit": "seconds"
        },
        "typeVersion": 1
      }
    ],
    "connections": {
      "Wait": {
        "main": [
          [
            {
              "node": "Split In Batches",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Merge": {
        "main": [
          [
            {
              "node": "Update Google Sheets",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "OpenAI": {
        "main": [
          [
            {
              "node": "Parse JSON",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Parse JSON": {
        "main": [
          [
            {
              "node": "Merge",
              "type": "main",
              "index": 1
            }
          ]
        ]
      },
      "HTML Extract": {
        "main": [
          [
            {
              "node": "Clean Content",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "HTTP Request": {
        "main": [
          [
            {
              "node": "HTML Extract",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Clean Content": {
        "main": [
          [
            {
              "node": "OpenAI",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Split In Batches": {
        "main": [
          [
            {
              "node": "HTTP Request",
              "type": "main",
              "index": 0
            },
            {
              "node": "Merge",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Read Google Sheets": {
        "main": [
          [
            {
              "node": "Split In Batches",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Update Google Sheets": {
        "main": [
          [
            {
              "node": "Wait",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "When clicking \"Execute Workflow\"": {
        "main": [
          [
            {
              "node": "Read Google Sheets",
              "type": "main",
              "index": 0
            }
          ]
        ]
      }
    }
  },
  'social-calendar': {
    "nodes": [
      {
        "parameters": {},
        "name": "Start",
        "type": "n8n-nodes-base.start",
        "typeVersion": 1,
        "position": [
          250,
          300
        ]
      },
      {
        "parameters": {
          "rule": {
            "interval": [
              {
                "field": "hours",
                "hoursInterval": 12
              }
            ]
          }
        },
        "name": "Schedule",
        "type": "n8n-nodes-base.scheduleTrigger",
        "typeVersion": 1,
        "position": [
          450,
          300
        ]
      },
      {
        "parameters": {
          "operation": "read",
          "sheetName": "Social Calendar",
          "range": "A:G",
          "options": {}
        },
        "name": "Google Sheets",
        "type": "n8n-nodes-base.googleSheets",
        "typeVersion": 3,
        "position": [
          650,
          300
        ]
      },
      {
        "parameters": {
          "jsCode": "// Filter for posts that need to be published today\nconst now = new Date();\nconst today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();\n\nreturn items.filter(item => {\n  if (!item.date) return false;\n  \n  const postDate = new Date(item.date).getTime();\n  const isToday = postDate === today;\n  const notPosted = item.posted !== 'true';\n  \n  return isToday && notPosted;\n});"
        },
        "name": "Filter Today's Posts",
        "type": "n8n-nodes-base.code",
        "typeVersion": 1,
        "position": [
          850,
          300
        ]
      },
      {
        "parameters": {
          "conditions": {
            "string": [
              {
                "value1": "={{ $json[\"platform\"] }}",
                "value2": "twitter"
              }
            ]
          }
        },
        "name": "Platform Router",
        "type": "n8n-nodes-base.switch",
        "typeVersion": 1,
        "position": [
          1050,
          300
        ]
      },
      {
        "parameters": {
          "text": "={{ $json[\"content\"] }}",
          "additionalFields": {}
        },
        "name": "Twitter",
        "type": "n8n-nodes-base.twitter",
        "typeVersion": 1,
        "position": [
          1250,
          200
        ]
      },
      {
        "parameters": {
          "post": "={{ $json[\"content\"] }}",
          "additionalFields": {}
        },
        "name": "LinkedIn",
        "type": "n8n-nodes-base.linkedIn",
        "typeVersion": 1,
        "position": [
          1250,
          350
        ]
      },
      {
        "parameters": {
          "url": "https://graph.facebook.com/v13.0/me/feed",
          "sendBody": true,
          "bodyParameters": {
            "message": "={{ $json[\"content\"] }}"
          },
          "options": {}
        },
        "name": "Facebook",
        "type": "n8n-nodes-base.httpRequest",
        "typeVersion": 3,
        "position": [
          1250,
          500
        ]
      },
      {
        "parameters": {
          "operation": "update",
          "sheetName": "Social Calendar",
          "range": "={{ $json[\"row\"] }}",
          "key": "posted",
          "value": "true",
          "options": {}
        },
        "name": "Update Sheet",
        "type": "n8n-nodes-base.googleSheets",
        "typeVersion": 3,
        "position": [
          1450,
          300
        ]
      }
    ],
    "connections": {
      "Start": {
        "main": [
          [
            {
              "node": "Schedule",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Schedule": {
        "main": [
          [
            {
              "node": "Google Sheets",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Google Sheets": {
        "main": [
          [
            {
              "node": "Filter Today's Posts",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Filter Today's Posts": {
        "main": [
          [
            {
              "node": "Platform Router",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Platform Router": {
        "main": [
          [
            {
              "node": "Twitter",
              "type": "main",
              "index": 0
            }
          ],
          [
            {
              "node": "LinkedIn",
              "type": "main",
              "index": 0
            }
          ],
          [
            {
              "node": "Facebook",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Twitter": {
        "main": [
          [
            {
              "node": "Update Sheet",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "LinkedIn": {
        "main": [
          [
            {
              "node": "Update Sheet",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Facebook": {
        "main": [
          [
            {
              "node": "Update Sheet",
              "type": "main",
              "index": 0
            }
          ]
        ]
      }
    }
  }
};
