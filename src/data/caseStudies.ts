
export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
  workflowId: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'cs-1',
    title: 'Automating Customer Support for SaaS Company',
    client: 'CloudTech Solutions',
    industry: 'SaaS',
    challenge: 'CloudTech was struggling with a high volume of support tickets, leading to slow response times and customer dissatisfaction. Their team was spending 70% of their time answering repetitive questions.',
    solution: 'We implemented an AI-powered support automation workflow using n8n that integrates with their help desk. The system automatically categorizes tickets, answers common questions, and only escalates complex issues to human agents.',
    results: [
      '68% reduction in first-response time',
      '42% decrease in support tickets requiring human intervention',
      '89% customer satisfaction rating for AI-handled tickets',
      'Support team now focused on complex product improvements instead of repetitive tasks'
    ],
    testimonial: {
      quote: 'The automation workflow has transformed our support operations. Our team is happier, our customers get faster responses, and we\'ve been able to reallocate resources to product development.',
      author: 'Maria Chen',
      position: 'Head of Customer Success, CloudTech Solutions'
    },
    workflowId: 'support-automation'
  },
  {
    id: 'cs-2',
    title: 'Lead Qualification and Nurturing Automation',
    client: 'GrowthForce Marketing',
    industry: 'Marketing Agency',
    challenge: 'GrowthForce was manually qualifying and nurturing leads for their clients, requiring significant staff time and resulting in inconsistent follow-up. They needed to scale operations without adding staff.',
    solution: 'We built a comprehensive n8n workflow that integrates with their CRM and marketing tools to automatically score leads based on behavior, segment audiences, and trigger personalized nurturing sequences with AI-generated content.',
    results: [
      '215% increase in qualified leads',
      '76% reduction in lead follow-up time',
      '28% improvement in conversion rate',
      'Ability to handle 3x more clients with the same team size'
    ],
    testimonial: {
      quote: 'This automation has been a game-changer for our agency. We\'re delivering much better results for clients while actually reducing the workload on our team.',
      author: 'James Wilson',
      position: 'CEO, GrowthForce Marketing'
    },
    workflowId: 'lead-nurturing'
  },
  {
    id: 'cs-3',
    title: 'Inventory Management Automation for E-Commerce',
    client: 'Urban Outfitters Online',
    industry: 'E-Commerce',
    challenge: 'Urban Outfitters was struggling with inventory synchronization across multiple sales channels, leading to overselling, customer disappointment, and manual reconciliation efforts.',
    solution: 'We created an n8n workflow that connects their e-commerce platform, warehouse management system, and marketplace listings, providing real-time inventory updates and automated purchase order generation.',
    results: [
      'Eliminated overselling incidents completely',
      '94% reduction in inventory management time',
      'Automated purchase orders based on inventory thresholds',
      'Improved cash flow through optimized inventory levels'
    ],
    testimonial: {
      quote: 'The inventory automation system has eliminated our biggest operational headache. We no longer have to worry about overselling or spending hours reconciling stock levels.',
      author: 'Sarah Johnson',
      position: 'Operations Director, Urban Outfitters Online'
    },
    workflowId: 'inventory-sync'
  }
];

// Sample basic n8n workflow for visualization
export const sampleWorkflows = {
  'support-automation': {
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
                "field": "minutes",
                "minutesInterval": 5
              }
            ]
          }
        },
        "name": "Schedule Trigger",
        "type": "n8n-nodes-base.scheduleTrigger",
        "typeVersion": 1,
        "position": [
          450,
          300
        ]
      },
      {
        "parameters": {
          "authentication": "oAuth2",
          "resource": "ticket",
          "operation": "getAll"
        },
        "name": "Zendesk",
        "type": "n8n-nodes-base.zendesk",
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
                "value1": "={{ $json[\"status\"] }}",
                "value2": "new"
              },
              {
                "value1": "={{ $json[\"tags\"].includes(\"auto-reply\") }}",
                "value2": false
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
          "text": "={{ $json[\"description\"] }}",
          "options": {}
        },
        "name": "OpenAI",
        "type": "n8n-nodes-base.openAi",
        "typeVersion": 1,
        "position": [
          1050,
          200
        ]
      },
      {
        "parameters": {
          "authentication": "oAuth2",
          "resource": "ticket",
          "operation": "update",
          "id": "={{ $json[\"id\"] }}",
          "updateFields": {
            "comment": "={{ $node[\"OpenAI\"].json[\"text\"] }}",
            "status": "pending",
            "tags": "={{ $json[\"tags\"].concat([\"auto-reply\"]) }}"
          }
        },
        "name": "Zendesk1",
        "type": "n8n-nodes-base.zendesk",
        "typeVersion": 1,
        "position": [
          1250,
          200
        ]
      },
      {
        "parameters": {
          "authentication": "oAuth2",
          "resource": "ticket",
          "operation": "update",
          "id": "={{ $json[\"id\"] }}",
          "updateFields": {
            "tags": "={{ $json[\"tags\"].concat([\"needs-human-review\"]) }}"
          }
        },
        "name": "Zendesk2",
        "type": "n8n-nodes-base.zendesk",
        "typeVersion": 1,
        "position": [
          1050,
          400
        ]
      },
      {
        "parameters": {
          "authentication": "oAuth2",
          "channel": "={{ $json[\"support-alerts\"] }}",
          "text": "New ticket requires human review: #{{ $json[\"id\"] }}"
        },
        "name": "Slack",
        "type": "n8n-nodes-base.slack",
        "typeVersion": 1,
        "position": [
          1250,
          400
        ]
      }
    ],
    "connections": {
      "Start": {
        "main": [
          [
            {
              "node": "Schedule Trigger",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Schedule Trigger": {
        "main": [
          [
            {
              "node": "Zendesk",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Zendesk": {
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
              "node": "OpenAI",
              "type": "main",
              "index": 0
            }
          ],
          [
            {
              "node": "Zendesk2",
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
              "node": "Zendesk1",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Zendesk2": {
        "main": [
          [
            {
              "node": "Slack",
              "type": "main",
              "index": 0
            }
          ]
        ]
      }
    }
  },
  'lead-nurturing': {
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
          "authentication": "apiKey",
          "resource": "contact",
          "operation": "getAll",
          "limit": 50,
          "filters": {
            "leadScore": [
              {
                "operation": "greaterThan",
                "value": 50
              }
            ],
            "tags": [
              {
                "value": "new-lead"
              }
            ]
          }
        },
        "name": "CRM",
        "type": "n8n-nodes-base.hubspot",
        "typeVersion": 1,
        "position": [
          450,
          300
        ]
      },
      {
        "parameters": {
          "conditions": {
            "number": [
              {
                "value1": "={{ $json[\"score\"] }}",
                "operation": "greaterThan",
                "value2": 70
              }
            ]
          }
        },
        "name": "Lead Score",
        "type": "n8n-nodes-base.if",
        "typeVersion": 1,
        "position": [
          650,
          300
        ]
      },
      {
        "parameters": {
          "apiKey": "={{ $secrets.openaiApiKey }}",
          "prompt": "Generate a personalized sales email for {{ $json[\"firstName\"] }} {{ $json[\"lastName\"] }} who works at {{ $json[\"company\"] }} in the {{ $json[\"industry\"] }} industry. They've expressed interest in our automation solutions.",
          "options": {}
        },
        "name": "Generate Email",
        "type": "n8n-nodes-base.openAi",
        "typeVersion": 1,
        "position": [
          850,
          200
        ]
      },
      {
        "parameters": {
          "authentication": "apiKey",
          "resource": "email",
          "operation": "send",
          "toEmail": "={{ $json[\"email\"] }}",
          "subject": "Custom Automation Solution for {{ $json[\"company\"] }}",
          "text": "={{ $node[\"Generate Email\"].json[\"text\"] }}"
        },
        "name": "Send High Priority",
        "type": "n8n-nodes-base.mailchimp",
        "typeVersion": 1,
        "position": [
          1050,
          200
        ]
      },
      {
        "parameters": {
          "resource": "campaign",
          "operation": "add",
          "name": "Nurture Workflow",
          "listId": "={{ $env.MC_LIST_ID }}",
          "addFields": {
            "contactsToAdd": "={{ $json[\"email\"] }}"
          }
        },
        "name": "Add to Nurture",
        "type": "n8n-nodes-base.mailchimp",
        "typeVersion": 1,
        "position": [
          850,
          400
        ]
      },
      {
        "parameters": {
          "resource": "task",
          "operation": "create",
          "subject": "Follow up with {{ $json[\"firstName\"] }} {{ $json[\"lastName\"] }} from {{ $json[\"company\"] }}",
          "categoryId": "sales-follow-up",
          "dueDate": "={{ $today.plus({ days: 5 }) }}"
        },
        "name": "Create Task",
        "type": "n8n-nodes-base.hubspot",
        "typeVersion": 1,
        "position": [
          1250,
          300
        ]
      }
    ],
    "connections": {
      "Start": {
        "main": [
          [
            {
              "node": "CRM",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "CRM": {
        "main": [
          [
            {
              "node": "Lead Score",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Lead Score": {
        "main": [
          [
            {
              "node": "Generate Email",
              "type": "main",
              "index": 0
            }
          ],
          [
            {
              "node": "Add to Nurture",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Generate Email": {
        "main": [
          [
            {
              "node": "Send High Priority",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Send High Priority": {
        "main": [
          [
            {
              "node": "Create Task",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Add to Nurture": {
        "main": [
          [
            {
              "node": "Create Task",
              "type": "main",
              "index": 0
            }
          ]
        ]
      }
    }
  },
  'inventory-sync': {
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
                "field": "minutes",
                "minutesInterval": 15
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
          "operation": "getAll",
          "limit": 100,
          "additionalFields": {}
        },
        "name": "WooCommerce",
        "type": "n8n-nodes-base.wooCommerce",
        "typeVersion": 1,
        "position": [
          650,
          200
        ]
      },
      {
        "parameters": {
          "authentication": "apiKey",
          "operation": "list",
          "returnAll": true
        },
        "name": "Shopify",
        "type": "n8n-nodes-base.shopify",
        "typeVersion": 1,
        "position": [
          650,
          400
        ]
      },
      {
        "parameters": {
          "mode": "mergeByKey",
          "mergeByFields": {
            "values": [
              {
                "field1": "sku",
                "field2": "sku"
              }
            ]
          },
          "options": {}
        },
        "name": "Merge",
        "type": "n8n-nodes-base.merge",
        "typeVersion": 2,
        "position": [
          850,
          300
        ]
      },
      {
        "parameters": {
          "jsCode": "// Calculate total inventory across platforms\nfor (const item of items) {\n  item.totalStock = (parseInt(item.woo_stock) || 0) + (parseInt(item.shopify_stock) || 0);\n  \n  // Check if below threshold\n  item.belowThreshold = item.totalStock < 20;\n}\n\nreturn items;"
        },
        "name": "Process Inventory",
        "type": "n8n-nodes-base.code",
        "typeVersion": 1,
        "position": [
          1050,
          300
        ]
      },
      {
        "parameters": {
          "conditions": {
            "boolean": [
              {
                "value1": "={{ $json[\"belowThreshold\"] }}",
                "value2": true
              }
            ]
          }
        },
        "name": "IF",
        "type": "n8n-nodes-base.if",
        "typeVersion": 1,
        "position": [
          1250,
          300
        ]
      },
      {
        "parameters": {
          "operation": "create",
          "name": "Restock {{ $json[\"product_name\"] }}",
          "additionalFields": {
            "supplier_id": "={{ $json[\"supplier_id\"] }}",
            "quantity": "{{ 100 - $json[\"totalStock\"] }}",
            "notes": "Automated restock order"
          }
        },
        "name": "Create PO",
        "type": "n8n-nodes-base.erp",
        "typeVersion": 1,
        "position": [
          1450,
          200
        ]
      },
      {
        "parameters": {
          "operation": "update",
          "id": "={{ $json[\"id\"] }}",
          "updateFields": {
            "inventory_sync": "true",
            "last_sync": "={{ $now.toISOString() }}",
            "total_stock": "={{ $json[\"totalStock\"] }}"
          }
        },
        "name": "Update DB",
        "type": "n8n-nodes-base.postgres",
        "typeVersion": 1,
        "position": [
          1450,
          400
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
              "node": "WooCommerce",
              "type": "main",
              "index": 0
            },
            {
              "node": "Shopify",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "WooCommerce": {
        "main": [
          [
            {
              "node": "Merge",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Shopify": {
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
      "Merge": {
        "main": [
          [
            {
              "node": "Process Inventory",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Process Inventory": {
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
              "node": "Create PO",
              "type": "main",
              "index": 0
            }
          ],
          [
            {
              "node": "Update DB",
              "type": "main",
              "index": 0
            }
          ]
        ]
      }
    }
  }
};
