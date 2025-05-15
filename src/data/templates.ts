
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
    title: 'Customer Onboarding Workflow',
    category: 'Marketing',
    description: 'Automate New Customer Onboarding with HubSpot, Google Calendar, and AI-Powered Gmai.',
    difficulty: 'Intermediate',
    timeSaving: '6 hours/employee',
    integrations: ['Google Workspace', 'HubSpot', 'OpenAI'],
    workflowId: 'customer-onboarding',
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
    "meta": {
      "instanceId": "dd130a849d7b29e5541b05d2f7f86a4acd4f1ec598c1c9438783f56bc4f0ff80",
      "templateCredsSetupCompleted": true
    },
    "nodes": [
      {
        "id": "e563eef6-39c4-4859-b23a-db096e7f8717",
        "name": "Gmail Trigger",
        "type": "n8n-nodes-base.gmailTrigger",
        "position": [
          -1300,
          -60
        ],
        "parameters": {
          "simple": false,
          "filters": {},
          "options": {},
          "pollTimes": {
            "item": [
              {
                "mode": "everyHour"
              }
            ]
          }
        },
        "credentials": {
          "gmailOAuth2": {
            "id": "umlWq7xPmamha8HX",
            "name": "Gmail account"
          }
        },
        "typeVersion": 1.2
      },
      {
        "id": "068c250f-84b0-41e4-b48a-6a5260b7a24a",
        "name": "Text Classifier",
        "type": "@n8n/n8n-nodes-langchain.textClassifier",
        "position": [
          -660,
          0
        ],
        "parameters": {
          "options": {},
          "inputText": "={{ $('Gmail Trigger').item.json.subject }}\n{{ $('Gmail Trigger').item.json.text }}",
          "categories": {
            "categories": [
              {
                "category": "Guest Post",
                "description": "The inquiry is about the collaboration on guest post inquiry, blog post on syncbricks.com or any other website. "
              },
              {
                "category": "Youtube",
                "description": "The inquiry is about adding review video on our youtube channel"
              },
              {
                "category": "Udemy Courses",
                "description": "Training and Courses related to Various Technology, AI Etc"
              }
            ]
          }
        },
        "typeVersion": 1
      },
      {
        "id": "036d86c2-0375-4f44-a14f-4f20d17eb048",
        "name": "Google Gemini Chat Model",
        "type": "@n8n/n8n-nodes-langchain.lmChatGoogleGemini",
        "position": [
          -640,
          200
        ],
        "parameters": {
          "options": {},
          "modelName": "models/gemini-2.0-flash-exp"
        },
        "credentials": {
          "googlePalmApi": {
            "id": "othBMxlMTTDAVGQ9",
            "name": "Google Gemini(PaLM) Api account"
          }
        },
        "typeVersion": 1
      },
      {
        "id": "6ca6adeb-fdf4-4e4c-83f2-e2b28548b33e",
        "name": "GuestPost Inquiry",
        "type": "n8n-nodes-base.emailSend",
        "position": [
          -80,
          -180
        ],
        "webhookId": "880024c2-f011-4385-b0f9-25ce08c5bd1b",
        "parameters": {
          "html": "=<!DOCTYPE html>\n<html>\n<body style=\"font-family: Arial, sans-serif; line-height: 1.6; color: #333;\">\n\n<p>Hello,</p>\n\n<p>Thank you for reaching out! We’re thrilled to help you gain exposure through guest posting on our diverse platforms. Here’s everything you need to know to get started:</p>\n\n<p><strong>Pricing & Options:</strong></p>\n<ul>\n    <li><strong>Guest Post:</strong> $0 per post. Bulk discounts are available for multiple submissions.</li>\n    <li><strong>Link Insertion:</strong> $0 per link in an existing post.</li>\n</ul>\n<p>Both options come with do-follow backlinks, ensuring long-term SEO benefits for your website.</p>\n\n<p><strong>Why Partner with Us?</strong></p>\n<ul>\n    <li><strong>Reach:</strong> Gain exposure to niche-specific, engaged audiences.</li>\n    <li><strong>Quick Turnaround:</strong> Publication within 3 business days for a seamless experience.</li>\n    <li><strong>Diverse Niches:</strong> Choose from a variety of topics to suit your content needs.</li>\n</ul>\n\n<p><strong>Choose the Right Platform:</strong></p>\n<p>Our websites span various niches, so you can select the one that best matches your content. Explore them here:</p>\n<ul>\n    <li><a href=\"https://syncbricks.com\" target=\"_blank\">syncbricks.com</a></li>\n    <li><a href=\"https://s4stechnology.com\" target=\"_blank\">s4stechnology.com</a></li>\n    <li><a href=\"https://shukranoman.com\" target=\"_blank\">shukranoman.com</a></li>\n    <li><a href=\"https://brenttechnologies.com\" target=\"_blank\">brenttechnologies.com</a></li>\n    <li><a href=\"https://mairimanzil.com\" target=\"_blank\">mairimanzil.com</a></li>\n    <li><a href=\"https://techfeed.com.au\" target=\"_blank\">techfeed.com.au</a></li>\n    <li><a href=\"https://tuts.plus\" target=\"_blank\">tuts.plus</a></li>\n    <li><a href=\"https://swifttapper.com\" target=\"_blank\">swifttapper.com</a></li>\n    <li><a href=\"https://amjidali.com\" target=\"_blank\">amjidali.com</a></li>\n    <li><a href=\"https://hamid.com.au\" target=\"_blank\">hamid.com.au</a></li>\n    <li><a href=\"https://cio.guru\" target=\"_blank\">cio.guru</a></li>\n</ul>\n\n<p><strong>Submission Guidelines:</strong></p>\n<ul>\n    <li><strong>Original Content:</strong> Submissions must be high-quality, unpublished, and niche-relevant.</li>\n    <li><strong>Minimum Word Count:</strong> 300 words.</li>\n    <li><strong>Formatting:</strong> Use headings, subheadings, and bullet points for readability.</li>\n    <li><strong>Backlinks:</strong> One do-follow backlink is permitted per post.</li>\n    <li><strong>Images:</strong> Unique and relevant images are encouraged.</li>\n</ul>\n\n<p><strong>How to Submit:</strong></p>\n<p>Reply to this email with your completed guest post and any supporting materials. We’ll review your submission and get back to you within 3 business days.</p>\n\n<p><strong>Payment Information:</strong></p>\n<p>Once your guest post or link insertion request is approved, we’ll provide you with payment details. We accept payments through:</p>\n<ul>\n    <li>PayPal</li>\n    <li>Bank Transfer</li>\n    <li>Other methods (upon request)</li>\n</ul>\n<p>Please let us know your preferred method, and we’ll share the necessary information.</p>\n\n<p><strong>Questions?</strong></p>\n<p>If you need further assistance or guidance, feel free to reach out. We’re here to help!</p>\n\n<p>Best regards, <br>\n<strong>Sophia Mitchell</strong> <br>\nOutreach Manager | <a href=\"https://syncbricks.com\" target=\"_blank\">syncbricks.com</a> <br>\nWhatsApp: +1</p>\n\n<p style=\"font-size: 12px; color: #888;\">© 2025 SyncBricks. All rights reserved.</p>\n\n</body>\n</html>\n",
          "options": {
            "appendAttribution": false
          },
          "subject": "=Re: {{ $('Gmail Trigger').item.json.subject }}",
          "toEmail": "={{ $json.from.value[0].name }} <{{ $json.from.value[0].address }}>",
          "fromEmail": "Sophia Mitchell <info@syncbricks.com>"
        },
        "credentials": {
          "smtp": {
            "id": "AOPfJVssrSFm0US1",
            "name": "SMTP account"
          }
        },
        "typeVersion": 2.1
      },
      {
        "id": "41f06728-3bac-4fc2-ab20-d16f3fd9a936",
        "name": "Youtube Video Inquiry",
        "type": "n8n-nodes-base.emailSend",
        "position": [
          -80,
          0
        ],
        "webhookId": "d33a7f20-dca8-4622-b421-b92697fdffd8",
        "parameters": {
          "html": "=<!DOCTYPE html>\n<html>\n<head>\n    <style>\n        body {\n            font-family: Arial, sans-serif;\n            line-height: 1.6;\n            color: #333;\n            margin: 0;\n            padding: 0;\n        }\n        .container {\n            width: 100%;\n            max-width: 600px;\n            margin: 0 auto;\n            padding: 20px;\n        }\n        .header {\n            background-color: #f4f4f4;\n            padding: 10px 20px;\n            text-align: center;\n            border-bottom: 1px solid #ddd;\n        }\n        .header h1 {\n            margin: 0;\n            color: #555;\n        }\n        .content {\n            padding: 20px;\n        }\n        .content h2 {\n            color: #555;\n            font-size: 18px;\n        }\n        .content p {\n            margin-bottom: 15px;\n        }\n        .content ul {\n            list-style: disc;\n            padding-left: 20px;\n        }\n        .content ul li {\n            margin-bottom: 10px;\n        }\n        .content a {\n            color: #007BFF;\n            text-decoration: none;\n        }\n        .content a:hover {\n            text-decoration: underline;\n        }\n        .video-thumbnail {\n            text-align: center;\n            margin: 20px 0;\n        }\n        .video-thumbnail img {\n            width: 100%;\n            max-width: 560px;\n            border-radius: 5px;\n            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);\n        }\n        .footer {\n            text-align: center;\n            font-size: 12px;\n            color: #888;\n            margin-top: 20px;\n        }\n    </style>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\">\n            <h1>YouTube Review Video Inquiry</h1>\n        </div>\n        <div class=\"content\">\n            <p>Hello {{ $json.Name }},</p>\n            <p>Thank you for reaching out to inquire about our YouTube review video services! We are thrilled to collaborate with you and showcase your product or service to our engaged audience on our YouTube channel, **SyncBricks**.</p>\n            <h2>What We Offer:</h2>\n            <ul>\n                <li><strong>Comprehensive Review Video (10 Minutes):</strong> $1  \n                    <ul>\n                        <li>Detailed review and hands-on demonstration.</li>\n                        <li>Professional editing with a focus on your product's highlights.</li>\n                        <li>Includes a do-follow backlink placement on our website.</li>\n                    </ul>\n                </li>\n                <li><strong>Short Follow-Up Video:</strong> $7  \n                    <ul>\n                        <li>Quick review or update video.</li>\n                        <li>Focus on specific features or updates.</li>\n                        <li>Also includes a do-follow backlink placement on our website.</li>\n                    </ul>\n                </li>\n            </ul>\n            <h2>Sample Video:</h2>\n            <p>Here’s an example of our work to help you understand the quality and style of our reviews:</p>\n            <div class=\"video-thumbnail\">\n                <a href=\"https://youtu.be/-5bI45z4Ozo?si=hkGNnTgtH1quOfH2\" target=\"_blank\">\n                    <img src=\"https://img.youtube.com/vi/-5bI45z4Ozo/maxresdefault.jpg\" alt=\"Sample Video Thumbnail\">\n                </a>\n            </div>\n            <p>Watch it here: <a href=\"https://youtu.be/-5bI45z4Ozo?si=hkGNnTgtH1quOfH2\" target=\"_blank\">https://youtu.be/-5bI45z4Ozo</a></p>\n            <h2>Why Choose Us?</h2>\n            <ul>\n                <li>Professional video production and editing to highlight your product's key features.</li>\n                <li>Engaged audience focused on IT and technology-related content.</li>\n                <li>Comprehensive reviews that provide value to both viewers and sponsors.</li>\n            </ul>\n            <h2>How to Proceed:</h2>\n            <p>To book a review video, please reply to this email with the following details:</p>\n            <ul>\n                <li>Your product/service name and a brief description.</li>\n                <li>Any specific features or aspects you want us to highlight.</li>\n                <li>Preferred review type (Comprehensive or Short Follow-Up).</li>\n            </ul>\n            <p>Once we have your details, we will share the payment instructions and the next steps to get started.</p>\n            <h2>Questions?</h2>\n            <p>If you have any questions or need further clarification, feel free to ask. We’re here to assist you!</p>\n            <p>Best regards,<br><strong>Sophia Mitchell</strong><br>Outreach Manager | <a href=\"https://syncbricks.com\" target=\"_blank\">syncbricks.com</a><br>WhatsApp: +1 </p>\n        </div>\n        <div class=\"footer\">\n            <p>© 2025 SyncBricks. All rights reserved.</p>\n        </div>\n    </div>\n</body>\n</html>\n",
          "options": {
            "appendAttribution": false
          },
          "subject": "=Re: {{ $('Gmail Trigger').item.json.subject }}",
          "toEmail": "={{ $json.from.value[0].name }} <{{ $json.from.value[0].address }}>",
          "fromEmail": "Sophia Mitchell <info@syncbricks.com>"
        },
        "credentials": {
          "smtp": {
            "id": "AOPfJVssrSFm0US1",
            "name": "SMTP account"
          }
        },
        "typeVersion": 2.1
      },
      {
        "id": "e42754e8-a594-4ea8-b9a8-9e47ffdacd72",
        "name": "Send Email",
        "type": "n8n-nodes-base.emailSend",
        "position": [
          -80,
          180
        ],
        "webhookId": "3a0ca27f-1ff9-4c59-b17f-0523c58f70d1",
        "parameters": {
          "html": "=<!DOCTYPE html>\n<html>\n<head>\n    <style>\n        body {\n            font-family: Arial, sans-serif;\n            line-height: 1.6;\n            color: #333;\n            margin: 0;\n            padding: 0;\n        }\n        .container {\n            width: 100%;\n            max-width: 600px;\n            margin: 0 auto;\n            padding: 20px;\n        }\n        .header {\n            background-color: #f4f4f4;\n            padding: 10px 20px;\n            text-align: center;\n            border-bottom: 1px solid #ddd.\n        }\n        .header h1 {\n            margin: 0;\n            color: #555;\n        }\n        .content {\n            padding: 20px;\n        }\n        .content h2 {\n            color: #555;\n            font-size: 18px;\n        }\n        .content p {\n            margin-bottom: 15px;\n        }\n        .content ul {\n            list-style: disc;\n            padding-left: 20px;\n        }\n        .content ul li {\n            margin-bottom: 10px;\n        }\n        .content a {\n            color: #007BFF;\n            text-decoration: none;\n        }\n        .content a:hover {\n            text-decoration: underline;\n        }\n        .footer {\n            text-align: center;\n            font-size: 12px;\n            color: #888;\n            margin-top: 20px.\n        }\n    </style>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\">\n            <h1>Course Inquiry</h1>\n        </div>\n        <div class=\"content\">\n            <p>Hello,</p>\n            <p>Thank you for your interest in our online courses! At **SyncBricks**, we offer a variety of high-quality courses designed to enhance your skills in IT, automation, network security, and more.</p>\n            <h2>Our Featured Courses:</h2>\n            <ul>\n                <li><strong><a href=\"https://www.udemy.com/course/ai-automation-mastery-build-intelligent-agents-with-lowcode/?referralCode=0062E7C1D64784AB70CA\" target=\"_blank\">AI Automation Mastery: Build Intelligent Agents</a></strong>  \n                    Learn how to leverage low-code platforms for workflow automation and build AI-driven solutions.\n                </li>\n                <li><strong><a href=\"https://www.udemy.com/course/microsoft-power-bi-advanced-course-desktop-dax/?referralCode=1B754977728785DC48C9\" target=\"_blank\">Advanced Power BI: Master Desktop & DAX</a></strong>  \n                    Master data visualization, dashboard creation, and DAX in Power BI.\n                </li>\n                <li><strong><a href=\"https://www.udemy.com/course/proxmox-virtualization-environment-complete-training/?referralCode=8E7EAFD11C2389F89C11\" target=\"_blank\">Proxmox VE: Complete Virtualization Guide</a></strong>  \n                    Dive into Proxmox VE for advanced virtualization techniques and management.\n                </li>\n                <li><strong><a href=\"https://www.udemy.com/course/pfsense-network-security-and-firewall-management/?referralCode=866D4839516374C77ACE\" target=\"_blank\">pfSense Network Security & Firewall Management</a></strong>  \n                    Learn how to secure networks with advanced firewall configurations.\n                </li>\n                <li><strong><a href=\"https://www.udemy.com/course/human-resource-management-with-erpnext-onboarding-to-exit/?referralCode=B3C64C3925EC62F42052\" target=\"_blank\">ERPNext for HR Management: Onboarding to Exit</a></strong>  \n                    Manage HR processes efficiently using ERPNext.\n                </li>\n            </ul>\n            <h2>Free Learning Resources:</h2>\n            <p>Explore a wealth of free material on our YouTube channel, **SyncBricks**, including tutorials, reviews, and how-to videos. Check it out here:</p>\n            <p><a href=\"https://www.youtube.com/channel/UC1ORA3oNGYuQ8yQHrC7MzBg?sub_confirmation=1\" target=\"_blank\">Visit Our YouTube Channel</a></p>\n            <h2>Why Choose Our Courses?</h2>\n            <ul>\n                <li>High-quality, industry-relevant content curated by experts.</li>\n                <li>Practical, hands-on projects to enhance learning.</li>\n                <li>Lifetime access to course materials for continuous learning.</li>\n                <li>Affordable pricing with discounts on certain platforms.</li>\n            </ul>\n            <h2>Browse All Courses</h2>\n            <p>Explore our full catalog on <a href=\"https://lms.syncbricks.com/\" target=\"_blank\">SyncBricks LMS</a> for more learning opportunities.</p>\n            <h2>Have Questions?</h2>\n            <p>If you’re unsure which course is the best fit or need assistance enrolling, let us know! We’re happy to guide you based on your interests and goals.</p>\n            <p>Best regards,<br><strong>Sophia Mitchell</strong><br>Outreach Manager | <a href=\"https://syncbricks.com\" target=\"_blank\">syncbricks.com</a><br>WhatsApp: +1 (810) 214-4375</p>\n        </div>\n        <div class=\"footer\">\n            <p>© 2025 SyncBricks. All rights reserved.</p>\n        </div>\n    </div>\n</body>\n</html>\n",
          "options": {
            "appendAttribution": false
          },
          "subject": "=Re:  {{ $('Gmail Trigger').item.json.Subject }}",
          "toEmail": "={{ $json.from.value[0].name }} <{{ $json.from.value[0].address }}>",
          "fromEmail": "Sophia Mitchell <info@syncbricks.com>"
        },
        "credentials": {
          "smtp": {
            "id": "AOPfJVssrSFm0US1",
            "name": "SMTP account"
          }
        },
        "typeVersion": 2.1
      },
      {
        "id": "a12e47bb-540b-4d42-b4fa-d27237964022",
        "name": "Mark as Read",
        "type": "n8n-nodes-base.gmail",
        "position": [
          360,
          0
        ],
        "webhookId": "066a871a-9801-4814-8ba5-238abe493cbb",
        "parameters": {
          "messageId": "={{ $('Gmail Trigger').item.json.id }}",
          "operation": "markAsRead"
        },
        "credentials": {
          "gmailOAuth2": {
            "id": "umlWq7xPmamha8HX",
            "name": "Gmail account"
          }
        },
        "typeVersion": 2.1
      },
      {
        "id": "06deb7fa-0169-46c3-b673-f35b476ef6a5",
        "name": "Apply Label",
        "type": "n8n-nodes-base.gmail",
        "position": [
          660,
          200
        ],
        "webhookId": "066a871a-9801-4814-8ba5-238abe493cbb",
        "parameters": {
          "labelIds": [
            "Label_6332648012153150222"
          ],
          "messageId": "={{ $('Gmail Trigger').item.json.id }}",
          "operation": "addLabels"
        },
        "credentials": {
          "gmailOAuth2": {
            "id": "umlWq7xPmamha8HX",
            "name": "Gmail account"
          }
        },
        "typeVersion": 2.1
      },
      {
        "id": "a3a38697-87ff-4954-aafe-c548425a84eb",
        "name": "Create Contact in Brevo",
        "type": "n8n-nodes-base.sendInBlue",
        "position": [
          640,
          -140
        ],
        "parameters": {
          "email": "={{ $('Text Classifier').item.json.from.value[0].address }}",
          "resource": "contact",
          "operation": "upsert",
          "requestOptions": {}
        },
        "credentials": {
          "sendInBlueApi": {
            "id": "tBNcyqgGWcRE4o8a",
            "name": "Brevo account"
          }
        },
        "typeVersion": 1
      },
      {
        "id": "99d8d741-4c7b-4795-958b-18116f9f7f96",
        "name": "Emails from Existing Contracts",
        "type": "n8n-nodes-base.if",
        "position": [
          -1120,
          -60
        ],
        "parameters": {
          "options": {},
          "conditions": {
            "options": {
              "version": 2,
              "leftValue": "",
              "caseSensitive": true,
              "typeValidation": "strict"
            },
            "combinator": "or",
            "conditions": [
              {
                "id": "7cffe101-333d-4ec2-a822-181fe421745b",
                "operator": {
                  "type": "string",
                  "operation": "contains"
                },
                "leftValue": "={{ $json.headers.from }}",
                "rightValue": "@syncbricks.com"
              }
            ]
          }
        },
        "typeVersion": 2.2
      },
      {
        "id": "538b53ef-05cd-4f08-83d7-5218b8492036",
        "name": "Reply",
        "type": "n8n-nodes-base.if",
        "position": [
          -980,
          100
        ],
        "parameters": {
          "options": {},
          "conditions": {
            "options": {
              "version": 2,
              "leftValue": "",
              "caseSensitive": true,
              "typeValidation": "strict"
            },
            "combinator": "and",
            "conditions": [
              {
                "id": "07a6d5e2-ffc5-41d8-b69a-abd6860879c0",
                "operator": {
                  "type": "string",
                  "operation": "notStartsWith"
                },
                "leftValue": "={{ $json.subject }}",
                "rightValue": "Re:"
              }
            ]
          }
        },
        "typeVersion": 2.2
      },
      {
        "id": "28f5e0eb-e3ad-4d34-89c6-c1571521f283",
        "name": "Sticky Note11",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          -2060,
          -300
        ],
        "parameters": {
          "color": 4,
          "width": 715,
          "height": 716,
          "content": "## Developed by Amjid Ali\n\nThank you for using this workflow template. It has taken me countless hours of hard work, research, and dedication to develop, and I sincerely hope it adds value to your work.\n\nIf you find this template helpful, I kindly ask you to consider supporting my efforts. Your support will help me continue improving and creating more valuable resources.\n\nBuy N8N Mastery Book : https://www.amazon.com/dp/B0F23GYCFW\n\n\nFor Full Course about ERPNext or Automation using AI follow below link\n\nhttp://lms.syncbricks.com\n\nAdditionally, when sharing this template, I would greatly appreciate it if you include my original information to ensure proper credit is given.\n\nThank you for your generosity and support!\nEmail : amjid@amjidali.com\nhttps://linkedin.com/in/amjidali\nhttps://syncbricks.com\nhttps://youtube.com/@syncbricks"
        },
        "typeVersion": 1
      },
      {
        "id": "8c105698-d989-44c3-ad8e-4bdda5c01715",
        "name": "Sticky Note",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          -1320,
          -300
        ],
        "parameters": {
          "width": 520,
          "height": 720,
          "content": "## Get the and Validate  New Email"
        },
        "typeVersion": 1
      },
      {
        "id": "cbb2e328-35b3-4ec9-9470-254666e40400",
        "name": "Sticky Note1",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          -780,
          -300
        ],
        "parameters": {
          "color": 3,
          "width": 520,
          "height": 720,
          "content": "## Classify the Email"
        },
        "typeVersion": 1
      },
      {
        "id": "0b5584cb-1002-46f5-9ac0-bcd816998534",
        "name": "Sticky Note2",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          -240,
          -300
        ],
        "parameters": {
          "color": 5,
          "width": 520,
          "height": 720,
          "content": "## Email Templates for Services"
        },
        "typeVersion": 1
      },
      {
        "id": "406f5793-6b54-4008-89e5-0b878aef9806",
        "name": "Sticky Note3",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          300,
          -300
        ],
        "parameters": {
          "color": 4,
          "width": 520,
          "height": 720,
          "content": "## mark as read, apply label and add to contact\n"
        },
        "typeVersion": 1
      }
    ],
    "pinData": {},
    "connections": {
      "Reply": {
        "main": [
          [
            {
              "node": "Text Classifier",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Send Email": {
        "main": [
          [
            {
              "node": "Mark as Read",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Mark as Read": {
        "main": [
          [
            {
              "node": "Apply Label",
              "type": "main",
              "index": 0
            },
            {
              "node": "Create Contact in Brevo",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Gmail Trigger": {
        "main": [
          [
            {
              "node": "Emails from Existing Contracts",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Text Classifier": {
        "main": [
          [
            {
              "node": "GuestPost Inquiry",
              "type": "main",
              "index": 0
            }
          ],
          [
            {
              "node": "Youtube Video Inquiry",
              "type": "main",
              "index": 0
            }
          ],
          [
            {
              "node": "Send Email",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "GuestPost Inquiry": {
        "main": [
          [
            {
              "node": "Mark as Read",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Youtube Video Inquiry": {
        "main": [
          [
            {
              "node": "Mark as Read",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Google Gemini Chat Model": {
        "ai_languageModel": [
          [
            {
              "node": "Text Classifier",
              "type": "ai_languageModel",
              "index": 0
            }
          ]
        ]
      },
      "Emails from Existing Contracts": {
        "main": [
          [],
          [
            {
              "node": "Reply",
              "type": "main",
              "index": 0
            }
          ]
        ]
      }
    }
  },
  'lead-scoring':{
    "id": "orrlMUaAvSsvAOgm",
    "meta": {
      "instanceId": "9bce59fa408e249dab636faffc5a13e5aa1a2e4af3383a551051e8bd22b2a1b9",
      "templateCredsSetupCompleted": true
    },
    "name": "HDW Lead Geländewagen",
    "tags": [],
    "nodes": [
      {
        "id": "d28278df-0ce3-4d3b-bf91-181085f27685",
        "name": "When chat message received",
        "type": "@n8n/n8n-nodes-langchain.chatTrigger",
        "position": [
          -2740,
          1340
        ],
        "webhookId": "80d69e6f-5dfc-4626-b6a6-2b3c0c58081e",
        "parameters": {
          "options": {}
        },
        "typeVersion": 1.1
      },
      {
        "id": "bd3fe9aa-d16e-4ee8-a2c9-8ac2e0a98c66",
        "name": "OpenAI Chat Model",
        "type": "@n8n/n8n-nodes-langchain.lmChatOpenAi",
        "position": [
          -2400,
          1540
        ],
        "parameters": {
          "model": {
            "__rl": true,
            "mode": "list",
            "value": "gpt-4.1",
            "cachedResultName": "gpt-4.1"
          },
          "options": {}
        },
        "credentials": {
          "openAiApi": {
            "id": "DzKhX3E7SSLddnv4",
            "name": "OpenAi account"
          }
        },
        "typeVersion": 1.2
      },
      {
        "id": "e4f4a3df-1544-4afa-9aae-81f17d642f95",
        "name": "Structured Output Parser",
        "type": "@n8n/n8n-nodes-langchain.outputParserStructured",
        "notes": "For changing limits use \"count\"",
        "position": [
          -1680,
          1400
        ],
        "parameters": {
          "jsonSchemaExample": "[\n  {\n    \"salesNavigatorParams\": {\n      \"current_titles\": \"title1\",\n      \"current_companies\": \"company1\",\n      \"location\": \"location1\",\n      \"industry\": \"industry1\",\n      \"company_sizes\": [\n        \"Self-employed\",\n        \"1-10\",\n        \"11-50\",\n        \"51-200\",\n        \"201-500\",\n        \"501-1,000\",\n        \"1,001-5,000\",\n        \"5,001-10,000\",\n        \"10,001+\"\n      ]\n    },\n    \"count\": 10\n  },\n  {\n    \"salesNavigatorParams\": {\n      \"current_titles\": \"title2\",\n      \"current_companies\": \"company2\",\n      \"location\": \"location2\",\n      \"industry\": \"industry2\",\n      \"company_sizes\": [\n        \"Self-employed\",\n        \"1-10\",\n        \"11-50\",\n        \"51-200\",\n        \"201-500\",\n        \"501-1,000\",\n        \"1,001-5,000\",\n        \"5,001-10,000\",\n        \"10,001+\"\n      ]\n    },\n    \"count\": 10\n  }\n]"
        },
        "notesInFlow": true,
        "typeVersion": 1.2
      },
      {
        "id": "e5338e9b-cae3-4301-88ad-16128978d42b",
        "name": "Google Sheets",
        "type": "n8n-nodes-base.googleSheets",
        "position": [
          -1200,
          920
        ],
        "parameters": {
          "columns": {
            "value": {
              "URL": "={{ $json.url }}",
              "URN": "={{ $json.urn.type }}:{{ $json.urn.value }}",
              "img": "={{ $json.image }}",
              "Date": "={{ $json.current_companies[0].joined }}",
              "Name": "={{ $json.name }}",
              "Headline": "={{ $json.headline }}",
              "Industry": "={{ $json.current_companies[0].company.industry }}",
              "Position": "={{ $json.current_companies[0].position }}",
              "location": "={{ $json.location }}",
              "is premium": "={{ $json.is_premium }}",
              "Company URN": "={{ $json.current_companies[0].company.urn.type }}:{{ $json.current_companies[0].company.urn.value }}",
              "Description": "={{ $json.current_companies[0].description }}",
              "Current company": "={{ $json.current_companies[0].company.name }}"
            },
            "schema": [
              {
                "id": "Name",
                "type": "string",
                "display": true,
                "removed": false,
                "required": false,
                "displayName": "Name",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "URN",
                "type": "string",
                "display": true,
                "removed": false,
                "required": false,
                "displayName": "URN",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "URL",
                "type": "string",
                "display": true,
                "removed": false,
                "required": false,
                "displayName": "URL",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "img",
                "type": "string",
                "display": true,
                "removed": false,
                "required": false,
                "displayName": "img",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Headline",
                "type": "string",
                "display": true,
                "removed": false,
                "required": false,
                "displayName": "Headline",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "location",
                "type": "string",
                "display": true,
                "removed": false,
                "required": false,
                "displayName": "location",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "is premium",
                "type": "string",
                "display": true,
                "removed": false,
                "required": false,
                "displayName": "is premium",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Current company",
                "type": "string",
                "display": true,
                "removed": false,
                "required": false,
                "displayName": "Current company",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Company URN",
                "type": "string",
                "display": true,
                "removed": false,
                "required": false,
                "displayName": "Company URN",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "URL",
                "type": "string",
                "display": true,
                "removed": false,
                "required": false,
                "displayName": "URL",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Industry",
                "type": "string",
                "display": true,
                "removed": false,
                "required": false,
                "displayName": "Industry",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Position",
                "type": "string",
                "display": true,
                "removed": false,
                "required": false,
                "displayName": "Position",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Description",
                "type": "string",
                "display": true,
                "removed": false,
                "required": false,
                "displayName": "Description",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Date",
                "type": "string",
                "display": true,
                "removed": false,
                "required": false,
                "displayName": "Date",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Website",
                "type": "string",
                "display": true,
                "removed": false,
                "required": false,
                "displayName": "Website",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              }
            ],
            "mappingMode": "defineBelow",
            "matchingColumns": [
              "URN"
            ],
            "attemptToConvertTypes": false,
            "convertFieldsToString": false
          },
          "options": {},
          "operation": "appendOrUpdate",
          "sheetName": {
            "__rl": true,
            "mode": "list",
            "value": "gid=0",
            "cachedResultUrl": "https://docs.google.com/spreadsheets/d/19n84gbJPp-VmAUz6fElLSQcMajh5btPvI7Lhf20u7hs/edit#gid=0",
            "cachedResultName": "Sheet1"
          },
          "documentId": {
            "__rl": true,
            "mode": "list",
            "value": "19n84gbJPp-VmAUz6fElLSQcMajh5btPvI7Lhf20u7hs",
            "cachedResultUrl": "https://docs.google.com/spreadsheets/d/19n84gbJPp-VmAUz6fElLSQcMajh5btPvI7Lhf20u7hs/edit?usp=drivesdk",
            "cachedResultName": "HDW_OutReach"
          }
        },
        "credentials": {
          "googleSheetsOAuth2Api": {
            "id": "ZKhilXnb085cZbuM",
            "name": "Google Sheets account"
          }
        },
        "retryOnFail": true,
        "typeVersion": 4.5,
        "waitBetweenTries": 5000
      },
      {
        "id": "3ad79f6e-fcc7-4fd1-b546-3ab04b1084af",
        "name": "Google Sheets1",
        "type": "n8n-nodes-base.googleSheets",
        "maxTries": 5,
        "position": [
          -900,
          1040
        ],
        "parameters": {
          "options": {},
          "sheetName": {
            "__rl": true,
            "mode": "list",
            "value": "gid=0",
            "cachedResultUrl": "https://docs.google.com/spreadsheets/d/19n84gbJPp-VmAUz6fElLSQcMajh5btPvI7Lhf20u7hs/edit#gid=0",
            "cachedResultName": "Sheet1"
          },
          "documentId": {
            "__rl": true,
            "mode": "list",
            "value": "19n84gbJPp-VmAUz6fElLSQcMajh5btPvI7Lhf20u7hs",
            "cachedResultUrl": "https://docs.google.com/spreadsheets/d/19n84gbJPp-VmAUz6fElLSQcMajh5btPvI7Lhf20u7hs/edit?usp=drivesdk",
            "cachedResultName": "HDW_OutReach"
          }
        },
        "credentials": {
          "googleSheetsOAuth2Api": {
            "id": "ZKhilXnb085cZbuM",
            "name": "Google Sheets account"
          }
        },
        "executeOnce": true,
        "retryOnFail": true,
        "typeVersion": 4.5,
        "waitBetweenTries": 5000
      },
      {
        "id": "3084f957-886b-466a-96d1-2918b9448c63",
        "name": "Google Sheets2",
        "type": "n8n-nodes-base.googleSheets",
        "position": [
          -560,
          2360
        ],
        "parameters": {
          "columns": {
            "value": {
              "URN": "={{ $('Google Sheets1').item.json.URN }}",
              "Website": "={{ $json.website }}"
            },
            "schema": [
              {
                "id": "Name",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Name",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "URN",
                "type": "string",
                "display": true,
                "removed": false,
                "required": false,
                "displayName": "URN",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "URL",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "URL",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "img",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "img",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Headline",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Headline",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "location",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "location",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "is premium",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "is premium",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Current company",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Current company",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Company URN",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Company URN",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "URL",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "URL",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Industry",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Industry",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Position",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Position",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Description",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Description",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Date",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Date",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Website",
                "type": "string",
                "display": true,
                "required": false,
                "displayName": "Website",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Posts summary",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Posts summary",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Product Summary",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Product Summary",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Company News",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Company News",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Company post summary",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Company post summary",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Lead Score",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Lead Score",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Contact Request",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Contact Request",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Connected",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Connected",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Message Sent",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Message Sent",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "row_number",
                "type": "string",
                "display": true,
                "removed": true,
                "readOnly": true,
                "required": false,
                "displayName": "row_number",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              }
            ],
            "mappingMode": "defineBelow",
            "matchingColumns": [
              "URN"
            ],
            "attemptToConvertTypes": false,
            "convertFieldsToString": false
          },
          "options": {},
          "operation": "update",
          "sheetName": {
            "__rl": true,
            "mode": "list",
            "value": "gid=0",
            "cachedResultUrl": "https://docs.google.com/spreadsheets/d/19n84gbJPp-VmAUz6fElLSQcMajh5btPvI7Lhf20u7hs/edit#gid=0",
            "cachedResultName": "Sheet1"
          },
          "documentId": {
            "__rl": true,
            "mode": "list",
            "value": "19n84gbJPp-VmAUz6fElLSQcMajh5btPvI7Lhf20u7hs",
            "cachedResultUrl": "https://docs.google.com/spreadsheets/d/19n84gbJPp-VmAUz6fElLSQcMajh5btPvI7Lhf20u7hs/edit?usp=drivesdk",
            "cachedResultName": "HDW_OutReach"
          }
        },
        "credentials": {
          "googleSheetsOAuth2Api": {
            "id": "ZKhilXnb085cZbuM",
            "name": "Google Sheets account"
          }
        },
        "retryOnFail": true,
        "typeVersion": 4.5,
        "waitBetweenTries": 5000
      },
      {
        "id": "a64188c8-f976-41e5-a8e5-b49e3c50e458",
        "name": "Loop Over Items",
        "type": "n8n-nodes-base.splitInBatches",
        "position": [
          -1200,
          2020
        ],
        "parameters": {
          "options": {
            "reset": false
          }
        },
        "retryOnFail": true,
        "typeVersion": 3
      },
      {
        "id": "d5cd8de3-b1ec-442d-a026-9adc411b8b49",
        "name": "Sticky Note",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          -2400,
          540
        ],
        "parameters": {
          "color": 4,
          "width": 1320,
          "content": "Find leads in LinkedIn"
        },
        "typeVersion": 1
      },
      {
        "id": "f9b7b200-4dec-43ee-8e00-e60914f1949d",
        "name": "Sticky Note1",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          -1020,
          540
        ],
        "parameters": {
          "color": 4,
          "width": 980,
          "content": "Get company website "
        },
        "typeVersion": 1
      },
      {
        "id": "3d2e343a-a81c-4754-a852-c43d7f592417",
        "name": "Sticky Note2",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          0,
          0
        ],
        "parameters": {
          "color": 4,
          "width": 1520,
          "content": "Research company website"
        },
        "typeVersion": 1
      },
      {
        "id": "1c9b4718-bd53-4c3f-b94c-371adea118c1",
        "name": "Sticky Note3",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          1560,
          540
        ],
        "parameters": {
          "color": 4,
          "width": 980,
          "content": "Score data"
        },
        "typeVersion": 1
      },
      {
        "id": "6c3b801e-838e-4c03-9f04-b7c27bb9cd59",
        "name": "Sticky Note4",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          2580,
          540
        ],
        "parameters": {
          "color": 4,
          "width": 1860,
          "content": "Communicate with leads"
        },
        "typeVersion": 1
      },
      {
        "id": "412f6d55-6d36-4602-b6db-ae5c449602e3",
        "name": "Sticky Note5",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          0,
          180
        ],
        "parameters": {
          "color": 4,
          "width": 1520,
          "content": "Research lead LN post"
        },
        "typeVersion": 1
      },
      {
        "id": "ed07b5b5-4b36-4cff-9dd4-150a8378967b",
        "name": "Sticky Note6",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          0,
          540
        ],
        "parameters": {
          "color": 4,
          "width": 1520,
          "content": "Research company LN post"
        },
        "typeVersion": 1
      },
      {
        "id": "8199980a-42d2-414a-a387-8faab1193a5c",
        "name": "Sticky Note7",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          0,
          360
        ],
        "parameters": {
          "color": 4,
          "width": 1520,
          "content": "Research company News"
        },
        "typeVersion": 1
      },
      {
        "id": "bde206ab-617e-425f-9cd9-df4da03c7146",
        "name": "HDW LinkedIn SN",
        "type": "n8n-nodes-hdw.hdwLinkedin",
        "onError": "continueRegularOutput",
        "position": [
          -1400,
          1080
        ],
        "parameters": {
          "count": "={{ $json.output.count }}",
          "keywords": "={{ $json.output.salesNavigatorParams.keywords }}",
          "resource": "search",
          "additionalFilters": {
            "industry": "={{ $json.output.salesNavigatorParams.industry }}",
            "location": "={{ $json.output.salesNavigatorParams.location }}",
            "company_sizes": "={{ $json.output.salesNavigatorParams.company_sizes }}",
            "current_titles": "={{ $json.output.salesNavigatorParams.current_titles }}",
            "current_companies": "={{ $json.output.salesNavigatorParams.current_companies }}"
          }
        },
        "credentials": {
          "hdwLinkedinApi": {
            "id": "ZT0V5HkxTZIlAkvE",
            "name": "HDW LinkedIn account"
          }
        },
        "retryOnFail": true,
        "typeVersion": 1,
        "alwaysOutputData": false
      },
      {
        "id": "79da9bcd-01df-41a3-9627-dff9ac226e3a",
        "name": "HDW Get Company Website",
        "type": "n8n-nodes-hdw.hdwLinkedin",
        "onError": "continueRegularOutput",
        "position": [
          -720,
          2260
        ],
        "parameters": {
          "company": "={{ $json[\"Company URN\"] }}",
          "resource": "company"
        },
        "credentials": {
          "hdwLinkedinApi": {
            "id": "ZT0V5HkxTZIlAkvE",
            "name": "HDW LinkedIn account"
          }
        },
        "notesInFlow": true,
        "retryOnFail": true,
        "typeVersion": 1,
        "waitBetweenTries": 5000
      },
      {
        "id": "d6263cff-7a21-462a-81a4-e09dfacc10a4",
        "name": "Google Sheets3",
        "type": "n8n-nodes-base.googleSheets",
        "position": [
          240,
          880
        ],
        "parameters": {
          "options": {},
          "sheetName": {
            "__rl": true,
            "mode": "list",
            "value": "gid=0",
            "cachedResultUrl": "https://docs.google.com/spreadsheets/d/19n84gbJPp-VmAUz6fElLSQcMajh5btPvI7Lhf20u7hs/edit#gid=0",
            "cachedResultName": "Sheet1"
          },
          "documentId": {
            "__rl": true,
            "mode": "list",
            "value": "19n84gbJPp-VmAUz6fElLSQcMajh5btPvI7Lhf20u7hs",
            "cachedResultUrl": "https://docs.google.com/spreadsheets/d/19n84gbJPp-VmAUz6fElLSQcMajh5btPvI7Lhf20u7hs/edit?usp=drivesdk",
            "cachedResultName": "HDW_OutReach"
          }
        },
        "credentials": {
          "googleSheetsOAuth2Api": {
            "id": "ZKhilXnb085cZbuM",
            "name": "Google Sheets account"
          }
        },
        "executeOnce": true,
        "retryOnFail": true,
        "typeVersion": 4.5,
        "waitBetweenTries": 5000
      },
      {
        "id": "719377c5-150f-4819-968a-b69d75eb70ad",
        "name": "Loop Over Items1",
        "type": "n8n-nodes-base.splitInBatches",
        "position": [
          760,
          860
        ],
        "parameters": {
          "options": {}
        },
        "retryOnFail": true,
        "typeVersion": 3
      },
      {
        "id": "0d88ce35-4fa3-4cef-87ef-23f6992e1855",
        "name": "Google Sheets4",
        "type": "n8n-nodes-base.googleSheets",
        "position": [
          260,
          1420
        ],
        "parameters": {
          "options": {},
          "sheetName": {
            "__rl": true,
            "mode": "list",
            "value": "gid=0",
            "cachedResultUrl": "https://docs.google.com/spreadsheets/d/19n84gbJPp-VmAUz6fElLSQcMajh5btPvI7Lhf20u7hs/edit#gid=0",
            "cachedResultName": "Sheet1"
          },
          "documentId": {
            "__rl": true,
            "mode": "list",
            "value": "19n84gbJPp-VmAUz6fElLSQcMajh5btPvI7Lhf20u7hs",
            "cachedResultUrl": "https://docs.google.com/spreadsheets/d/19n84gbJPp-VmAUz6fElLSQcMajh5btPvI7Lhf20u7hs/edit?usp=drivesdk",
            "cachedResultName": "HDW_OutReach"
          }
        },
        "credentials": {
          "googleSheetsOAuth2Api": {
            "id": "ZKhilXnb085cZbuM",
            "name": "Google Sheets account"
          }
        },
        "executeOnce": true,
        "retryOnFail": true,
        "typeVersion": 4.5,
        "waitBetweenTries": 5000
      },
      {
        "id": "cd54b602-8fbc-4b29-869f-e2fcec4e1fbd",
        "name": "HDW Get User Posts",
        "type": "n8n-nodes-hdw.hdwLinkedin",
        "position": [
          900,
          1460
        ],
        "parameters": {
          "urn": "={{ $('Post summary is empty').item.json.URN }}",
          "operation": "getPosts"
        },
        "credentials": {
          "hdwLinkedinApi": {
            "id": "ZT0V5HkxTZIlAkvE",
            "name": "HDW LinkedIn account"
          }
        },
        "retryOnFail": true,
        "typeVersion": 1,
        "alwaysOutputData": true
      },
      {
        "id": "69135673-0acc-43a1-bdb9-9b927839d896",
        "name": "Aggregate",
        "type": "n8n-nodes-base.aggregate",
        "position": [
          1080,
          1460
        ],
        "parameters": {
          "options": {},
          "fieldsToAggregate": {
            "fieldToAggregate": [
              {
                "fieldToAggregate": "text"
              },
              {
                "renameField": true,
                "outputFieldName": "repost",
                "fieldToAggregate": "repost.text"
              }
            ]
          }
        },
        "retryOnFail": true,
        "typeVersion": 1,
        "alwaysOutputData": true
      },
      {
        "id": "499a0e1f-d0f2-49f3-9f76-b6c8e8a6f11c",
        "name": "Loop Over Items2",
        "type": "n8n-nodes-base.splitInBatches",
        "position": [
          740,
          1300
        ],
        "parameters": {
          "options": {}
        },
        "retryOnFail": true,
        "typeVersion": 3
      },
      {
        "id": "afbd8a72-e766-4ce1-8231-6ea3b75389fd",
        "name": "Google Sheets5",
        "type": "n8n-nodes-base.googleSheets",
        "onError": "continueRegularOutput",
        "position": [
          1580,
          1460
        ],
        "parameters": {
          "columns": {
            "value": {
              "URN": "={{ $('Post summary is empty').item.json.URN }}",
              "Posts summary": "={{ $json.message.content }}"
            },
            "schema": [
              {
                "id": "Name",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Name",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "URN",
                "type": "string",
                "display": true,
                "removed": false,
                "required": false,
                "displayName": "URN",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "URL",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "URL",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "img",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "img",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Headline",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Headline",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "location",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "location",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "is premium",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "is premium",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Current company",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Current company",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Company URN",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Company URN",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "URL",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "URL",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Industry",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Industry",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Position",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Position",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Description",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Description",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Date",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Date",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Website",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Website",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Posts summary",
                "type": "string",
                "display": true,
                "removed": false,
                "required": false,
                "displayName": "Posts summary",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Product Summary",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Product Summary",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Company News",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Company News",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "row_number",
                "type": "string",
                "display": true,
                "removed": true,
                "readOnly": true,
                "required": false,
                "displayName": "row_number",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              }
            ],
            "mappingMode": "defineBelow",
            "matchingColumns": [
              "URN"
            ],
            "attemptToConvertTypes": false,
            "convertFieldsToString": false
          },
          "options": {},
          "operation": "update",
          "sheetName": {
            "__rl": true,
            "mode": "list",
            "value": "gid=0",
            "cachedResultUrl": "https://docs.google.com/spreadsheets/d/19n84gbJPp-VmAUz6fElLSQcMajh5btPvI7Lhf20u7hs/edit#gid=0",
            "cachedResultName": "Sheet1"
          },
          "documentId": {
            "__rl": true,
            "mode": "list",
            "value": "19n84gbJPp-VmAUz6fElLSQcMajh5btPvI7Lhf20u7hs",
            "cachedResultUrl": "https://docs.google.com/spreadsheets/d/19n84gbJPp-VmAUz6fElLSQcMajh5btPvI7Lhf20u7hs/edit?usp=drivesdk",
            "cachedResultName": "HDW_OutReach"
          }
        },
        "credentials": {
          "googleSheetsOAuth2Api": {
            "id": "ZKhilXnb085cZbuM",
            "name": "Google Sheets account"
          }
        },
        "retryOnFail": true,
        "typeVersion": 4.5
      },
      {
        "id": "6c540033-4a12-4980-aa03-0e2129b3477d",
        "name": "Google Sheets6",
        "type": "n8n-nodes-base.googleSheets",
        "position": [
          260,
          1880
        ],
        "parameters": {
          "options": {},
          "sheetName": {
            "__rl": true,
            "mode": "list",
            "value": "gid=0",
            "cachedResultUrl": "https://docs.google.com/spreadsheets/d/19n84gbJPp-VmAUz6fElLSQcMajh5btPvI7Lhf20u7hs/edit#gid=0",
            "cachedResultName": "Sheet1"
          },
          "documentId": {
            "__rl": true,
            "mode": "list",
            "value": "19n84gbJPp-VmAUz6fElLSQcMajh5btPvI7Lhf20u7hs",
            "cachedResultUrl": "https://docs.google.com/spreadsheets/d/19n84gbJPp-VmAUz6fElLSQcMajh5btPvI7Lhf20u7hs/edit?usp=drivesdk",
            "cachedResultName": "HDW_OutReach"
          }
        },
        "credentials": {
          "googleSheetsOAuth2Api": {
            "id": "ZKhilXnb085cZbuM",
            "name": "Google Sheets account"
          }
        },
        "executeOnce": true,
        "retryOnFail": true,
        "typeVersion": 4.5,
        "waitBetweenTries": 5000
      },
      {
        "id": "8b356508-c494-421c-a88d-83f3f7808d99",
        "name": "Aggregate1",
        "type": "n8n-nodes-base.aggregate",
        "position": [
          1080,
          1880
        ],
        "parameters": {
          "options": {},
          "fieldsToAggregate": {
            "fieldToAggregate": [
              {
                "fieldToAggregate": "description"
              }
            ]
          }
        },
        "typeVersion": 1
      },
      {
        "id": "3c9bb26b-ce71-4625-a472-c3008bbd1bbf",
        "name": "Loop Over Items3",
        "type": "n8n-nodes-base.splitInBatches",
        "position": [
          740,
          1720
        ],
        "parameters": {
          "options": {}
        },
        "retryOnFail": true,
        "typeVersion": 3
      },
      {
        "id": "fa18d1f6-545d-43d4-a6e2-27bb634d1681",
        "name": "Google Sheets7",
        "type": "n8n-nodes-base.googleSheets",
        "onError": "continueRegularOutput",
        "position": [
          1600,
          1880
        ],
        "parameters": {
          "columns": {
            "value": {
              "URN": "={{ $('Company news is empty').item.json.URN }}",
              "Company News": "={{ $json.message.content }}"
            },
            "schema": [
              {
                "id": "Name",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Name",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "URN",
                "type": "string",
                "display": true,
                "removed": false,
                "required": false,
                "displayName": "URN",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "URL",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "URL",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "img",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "img",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Headline",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Headline",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "location",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "location",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "is premium",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "is premium",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Current company",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Current company",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Company URN",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Company URN",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "URL",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "URL",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Industry",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Industry",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Position",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Position",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Description",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Description",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Date",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Date",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Website",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Website",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Posts summary",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Posts summary",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Product Summary",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Product Summary",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Company News",
                "type": "string",
                "display": true,
                "removed": false,
                "required": false,
                "displayName": "Company News",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "row_number",
                "type": "string",
                "display": true,
                "removed": true,
                "readOnly": true,
                "required": false,
                "displayName": "row_number",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              }
            ],
            "mappingMode": "defineBelow",
            "matchingColumns": [
              "URN"
            ],
            "attemptToConvertTypes": false,
            "convertFieldsToString": false
          },
          "options": {},
          "operation": "update",
          "sheetName": {
            "__rl": true,
            "mode": "list",
            "value": "gid=0",
            "cachedResultUrl": "https://docs.google.com/spreadsheets/d/19n84gbJPp-VmAUz6fElLSQcMajh5btPvI7Lhf20u7hs/edit#gid=0",
            "cachedResultName": "Sheet1"
          },
          "documentId": {
            "__rl": true,
            "mode": "list",
            "value": "19n84gbJPp-VmAUz6fElLSQcMajh5btPvI7Lhf20u7hs",
            "cachedResultUrl": "https://docs.google.com/spreadsheets/d/19n84gbJPp-VmAUz6fElLSQcMajh5btPvI7Lhf20u7hs/edit?usp=drivesdk",
            "cachedResultName": "HDW_OutReach"
          }
        },
        "credentials": {
          "googleSheetsOAuth2Api": {
            "id": "ZKhilXnb085cZbuM",
            "name": "Google Sheets account"
          }
        },
        "retryOnFail": true,
        "typeVersion": 4.5
      },
      {
        "id": "d8d6941c-8e43-4bb2-8767-86b211a08e34",
        "name": "Google Sheets8",
        "type": "n8n-nodes-base.googleSheets",
        "position": [
          260,
          2380
        ],
        "parameters": {
          "options": {},
          "sheetName": {
            "__rl": true,
            "mode": "list",
            "value": "gid=0",
            "cachedResultUrl": "https://docs.google.com/spreadsheets/d/19n84gbJPp-VmAUz6fElLSQcMajh5btPvI7Lhf20u7hs/edit#gid=0",
            "cachedResultName": "Sheet1"
          },
          "documentId": {
            "__rl": true,
            "mode": "list",
            "value": "19n84gbJPp-VmAUz6fElLSQcMajh5btPvI7Lhf20u7hs",
            "cachedResultUrl": "https://docs.google.com/spreadsheets/d/19n84gbJPp-VmAUz6fElLSQcMajh5btPvI7Lhf20u7hs/edit?usp=drivesdk",
            "cachedResultName": "HDW_OutReach"
          }
        },
        "credentials": {
          "googleSheetsOAuth2Api": {
            "id": "ZKhilXnb085cZbuM",
            "name": "Google Sheets account"
          }
        },
        "executeOnce": true,
        "retryOnFail": true,
        "typeVersion": 4.5,
        "waitBetweenTries": 5000
      },
      {
        "id": "111ce09c-7635-4496-ab85-bcd575c244d5",
        "name": "Aggregate2",
        "type": "n8n-nodes-base.aggregate",
        "position": [
          1080,
          2380
        ],
        "parameters": {
          "options": {},
          "fieldsToAggregate": {
            "fieldToAggregate": [
              {
                "fieldToAggregate": "text"
              }
            ]
          }
        },
        "typeVersion": 1
      },
      {
        "id": "8f26f598-e6b4-45be-bc9a-a47315fcdfe3",
        "name": "Loop Over Items4",
        "type": "n8n-nodes-base.splitInBatches",
        "position": [
          740,
          2240
        ],
        "parameters": {
          "options": {}
        },
        "retryOnFail": true,
        "typeVersion": 3
      },
      {
        "id": "d39d0bcd-a36a-4310-b13b-65f4ebf0e5d2",
        "name": "Google Sheets9",
        "type": "n8n-nodes-base.googleSheets",
        "onError": "continueRegularOutput",
        "position": [
          1600,
          2380
        ],
        "parameters": {
          "columns": {
            "value": {
              "URN": "={{ $('Company post is empty').item.json.URN }}",
              "Company post summary": "={{ $('Summarise company posts').item.json.message.content }}"
            },
            "schema": [
              {
                "id": "Name",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Name",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "URN",
                "type": "string",
                "display": true,
                "removed": false,
                "required": false,
                "displayName": "URN",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "URL",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "URL",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "img",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "img",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Headline",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Headline",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "location",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "location",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "is premium",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "is premium",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Current company",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Current company",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Company URN",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Company URN",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "URL",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "URL",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Industry",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Industry",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Position",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Position",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Description",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Description",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Date",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Date",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Website",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Website",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Posts summary",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Posts summary",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Product Summary",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Product Summary",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Company News",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Company News",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Company post summary",
                "type": "string",
                "display": true,
                "removed": false,
                "required": false,
                "displayName": "Company post summary",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "row_number",
                "type": "string",
                "display": true,
                "removed": true,
                "readOnly": true,
                "required": false,
                "displayName": "row_number",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              }
            ],
            "mappingMode": "defineBelow",
            "matchingColumns": [
              "URN"
            ],
            "attemptToConvertTypes": false,
            "convertFieldsToString": false
          },
          "options": {},
          "operation": "update",
          "sheetName": {
            "__rl": true,
            "mode": "list",
            "value": "gid=0",
            "cachedResultUrl": "https://docs.google.com/spreadsheets/d/19n84gbJPp-VmAUz6fElLSQcMajh5btPvI7Lhf20u7hs/edit#gid=0",
            "cachedResultName": "Sheet1"
          },
          "documentId": {
            "__rl": true,
            "mode": "list",
            "value": "19n84gbJPp-VmAUz6fElLSQcMajh5btPvI7Lhf20u7hs",
            "cachedResultUrl": "https://docs.google.com/spreadsheets/d/19n84gbJPp-VmAUz6fElLSQcMajh5btPvI7Lhf20u7hs/edit?usp=drivesdk",
            "cachedResultName": "HDW_OutReach"
          }
        },
        "credentials": {
          "googleSheetsOAuth2Api": {
            "id": "ZKhilXnb085cZbuM",
            "name": "Google Sheets account"
          }
        },
        "retryOnFail": true,
        "typeVersion": 4.5
      },
      {
        "id": "8cfb6af5-6360-4440-b1a6-598eb443c8f5",
        "name": "HDW Get Company News",
        "type": "n8n-nodes-hdw.hdwLinkedin",
        "position": [
          900,
          1880
        ],
        "parameters": {
          "query": "={{ $('Company news is empty').item.json[\"Current company\"] }} (news OR press OR announcement OR update)",
          "resource": "google",
          "operation": "googleSearch"
        },
        "credentials": {
          "hdwLinkedinApi": {
            "id": "ZT0V5HkxTZIlAkvE",
            "name": "HDW LinkedIn account"
          }
        },
        "retryOnFail": true,
        "typeVersion": 1,
        "alwaysOutputData": true
      },
      {
        "id": "2f7b9aaf-1fe1-45f9-a63e-34b8a8a2658c",
        "name": "HDW Get Company Posts",
        "type": "n8n-nodes-hdw.hdwLinkedin",
        "onError": "continueRegularOutput",
        "position": [
          900,
          2380
        ],
        "parameters": {
          "urn": "={{ $('Google Sheets8').item.json[\"Company URN\"] }}",
          "resource": "company",
          "operation": "getCompanyPosts"
        },
        "credentials": {
          "hdwLinkedinApi": {
            "id": "ZT0V5HkxTZIlAkvE",
            "name": "HDW LinkedIn account"
          }
        },
        "retryOnFail": true,
        "typeVersion": 1,
        "alwaysOutputData": true
      },
      {
        "id": "efc019e2-5439-44bc-907b-b77e05833a7c",
        "name": "Split Out",
        "type": "n8n-nodes-base.splitOut",
        "position": [
          -1640,
          1060
        ],
        "parameters": {
          "include": "allOtherFields",
          "options": {},
          "fieldToSplitOut": "output"
        },
        "retryOnFail": true,
        "typeVersion": 1
      },
      {
        "id": "89c665d7-0d0c-47ce-9e74-780a57ef582e",
        "name": "OpenAI Chat Model1",
        "type": "@n8n/n8n-nodes-langchain.lmChatOpenAi",
        "position": [
          960,
          1120
        ],
        "parameters": {
          "model": {
            "__rl": true,
            "mode": "list",
            "value": "gpt-4o",
            "cachedResultName": "gpt-4o"
          },
          "options": {}
        },
        "credentials": {
          "openAiApi": {
            "id": "DzKhX3E7SSLddnv4",
            "name": "OpenAi account"
          }
        },
        "typeVersion": 1.2
      },
      {
        "id": "920fe0db-bef0-4f78-a793-e406565df11a",
        "name": "Google Sheets10",
        "type": "n8n-nodes-base.googleSheets",
        "onError": "continueRegularOutput",
        "position": [
          1560,
          860
        ],
        "parameters": {
          "columns": {
            "value": {
              "URN": "={{ $('Website is not empty').item.json.URN }}",
              "Product Summary": "={{ $json.output }}"
            },
            "schema": [
              {
                "id": "Name",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Name",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "URN",
                "type": "string",
                "display": true,
                "removed": false,
                "required": false,
                "displayName": "URN",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "URL",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "URL",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "img",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "img",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Headline",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Headline",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "location",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "location",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "is premium",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "is premium",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Current company",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Current company",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Company URN",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Company URN",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "URL",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "URL",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Industry",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Industry",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Position",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Position",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Description",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Description",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Date",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Date",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Website",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Website",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Posts summary",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Posts summary",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Product Summary",
                "type": "string",
                "display": true,
                "removed": false,
                "required": false,
                "displayName": "Product Summary",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Company News",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Company News",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "row_number",
                "type": "string",
                "display": true,
                "removed": true,
                "readOnly": true,
                "required": false,
                "displayName": "row_number",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              }
            ],
            "mappingMode": "defineBelow",
            "matchingColumns": [
              "URN"
            ],
            "attemptToConvertTypes": false,
            "convertFieldsToString": false
          },
          "options": {},
          "operation": "update",
          "sheetName": {
            "__rl": true,
            "mode": "list",
            "value": "gid=0",
            "cachedResultUrl": "https://docs.google.com/spreadsheets/d/19n84gbJPp-VmAUz6fElLSQcMajh5btPvI7Lhf20u7hs/edit#gid=0",
            "cachedResultName": "Sheet1"
          },
          "documentId": {
            "__rl": true,
            "mode": "list",
            "value": "19n84gbJPp-VmAUz6fElLSQcMajh5btPvI7Lhf20u7hs",
            "cachedResultUrl": "https://docs.google.com/spreadsheets/d/19n84gbJPp-VmAUz6fElLSQcMajh5btPvI7Lhf20u7hs/edit?usp=drivesdk",
            "cachedResultName": "HDW_OutReach"
          }
        },
        "credentials": {
          "googleSheetsOAuth2Api": {
            "id": "ZKhilXnb085cZbuM",
            "name": "Google Sheets account"
          }
        },
        "retryOnFail": true,
        "typeVersion": 4.5
      },
      {
        "id": "402b88d8-1f0c-4a13-b93f-242703a3861e",
        "name": "HDW Site-map",
        "type": "n8n-nodes-hdw.hdwWebParserTool",
        "position": [
          1280,
          1120
        ],
        "parameters": {
          "url": "={{ /*n8n-auto-generated-fromAI-override*/ $fromAI('URL', `use company url to get a site-map`, 'string') }}",
          "operation": "map",
          "descriptionType": "manual",
          "toolDescription": "Get sitemap by url"
        },
        "credentials": {
          "hdwLinkedinApi": {
            "id": "ZT0V5HkxTZIlAkvE",
            "name": "HDW LinkedIn account"
          }
        },
        "typeVersion": 1
      },
      {
        "id": "37e1f633-6e14-4ab0-a205-cdc5e88b3b7d",
        "name": "HDW Parser",
        "type": "n8n-nodes-hdw.hdwWebParserTool",
        "position": [
          1440,
          1120
        ],
        "parameters": {
          "url": "={{ /*n8n-auto-generated-fromAI-override*/ $fromAI('URL', ``, 'string') }}",
          "descriptionType": "manual",
          "toolDescription": "Parse info from website by url"
        },
        "credentials": {
          "hdwLinkedinApi": {
            "id": "ZT0V5HkxTZIlAkvE",
            "name": "HDW LinkedIn account"
          }
        },
        "typeVersion": 1
      },
      {
        "id": "91cd0c40-4f6e-417c-9139-7479ed306808",
        "name": "Summarise user posts",
        "type": "@n8n/n8n-nodes-langchain.openAi",
        "position": [
          1240,
          1460
        ],
        "parameters": {
          "modelId": {
            "__rl": true,
            "mode": "list",
            "value": "gpt-4o",
            "cachedResultName": "GPT-4O"
          },
          "options": {},
          "messages": {
            "values": [
              {
                "content": "=Make summary of this text:\n {{ $json.text }}\n{{ $json.repost }}"
              }
            ]
          }
        },
        "credentials": {
          "openAiApi": {
            "id": "DzKhX3E7SSLddnv4",
            "name": "OpenAi account"
          }
        },
        "retryOnFail": true,
        "typeVersion": 1.8
      },
      {
        "id": "34580e4c-ac3c-48b1-bf3c-c09b4e7b0236",
        "name": "Summarise company news",
        "type": "@n8n/n8n-nodes-langchain.openAi",
        "position": [
          1260,
          1880
        ],
        "parameters": {
          "modelId": {
            "__rl": true,
            "mode": "list",
            "value": "gpt-4o",
            "cachedResultName": "GPT-4O"
          },
          "options": {},
          "messages": {
            "values": [
              {
                "content": "=Make summary of this news:\n{{ $json.description }}"
              }
            ]
          }
        },
        "credentials": {
          "openAiApi": {
            "id": "DzKhX3E7SSLddnv4",
            "name": "OpenAi account"
          }
        },
        "retryOnFail": true,
        "typeVersion": 1.8
      },
      {
        "id": "a21ceccb-1e64-4849-a0b2-a74171f672b7",
        "name": "Summarise company posts",
        "type": "@n8n/n8n-nodes-langchain.openAi",
        "position": [
          1260,
          2380
        ],
        "parameters": {
          "modelId": {
            "__rl": true,
            "mode": "list",
            "value": "gpt-4o",
            "cachedResultName": "GPT-4O"
          },
          "options": {},
          "messages": {
            "values": [
              {
                "content": "=Make summary of this company posts:\n{{ $json.text }}"
              }
            ]
          }
        },
        "credentials": {
          "openAiApi": {
            "id": "DzKhX3E7SSLddnv4",
            "name": "OpenAi account"
          }
        },
        "retryOnFail": true,
        "typeVersion": 1.8
      },
      {
        "id": "286996d7-510e-495d-95b6-fcfcd4fb15e5",
        "name": "Summarise company website",
        "type": "@n8n/n8n-nodes-langchain.agent",
        "position": [
          1040,
          860
        ],
        "parameters": {
          "text": "=Research company website {{ $json.Website }} and get summary about business and products\n1. Get site-map with the tool\n2. Define what links may contain data about company business and products\n3. Scrape data for every links\n4. Summarize info from website ",
          "options": {},
          "promptType": "define"
        },
        "retryOnFail": true,
        "typeVersion": 1.8
      },
      {
        "id": "c660d9fe-7796-44dd-bed4-aa61f08ca485",
        "name": "Google Sheets11",
        "type": "n8n-nodes-base.googleSheets",
        "position": [
          1740,
          1740
        ],
        "parameters": {
          "options": {},
          "sheetName": {
            "__rl": true,
            "mode": "list",
            "value": "gid=0",
            "cachedResultUrl": "https://docs.google.com/spreadsheets/d/19n84gbJPp-VmAUz6fElLSQcMajh5btPvI7Lhf20u7hs/edit#gid=0",
            "cachedResultName": "Sheet1"
          },
          "documentId": {
            "__rl": true,
            "mode": "list",
            "value": "19n84gbJPp-VmAUz6fElLSQcMajh5btPvI7Lhf20u7hs",
            "cachedResultUrl": "https://docs.google.com/spreadsheets/d/19n84gbJPp-VmAUz6fElLSQcMajh5btPvI7Lhf20u7hs/edit?usp=drivesdk",
            "cachedResultName": "HDW_OutReach"
          }
        },
        "credentials": {
          "googleSheetsOAuth2Api": {
            "id": "ZKhilXnb085cZbuM",
            "name": "Google Sheets account"
          }
        },
        "executeOnce": true,
        "retryOnFail": true,
        "typeVersion": 4.5,
        "waitBetweenTries": 5000
      },
      {
        "id": "b9a84c97-b921-44f6-9f76-839237c9ad71",
        "name": "Loop Over Items6",
        "type": "n8n-nodes-base.splitInBatches",
        "position": [
          2080,
          1620
        ],
        "parameters": {
          "options": {
            "reset": false
          }
        },
        "retryOnFail": true,
        "typeVersion": 3
      },
      {
        "id": "69a200f9-0ed8-45d7-b338-36b7a6d3dab6",
        "name": "Google Sheets12",
        "type": "n8n-nodes-base.googleSheets",
        "onError": "continueRegularOutput",
        "position": [
          2580,
          1740
        ],
        "parameters": {
          "columns": {
            "value": {
              "URN": "={{ $('Google Sheets11').item.json.URN }}",
              "Lead Score": "={{ $json.message.content }}"
            },
            "schema": [
              {
                "id": "Name",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Name",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "URN",
                "type": "string",
                "display": true,
                "removed": false,
                "required": false,
                "displayName": "URN",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "URL",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "URL",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "img",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "img",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Headline",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Headline",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "location",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "location",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "is premium",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "is premium",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Current company",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Current company",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Company URN",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Company URN",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "URL",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "URL",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Industry",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Industry",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Position",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Position",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Description",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Description",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Date",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Date",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Website",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Website",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Posts summary",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Posts summary",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Product Summary",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Product Summary",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Company News",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Company News",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Company post summary",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Company post summary",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Lead Score",
                "type": "string",
                "display": true,
                "removed": false,
                "required": false,
                "displayName": "Lead Score",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "row_number",
                "type": "string",
                "display": true,
                "removed": true,
                "readOnly": true,
                "required": false,
                "displayName": "row_number",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              }
            ],
            "mappingMode": "defineBelow",
            "matchingColumns": [
              "URN"
            ],
            "attemptToConvertTypes": false,
            "convertFieldsToString": false
          },
          "options": {},
          "operation": "update",
          "sheetName": {
            "__rl": true,
            "mode": "list",
            "value": "gid=0",
            "cachedResultUrl": "https://docs.google.com/spreadsheets/d/19n84gbJPp-VmAUz6fElLSQcMajh5btPvI7Lhf20u7hs/edit#gid=0",
            "cachedResultName": "Sheet1"
          },
          "documentId": {
            "__rl": true,
            "mode": "list",
            "value": "19n84gbJPp-VmAUz6fElLSQcMajh5btPvI7Lhf20u7hs",
            "cachedResultUrl": "https://docs.google.com/spreadsheets/d/19n84gbJPp-VmAUz6fElLSQcMajh5btPvI7Lhf20u7hs/edit?usp=drivesdk",
            "cachedResultName": "HDW_OutReach"
          }
        },
        "credentials": {
          "googleSheetsOAuth2Api": {
            "id": "ZKhilXnb085cZbuM",
            "name": "Google Sheets account"
          }
        },
        "retryOnFail": true,
        "typeVersion": 4.5
      },
      {
        "id": "da054df5-af1d-4433-b382-7b9bd7477e4b",
        "name": "Google Sheets13",
        "type": "n8n-nodes-base.googleSheets",
        "position": [
          3080,
          1120
        ],
        "parameters": {
          "options": {},
          "sheetName": {
            "__rl": true,
            "mode": "list",
            "value": "gid=0",
            "cachedResultUrl": "https://docs.google.com/spreadsheets/d/19n84gbJPp-VmAUz6fElLSQcMajh5btPvI7Lhf20u7hs/edit#gid=0",
            "cachedResultName": "Sheet1"
          },
          "documentId": {
            "__rl": true,
            "mode": "list",
            "value": "19n84gbJPp-VmAUz6fElLSQcMajh5btPvI7Lhf20u7hs",
            "cachedResultUrl": "https://docs.google.com/spreadsheets/d/19n84gbJPp-VmAUz6fElLSQcMajh5btPvI7Lhf20u7hs/edit?usp=drivesdk",
            "cachedResultName": "HDW_OutReach"
          }
        },
        "credentials": {
          "googleSheetsOAuth2Api": {
            "id": "ZKhilXnb085cZbuM",
            "name": "Google Sheets account"
          }
        },
        "retryOnFail": true,
        "typeVersion": 4.5,
        "waitBetweenTries": 5000
      },
      {
        "id": "6b3e0f6f-c3b6-460c-acca-92b5ff8914c4",
        "name": "Sort",
        "type": "n8n-nodes-base.sort",
        "position": [
          3300,
          1120
        ],
        "parameters": {
          "options": {},
          "sortFieldsUi": {
            "sortField": [
              {
                "order": "descending",
                "fieldName": "Lead Score"
              }
            ]
          }
        },
        "typeVersion": 1
      },
      {
        "id": "115e2770-f19f-4796-943b-293e6be14f01",
        "name": "If2",
        "type": "n8n-nodes-base.if",
        "position": [
          3500,
          1120
        ],
        "parameters": {
          "options": {},
          "conditions": {
            "options": {
              "version": 2,
              "leftValue": "",
              "caseSensitive": true,
              "typeValidation": "loose"
            },
            "combinator": "or",
            "conditions": [
              {
                "id": "140d284f-34c0-4bf4-bb88-b0a9bdbc80f7",
                "operator": {
                  "type": "string",
                  "operation": "empty",
                  "singleValue": true
                },
                "leftValue": "={{ $json[\"Contact Request\"] }}",
                "rightValue": ""
              }
            ]
          },
          "looseTypeValidation": true
        },
        "typeVersion": 2.2
      },
      {
        "id": "7d3b6e0a-afc8-432b-9da1-a71743fc9f9f",
        "name": "Limit",
        "type": "n8n-nodes-base.limit",
        "notes": "max 200 per week",
        "position": [
          3720,
          1020
        ],
        "parameters": {
          "maxItems": 50
        },
        "notesInFlow": true,
        "typeVersion": 1
      },
      {
        "id": "d3c9bf50-c72c-4e7e-8f29-59bef7635ac8",
        "name": "Loop Over Items7",
        "type": "n8n-nodes-base.splitInBatches",
        "position": [
          3860,
          1240
        ],
        "parameters": {
          "options": {}
        },
        "retryOnFail": true,
        "typeVersion": 3
      },
      {
        "id": "84cd1b25-5781-4449-87fc-2e72b127c0df",
        "name": "Google Sheets14",
        "type": "n8n-nodes-base.googleSheets",
        "onError": "continueRegularOutput",
        "position": [
          4400,
          1260
        ],
        "parameters": {
          "columns": {
            "value": {
              "URN": "={{ $('Google Sheets13').item.json.URN }}",
              "Contact Request": "TRUE"
            },
            "schema": [
              {
                "id": "Name",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Name",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "URN",
                "type": "string",
                "display": true,
                "removed": false,
                "required": false,
                "displayName": "URN",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "URL",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "URL",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "img",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "img",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Headline",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Headline",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "location",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "location",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "is premium",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "is premium",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Current company",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Current company",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Company URN",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Company URN",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "URL",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "URL",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Industry",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Industry",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Position",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Position",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Description",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Description",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Date",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Date",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Website",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Website",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Posts summary",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Posts summary",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Product Summary",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Product Summary",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Company News",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Company News",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Company post summary",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Company post summary",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Lead Score",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Lead Score",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Contact Request",
                "type": "string",
                "display": true,
                "removed": false,
                "required": false,
                "displayName": "Contact Request",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Connected",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Connected",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "row_number",
                "type": "string",
                "display": true,
                "removed": true,
                "readOnly": true,
                "required": false,
                "displayName": "row_number",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              }
            ],
            "mappingMode": "defineBelow",
            "matchingColumns": [
              "URN"
            ],
            "attemptToConvertTypes": false,
            "convertFieldsToString": false
          },
          "options": {},
          "operation": "update",
          "sheetName": {
            "__rl": true,
            "mode": "list",
            "value": "gid=0",
            "cachedResultUrl": "https://docs.google.com/spreadsheets/d/19n84gbJPp-VmAUz6fElLSQcMajh5btPvI7Lhf20u7hs/edit#gid=0",
            "cachedResultName": "Sheet1"
          },
          "documentId": {
            "__rl": true,
            "mode": "list",
            "value": "19n84gbJPp-VmAUz6fElLSQcMajh5btPvI7Lhf20u7hs",
            "cachedResultUrl": "https://docs.google.com/spreadsheets/d/19n84gbJPp-VmAUz6fElLSQcMajh5btPvI7Lhf20u7hs/edit?usp=drivesdk",
            "cachedResultName": "HDW_OutReach"
          }
        },
        "credentials": {
          "googleSheetsOAuth2Api": {
            "id": "ZKhilXnb085cZbuM",
            "name": "Google Sheets account"
          }
        },
        "retryOnFail": true,
        "typeVersion": 4.5
      },
      {
        "id": "ccce3a0a-6ff1-4c9a-948a-d19f7a4f3bce",
        "name": "Google Sheets15",
        "type": "n8n-nodes-base.googleSheets",
        "maxTries": 5,
        "position": [
          3560,
          1540
        ],
        "parameters": {
          "columns": {
            "value": {
              "URN": "={{ $json.urn.type }}:{{ $json.urn.value }}",
              "Connected": "TRUE"
            },
            "schema": [
              {
                "id": "Name",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Name",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "URN",
                "type": "string",
                "display": true,
                "removed": false,
                "required": false,
                "displayName": "URN",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "URL",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "URL",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "img",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "img",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Headline",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Headline",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "location",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "location",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "is premium",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "is premium",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Current company",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Current company",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Company URN",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Company URN",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "URL",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "URL",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Industry",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Industry",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Position",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Position",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Description",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Description",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Date",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Date",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Website",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Website",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Posts summary",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Posts summary",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Product Summary",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Product Summary",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Company News",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Company News",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Company post summary",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Company post summary",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Lead Score",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Lead Score",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Contact Request",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Contact Request",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Connected",
                "type": "string",
                "display": true,
                "removed": false,
                "required": false,
                "displayName": "Connected",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Message Sent",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Message Sent",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "row_number",
                "type": "string",
                "display": true,
                "removed": true,
                "readOnly": true,
                "required": false,
                "displayName": "row_number",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              }
            ],
            "mappingMode": "defineBelow",
            "matchingColumns": [
              "URN"
            ],
            "attemptToConvertTypes": false,
            "convertFieldsToString": false
          },
          "options": {},
          "operation": "update",
          "sheetName": {
            "__rl": true,
            "mode": "list",
            "value": "gid=0",
            "cachedResultUrl": "https://docs.google.com/spreadsheets/d/19n84gbJPp-VmAUz6fElLSQcMajh5btPvI7Lhf20u7hs/edit#gid=0",
            "cachedResultName": "Sheet1"
          },
          "documentId": {
            "__rl": true,
            "mode": "list",
            "value": "19n84gbJPp-VmAUz6fElLSQcMajh5btPvI7Lhf20u7hs",
            "cachedResultUrl": "https://docs.google.com/spreadsheets/d/19n84gbJPp-VmAUz6fElLSQcMajh5btPvI7Lhf20u7hs/edit?usp=drivesdk",
            "cachedResultName": "HDW_OutReach"
          }
        },
        "credentials": {
          "googleSheetsOAuth2Api": {
            "id": "ZKhilXnb085cZbuM",
            "name": "Google Sheets account"
          }
        },
        "notesInFlow": false,
        "retryOnFail": true,
        "typeVersion": 4.5,
        "alwaysOutputData": false,
        "waitBetweenTries": 5000
      },
      {
        "id": "bfc9b9b9-3be3-4966-b93d-7b22898e240c",
        "name": "Google Sheets17",
        "type": "n8n-nodes-base.googleSheets",
        "onError": "continueRegularOutput",
        "position": [
          4720,
          2240
        ],
        "parameters": {
          "columns": {
            "value": {
              "URN": "={{ $('Google Sheets16').item.json.URN }}",
              "Message Sent": "TRUE",
              "Messages History": "={{ $json.text }}"
            },
            "schema": [
              {
                "id": "Name",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Name",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "URN",
                "type": "string",
                "display": true,
                "removed": false,
                "required": false,
                "displayName": "URN",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "URL",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "URL",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "img",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "img",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Headline",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Headline",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "location",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "location",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "is premium",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "is premium",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Current company",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Current company",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Company URN",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Company URN",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "URL",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "URL",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Industry",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Industry",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Position",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Position",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Description",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Description",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Date",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Date",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Website",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Website",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Posts summary",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Posts summary",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Product Summary",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Product Summary",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Company News",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Company News",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Company post summary",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Company post summary",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Lead Score",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Lead Score",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Contact Request",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Contact Request",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Connected",
                "type": "string",
                "display": true,
                "removed": true,
                "required": false,
                "displayName": "Connected",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Message Sent",
                "type": "string",
                "display": true,
                "removed": false,
                "required": false,
                "displayName": "Message Sent",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Messages History",
                "type": "string",
                "display": true,
                "removed": false,
                "required": false,
                "displayName": "Messages History",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "row_number",
                "type": "string",
                "display": true,
                "removed": true,
                "readOnly": true,
                "required": false,
                "displayName": "row_number",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              }
            ],
            "mappingMode": "defineBelow",
            "matchingColumns": [
              "URN"
            ],
            "attemptToConvertTypes": false,
            "convertFieldsToString": false
          },
          "options": {},
          "operation": "update",
          "sheetName": {
            "__rl": true,
            "mode": "list",
            "value": "gid=0",
            "cachedResultUrl": "https://docs.google.com/spreadsheets/d/19n84gbJPp-VmAUz6fElLSQcMajh5btPvI7Lhf20u7hs/edit#gid=0",
            "cachedResultName": "Sheet1"
          },
          "documentId": {
            "__rl": true,
            "mode": "list",
            "value": "19n84gbJPp-VmAUz6fElLSQcMajh5btPvI7Lhf20u7hs",
            "cachedResultUrl": "https://docs.google.com/spreadsheets/d/19n84gbJPp-VmAUz6fElLSQcMajh5btPvI7Lhf20u7hs/edit?usp=drivesdk",
            "cachedResultName": "HDW_OutReach"
          }
        },
        "credentials": {
          "googleSheetsOAuth2Api": {
            "id": "ZKhilXnb085cZbuM",
            "name": "Google Sheets account"
          }
        },
        "retryOnFail": true,
        "typeVersion": 4.5
      },
      {
        "id": "a9a7435c-a276-42d3-ae85-96c0cf86dec6",
        "name": "Loop Over Items8",
        "type": "n8n-nodes-base.splitInBatches",
        "position": [
          3900,
          1980
        ],
        "parameters": {
          "options": {}
        },
        "retryOnFail": true,
        "typeVersion": 3
      },
      {
        "id": "f7e9963b-bff1-4452-a7ce-2e53ab06b1a6",
        "name": "HDW LinkedIn Send Message",
        "type": "n8n-nodes-hdw.hdwLinkedinManagement",
        "position": [
          4460,
          2120
        ],
        "parameters": {
          "text": "Hello",
          "user": "={{ $json.URN }}",
          "resource": "chat"
        },
        "credentials": {
          "hdwLinkedinApi": {
            "id": "ZT0V5HkxTZIlAkvE",
            "name": "HDW LinkedIn account"
          }
        },
        "retryOnFail": true,
        "typeVersion": 1
      },
      {
        "id": "5cf24040-0343-476a-8e74-9ab803a5dab4",
        "name": "Schedule Trigger",
        "type": "n8n-nodes-base.scheduleTrigger",
        "position": [
          2640,
          1120
        ],
        "parameters": {
          "rule": {
            "interval": [
              {
                "triggerAtHour": 7
              }
            ]
          }
        },
        "typeVersion": 1.2
      },
      {
        "id": "0eca2bdb-0145-4082-9b45-7d05b176376f",
        "name": "Schedule Trigger1",
        "type": "n8n-nodes-base.scheduleTrigger",
        "position": [
          2920,
          1560
        ],
        "parameters": {
          "rule": {
            "interval": [
              {
                "triggerAtHour": 7
              }
            ]
          }
        },
        "typeVersion": 1.2
      },
      {
        "id": "c89614c9-304a-44d0-9bf6-f5578ad5ca73",
        "name": "Sticky Note8",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          -3280,
          800
        ],
        "parameters": {
          "color": 7,
          "width": 620,
          "height": 640,
          "content": "# LinkedIn Lead Automation Flow\n\nThis flow is designed to automate working with leads on LinkedIn from the process of finding leads according to ICP (Ideal Customer Profile) to sending messages in chat.\n\n## Stages:\n1. Building search filters based on your ICP\n2. Searching LinkedIn using these filters\n3. Saving the list of leads in Google Spreadsheet\n4. Data enrichment\n  • Company website\n  • Intent search in lead's posts\n  • Intent search in company posts\n  • Analysis of company news\n  • Analysis of company website\n5. Scoring information about the lead to prioritize interaction\n6. Adding the lead to LinkedIn connections\n7. Checking for reciprocal connection\n8. Writing messages\n\n## Requirements:\n1. Access to LLM (the example uses OpenAI API)\n2. Access to Google Drive\n3. API key for horizondatawave.ai\n4. LinkedIn account"
        },
        "typeVersion": 1
      },
      {
        "id": "244a300a-a0f6-4d35-90c1-e87078ed6600",
        "name": "Sticky Note9",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          -2080,
          920
        ],
        "parameters": {
          "color": 7,
          "width": 300,
          "height": 80,
          "content": "This node - an AI agent transforms your ICP description into filters for querying data in LinkedIn"
        },
        "typeVersion": 1
      },
      {
        "id": "f8cf06a5-e69a-4e8c-9132-b46093b22f16",
        "name": "Sticky Note10",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          -1360,
          1340
        ],
        "parameters": {
          "color": 7,
          "width": 320,
          "height": 80,
          "content": "Data is requested through the HDW API for each filter and saved in Google Sheets."
        },
        "typeVersion": 1
      },
      {
        "id": "1506055f-de26-4317-85d8-b4b0e99f78f7",
        "name": "Sticky Note11",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          -640,
          860
        ],
        "parameters": {
          "color": 7,
          "width": 320,
          "height": 120,
          "content": "At this stage, the presence of the company name in the lead's profile is verified, and a website search is performed for each company"
        },
        "typeVersion": 1
      },
      {
        "id": "8e70ff75-9cd9-4e17-9a55-40e87dbe2947",
        "name": "Sticky Note12",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          780,
          740
        ],
        "parameters": {
          "color": 5,
          "width": 360,
          "height": 100,
          "content": "You can modify the prompt here so that at this stage the search corresponds to your product. \nFor example, you can explicitly mark mentions of certain topics, locations, or other entities."
        },
        "typeVersion": 1
      },
      {
        "id": "7d6ad9ee-65cc-4235-abb1-557b0a602173",
        "name": "Sticky Note13",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          960,
          1320
        ],
        "parameters": {
          "color": 5,
          "width": 360,
          "height": 100,
          "content": "You can modify the prompt here so that at this stage the search corresponds to your product. \nFor example, you can explicitly mark mentions of certain topics, locations, or other entities."
        },
        "typeVersion": 1
      },
      {
        "id": "e04cbd74-c77e-4cfe-945d-447191ba4dbe",
        "name": "Sticky Note14",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          980,
          1760
        ],
        "parameters": {
          "color": 5,
          "width": 360,
          "height": 100,
          "content": "You can modify the prompt here so that at this stage the search corresponds to your product. \nFor example, you can explicitly mark mentions of certain topics, locations, or other entities."
        },
        "typeVersion": 1
      },
      {
        "id": "39852dfc-6077-4a3d-8dca-8760eaf20d18",
        "name": "Sticky Note15",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          980,
          2240
        ],
        "parameters": {
          "color": 5,
          "width": 360,
          "height": 100,
          "content": "You can modify the prompt here so that at this stage the search corresponds to your product. \nFor example, you can explicitly mark mentions of certain topics, locations, or other entities."
        },
        "typeVersion": 1
      },
      {
        "id": "e55a0d94-30c1-4d00-9b32-835a5ce8e66f",
        "name": "Sticky Note16",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          2200,
          1620
        ],
        "parameters": {
          "color": 5,
          "width": 360,
          "height": 100,
          "content": "You can also change the scoring criteria to assess the probability of need based on your product or business by adjusting the prompt in this node"
        },
        "typeVersion": 1
      },
      {
        "id": "66b08e98-dfe4-425a-83c6-0c11f4ad6a53",
        "name": "Sticky Note17",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          3600,
          900
        ],
        "parameters": {
          "color": 5,
          "width": 360,
          "height": 100,
          "content": "Here you can change the number of connection requests. It is not recommended to add more than 200 connections per week."
        },
        "typeVersion": 1
      },
      {
        "id": "4d8240ad-688e-4469-bcd4-b708b19cecba",
        "name": "Sticky Note18",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          4360,
          1980
        ],
        "parameters": {
          "color": 3,
          "width": 360,
          "height": 100,
          "content": "In this node, you need to modify the message that will be automatically sent to the user after the connection is confirmed."
        },
        "typeVersion": 1
      },
      {
        "id": "ad3f07f9-645a-49d8-be56-b45b3a38736a",
        "name": "Sticky Note19",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          2620,
          1040
        ],
        "parameters": {
          "color": 3,
          "width": 180,
          "height": 80,
          "content": "Change the schedule for when connection requests will be sent."
        },
        "typeVersion": 1
      },
      {
        "id": "8c13451c-13a3-4b36-b0ba-341dbc4c6e93",
        "name": "Sticky Note20",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          3040,
          1840
        ],
        "parameters": {
          "color": 3,
          "width": 200,
          "height": 100,
          "content": "Change the schedule for when connection request responses will be checked and messages will be sent."
        },
        "typeVersion": 1
      },
      {
        "id": "b462dd15-76a6-4d09-a258-6a64c5e7c2b5",
        "name": "HDW Get LinkedIn Profile Connections",
        "type": "n8n-nodes-hdw.hdwLinkedinManagement",
        "maxTries": 5,
        "position": [
          3260,
          1540
        ],
        "parameters": {
          "count": 40,
          "operation": "getConnections",
          "connectedAfter": 0
        },
        "credentials": {
          "hdwLinkedinApi": {
            "id": "ZT0V5HkxTZIlAkvE",
            "name": "HDW LinkedIn account"
          }
        },
        "retryOnFail": true,
        "typeVersion": 1,
        "waitBetweenTries": 5000
      },
      {
        "id": "44e0fce5-df66-4572-bc91-c3600cb9377e",
        "name": "HDW Send LinkedIn Connection",
        "type": "n8n-nodes-hdw.hdwLinkedinManagement",
        "onError": "continueRegularOutput",
        "maxTries": 5,
        "position": [
          4140,
          1200
        ],
        "parameters": {
          "user": "={{ $('Google Sheets13').item.json.URN }}"
        },
        "credentials": {
          "hdwLinkedinApi": {
            "id": "ZT0V5HkxTZIlAkvE",
            "name": "HDW LinkedIn account"
          }
        },
        "retryOnFail": true,
        "typeVersion": 1,
        "waitBetweenTries": 5000
      },
      {
        "id": "d5870d51-8f5e-41b2-b05e-1b49b04ede86",
        "name": "AI Agent: ICP -> LinkedIn search filters",
        "type": "@n8n/n8n-nodes-langchain.agent",
        "onError": "continueRegularOutput",
        "position": [
          -2060,
          1060
        ],
        "parameters": {
          "text": "=ICP  description - {{ $json.chatInput }}",
          "options": {
            "systemMessage": "Your task is to analyze an ICP (Ideal Customer Profile) description and convert it into LinkedIn Sales Navigator search parameters that are compatible with the HDW LinkedIn node in n8n.\n\n⸻\n\nHard rules (do not break them)\n\t1.\tNo guesswork.\n\t•\tNever invent new values for location, industry, current_companies, or any other field. Use only what is explicitly present in the ICP.\n\t2.\tReal companies only.\n\t•\tThe current_companies field may contain only company names that are directly mentioned in the ICP.\n\t3.\tNo fabricated locations.\n\t•\tIn location, specify only countries or cities that appear in the ICP.\n\t4.\t“Smart” filter combinations.\n\t•\tIf the ICP includes several locations and/or industries, generate multiple objects (filters)—one for each unique combination of actual values (do not create combinations that do not exist in the ICP).\n\t•\tReturn a maximum of 10 filters in one response.\n\t5.\tOmit undefined data.\n\t•\tIf a field is missing in the ICP, omit that key entirely (do not output null, empty strings, or empty arrays).\n\n\t7.\tIndustry list only.\n\t•\tFor industry, you may use only the names from the approved list (see below). Try with different industries in different filters\n\t8.\tJSON validation.\n\t•\tThe final answer must be a valid JSON array in the exact structure shown under “Response Format.”\n\t9.\tUp to 10 filters.\n\t•\tYou may return no more than ten filter objects per ICP request.\n\t10.\tUnclear roles → multiple title variants.\n\t•\tIf job roles/titles are not specified precisely in the ICP (e.g., only a function or department is mentioned), create several filters that cover plausible title variants.\n\t•\tEach variant goes into its own filter object (or grouped logically if other parameters are identical), still respecting the overall limit of 10 filters.\n\t•\tUse common, realistic synonyms or seniority variations relevant to the ICP \n\t•\tDo not invent wholly unrelated titles; stay within the role scope implied by the ICP.\n\nResponse Format\n\nReturn only a JSON array with no comments, explanations, or extra text. Each object represents one filter.\n\n[\n  {\n    \"salesNavigatorParams\": {\n      \"current_titles\": \"title1\",\n      \"current_companies\": \"company1\",\n      \"location\": \"location1\",\n      \"industry\": \"industry1\",\n      \"company_sizes\": [\n        \"Self-employed\",\n        \"1-10\",\n        \"11-50\",\n        \"51-200\",\n        \"201-500\",\n        \"501-1,000\",\n        \"1,001-5,000\",\n        \"5,001-10,000\",\n        \"10,001+\"\n      ]\n    },\n    \"count\": 10\n  },\n  {\n    \"salesNavigatorParams\": {\n      \"current_titles\": \"title2\",\n      \"current_companies\": \"company2\",\n      \"location\": \"location2\",\n      \"industry\": \"industry2\",\n      \"company_sizes\": [\n        \"Self-employed\",\n        \"1-10\",\n        \"11-50\",\n        \"51-200\",\n        \"201-500\",\n        \"501-1,000\",\n        \"1,001-5,000\",\n        \"5,001-10,000\",\n        \"10,001+\"\n      ]\n    },\n    \"count\": 10\n  }\nother filters\n]\n\nImportant: If a field does not apply, omit it entirely. For example, if company size is not specified, remove the whole company_sizes block.\n\n\n• (Allowed values for industry) If you need industry name use one from this list closer to the user request:\nChiropractors \nDefense and Space Manufacturing\nOptometrists\nComputer Hardware Manufacturing\nSoftware Development\nComputer Networking Products\nTransportation Equipment Manufacturing\nTechnology, Information and Internet\nPhysical, Occupational and Speech Therapists\nSemiconductor Manufacturing\nTelecommunications\nLaw Practice\nHousing Programs\nLegal Services\nBusiness Consulting and Services\nBiotechnology Research\nFamily Planning Centers\nMedical Practices\nTransportation Programs\nHospitals and Health Care\nUtilities Administration\nPharmaceutical Manufacturing\nOutpatient Care Centers\nVeterinary Services\nMedical Equipment Manufacturing\nSpace Research and Technology\nMotor Vehicle Parts Manufacturing\nPersonal Care Product Manufacturing\nRetail Apparel and Fashion\nSporting Goods Manufacturing\nTobacco Manufacturing\nMedical and Diagnostic Laboratories\nRetail Groceries\nFood and Beverage Manufacturing\nOil Extraction\nComputers and Electronics Manufacturing\nNatural Gas Extraction\nManufacturing\nFurniture and Home Furnishings Manufacturing\nHome Health Care Services\nRetail\nEmbedded Software Products\nEntertainment Providers\nMobile Computing Software Products\nGambling Facilities and Casinos\nAmbulance Services\nDesktop Computing Software Products\nIT System Custom Software Development\nTravel Arrangements\nIT System Operations and Maintenance\nHospitality\nIT System Installation and Disposal\nRestaurants\nIT System Training and Support\nHospitals\nSpectator Sports\nIT System Data Services\nFood and Beverage Services\nIT System Testing and Evaluation\nMovies, Videos, and Sound\nBroadcast Media Production and Distribution\nMuseums, Historical Sites, and Zoos\nArtists and Writers\nPerforming Arts\nRecreational Facilities\nBanking\nInsurance\nNursing Homes and Residential Care Facilities\nFinancial Services\nReal Estate\nInvestment Banking\nInvestment Management\nAccounting\nConstruction\nWholesale Building Materials\nArchitecture and Planning\nCivil Engineering\nInternet News\nAviation and Aerospace Component Manufacturing\nBlogs\nMotor Vehicle Manufacturing\nInterior Design\nChemical Manufacturing\nSocial Networking Platforms\nMachinery Manufacturing\nHousehold and Institutional Furniture Manufacturing\nBusiness Intelligence Platforms\nMining\nBusiness Content\nOil and Gas\nData Security Software Products\nShipbuilding\nUtilities\nMobile Gaming Apps\nTextile Manufacturing\nInternet Publishing\nPaper and Forest Product Manufacturing\nMedia and Telecommunications\nRailroad Equipment Manufacturing\nBlockchain Services\nFarming\nServices for the Elderly and Disabled\nRanching\nDairy Product Manufacturing\nOffice Furniture and Fixtures Manufacturing\nFisheries\nCommunity Services\nPrimary and Secondary Education\nHigher Education\nEducation Administration Programs\nResearch Services\nMattress and Blinds Manufacturing\nArmed Forces\nLegislative Offices\nAdministration of Justice\nInternational Affairs\nEmergency and Relief Services\nGovernment Administration\nExecutive Offices\nLaw Enforcement\nVocational Rehabilitation Services\nPublic Safety\nPublic Policy Offices\nAdvertising Services\nChild Day Care Services\nNewspaper Publishing\nPerforming Arts and Spectator Sports\nBook and Periodical Publishing\nPrinting Services\nInformation Services\nLibraries\nTheater Companies\nEnvironmental Services\nFreight and Package Transportation\nDance Companies\nIndividual and Family Services\nReligious Institutions\nCivic and Social Organizations\nConsumer Services\nCircuses and Magic Shows\nTruck Transportation\nWarehousing and Storage\nSports Teams and Clubs\nAirlines and Aviation\nMaritime Transportation\nRacetracks\nIT Services and IT Consulting\nMarket Research\nPublic Relations and Communications Services\nDesign Services\nNon-profit Organizations\nFundraising\nStrategic Management Services\nWriting and Editing\nStaffing and Recruiting\nWholesale Motor Vehicles and Parts\nProfessional Training and Coaching\nVenture Capital and Private Equity Principals\nPolitical Organizations\nTranslation and Localization\nComputer Games\nEvents Services\nRetail Art Supplies\nMuseums\nAppliances, Electrical, and Electronics Manufacturing\nOnline Audio and Video Media\nWholesale Furniture and Home Furnishings\nHistorical Sites\nNanotechnology Research\nRetail Art Dealers\nMusicians\nZoos and Botanical Gardens\nTransportation, Logistics, Supply Chain and Storage\nPlastics Manufacturing\nComputer and Network Security\nWireless Services\nAmusement Parks and Arcades\nAlternative Dispute Resolution\nSecurity and Investigations\nFacilities Services\nOutsourcing and Offshoring Consulting\nWellness and Fitness Services\nAlternative Medicine\nMedia Production\nAnimation and Post-production\nLeasing Non-residential Real Estate\nCapital Markets\nWholesale Photography Equipment and Supplies\nThink Tanks\nPhilanthropic Fundraising Services\nGolf Courses and Country Clubs\nE-Learning Providers\nWholesale\nWholesale Computer Equipment\nSkiing Facilities\nWholesale Import and Export\nIndustrial Machinery Manufacturing\nPhotography\nHuman Resources Services\nRetail Office Equipment\nMental Health Care\nGraphic Design\nInternational Trade and Development\nBeverage Manufacturing\nAccommodation and Food Services\nWholesale Metals and Minerals\nRetail Luxury Goods and Jewelry\nGlass, Ceramics and Concrete Manufacturing\nPackaging and Containers Manufacturing\nHotels and Motels\nAutomation Machinery Manufacturing\nWholesale Appliances, Electrical, and Electronics\nGovernment Relations Services\nBed-and-Breakfasts, Hostels, Homestays\nHorticulture\nWholesale Hardware, Plumbing, Heating Equipment\nWholesale Machinery\nCaterers\nMobile Food Services\nRenewable Energy Power Generation\nBars, Taverns, and Nightclubs\nRenewable Energy Equipment Manufacturing\nEngineering Services\nServices for Renewable Energy\nDigital Accessibility Services\nAccessible Hardware Manufacturing\nAccessible Architecture and Design\nRobot Manufacturing\nRobotics Engineering\nRepair and Maintenance\nSurveying and Mapping Services\nVehicle Repair and Maintenance\nRetail Pharmacies\nClimate Technology Product Manufacturing\nClimate Data and Analytics\nAlternative Fuel Vehicle Manufacturing\nWholesale Recyclable Materials\nSmart Meter Manufacturing\nFuel Cell Manufacturing\nWholesale Luxury Goods and Jewelry\nRegenerative Design\nFuneral Services\nDeath Care Services\nEnergy Technology\nWholesale Paper Products\nElectronic and Precision Equipment Maintenance\nWholesale Drugs and Sundries\nWholesale Apparel and Sewing Supplies\nCommercial and Industrial Machinery Maintenance\nFarming, Ranching, Forestry\nReupholstery and Furniture Repair\nWholesale Footwear\nWholesale Food and Beverage\nFootwear and Leather Goods Repair\nPersonal and Laundry Services\nPersonal Care Services\nLaundry and Drycleaning Services\nWholesale Raw Farm Products\nWholesale Chemical and Allied Products\nPet Services\nWholesale Petroleum and Petroleum Products\nWholesale Alcoholic Beverages\nRanching and Fisheries\nInternet Marketplace Platforms\nRetail Motor Vehicles\nHousehold Services\nRetail Furniture and Home Furnishings\nRetail Appliances, Electrical, and Electronic Equipment\nForestry and Logging\nRetail Building Materials and Garden Equipment\nHealth and Human Services\nPublic Health\nPublic Assistance Programs\nFood and Beverage Retail\nAir, Water, and Waste Program Management\nConservation Programs\nHousing and Community Development\nCommunity Development and Urban Planning\nEconomic Programs\nOil, Gas, and Mining\nRetail Health and Personal Care Products\nCoal Mining\nMilitary and International Affairs\nMetal Ore Mining\nRetail Gasoline\nOperations Consulting\nNonmetallic Mineral Mining\nElectric Power Transmission, Control, and Distribution\nRetail Musical Instruments\nElectric Power Generation\nHydroelectric Power Generation\nRetail Books and Printed News\nFossil Fuel Electric Power Generation\nNuclear Electric Power Generation\nSolar Electric Power Generation\nEnvironmental Quality Programs\nGeothermal Electric Power Generation\nBiomass Electric Power Generation\nNatural Gas Distribution\nWater, Waste, Steam, and Air Conditioning Services\nRetail Florists\nRetail Office Supplies and Gifts\nWater Supply and Irrigation Systems\nSteam and Air-Conditioning Supply\nBuilding Construction\nRetail Recyclable Materials & Used Merchandise\nResidential Building Construction\nData Infrastructure and Analytics\nNonresidential Building Construction\nUtility System Construction\nElectrical Equipment Manufacturing\nOnline and Mail Order Retail\nSubdivision of Land\nHighway, Street, and Bridge Construction\nSpecialty Trade Contractors\nBuilding Structure and Exterior Contractors\nWind Electric Power Generation\nWineries\nBuilding Equipment Contractors\nRail Transportation\nBuilding Finishing Contractors\nGround Passenger Transportation\nUrban Transit Services\nInterurban and Rural Bus Services\nTaxi and Limousine Services\nAnimal Feed Manufacturing\nSchool and Employee Bus Services\nShuttles and Special Needs Transportation Services\nSugar and Confectionery Product Manufacturing\nPipeline Transportation\nFruit and Vegetable Preserves Manufacturing\nSightseeing Transportation\nMeat Products Manufacturing\nSeafood Product Manufacturing\nBaked Goods Manufacturing\nPostal Services\nBreweries\nDistilleries\nTechnology, Information and Media\nPeriodical Publishing\nBook Publishing\nMovies and Sound Recording\nApparel Manufacturing\nSound Recording\nSheet Music Publishing\nRadio and Television Broadcasting\nFashion Accessories Manufacturing\nLeather Product Manufacturing\nCable and Satellite Programming\nTelecommunications Carriers\nFootwear Manufacturing\nSatellite Telecommunications\nWomen's Handbag Manufacturing\nCredit Intermediation\nSavings Institutions\nLoan Brokers\nOil and Coal Product Manufacturing\nSecurities and Commodity Exchanges\nChemical Raw Materials Manufacturing\nInvestment Advice\nInsurance Carriers\nArtificial Rubber and Synthetic Fiber Manufacturing\nAgricultural Chemical Manufacturing\nInsurance Agencies and Brokerages\nClaims Adjusting, Actuarial Services\nFunds and Trusts\nInsurance and Employee Benefit Funds\nPension Funds\nPaint, Coating, and Adhesive Manufacturing\nTrusts and Estates\nSoap and Cleaning Product Manufacturing\nReal Estate and Equipment Rental Services\nLeasing Residential Real Estate\nPlastics and Rubber Product Manufacturing\nReal Estate Agents and Brokers\nEquipment Rental Services\nConsumer Goods Rental\nRubber Products Manufacturing\nClay and Refractory Products Manufacturing\nCommercial and Industrial Equipment Rental\nGlass Product Manufacturing\nWood Product Manufacturing\nProfessional Services\nLime and Gypsum Products Manufacturing\nAbrasives and Nonmetallic Minerals Manufacturing\nPrimary Metal Manufacturing\nIT System Design Services\nMarketing Services\nFabricated Metal Products\nCutlery and Handtool Manufacturing\nArchitectural and Structural Metal Manufacturing\nBoilers, Tanks, and Shipping Container Manufacturing\nConstruction Hardware Manufacturing\nSpring and Wire Product Manufacturing\nTurned Products and Fastener Manufacturing\nHolding Companies\nMetal Treatments\nIndustry Associations\nLandscaping Services\nProfessional Organizations\nMetal Valve, Ball, and Roller Manufacturing\nAdministrative and Support Services\nOffice Administration\nExecutive Search Services\nTemporary Help Services\nAgriculture, Construction, Mining Machinery Manufacturing\nTelephone Call Centers\nCollection Agencies\nCommercial and Service Industry Machinery Manufacturing\nHVAC and Refrigeration Equipment Manufacturing\nMetalworking Machinery Manufacturing\nSecurity Guards and Patrol Services\nSecurity Systems Services\nEngines and Power Transmission Equipment Manufacturing\nJanitorial Services\nWaste Collection\nWaste Treatment and Disposal\nCommunications Equipment Manufacturing\nAudio and Video Equipment Manufacturing\nEducation\nMeasuring and Control Instrument Manufacturing\nSecretarial Schools\nTechnical and Vocational Training\nMagnetic and Optical Media Manufacturing\nCosmetology and Barber Schools\nFlight Training\nElectric Lighting Equipment Manufacturing\nFine Arts Schools\nSports and Recreation Instruction\nHousehold Appliance Manufacturing\nLanguage Schools\nPhysicians\nCourts of Law\nCorrectional Institutions\nDentists\nFire Protection\n\nSelf-check checklist\n\t•\tAre all locations actually present in the ICP?\n\t•\tAre company names copied verbatim, without changes?\n\t•\tAre industries taken only from the allowed list above?\n\t•\tIs the number of objects ≤ 10?\n\t•\tAre there no extra or empty fields?\n\t•\tIs the JSON valid and in the required structure?\n\nFollow these instructions for each ICP request to generate accurate LinkedIn Sales Navigator filters."
          },
          "promptType": "define",
          "hasOutputParser": true
        },
        "executeOnce": false,
        "notesInFlow": true,
        "retryOnFail": true,
        "typeVersion": 1.8
      },
      {
        "id": "1755a3e7-26d8-435d-853b-18128610b7b3",
        "name": "Company name is not empty",
        "type": "n8n-nodes-base.if",
        "position": [
          -700,
          1040
        ],
        "parameters": {
          "options": {},
          "conditions": {
            "options": {
              "version": 2,
              "leftValue": "",
              "caseSensitive": true,
              "typeValidation": "strict"
            },
            "combinator": "and",
            "conditions": [
              {
                "id": "1e7e7c6d-401d-4b6e-ba9c-1e9caacb3f89",
                "operator": {
                  "type": "string",
                  "operation": "notEmpty",
                  "singleValue": true
                },
                "leftValue": "={{ $json['Current company'] }}",
                "rightValue": ""
              },
              {
                "id": "5fa79c84-9e9a-4cf9-a3ed-3a84a286b734",
                "operator": {
                  "type": "string",
                  "operation": "empty",
                  "singleValue": true
                },
                "leftValue": "={{ $json.Website }}",
                "rightValue": ""
              }
            ]
          }
        },
        "typeVersion": 2.2
      },
      {
        "id": "b6f67554-1d08-4573-ad48-d77fb5f16835",
        "name": "Website is not empty",
        "type": "n8n-nodes-base.if",
        "position": [
          460,
          880
        ],
        "parameters": {
          "options": {},
          "conditions": {
            "options": {
              "version": 2,
              "leftValue": "",
              "caseSensitive": true,
              "typeValidation": "strict"
            },
            "combinator": "and",
            "conditions": [
              {
                "id": "3f21375a-b09c-464d-a82a-b37f7b6de87b",
                "operator": {
                  "type": "string",
                  "operation": "notEmpty",
                  "singleValue": true
                },
                "leftValue": "={{ $json.Website }}",
                "rightValue": ""
              },
              {
                "id": "96105806-c0b8-461d-8cc1-975d8936814c",
                "operator": {
                  "type": "string",
                  "operation": "empty",
                  "singleValue": true
                },
                "leftValue": "={{ $json[\"Product Summary\"] }}",
                "rightValue": ""
              }
            ]
          }
        },
        "typeVersion": 2.2
      },
      {
        "id": "c7add783-44a3-470c-be4f-b7b68ee07523",
        "name": "Post summary is empty",
        "type": "n8n-nodes-base.if",
        "position": [
          480,
          1420
        ],
        "parameters": {
          "options": {},
          "conditions": {
            "options": {
              "version": 2,
              "leftValue": "",
              "caseSensitive": true,
              "typeValidation": "strict"
            },
            "combinator": "and",
            "conditions": [
              {
                "id": "3f21375a-b09c-464d-a82a-b37f7b6de87b",
                "operator": {
                  "type": "string",
                  "operation": "notEmpty",
                  "singleValue": true
                },
                "leftValue": "={{ $json.URN }}",
                "rightValue": ""
              },
              {
                "id": "96105806-c0b8-461d-8cc1-975d8936814c",
                "operator": {
                  "type": "string",
                  "operation": "empty",
                  "singleValue": true
                },
                "leftValue": "={{ $json[\"Posts summary\"] }}",
                "rightValue": ""
              }
            ]
          }
        },
        "typeVersion": 2.2
      },
      {
        "id": "4e54ace8-96cd-40b6-b9a0-141f71ba70a7",
        "name": "Company news is empty",
        "type": "n8n-nodes-base.if",
        "position": [
          480,
          1880
        ],
        "parameters": {
          "options": {},
          "conditions": {
            "options": {
              "version": 2,
              "leftValue": "",
              "caseSensitive": true,
              "typeValidation": "strict"
            },
            "combinator": "and",
            "conditions": [
              {
                "id": "3f21375a-b09c-464d-a82a-b37f7b6de87b",
                "operator": {
                  "type": "string",
                  "operation": "notEmpty",
                  "singleValue": true
                },
                "leftValue": "={{ $json.URN }}",
                "rightValue": ""
              },
              {
                "id": "96105806-c0b8-461d-8cc1-975d8936814c",
                "operator": {
                  "type": "string",
                  "operation": "empty",
                  "singleValue": true
                },
                "leftValue": "={{ $json[\"Company News\"] }}",
                "rightValue": ""
              }
            ]
          }
        },
        "typeVersion": 2.2
      },
      {
        "id": "6d5b7133-9b85-4795-ae55-303a7670bb4d",
        "name": "Company post is empty",
        "type": "n8n-nodes-base.if",
        "position": [
          480,
          2380
        ],
        "parameters": {
          "options": {},
          "conditions": {
            "options": {
              "version": 2,
              "leftValue": "",
              "caseSensitive": true,
              "typeValidation": "strict"
            },
            "combinator": "and",
            "conditions": [
              {
                "id": "3f21375a-b09c-464d-a82a-b37f7b6de87b",
                "operator": {
                  "type": "string",
                  "operation": "notEquals"
                },
                "leftValue": "={{ $json[\"Company URN\"] }}",
                "rightValue": ":"
              },
              {
                "id": "96105806-c0b8-461d-8cc1-975d8936814c",
                "operator": {
                  "type": "string",
                  "operation": "empty",
                  "singleValue": true
                },
                "leftValue": "={{ $json[\"Company post summary\"] }}",
                "rightValue": ""
              },
              {
                "id": "44880d26-6f7d-4ee6-a71c-1cee7733368a",
                "operator": {
                  "type": "string",
                  "operation": "notEmpty",
                  "singleValue": true
                },
                "leftValue": "={{ $json[\"Company URN\"] }}",
                "rightValue": ""
              }
            ]
          }
        },
        "typeVersion": 2.2
      },
      {
        "id": "9db340da-d10f-4873-838c-8f912ba36695",
        "name": "Lead Score is empty",
        "type": "n8n-nodes-base.if",
        "position": [
          1900,
          1740
        ],
        "parameters": {
          "options": {},
          "conditions": {
            "options": {
              "version": 2,
              "leftValue": "",
              "caseSensitive": true,
              "typeValidation": "loose"
            },
            "combinator": "or",
            "conditions": [
              {
                "id": "140d284f-34c0-4bf4-bb88-b0a9bdbc80f7",
                "operator": {
                  "type": "string",
                  "operation": "empty",
                  "singleValue": true
                },
                "leftValue": "={{ $json[\"Lead Score\"] }}",
                "rightValue": ""
              }
            ]
          },
          "looseTypeValidation": true
        },
        "typeVersion": 2.2
      },
      {
        "id": "0edd4748-d13b-4aa7-9b13-cb7f216fc5d9",
        "name": "Company Score Analysis",
        "type": "@n8n/n8n-nodes-langchain.openAi",
        "onError": "continueRegularOutput",
        "position": [
          2260,
          1740
        ],
        "parameters": {
          "modelId": {
            "__rl": true,
            "mode": "list",
            "value": "gpt-4o",
            "cachedResultName": "GPT-4O"
          },
          "options": {},
          "messages": {
            "values": [
              {
                "role": "system",
                "content": "You are an expert in evaluating lead potential for our product.\nAnalyze the company’s and lead’s profile content, assessing their likelihood of interest in our product on a scale from 1 to 10 (where 1 indicates minimal potential, and 10 indicates maximum potential).\n\nKey evaluation criteria:\n\t•\tMentions of Hotels suppliers \n\t•\tMentions of Hotel Services\n\nEvaluation scale:\n\t•\t8–10 points: Clear mentions of both criteria, active engagement, and explicit interest.\n\t•\t5–7 points: Mention of one criterion or indirect indicators of interest in both criteria.\n\t•\t1–4 points: No clear mentions, or only weak indirect indicators of interest.\n\nYour answer must ONLY be a single number from 1 to 10, without any additional text."
              },
              {
                "content": "=Lead posts summary:\n {{ $json[\"Posts summary\"] }}\nLead company website analysis:\n{{ $('Google Sheets11').item.json['Product Summary'] }}\n\nCompany news summary:\n{{ $('Google Sheets11').item.json['Company News'] }}\nCompany posts summary\n{{ $('Google Sheets11').item.json['Company post summary'] }}\nCompany descriptin\n{{ $json.Description }}"
              }
            ]
          }
        },
        "credentials": {
          "openAiApi": {
            "id": "DzKhX3E7SSLddnv4",
            "name": "OpenAi account"
          }
        },
        "retryOnFail": true,
        "typeVersion": 1.8
      },
      {
        "id": "d59cae4f-a8ea-4db1-a4cb-44bf9d64fd75",
        "name": "5s",
        "type": "n8n-nodes-base.wait",
        "position": [
          4180,
          2120
        ],
        "webhookId": "58b70ce8-992f-4437-9f13-669649afcaa3",
        "parameters": {},
        "typeVersion": 1.1
      },
      {
        "id": "f4492b0f-a260-4d94-8b05-4d785c8c097e",
        "name": "Sticky Note27",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          3020,
          1900
        ],
        "parameters": {
          "width": 2260,
          "height": 680,
          "content": "Send the first message"
        },
        "typeVersion": 1
      },
      {
        "id": "fb8191dd-9512-4c62-8199-c4a7b0a2e62f",
        "name": "AI Agent",
        "type": "@n8n/n8n-nodes-langchain.agent",
        "position": [
          -2760,
          2140
        ],
        "parameters": {
          "options": {
            "systemMessage": "Your task is to interactively collect an Ideal Customer Profile (ICP) from the user. \n\nIMPORTANT: DO NOT SHOW ANY JSON TO THE USER DURING THE DATA COLLECTION PROCESS. Only communicate in natural language until all data has been collected.\n\nWhen the conversation starts, immediately:\n1. Introduce yourself and explain that you'll be collecting information to build an Ideal Customer Profile\n2. Briefly explain what information you'll be asking for\n3. Ask the FIRST question about current_titles without waiting for further input\n\nData Collection Process:\n1. Initialize an empty object called `icpData` in your memory (do not share this with the user).\n2. Ask the user each of the following questions ONE AT A TIME in natural conversational language, and after each answer, store the response in your internal `icpData` object:\n   - **current_titles**: \"What current titles do your target customers hold? (List comma-separated.)\"\n   - **current_companies**: \"What current companies do they work at? (List comma-separated.)\"\n   - **location**: \"Which geographic regions should we search in? (List cities, regions, or countries.)\"\n   - **industry**: \"Which industries are of interest? (Use LinkedIn's official industry names or describe them as closely as possible.)\"\n   - **company_sizes**: \"Which company sizes do you prefer? (e.g. Self-employed, 1–10, 11–50, 51–200, etc.)\"\n   - **keywords**: \"Are there any additional keywords to refine the search? (e.g. technologies, specialties, skills.)\"\n\nCommunication Guidelines:\n- Begin immediately with your introduction and the first question about current_titles\n- Speak naturally during the conversation, DO NOT show any JSON during the data collection phase\n- Ask only one question at a time\n- After receiving an answer, acknowledge it and ask the next question\n- If a user provides unclear information, ask for clarification\n- If the user explicitly states they want to skip any questions or finish early, respect their request\n- If the user types \"finish\", \"done\", \"complete\", or similar commands at any point, immediately prepare to generate the JSON\n\nFinal Output Requirements:\n- ALWAYS output the complete icpData object in valid JSON format when EITHER:\n  1. All seven fields have been collected, OR\n  2. The user explicitly requests to finish early or skip remaining questions\n- Include all fields in the output, using null for any fields that weren't collected\n- The \"dataComplete\" field must always be set to true in the final JSON output\n- Do not add any additional fields or modify the JSON structure\n- The final JSON MUST follow this exact format and have only JSON:\n{\n  \"icpData\": {\n    \"current_titles\": \"[collected value or null]\",\n    \"current_companies\": \"[collected value or null]\",\n    \"location\": \"[collected value or null]\",\n    \"industry\": \"[collected value or null]\",\n    \"company_sizes\": \"[collected value or null]\",\n    \"keywords\": \"[collected value or null]\",\n    \"count\": \"[collected value or null]\"\n  },\n  \"dataComplete\": true\n}\n\nCRITICAL: Your final response must consist of ONLY the single line \"Thank you for providing the information. Here is your ICP data:\" followed IMMEDIATELY by the JSON object. Do not add ANY other text, explanations, or formatting. The JSON object must be the absolute final thing in your response with nothing after it."
          }
        },
        "typeVersion": 1.8
      },
      {
        "id": "fb56b1a5-cefe-4ccb-b901-b5d44d54b4d5",
        "name": "Simple Memory",
        "type": "@n8n/n8n-nodes-langchain.memoryBufferWindow",
        "position": [
          -2720,
          2460
        ],
        "parameters": {},
        "typeVersion": 1.3
      },
      {
        "id": "9ffc5ef5-61db-40f8-be7f-4427387c806c",
        "name": "If",
        "type": "n8n-nodes-base.if",
        "position": [
          -2300,
          2160
        ],
        "parameters": {
          "options": {},
          "conditions": {
            "options": {
              "version": 2,
              "leftValue": "",
              "caseSensitive": true,
              "typeValidation": "strict"
            },
            "combinator": "and",
            "conditions": [
              {
                "id": "cd898792-a224-459f-9027-97bc007c31df",
                "operator": {
                  "type": "string",
                  "operation": "contains"
                },
                "leftValue": "={{ $json.output }}",
                "rightValue": "\"icpData\":"
              }
            ]
          }
        },
        "typeVersion": 2.2
      },
      {
        "id": "42e32163-0529-4d2d-bc93-92ed2a57ee44",
        "name": "Basic LLM Chain",
        "type": "@n8n/n8n-nodes-langchain.chainLlm",
        "position": [
          -1980,
          2180
        ],
        "parameters": {
          "text": "=repeat this sentence:  {{ $('AI Agent').item.json.output }}",
          "messages": {
            "messageValues": [
              {
                "message": "You are repeater"
              }
            ]
          },
          "promptType": "define"
        },
        "typeVersion": 1.5
      },
      {
        "id": "f8246169-7a15-44f8-92aa-55661bd6ec53",
        "name": "OpenAI Chat Model2",
        "type": "@n8n/n8n-nodes-langchain.lmChatOpenAi",
        "position": [
          -2320,
          2580
        ],
        "parameters": {
          "model": {
            "__rl": true,
            "mode": "list",
            "value": "gpt-4o",
            "cachedResultName": "gpt-4o"
          },
          "options": {}
        },
        "credentials": {
          "openAiApi": {
            "id": "DzKhX3E7SSLddnv4",
            "name": "OpenAi account"
          }
        },
        "typeVersion": 1.2
      },
      {
        "id": "7e200d49-02b5-41f1-b3fe-df052d0d851a",
        "name": "Sticky Note24",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          -3240,
          1940
        ],
        "parameters": {
          "width": 1840,
          "height": 820,
          "content": "## Conversation agent"
        },
        "typeVersion": 1
      },
      {
        "id": "9b09a602-9f41-4e79-b111-2f2a59cf3680",
        "name": "Schedule Trigger3",
        "type": "n8n-nodes-base.scheduleTrigger",
        "position": [
          3100,
          1980
        ],
        "parameters": {
          "rule": {
            "interval": [
              {
                "triggerAtHour": 7
              }
            ]
          }
        },
        "typeVersion": 1.2
      },
      {
        "id": "3badf4f0-592b-41b3-be51-7f39879edf96",
        "name": "Google Sheets21",
        "type": "n8n-nodes-base.googleSheets",
        "position": [
          3320,
          1980
        ],
        "parameters": {
          "options": {},
          "sheetName": {
            "__rl": true,
            "mode": "list",
            "value": "gid=0",
            "cachedResultUrl": "https://docs.google.com/spreadsheets/d/19n84gbJPp-VmAUz6fElLSQcMajh5btPvI7Lhf20u7hs/edit#gid=0",
            "cachedResultName": "Sheet1"
          },
          "documentId": {
            "__rl": true,
            "mode": "list",
            "value": "19n84gbJPp-VmAUz6fElLSQcMajh5btPvI7Lhf20u7hs",
            "cachedResultUrl": "https://docs.google.com/spreadsheets/d/19n84gbJPp-VmAUz6fElLSQcMajh5btPvI7Lhf20u7hs/edit?usp=drivesdk",
            "cachedResultName": "HDW_OutReach"
          }
        },
        "credentials": {
          "googleSheetsOAuth2Api": {
            "id": "ZKhilXnb085cZbuM",
            "name": "Google Sheets account"
          }
        },
        "typeVersion": 4.5,
        "alwaysOutputData": false
      },
      {
        "id": "17a825fc-5dfa-480b-9c4a-f8543afbf7c4",
        "name": "If3",
        "type": "n8n-nodes-base.if",
        "position": [
          3540,
          1980
        ],
        "parameters": {
          "options": {},
          "conditions": {
            "options": {
              "version": 2,
              "leftValue": "",
              "caseSensitive": true,
              "typeValidation": "loose"
            },
            "combinator": "and",
            "conditions": [
              {
                "id": "5be9c0af-558c-4b8f-9de2-a21a0f6bb60c",
                "operator": {
                  "name": "filter.operator.equals",
                  "type": "string",
                  "operation": "equals"
                },
                "leftValue": "={{ $json.Connected }}",
                "rightValue": "true"
              },
              {
                "id": "bf0095c5-f74e-4022-a6ec-66066d43cb6c",
                "operator": {
                  "type": "string",
                  "operation": "empty",
                  "singleValue": true
                },
                "leftValue": "={{ $json[\"Message Sent\"] }}",
                "rightValue": ""
              }
            ]
          },
          "looseTypeValidation": true
        },
        "typeVersion": 2.2
      },
      {
        "id": "16a83e7a-3020-4687-b632-ca16c251687d",
        "name": "Sticky Note25",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          2800,
          1440
        ],
        "parameters": {
          "width": 1220,
          "height": 340,
          "content": "## Check the connections"
        },
        "typeVersion": 1
      },
      {
        "id": "949c7342-115d-4fc4-b819-eab822b2644d",
        "name": "Sticky Note29",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          2600,
          980
        ],
        "parameters": {
          "width": 1800,
          "height": 440,
          "content": "## Add new connections"
        },
        "typeVersion": 1
      },
      {
        "id": "476dfcd2-47de-4c20-be98-7c8090ac807a",
        "name": "If4",
        "type": "n8n-nodes-base.if",
        "position": [
          -980,
          2120
        ],
        "parameters": {
          "options": {},
          "conditions": {
            "options": {
              "version": 2,
              "leftValue": "",
              "caseSensitive": true,
              "typeValidation": "strict"
            },
            "combinator": "and",
            "conditions": [
              {
                "id": "4d0c7d09-934f-4327-9eed-e1c04b773166",
                "operator": {
                  "type": "string",
                  "operation": "empty",
                  "singleValue": true
                },
                "leftValue": "={{ $json.Website }}",
                "rightValue": ""
              }
            ]
          }
        },
        "typeVersion": 2.2
      }
    ],
    "active": false,
    "pinData": {},
    "settings": {
      "executionOrder": "v1"
    },
    "versionId": "4fa06930-c30d-45ae-8979-326844619b9f",
    "connections": {
      "5s": {
        "main": [
          [
            {
              "node": "HDW LinkedIn Send Message",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "If": {
        "main": [
          [],
          [
            {
              "node": "Basic LLM Chain",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "If2": {
        "main": [
          [
            {
              "node": "Limit",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "If3": {
        "main": [
          [
            {
              "node": "Loop Over Items8",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "If4": {
        "main": [
          [
            {
              "node": "HDW Get Company Website",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Sort": {
        "main": [
          [
            {
              "node": "If2",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Limit": {
        "main": [
          [
            {
              "node": "Loop Over Items7",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "AI Agent": {
        "main": [
          [
            {
              "node": "If",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Aggregate": {
        "main": [
          [
            {
              "node": "Summarise user posts",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Split Out": {
        "main": [
          [
            {
              "node": "HDW LinkedIn SN",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Aggregate1": {
        "main": [
          [
            {
              "node": "Summarise company news",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Aggregate2": {
        "main": [
          [
            {
              "node": "Summarise company posts",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "HDW Parser": {
        "ai_tool": [
          [
            {
              "node": "Summarise company website",
              "type": "ai_tool",
              "index": 0
            }
          ]
        ]
      },
      "HDW Site-map": {
        "ai_tool": [
          [
            {
              "node": "Summarise company website",
              "type": "ai_tool",
              "index": 0
            }
          ]
        ]
      },
      "Google Sheets": {
        "main": [
          [
            {
              "node": "Google Sheets1",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Simple Memory": {
        "ai_memory": [
          [
            {
              "node": "AI Agent",
              "type": "ai_memory",
              "index": 0
            }
          ]
        ]
      },
      "Google Sheets1": {
        "main": [
          [
            {
              "node": "Company name is not empty",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Google Sheets2": {
        "main": [
          [
            {
              "node": "Loop Over Items",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Google Sheets3": {
        "main": [
          [
            {
              "node": "Website is not empty",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Google Sheets4": {
        "main": [
          [
            {
              "node": "Post summary is empty",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Google Sheets5": {
        "main": [
          [
            {
              "node": "Loop Over Items2",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Google Sheets6": {
        "main": [
          [
            {
              "node": "Company news is empty",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Google Sheets7": {
        "main": [
          [
            {
              "node": "Loop Over Items3",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Google Sheets8": {
        "main": [
          [
            {
              "node": "Company post is empty",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Google Sheets9": {
        "main": [
          [
            {
              "node": "Loop Over Items4",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Google Sheets10": {
        "main": [
          [
            {
              "node": "Loop Over Items1",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Google Sheets11": {
        "main": [
          [
            {
              "node": "Lead Score is empty",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Google Sheets12": {
        "main": [
          [
            {
              "node": "Loop Over Items6",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Google Sheets13": {
        "main": [
          [
            {
              "node": "Sort",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Google Sheets14": {
        "main": [
          [
            {
              "node": "Loop Over Items7",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Google Sheets17": {
        "main": [
          [
            {
              "node": "Loop Over Items8",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Google Sheets21": {
        "main": [
          [
            {
              "node": "If3",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "HDW LinkedIn SN": {
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
      "Loop Over Items": {
        "main": [
          [
            {
              "node": "Google Sheets3",
              "type": "main",
              "index": 0
            }
          ],
          [
            {
              "node": "If4",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Loop Over Items1": {
        "main": [
          [
            {
              "node": "Google Sheets4",
              "type": "main",
              "index": 0
            }
          ],
          [
            {
              "node": "Summarise company website",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Loop Over Items2": {
        "main": [
          [
            {
              "node": "Google Sheets6",
              "type": "main",
              "index": 0
            }
          ],
          [
            {
              "node": "HDW Get User Posts",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Loop Over Items3": {
        "main": [
          [
            {
              "node": "Google Sheets8",
              "type": "main",
              "index": 0
            }
          ],
          [
            {
              "node": "HDW Get Company News",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Loop Over Items4": {
        "main": [
          [
            {
              "node": "Google Sheets11",
              "type": "main",
              "index": 0
            }
          ],
          [
            {
              "node": "HDW Get Company Posts",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Loop Over Items6": {
        "main": [
          [
            {
              "node": "Google Sheets13",
              "type": "main",
              "index": 0
            }
          ],
          [
            {
              "node": "Company Score Analysis",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Loop Over Items7": {
        "main": [
          [],
          [
            {
              "node": "HDW Send LinkedIn Connection",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Loop Over Items8": {
        "main": [
          [],
          [
            {
              "node": "5s",
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
              "node": "Google Sheets13",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "OpenAI Chat Model": {
        "ai_languageModel": [
          [
            {
              "node": "AI Agent: ICP -> LinkedIn search filters",
              "type": "ai_languageModel",
              "index": 0
            }
          ]
        ]
      },
      "Schedule Trigger1": {
        "main": [
          [
            {
              "node": "HDW Get LinkedIn Profile Connections",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Schedule Trigger3": {
        "main": [
          [
            {
              "node": "Google Sheets21",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "HDW Get User Posts": {
        "main": [
          [
            {
              "node": "Aggregate",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "OpenAI Chat Model1": {
        "ai_languageModel": [
          [
            {
              "node": "Summarise company website",
              "type": "ai_languageModel",
              "index": 0
            }
          ]
        ]
      },
      "OpenAI Chat Model2": {
        "ai_languageModel": [
          [
            {
              "node": "AI Agent",
              "type": "ai_languageModel",
              "index": 0
            },
            {
              "node": "Basic LLM Chain",
              "type": "ai_languageModel",
              "index": 0
            }
          ]
        ]
      },
      "Lead Score is empty": {
        "main": [
          [
            {
              "node": "Loop Over Items6",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "HDW Get Company News": {
        "main": [
          [
            {
              "node": "Aggregate1",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Summarise user posts": {
        "main": [
          [
            {
              "node": "Google Sheets5",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Website is not empty": {
        "main": [
          [
            {
              "node": "Loop Over Items1",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Company news is empty": {
        "main": [
          [
            {
              "node": "Loop Over Items3",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Company post is empty": {
        "main": [
          [
            {
              "node": "Loop Over Items4",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "HDW Get Company Posts": {
        "main": [
          [
            {
              "node": "Aggregate2",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Post summary is empty": {
        "main": [
          [
            {
              "node": "Loop Over Items2",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Company Score Analysis": {
        "main": [
          [
            {
              "node": "Google Sheets12",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Summarise company news": {
        "main": [
          [
            {
              "node": "Google Sheets7",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "HDW Get Company Website": {
        "main": [
          [
            {
              "node": "Google Sheets2",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Summarise company posts": {
        "main": [
          [
            {
              "node": "Google Sheets9",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Structured Output Parser": {
        "ai_outputParser": [
          [
            {
              "node": "AI Agent: ICP -> LinkedIn search filters",
              "type": "ai_outputParser",
              "index": 0
            }
          ]
        ]
      },
      "Company name is not empty": {
        "main": [
          [
            {
              "node": "Loop Over Items",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "HDW LinkedIn Send Message": {
        "main": [
          [
            {
              "node": "Google Sheets17",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Summarise company website": {
        "main": [
          [
            {
              "node": "Google Sheets10",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "When chat message received": {
        "main": [
          [
            {
              "node": "AI Agent: ICP -> LinkedIn search filters",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "HDW Send LinkedIn Connection": {
        "main": [
          [
            {
              "node": "Google Sheets14",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "HDW Get LinkedIn Profile Connections": {
        "main": [
          [
            {
              "node": "Google Sheets15",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "AI Agent: ICP -> LinkedIn search filters": {
        "main": [
          [
            {
              "node": "Split Out",
              "type": "main",
              "index": 0
            }
          ]
        ]
      }
    }
  },
  'social-calendar': {
    "id": "SvYHgLmzosuLAe4A",
    "meta": {
      "instanceId": "a4bfc93e975ca233ac45ed7c9227d84cf5a2329310525917adaf3312e10d5462",
      "templateCredsSetupCompleted": true
    },
    "name": "Google Calendar Event Reminder",
    "tags": [],
    "nodes": [
      {
        "id": "dff5d952-23cb-4822-9aec-0dcae3de568a",
        "name": "Schedule Trigger",
        "type": "n8n-nodes-base.scheduleTrigger",
        "disabled": true,
        "position": [
          -40,
          300
        ],
        "parameters": {
          "rule": {
            "interval": [
              {
                "field": "minutes",
                "minutesInterval": 1
              }
            ]
          }
        },
        "typeVersion": 1.2
      },
      {
        "id": "a6de9944-1dd7-430e-a1d9-100710ddfa9c",
        "name": "OpenAI Chat Model",
        "type": "@n8n/n8n-nodes-langchain.lmChatOpenAi",
        "position": [
          700,
          500
        ],
        "parameters": {
          "model": {
            "__rl": true,
            "mode": "list",
            "value": "gpt-4o-mini"
          },
          "options": {}
        },
        "credentials": {
          "openAiApi": {
            "id": "CDX6QM4gLYanh0P4",
            "name": "OpenAi account"
          }
        },
        "typeVersion": 1.2
      },
      {
        "id": "6d2208a6-6000-4b6b-a82c-e346b7885409",
        "name": "Get upcoming event",
        "type": "n8n-nodes-base.googleCalendar",
        "position": [
          240,
          300
        ],
        "parameters": {
          "limit": 5,
          "options": {},
          "timeMax": "={{ $now.plus({ hour: 1, minute:1 }) }}",
          "timeMin": "={{ $now.plus({ hour: 1 }) }}",
          "calendar": {
            "__rl": true,
            "mode": "list",
            "value": "davide.boizza@gmail.com",
            "cachedResultName": "davide.boizza@gmail.com"
          },
          "operation": "getAll"
        },
        "credentials": {
          "googleCalendarOAuth2Api": {
            "id": "8RFK3u13g2PJEGa9",
            "name": "Google Calendar account"
          }
        },
        "typeVersion": 1.3
      },
      {
        "id": "e6f6e744-60b0-4b22-93bc-f3ffcfac71f6",
        "name": "Already sent?",
        "type": "n8n-nodes-base.removeDuplicates",
        "position": [
          480,
          300
        ],
        "parameters": {
          "options": {},
          "operation": "removeItemsSeenInPreviousExecutions",
          "dedupeValue": "={{ $json.id }}"
        },
        "typeVersion": 2
      },
      {
        "id": "882d08f5-790a-40bb-bda5-60744d587633",
        "name": "Secretary Agent",
        "type": "@n8n/n8n-nodes-langchain.agent",
        "position": [
          720,
          300
        ],
        "parameters": {
          "text": "=These are the details of the event/appointment:\n\nEvent Name: {{ $('Get upcoming event').item.json.summary }}\nDescription: {{ $('Get upcoming event').item.json.description }}\nLocation: {{ $('Get upcoming event').item.json.location }}\nStart: {{ $('Get upcoming event').item.json.start.dateTime }}\nEnd: {{ $('Get upcoming event').item.json.end.dateTime }}\nCreated by: {{ $('Get upcoming event').item.json.creator.email }}",
          "options": {
            "systemMessage": "=## Core Identity\nYou are a professional and friendly virtual secretary, dedicated to reminder appointments with efficiency and a warm personal touch.\n\n## Communication Style\n- Communicate in a conversational, approachable manner\n- Maintain a balance between professional competence and friendly rapport\n- Use a tone that is informal yet precise\n- Inject occasional light humor and personality into interactions\n\n## Key Responsibilities\n1. Calendar Management\n   - Provide timely reminders and scheduling updates\n\n2. Communication Approach\n   - Respond promptly and clearly\n   - Maintain confidentiality and discretion\n\n## Interaction Guidelines\n- Use a friendly, conversational tone\n- Just describe the details of the event without asking questions\n\n## Tone and Language\n- Warm and approachable\n- Professional but not overly formal\n- Direct and clear in communication\n- Use simple, straightforward language\n- Show genuine care and attentiveness\n\nRemember: Your primary goal is to make the user's life easier, more organized, and less stressful through efficient and friendly administrative support."
          },
          "promptType": "define",
          "hasOutputParser": true
        },
        "typeVersion": 1.8
      },
      {
        "id": "82509a0f-9086-423e-8928-f882e59333b8",
        "name": "Send reminder",
        "type": "n8n-nodes-base.telegram",
        "position": [
          1100,
          300
        ],
        "webhookId": "dbb6a96e-db3b-4827-9455-a91007b89616",
        "parameters": {
          "text": "={{ $json.output }}",
          "chatId": "CHAT_ID",
          "additionalFields": {
            "appendAttribution": false
          }
        },
        "credentials": {
          "telegramApi": {
            "id": "0hSq9VwaiJifiscT",
            "name": "Telegram account"
          }
        },
        "typeVersion": 1.2
      },
      {
        "id": "d08dd565-4718-4fbc-af7c-7a2e042c96f8",
        "name": "Sticky Note",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          -40,
          -140
        ],
        "parameters": {
          "color": 3,
          "width": 620,
          "content": "## Google Calendar Event Reminder\nThis smart **Google Calendar** workflow fixes that by sending you a clear, friendly reminder exactly **1 hour before your event starts**—delivered through **Telegram** as if a personal assistant were looking out for you. Powered by **AI**, it transforms cold calendar alerts into warm, conversational nudges you won't ignore."
        },
        "typeVersion": 1
      },
      {
        "id": "7a9379ca-f301-40b9-ae90-742663bbcdf2",
        "name": "Sticky Note1",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          -40,
          40
        ],
        "parameters": {
          "width": 620,
          "height": 140,
          "content": "## STEP 1\n- In the \"Get upcoming event\" node enter how much time before the event starts you want to be notified. It is currently set to 1 hour\n- In the Telegram node replace CHAT_ID with that of your personal Bot"
        },
        "typeVersion": 1
      },
      {
        "id": "d7852912-6501-4a1b-8928-6eb890e4aea8",
        "name": "Sticky Note2",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          420,
          240
        ],
        "parameters": {
          "width": 220,
          "height": 200,
          "content": "Prevent multiple reminders for the same event"
        },
        "typeVersion": 1
      }
    ],
    "active": false,
    "pinData": {},
    "settings": {
      "timezone": "Europe/Rome",
      "callerPolicy": "workflowsFromSameOwner",
      "executionOrder": "v1"
    },
    "versionId": "d0dd74db-e96c-4a09-a8d1-6fb193b6e015",
    "connections": {
      "Already sent?": {
        "main": [
          [
            {
              "node": "Secretary Agent",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Secretary Agent": {
        "main": [
          [
            {
              "node": "Send reminder",
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
              "node": "Get upcoming event",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "OpenAI Chat Model": {
        "ai_languageModel": [
          [
            {
              "node": "Secretary Agent",
              "type": "ai_languageModel",
              "index": 0
            }
          ]
        ]
      },
      "Get upcoming event": {
        "main": [
          [
            {
              "node": "Already sent?",
              "type": "main",
              "index": 0
            }
          ]
        ]
      }
    }
  },
  'security-scanner':{
    "id": "SvYHgLmzosuLAe4A",
    "meta": {
      "instanceId": "a4bfc93e975ca233ac45ed7c9227d84cf5a2329310525917adaf3312e10d5462",
      "templateCredsSetupCompleted": true
    },
    "name": "Google Calendar Event Reminder",
    "tags": [],
    "nodes": [
      {
        "id": "dff5d952-23cb-4822-9aec-0dcae3de568a",
        "name": "Schedule Trigger",
        "type": "n8n-nodes-base.scheduleTrigger",
        "disabled": true,
        "position": [
          -40,
          300
        ],
        "parameters": {
          "rule": {
            "interval": [
              {
                "field": "minutes",
                "minutesInterval": 1
              }
            ]
          }
        },
        "typeVersion": 1.2
      },
      {
        "id": "a6de9944-1dd7-430e-a1d9-100710ddfa9c",
        "name": "OpenAI Chat Model",
        "type": "@n8n/n8n-nodes-langchain.lmChatOpenAi",
        "position": [
          700,
          500
        ],
        "parameters": {
          "model": {
            "__rl": true,
            "mode": "list",
            "value": "gpt-4o-mini"
          },
          "options": {}
        },
        "credentials": {
          "openAiApi": {
            "id": "CDX6QM4gLYanh0P4",
            "name": "OpenAi account"
          }
        },
        "typeVersion": 1.2
      },
      {
        "id": "6d2208a6-6000-4b6b-a82c-e346b7885409",
        "name": "Get upcoming event",
        "type": "n8n-nodes-base.googleCalendar",
        "position": [
          240,
          300
        ],
        "parameters": {
          "limit": 5,
          "options": {},
          "timeMax": "={{ $now.plus({ hour: 1, minute:1 }) }}",
          "timeMin": "={{ $now.plus({ hour: 1 }) }}",
          "calendar": {
            "__rl": true,
            "mode": "list",
            "value": "davide.boizza@gmail.com",
            "cachedResultName": "davide.boizza@gmail.com"
          },
          "operation": "getAll"
        },
        "credentials": {
          "googleCalendarOAuth2Api": {
            "id": "8RFK3u13g2PJEGa9",
            "name": "Google Calendar account"
          }
        },
        "typeVersion": 1.3
      },
      {
        "id": "e6f6e744-60b0-4b22-93bc-f3ffcfac71f6",
        "name": "Already sent?",
        "type": "n8n-nodes-base.removeDuplicates",
        "position": [
          480,
          300
        ],
        "parameters": {
          "options": {},
          "operation": "removeItemsSeenInPreviousExecutions",
          "dedupeValue": "={{ $json.id }}"
        },
        "typeVersion": 2
      },
      {
        "id": "882d08f5-790a-40bb-bda5-60744d587633",
        "name": "Secretary Agent",
        "type": "@n8n/n8n-nodes-langchain.agent",
        "position": [
          720,
          300
        ],
        "parameters": {
          "text": "=These are the details of the event/appointment:\n\nEvent Name: {{ $('Get upcoming event').item.json.summary }}\nDescription: {{ $('Get upcoming event').item.json.description }}\nLocation: {{ $('Get upcoming event').item.json.location }}\nStart: {{ $('Get upcoming event').item.json.start.dateTime }}\nEnd: {{ $('Get upcoming event').item.json.end.dateTime }}\nCreated by: {{ $('Get upcoming event').item.json.creator.email }}",
          "options": {
            "systemMessage": "=## Core Identity\nYou are a professional and friendly virtual secretary, dedicated to reminder appointments with efficiency and a warm personal touch.\n\n## Communication Style\n- Communicate in a conversational, approachable manner\n- Maintain a balance between professional competence and friendly rapport\n- Use a tone that is informal yet precise\n- Inject occasional light humor and personality into interactions\n\n## Key Responsibilities\n1. Calendar Management\n   - Provide timely reminders and scheduling updates\n\n2. Communication Approach\n   - Respond promptly and clearly\n   - Maintain confidentiality and discretion\n\n## Interaction Guidelines\n- Use a friendly, conversational tone\n- Just describe the details of the event without asking questions\n\n## Tone and Language\n- Warm and approachable\n- Professional but not overly formal\n- Direct and clear in communication\n- Use simple, straightforward language\n- Show genuine care and attentiveness\n\nRemember: Your primary goal is to make the user's life easier, more organized, and less stressful through efficient and friendly administrative support."
          },
          "promptType": "define",
          "hasOutputParser": true
        },
        "typeVersion": 1.8
      },
      {
        "id": "82509a0f-9086-423e-8928-f882e59333b8",
        "name": "Send reminder",
        "type": "n8n-nodes-base.telegram",
        "position": [
          1100,
          300
        ],
        "webhookId": "dbb6a96e-db3b-4827-9455-a91007b89616",
        "parameters": {
          "text": "={{ $json.output }}",
          "chatId": "CHAT_ID",
          "additionalFields": {
            "appendAttribution": false
          }
        },
        "credentials": {
          "telegramApi": {
            "id": "0hSq9VwaiJifiscT",
            "name": "Telegram account"
          }
        },
        "typeVersion": 1.2
      },
      {
        "id": "d08dd565-4718-4fbc-af7c-7a2e042c96f8",
        "name": "Sticky Note",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          -40,
          -140
        ],
        "parameters": {
          "color": 3,
          "width": 620,
          "content": "## Google Calendar Event Reminder\nThis smart **Google Calendar** workflow fixes that by sending you a clear, friendly reminder exactly **1 hour before your event starts**—delivered through **Telegram** as if a personal assistant were looking out for you. Powered by **AI**, it transforms cold calendar alerts into warm, conversational nudges you won't ignore."
        },
        "typeVersion": 1
      },
      {
        "id": "7a9379ca-f301-40b9-ae90-742663bbcdf2",
        "name": "Sticky Note1",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          -40,
          40
        ],
        "parameters": {
          "width": 620,
          "height": 140,
          "content": "## STEP 1\n- In the \"Get upcoming event\" node enter how much time before the event starts you want to be notified. It is currently set to 1 hour\n- In the Telegram node replace CHAT_ID with that of your personal Bot"
        },
        "typeVersion": 1
      },
      {
        "id": "d7852912-6501-4a1b-8928-6eb890e4aea8",
        "name": "Sticky Note2",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          420,
          240
        ],
        "parameters": {
          "width": 220,
          "height": 200,
          "content": "Prevent multiple reminders for the same event"
        },
        "typeVersion": 1
      }
    ],
    "active": false,
    "pinData": {},
    "settings": {
      "timezone": "Europe/Rome",
      "callerPolicy": "workflowsFromSameOwner",
      "executionOrder": "v1"
    },
    "versionId": "d0dd74db-e96c-4a09-a8d1-6fb193b6e015",
    "connections": {
      "Already sent?": {
        "main": [
          [
            {
              "node": "Secretary Agent",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Secretary Agent": {
        "main": [
          [
            {
              "node": "Send reminder",
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
              "node": "Get upcoming event",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "OpenAI Chat Model": {
        "ai_languageModel": [
          [
            {
              "node": "Secretary Agent",
              "type": "ai_languageModel",
              "index": 0
            }
          ]
        ]
      },
      "Get upcoming event": {
        "main": [
          [
            {
              "node": "Already sent?",
              "type": "main",
              "index": 0
            }
          ]
        ]
      }
    }
  },
  'content-generation':{
    "id": "YOUR_WORKFLOW_ID",
    "meta": {
      "instanceId": "YOUR_INSTANCE_ID",
      "templateCredsSetupCompleted": true
    },
    "name": "Automated Content Generation & Publishing - Wordpress",
    "tags": [],
    "nodes": [
      {
        "id": "9cd63357-19dc-4420-baa9-1e1389c7120f",
        "name": "Create posts on Wordpress",
        "type": "n8n-nodes-base.wordpress",
        "position": [
          1180,
          280
        ],
        "parameters": {
          "title": "={{ $('Save to Sheet').item.json['title'] }}",
          "additionalFields": {
            "status": "publish",
            "content": "=<img src=\"{{ $('Automated Image Retrieval from Pexels').item.json.photos[0].src.landscape }}\" alt=\"image text\" style=\"width:100%; height:auto;\"><br><br>\n<br><br>\n{{ $node['Save to Sheet'].json['content'] }}"
          }
        },
        "credentials": {
          "wordpressApi": {
            "id": "YOUR_WORDPRESS_CREDENTIAL_ID",
            "name": "Wordpress account 2"
          }
        },
        "typeVersion": 1,
        "alwaysOutputData": false
      },
      {
        "id": "65f62f19-d10f-4ca1-a853-9cedb3506743",
        "name": "Processing Delay",
        "type": "n8n-nodes-base.code",
        "position": [
          180,
          580
        ],
        "parameters": {
          "jsCode": "const delay = Math.floor(Math.random() * (6 * 60 * 60 * 1000)); // random delay 0-6 hour\nreturn {\n  json: {\n    delay: delay,\n    delay_minutes: Math.round(delay / 60000),  // to minutes\n    delay_hours: (delay / 3600000).toFixed(2) // to hours\n  }\n};\n"
        },
        "typeVersion": 2
      },
      {
        "id": "193d2876-c50e-4b9e-8856-9fd11baa025e",
        "name": "Random Wait",
        "type": "n8n-nodes-base.wait",
        "position": [
          180,
          760
        ],
        "webhookId": "61377399-ce9f-497a-80b1-aab29fc9fb69",
        "parameters": {
          "amount": "={{$json[\"delay\"] / 1000}}"
        },
        "typeVersion": 1.1
      },
      {
        "id": "cf510c21-7c19-4e84-a43a-62d170277cdf",
        "name": "Save to Sheet",
        "type": "n8n-nodes-base.googleSheets",
        "position": [
          780,
          280
        ],
        "parameters": {
          "columns": {
            "value": {
              "title": "={{ $json.message.content.title }}",
              "content": "={{ $json.message.content.content }}",
              "Image search keyword": "={{ $json.message.content.keywords.join(\"+\") }}"
            },
            "schema": [
              {
                "id": "title",
                "type": "string",
                "display": true,
                "removed": false,
                "required": false,
                "displayName": "title",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "content",
                "type": "string",
                "display": true,
                "required": false,
                "displayName": "content",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Image search keyword",
                "type": "string",
                "display": true,
                "required": false,
                "displayName": "Image search keyword",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              }
            ],
            "mappingMode": "defineBelow",
            "matchingColumns": []
          },
          "options": {},
          "operation": "append",
          "sheetName": {
            "__rl": true,
            "mode": "name",
            "value": "Sheet1"
          },
          "documentId": {
            "__rl": true,
            "mode": "url",
            "value": "YOURDOCUMENT_URL"
          }
        },
        "credentials": {
          "googleSheetsOAuth2Api": {
            "id": "YOUR_GOOGLE_SHEETS_CREDENTIAL_ID",
            "name": "Google Sheets account_正確"
          }
        },
        "typeVersion": 4.5
      },
      {
        "id": "1778f649-c09e-4ef9-b153-4160eed6805c",
        "name": "Sticky Note",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          -220,
          0
        ],
        "parameters": {
          "width": 607.503259452412,
          "height": 892.7656453715782,
          "content": "## Automated Article Scheduling\n\n**1. Fast Bulk Article Generation**\nQuickly create multiple AI-generated articles.\nEfficiently streamline content creation.\nReduces manual effort while maintaining quality.\n\n**2. Workflow Testing Before Execution**\nManually test the workflow for debugging.\nEnsure each step runs as expected.\nOptimize before full automation.\n\n**3. Automated & Randomized Publishing**\nSchedule posts at predefined intervals.\nIntroduce random delays for a natural posting pattern.\nPrevents overly predictable publishing behavior."
        },
        "typeVersion": 1
      },
      {
        "id": "6f385e8c-b3e6-4456-9738-e85ea2cbbea1",
        "name": "1. Auto Start",
        "type": "n8n-nodes-base.scheduleTrigger",
        "disabled": true,
        "position": [
          180,
          20
        ],
        "parameters": {
          "rule": {
            "interval": [
              {
                "field": "minutes",
                "minutesInterval": 1
              }
            ]
          }
        },
        "typeVersion": 1.2
      },
      {
        "id": "6d7712e8-9033-453b-ad52-09f718bcb701",
        "name": "2. When clicking ‘Test workflow’",
        "type": "n8n-nodes-base.manualTrigger",
        "disabled": true,
        "position": [
          180,
          200
        ],
        "parameters": {},
        "typeVersion": 1
      },
      {
        "id": "0fd8fe8f-a0d5-42d9-b728-53340c6e4233",
        "name": "3. Schedule Your Posts",
        "type": "n8n-nodes-base.scheduleTrigger",
        "position": [
          180,
          380
        ],
        "parameters": {
          "rule": {
            "interval": [
              {
                "field": "weeks",
                "triggerAtDay": [
                  2,
                  4,
                  0
                ],
                "triggerAtHour": "={{ 12 }}"
              }
            ]
          }
        },
        "typeVersion": 1.2
      },
      {
        "id": "16c26c36-fb8e-4903-a64c-57803fac83b9",
        "name": "Sticky Note1",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          400,
          440
        ],
        "parameters": {
          "width": 351.77682676671327,
          "height": 271.4285686334568,
          "content": "## AI Content Generating\n\n**Automatic Content & Keyword Generation\n\n- Use your own prompt to start\n- ChatGPT generates full-length articles with structured headings.\n- Extracts relevant image search keywords for visual enhancement.\n- To implement this, add the following prompt (green note) below your workflow:\n"
        },
        "typeVersion": 1
      },
      {
        "id": "921173fb-ae10-4f88-a1ab-15f063cd623f",
        "name": "Sticky Note2",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          400,
          740
        ],
        "parameters": {
          "color": 4,
          "width": 349.47344203333904,
          "height": 1277.4269457977707,
          "content": "(YOUR PROMPT)\n\n**Image Search Keywords (For Visual Alignment)**\n\n- Automatically generates 3-5 English keywords for image searches based on the article content.\n- Keywords should be specific objects, locations, or atmospheres rather than abstract concepts.\n\n**Article Formatting Requirements**\n\n1️⃣ Title (H1): Ensure unique and trend-driven headlines.\n2️⃣ H2 / H3 Subheadings: Structure content in an SEO-optimized format.\n3️⃣ Article Structure (Enhanced Readability)\n\n** Introduction **\n- Go straight to the point, avoiding excessive background.\n- Use question hooks or market trend data to engage readers.\n\n** Core Content **\n- Include at least three knowledge points to ensure depth.\n- Balance short and long sentences for better flow.\n\n** Conclusion **\n- Avoid generic AI-style summaries; instead, provide insights or actionable takeaways.\n- Optionally include a CTA (Call to Action).\n\n** HTML Formatting **\nEnsure the article is properly structured in HTML format:\n- Headings: Use <h1>, <h2>, <h3> appropriately.\n- Paragraphs: Enclose text within <p>.\n- Emphasized Words: Use <strong> to highlight key terms.\n- Lists: Use <ul> and <li> for bullet points.\n\nEnsure a clean, well-structured output instead of plain text.\n\n### **Final JSON Format\nEnsure the output follows this structure:\n\n{\n  \"title\": \"{Generate an H1 title that aligns with market trends, ensures high click-through rates, and follows keyword strategy}\",\n  \"content\": \"{Generate a complete HTML article including H1, H2, H3 headings, paragraphs, lists, etc.}\",\n  \"keywords\": [\"{Image search keyword 1}\", \"{Image search keyword 2}\", \"{Image search keyword 3}\", \"{Image search keyword 4}\", \"{Image search keyword 5}\"]\n}"
        },
        "typeVersion": 1
      },
      {
        "id": "364b1ee1-4685-4b10-b988-1704dc65592b",
        "name": "Sticky Note3",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          760,
          440
        ],
        "parameters": {
          "width": 367.1064142931126,
          "height": 267.17005729996885,
          "content": "## Google Sheet Setting\n**You need to set up these in your sheet column** \n- title\n- content\n- image search keyword\n\n**Mapping \"Values to Send\"**\n- {{ $json.message.content.title }}\n- {{ $json.message.content.content }}\n- {{ $json.message.content.keywords.join(\"+\") }}"
        },
        "typeVersion": 1
      },
      {
        "id": "26876b53-aa27-4e16-991e-c3618e751c17",
        "name": "Automated Image Retrieval from Pexels",
        "type": "n8n-nodes-base.httpRequest",
        "position": [
          980,
          280
        ],
        "parameters": {
          "url": "=https://api.pexels.com/v1/search?per_page=1&orientation=landscape&query={{ $json[\"Image search keyword\"] }}\n",
          "options": {},
          "sendQuery": true,
          "sendHeaders": true,
          "queryParameters": {
            "parameters": [
              {
                "name": "query",
                "value": "={{ $json['Image search keyword'] }}"
              }
            ]
          },
          "headerParameters": {
            "parameters": [
              {
                "name": "Authorization",
                "value": "YOUR_PEXELS_API_KEY"
              },
              {
                "name": "Content-Type",
                "value": "application/json"
              }
            ]
          }
        },
        "typeVersion": 4.2
      },
      {
        "id": "769638be-ee38-4e40-a508-f998b09ce1f4",
        "name": "Sticky Note4",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          -220,
          -240
        ],
        "parameters": {
          "color": 3,
          "width": 608.0701163493336,
          "height": 211.65896369815192,
          "content": "## Introduction: WordPress automatically publishes posts and inserts the first image\n\nIt is **highly recommended to install the Featured Image from URL (FIFU) plugin** and enable:\n\n**Auto > Set Featured Media Automatically from Content.** before you generate contents."
        },
        "typeVersion": 1
      },
      {
        "id": "37f3606f-f110-49d2-bcf5-1edc27149fee",
        "name": "Sticky Note5",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          400,
          229.99235545929986
        ],
        "parameters": {
          "width": 348.08256103956126,
          "height": 170.00764454070014,
          "content": "Add your API credential"
        },
        "typeVersion": 1
      },
      {
        "id": "2399a40d-4b79-400c-9e96-df7e683fd666",
        "name": "Sticky Note6",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          760,
          228.00611563256007
        ],
        "parameters": {
          "width": 150,
          "height": 170.00764454070008,
          "content": "Add your API credential"
        },
        "typeVersion": 1
      },
      {
        "id": "45e479a6-2eea-44a1-9096-9895a18904fd",
        "name": "Sticky Note7",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          920,
          226.01987580582022
        ],
        "parameters": {
          "width": 201.97095074533956,
          "height": 172.00917344884022,
          "content": "Add your API credential"
        },
        "typeVersion": 1
      },
      {
        "id": "e0489552-a7b5-4161-9553-95e23605a9d5",
        "name": "Generate AI Content",
        "type": "@n8n/n8n-nodes-langchain.openAi",
        "position": [
          440,
          280
        ],
        "parameters": {
          "modelId": {
            "__rl": true,
            "mode": "list",
            "value": "gpt-4o",
            "cachedResultName": "GPT-4O"
          },
          "options": {},
          "messages": {
            "values": [
              {
                "content": "(YOUR PROMPT)\n(YOUR PROMPT)\n\n**Image Search Keywords (For Visual Alignment)**\n\n- Automatically generates 3-5 English keywords for image searches based on the article content.\n- Keywords should be specific objects, locations, or atmospheres rather than abstract concepts.\n\n**Article Formatting Requirements**\n\n1️⃣ Title (H1): Ensure unique and trend-driven headlines.\n2️⃣ H2 / H3 Subheadings: Structure content in an SEO-optimized format.\n3️⃣ Article Structure (Enhanced Readability)\n\n** Introduction **\n- Go straight to the point, avoiding excessive background.\n- Use question hooks or market trend data to engage readers.\n\n** Core Content **\n- Include at least three knowledge points to ensure depth.\n- Balance short and long sentences for better flow.\n\n** Conclusion **\n- Avoid generic AI-style summaries; instead, provide insights or actionable takeaways.\n- Optionally include a CTA (Call to Action).\n\n** HTML Formatting **\nEnsure the article is properly structured in HTML format:\n- Headings: Use <h1>, <h2>, <h3> appropriately.\n- Paragraphs: Enclose text within <p>.\n- Emphasized Words: Use <strong> to highlight key terms.\n- Lists: Use <ul> and <li> for bullet points.\n\nEnsure a clean, well-structured output instead of plain text.\n\n### **Final JSON Format\nEnsure the output follows this structure:\n\n{\n  \"title\": \"{Generate an H1 title that aligns with market trends, ensures high click-through rates, and follows keyword strategy}\",\n  \"content\": \"{Generate a complete HTML article including H1, H2, H3 headings, paragraphs, lists, etc.}\",\n  \"keywords\": [\"{Image search keyword 1}\", \"{Image search keyword 2}\", \"{Image search keyword 3}\", \"{Image search keyword 4}\", \"{Image search keyword 5}\"]\n}"
              }
            ]
          },
          "jsonOutput": true
        },
        "credentials": {
          "openAiApi": {
            "id": "YOUR_OPENAI_CREDENTIAL_ID",
            "name": "OpenAi account"
          }
        },
        "typeVersion": 1.6
      }
    ],
    "active": false,
    "pinData": {},
    "settings": {
      "timezone": "Asia/Taipei",
      "callerPolicy": "workflowsFromSameOwner",
      "executionOrder": "v1",
      "executionTimeout": -1,
      "saveManualExecutions": true
    },
    "versionId": "YOUR_VERSION_ID",
    "connections": {
      "Random Wait": {
        "main": [
          [
            {
              "node": "Generate AI Content",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Save to Sheet": {
        "main": [
          [
            {
              "node": "Automated Image Retrieval from Pexels",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Processing Delay": {
        "main": [
          [
            {
              "node": "Random Wait",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Generate AI Content": {
        "main": [
          [
            {
              "node": "Save to Sheet",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "3. Schedule Your Posts": {
        "main": [
          [
            {
              "node": "Processing Delay",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Automated Image Retrieval from Pexels": {
        "main": [
          [
            {
              "node": "Create posts on Wordpress",
              "type": "main",
              "index": 0
            }
          ]
        ]
      }
    }
  },
  'customer-onboarding':{
    "nodes": [
      {
        "id": "b9256d00-9dff-432a-a678-e71a4074b26c",
        "name": "Webhook",
        "type": "n8n-nodes-base.webhook",
        "position": [
          -20,
          -160
        ],
        "webhookId": "06d29616-8fa9-42cf-8b5f-abe856083c75",
        "parameters": {
          "path": "06d29616-8fa9-42cf-8b5f-abe856083c75",
          "options": {},
          "httpMethod": "POST"
        },
        "typeVersion": 2
      },
      {
        "id": "2726dd28-5366-4c0e-ad16-bae6dc2cbc0b",
        "name": "Sticky Note",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          -880,
          -200
        ],
        "parameters": {
          "color": 4,
          "width": 320,
          "height": 440,
          "content": "## What does it do?\nObjective:\n\nStreamline the onboarding process for new customers, ensuring they receive all necessary resources and support.\nTrigger: Set a webhook trigger or a CRM trigger (like HubSpot or Salesforce) for when a new customer is added.\n\nSend Welcome Email: Use the Gmail or SMTP node to send a personalized welcome email to the customer.\n\nSchedule a Welcome Call: Use the Calendar node (Google Calendar) to automatically create a calendar event for a welcome call.\n\nAssign a CSM: Use the CRM node (like HubSpot) to assign the new customer to a dedicated CSM."
        },
        "typeVersion": 1
      },
      {
        "id": "680bdd4e-f382-4d20-8197-a7d65454ce36",
        "name": "Try Again",
        "type": "n8n-nodes-base.set",
        "position": [
          1000,
          500
        ],
        "parameters": {
          "options": {},
          "assignments": {
            "assignments": [
              {
                "id": "7ab380a2-a8d3-421c-ab4e-748ea8fb7904",
                "name": "response",
                "type": "string",
                "value": "Unable to perform task. Please try again."
              }
            ]
          }
        },
        "typeVersion": 3.4
      },
      {
        "id": "1ab48997-7533-4572-86d5-980af557d09d",
        "name": "Success",
        "type": "n8n-nodes-base.set",
        "position": [
          1000,
          300
        ],
        "parameters": {
          "options": {},
          "assignments": {
            "assignments": [
              {
                "id": "39c2f302-03be-4464-a17a-d7cc481d6d44",
                "name": "=response",
                "type": "string",
                "value": "={{$json.output}}"
              }
            ]
          }
        },
        "typeVersion": 3.4
      },
      {
        "id": "4cb493a1-1eff-42ca-9c51-8f070fe3e9ba",
        "name": "Calendar Agent",
        "type": "@n8n/n8n-nodes-langchain.agent",
        "onError": "continueErrorOutput",
        "position": [
          412,
          400
        ],
        "parameters": {
          "text": "={{ $json.query }}",
          "options": {
            "systemMessage": "=# Overview\nYou are a calendar assistant. Your responsibilities include creating, getting, and deleting events in the user's calendar.\nIf no date is proposed, find the next available slot using \"Get Events\" and create an event using \"Create Event with Attendee\"\n\n**Calendar Management Tools**  \n   - Use \"Create Event with Attendee\" when an event includes a participant.     \n   - Use \"Get Events\" to fetch calendar schedules when requested.\n   - Use \"Delete Event\" to delete an event. You must use \"Get Events\" first to get the ID of the event to delete.\n   - Use \"Update Event\" to update an event. You must use \"Get Events\" first to get the ID of the event to update.\n\n## Final Notes\nHere is the current date/time: {{ $now }}\nIf a duration for an event isn't specified, assume it will be one hour."
          },
          "promptType": "define"
        },
        "typeVersion": 1.6
      },
      {
        "id": "8c088b37-1005-4bc4-bdf5-0558ccb0c873",
        "name": "Create Event with Attendee",
        "type": "n8n-nodes-base.googleCalendarTool",
        "position": [
          320,
          620
        ],
        "parameters": {
          "end": "={{ $fromAI(\"eventEnd\") }}",
          "start": "={{ $fromAI(\"eventStart\") }}",
          "calendar": {
            "__rl": true,
            "mode": "id",
            "value": "={{ /*n8n-auto-generated-fromAI-override*/ $fromAI('Calendar', ``, 'string') }}",
            "__regex": "(^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*)"
          },
          "additionalFields": {
            "summary": "={{ $fromAI(\"eventTitle\") }}",
            "attendees": [
              "={{ $fromAI(\"eventAttendeeEmail\") }}"
            ]
          }
        },
        "credentials": {
          "googleCalendarOAuth2Api": {
            "id": "90bjjmYqtg3hnvFM",
            "name": "Google Calendar account"
          }
        },
        "typeVersion": 1.3
      },
      {
        "id": "91a0e49a-888f-4511-94e7-e0166ce7dd58",
        "name": "Create Event",
        "type": "n8n-nodes-base.googleCalendarTool",
        "position": [
          440,
          620
        ],
        "parameters": {
          "end": "={{ $fromAI(\"eventEnd\") }}",
          "start": "={{ $fromAI(\"eventStart\") }}",
          "calendar": {
            "__rl": true,
            "mode": "id",
            "value": "={{ /*n8n-auto-generated-fromAI-override*/ $fromAI('Calendar', ``, 'string') }}",
            "__regex": "(^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*)"
          },
          "additionalFields": {
            "summary": "={{ $fromAI(\"eventTitle\") }}",
            "attendees": []
          }
        },
        "credentials": {
          "googleCalendarOAuth2Api": {
            "id": "90bjjmYqtg3hnvFM",
            "name": "Google Calendar account"
          }
        },
        "typeVersion": 1.3
      },
      {
        "id": "8cfb90e5-6108-4003-b048-271650d4bc6c",
        "name": "Get Events",
        "type": "n8n-nodes-base.googleCalendarTool",
        "position": [
          560,
          620
        ],
        "parameters": {
          "options": {},
          "timeMax": "={{ $fromAI(\"dayBefore\",\"today plus 7 days\") }}",
          "timeMin": "={{ $fromAI(\"dayAfter\",\"today\") }}",
          "calendar": {
            "__rl": true,
            "mode": "id",
            "value": "={{ $fromAI('Calendar', `sender's email`, 'string') }}"
          },
          "operation": "getAll"
        },
        "credentials": {
          "googleCalendarOAuth2Api": {
            "id": "90bjjmYqtg3hnvFM",
            "name": "Google Calendar account"
          }
        },
        "typeVersion": 1.3
      },
      {
        "id": "c5cc3550-7d9a-43c9-8434-e1ab78f7f596",
        "name": "Delete Event",
        "type": "n8n-nodes-base.googleCalendarTool",
        "position": [
          680,
          620
        ],
        "parameters": {
          "eventId": "={{ $fromAI(\"eventID\") }}",
          "options": {},
          "calendar": {
            "__rl": true,
            "mode": "id",
            "value": "={{ /*n8n-auto-generated-fromAI-override*/ $fromAI('Calendar', ``, 'string') }}",
            "__regex": "(^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*)"
          },
          "operation": "delete"
        },
        "credentials": {
          "googleCalendarOAuth2Api": {
            "id": "90bjjmYqtg3hnvFM",
            "name": "Google Calendar account"
          }
        },
        "typeVersion": 1.3
      },
      {
        "id": "7ce45da8-dc24-4634-9f48-3864165885cd",
        "name": "Update Event",
        "type": "n8n-nodes-base.googleCalendarTool",
        "position": [
          800,
          620
        ],
        "parameters": {
          "eventId": "={{ $fromAI(\"eventID\") }}",
          "calendar": {
            "__rl": true,
            "mode": "id",
            "value": "={{ /*n8n-auto-generated-fromAI-override*/ $fromAI('Calendar', ``, 'string') }}",
            "__regex": "(^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*)"
          },
          "operation": "update",
          "updateFields": {
            "end": "={{ $fromAI(\"endTime\") }}",
            "start": "={{ $fromAI(\"startTime\") }}"
          }
        },
        "credentials": {
          "googleCalendarOAuth2Api": {
            "id": "90bjjmYqtg3hnvFM",
            "name": "Google Calendar account"
          }
        },
        "typeVersion": 1.3
      },
      {
        "id": "b46f24a4-719c-414e-94d9-ecfb1e7dfe39",
        "name": "When Executed by Another Workflow",
        "type": "n8n-nodes-base.executeWorkflowTrigger",
        "position": [
          200,
          400
        ],
        "parameters": {
          "inputSource": "passthrough"
        },
        "typeVersion": 1.1
      },
      {
        "id": "aedbe138-ed51-4300-881b-6b58928f5bb4",
        "name": "OpenAI Chat Model2",
        "type": "@n8n/n8n-nodes-langchain.lmChatOpenAi",
        "position": [
          1520,
          160
        ],
        "parameters": {
          "model": {
            "__rl": true,
            "mode": "list",
            "value": "gpt-4o-mini"
          },
          "options": {}
        },
        "credentials": {
          "openAiApi": {
            "id": "1IOLtYX7aTspCAN8",
            "name": "OpenAI Pollup"
          }
        },
        "typeVersion": 1.2
      },
      {
        "id": "a540ae6b-e1ee-4d91-988e-e60bae743377",
        "name": "calendarAgent",
        "type": "@n8n/n8n-nodes-langchain.toolWorkflow",
        "position": [
          1640,
          160
        ],
        "parameters": {
          "workflowId": {
            "__rl": true,
            "mode": "id",
            "value": "={{ $workflow.id}}",
            "cachedResultName": "={{ $workflow.id}}"
          },
          "description": "Call this tool for any calendar action.",
          "workflowInputs": {
            "value": {},
            "schema": [],
            "mappingMode": "defineBelow",
            "matchingColumns": [],
            "attemptToConvertTypes": false,
            "convertFieldsToString": false
          }
        },
        "typeVersion": 2.2
      },
      {
        "id": "64979b9f-a29a-4c53-b87a-cec84e7ba1fe",
        "name": "Structured Output Parser",
        "type": "@n8n/n8n-nodes-langchain.outputParserStructured",
        "position": [
          1760,
          160
        ],
        "parameters": {
          "jsonSchemaExample": "{\n\t\"subject\": \"\",\n\t\"body\": \"\"\n}"
        },
        "typeVersion": 1.2
      },
      {
        "id": "359d7296-a8e9-494c-b519-cca62c0805df",
        "name": "Get list of owners",
        "type": "n8n-nodes-base.httpRequest",
        "position": [
          420,
          -60
        ],
        "parameters": {
          "url": "https://api.hubapi.com/crm/v3/owners",
          "options": {},
          "authentication": "predefinedCredentialType",
          "nodeCredentialType": "hubspotOAuth2Api"
        },
        "credentials": {
          "hubspotOAuth2Api": {
            "id": "qubiIFrowxvUdpu6",
            "name": "HubSpot account for node"
          }
        },
        "typeVersion": 4.2
      },
      {
        "id": "e8aab719-a5d9-4168-9c68-eea32c7d3ef4",
        "name": "Split Out owners",
        "type": "n8n-nodes-base.splitOut",
        "position": [
          640,
          -60
        ],
        "parameters": {
          "options": {},
          "fieldToSplitOut": "results"
        },
        "typeVersion": 1
      },
      {
        "id": "5e44ea67-e2f9-4cea-a030-c452b8bb482f",
        "name": "Get current owner",
        "type": "n8n-nodes-base.filter",
        "position": [
          860,
          -60
        ],
        "parameters": {
          "options": {},
          "conditions": {
            "options": {
              "version": 2,
              "leftValue": "",
              "caseSensitive": true,
              "typeValidation": "strict"
            },
            "combinator": "and",
            "conditions": [
              {
                "id": "7c6aec6e-66a9-4739-8a59-28f2ab1c4a26",
                "operator": {
                  "type": "string",
                  "operation": "equals"
                },
                "leftValue": "={{ $json.email }}",
                "rightValue": "={{ $('Enter your company data here').item.json.sender_email }}"
              }
            ]
          }
        },
        "typeVersion": 2.2
      },
      {
        "id": "c03bd58c-7a42-4966-96e8-45928f745475",
        "name": "Sticky Note1",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          -540,
          -200
        ],
        "parameters": {
          "color": 5,
          "width": 680,
          "height": 1340,
          "content": "## How to Set a Webhook in n8n and HubSpot\n\n## 1. Set Up a Webhook in n8n\n\n### Step 1: Create a New Workflow\n- Go to your **n8n dashboard**.\n- Click on **\"New Workflow.\"**\n\n### Step 2: Add the Webhook Node\n- Click on the **“+”** icon to add a new node.\n- Search for **“Webhook”** and select it.\n- Set the **Webhook Method** (usually POST).\n- Define the **Webhook URL path**, for example, `/hubspot-webhook`.\n- Set the **\"Response Mode\"** (e.g., \"On Received\").\n- Save the workflow.\n\n### Step 3: Set Webhook URL\n- Copy the **Webhook URL** generated by n8n. It should look something like:https://your-n8n-domain/webhook/hubspot-webhook\n\n- Ensure the workflow is **active**.\n\n---\n\n## 2. Set Up a Webhook in HubSpot\n\n### Step 1: Log in to HubSpot\n- Go to **HubSpot Developer Account** (required for webhook setup).\n- Navigate to **\"Settings\" > \"Integrations\" > \"Webhooks.\"**\n\n### Step 2: Create a New Webhook Subscription\n- Click **“Create Webhook”** or **“Add Webhook”** if this is your first one.\n- Select the **events** you want to track (e.g., contact creation, form submission).\n- Set the **Webhook URL** as the n8n Webhook URL you copied earlier.\n- Choose **“POST”** as the request method.\n- Set the **Authentication** if needed (you can set a secret or use OAuth).\n\n### Step 3: Test the Webhook\n- Use the **“Test Webhook”** feature in HubSpot to send a test request.\n- Switch to n8n and ensure the webhook is triggering properly.\n\n---\n\n## 3. Process the Data in n8n\n- After the webhook is triggered in n8n, you will see the data sent by HubSpot.\n- You can now add additional nodes to **process the data** (e.g., save to database, send email, perform actions in another app).\n\n---\n\n## 4. Make the Workflow Active\n- Once you are done configuring, make sure the workflow is **set to “Active.”**\n- This will allow it to receive live data from HubSpot."
        },
        "typeVersion": 1
      },
      {
        "id": "3861fa49-909d-4591-a1b8-d7bdd20e6560",
        "name": "HubSpot Trigger",
        "type": "n8n-nodes-base.hubspotTrigger",
        "position": [
          -20,
          40
        ],
        "webhookId": "632f3fc8-b921-4697-ba12-037d5c7f8971",
        "parameters": {
          "eventsUi": {
            "eventValues": [
              {}
            ]
          },
          "additionalFields": {}
        },
        "credentials": {
          "hubspotDeveloperApi": {
            "id": "DVrqcbIPANwtlVSg",
            "name": "HubSpot Developer account for trigger"
          }
        },
        "typeVersion": 1
      },
      {
        "id": "9051cc3d-06be-4238-998e-7cb938313d24",
        "name": "Enter your company data here",
        "type": "n8n-nodes-base.set",
        "position": [
          200,
          -60
        ],
        "parameters": {
          "options": {},
          "assignments": {
            "assignments": [
              {
                "id": "11a8b9e9-a7ed-454a-9aef-a9137c0e17ea",
                "name": "company_name",
                "type": "string",
                "value": "Pollup Data Services"
              },
              {
                "id": "f2dcfe2e-3145-4a30-9731-0a8d02c7aa9a",
                "name": "sender_name",
                "type": "string",
                "value": "Thomas Vié"
              },
              {
                "id": "18b5c0bd-4e75-4b98-92fc-5fca90a8b680",
                "name": "sender_email",
                "type": "string",
                "value": "zeerobug@gmail.com"
              },
              {
                "id": "2c8de3ed-57dc-455b-bfa5-87a0d8d046d2",
                "name": "company_activity",
                "type": "string",
                "value": "Whether it’s automating recurring tasks, analysing data faster, or personalising customer interactions, we build bespoke AI agents to help your workforce work smarter."
              }
            ]
          }
        },
        "notesInFlow": true,
        "typeVersion": 3.4
      },
      {
        "id": "5260ec73-0733-47d1-af03-66ead128820e",
        "name": "Sticky Note2",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          160,
          -200
        ],
        "parameters": {
          "color": 4,
          "width": 400,
          "height": 320,
          "content": "## Set your data and your company's \nThe sender_email you set here has to be the same as the one you use in hubspot "
        },
        "typeVersion": 1
      },
      {
        "id": "78e301c7-3146-4bd9-9546-9f8c5b46cac7",
        "name": "If a contact is created",
        "type": "n8n-nodes-base.if",
        "position": [
          1080,
          -60
        ],
        "parameters": {
          "options": {},
          "conditions": {
            "options": {
              "version": 2,
              "leftValue": "",
              "caseSensitive": true,
              "typeValidation": "strict"
            },
            "combinator": "and",
            "conditions": [
              {
                "id": "b70f4699-008f-4924-8e69-af4fa69422a5",
                "operator": {
                  "name": "filter.operator.equals",
                  "type": "string",
                  "operation": "equals"
                },
                "leftValue": "={{ $('Webhook').item.json.body[0].subscriptionType }}",
                "rightValue": "contact.creation"
              }
            ]
          }
        },
        "typeVersion": 2.2
      },
      {
        "id": "b575fed7-da03-412d-aa00-fcf0edc85ae2",
        "name": "Get all info about the contact",
        "type": "n8n-nodes-base.hubspot",
        "position": [
          1300,
          -60
        ],
        "parameters": {
          "contactId": {
            "__rl": true,
            "mode": "id",
            "value": "={{ $('Webhook').item.json.body[0].objectId }}"
          },
          "operation": "get",
          "authentication": "oAuth2",
          "additionalFields": {}
        },
        "credentials": {
          "hubspotOAuth2Api": {
            "id": "qubiIFrowxvUdpu6",
            "name": "HubSpot account for node"
          }
        },
        "typeVersion": 2.1
      },
      {
        "id": "956a02eb-970b-49bd-b1a5-3eebf7acb852",
        "name": "Write a personalized message",
        "type": "@n8n/n8n-nodes-langchain.agent",
        "position": [
          1552,
          -60
        ],
        "parameters": {
          "text": "=Your task is to write a personalized Welcome email to a recipient.\nWrite also to indicate him that he will receive shortly an invitation for a meeting to resolve his doubts. Use for that the calendarAgent.\nUse the \"Sender's calendar ID\" as the Calendar. And the \"Recipient email\" as an attendee\n\n## Tools\n- calendarAgent: Use this tool to take action in calendar. Send it a query like \"Schedule a meeting with attendee 'Recipient email' on 'Sender's calendar ID' calendar.\"\n\n## Rules\n- Some actions require you to look up contact information first. For the following actions, you must get contact information and send that to the agent who needs it:\n- creating calendar event with attendee, create it as son as there is some free slot\n\nreturn the message as a json like this one:{\"subject\":\"Subject of the message\",\"body\":\"Body of the message\"}\n\n## Use the variables below\nSender's name:  {{ $('Enter your company data here').item.json.sender_name }}\nSender's email: {{ $('Enter your company data here').item.json.sender_email }}\nSender's company name: {{ $('Enter your company data here').item.json.company_name }}\nSender's company activity: {{ $('Enter your company data here').item.json.company_activity }}\nSender's calendar ID: zeerobug@gmail.com\nRecipient first name: {{ $json.properties.firstname.value }}\nRecipient last name: {{ $json.properties.lastname }}\nRecipient email: {{ $json.properties.email.value }}",
          "options": {
            "systemMessage": "=# Overview\nYou are a professional Customer Success Manager.\n"
          },
          "promptType": "define",
          "hasOutputParser": true
        },
        "typeVersion": 1.9
      },
      {
        "id": "6d392f67-5940-43ed-ac8d-d27f8dab91ed",
        "name": "Send the message",
        "type": "n8n-nodes-base.gmail",
        "position": [
          2180,
          -60
        ],
        "webhookId": "d1d18d77-71ad-4eab-91c6-08b6a9f5d736",
        "parameters": {
          "sendTo": "={{ $('Get all info about the contact').item.json.properties.email.value }}",
          "message": "={{ $json.data }}",
          "options": {
            "bccList": "thomas@pollup.net"
          },
          "subject": "={{ $json.output.subject }}"
        },
        "credentials": {
          "gmailOAuth2": {
            "id": "DLjspol9TLgpGaXa",
            "name": "Gmail account 2"
          }
        },
        "typeVersion": 2.1
      },
      {
        "id": "1928e760-4ca1-443c-9de0-211b3c3c88b8",
        "name": "Set owner to contact",
        "type": "n8n-nodes-base.hubspot",
        "position": [
          2400,
          -60
        ],
        "parameters": {
          "email": "={{ $('Get all info about the contact').item.json.properties.email.value }}",
          "options": {},
          "authentication": "oAuth2",
          "additionalFields": {
            "contactOwner": "={{ $('Get current owner').item.json.id }}"
          }
        },
        "credentials": {
          "hubspotOAuth2Api": {
            "id": "qubiIFrowxvUdpu6",
            "name": "HubSpot account for node"
          }
        },
        "typeVersion": 2.1
      },
      {
        "id": "727e52cc-ba62-4f1e-b7b3-c8cd17ef1f42",
        "name": "Sticky Note3",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          160,
          220
        ],
        "parameters": {
          "color": 4,
          "width": 1080,
          "height": 560,
          "content": "## Calendar tool\nThis part has been borrowed from the excellent [Nate Herk](https://www.youtube.com/@nateherk) youtube channel"
        },
        "typeVersion": 1
      },
      {
        "id": "e605ec3f-ecbe-47c7-a46b-d20ded665c55",
        "name": "Transforms markdown to HTML",
        "type": "n8n-nodes-base.markdown",
        "position": [
          1960,
          -60
        ],
        "parameters": {
          "mode": "markdownToHtml",
          "options": {},
          "markdown": "={{ $json.output.body }}"
        },
        "typeVersion": 1
      },
      {
        "id": "ac43422a-3642-424c-a95a-902652705dbc",
        "name": "Sticky Note4",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          1460,
          -220
        ],
        "parameters": {
          "color": 4,
          "width": 440,
          "height": 540,
          "content": "## Email writer\n- This agent writes a personalized Email\n- Uses the calendar Agent tool to create an appointmenton an empty slot.\nFeel free to personalize the prompt"
        },
        "typeVersion": 1
      },
      {
        "id": "c0e5511a-a84f-4603-9c23-3d5266f761c1",
        "name": "OpenAI Model",
        "type": "@n8n/n8n-nodes-langchain.lmChatOpenAi",
        "position": [
          200,
          620
        ],
        "parameters": {
          "model": "gpt-4o",
          "options": {}
        },
        "credentials": {
          "openAiApi": {
            "id": "1IOLtYX7aTspCAN8",
            "name": "OpenAI Pollup"
          }
        },
        "typeVersion": 1
      },
      {
        "id": "c195ad96-7b04-4b01-a3a5-cb0df3c5cb26",
        "name": "Sticky Note7",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          -880,
          260
        ],
        "parameters": {
          "width": 320,
          "height": 260,
          "content": "## Contact me\n- If you need any modification to this workflow\n- if you need some help with this workflow\n- Or if you need any workflow in n8n, Make, or Langchain / Langgraph\n\nWrite to me: [thomas@pollup.net](mailto:thomas@pollup.net)\n\n**Take a look at my others workflows [here](https://n8n.io/creators/zeerobug/)**\n\n"
        },
        "typeVersion": 1
      }
    ],
    "connections": {
      "Webhook": {
        "main": [
          [
            {
              "node": "Enter your company data here",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Get Events": {
        "ai_tool": [
          [
            {
              "node": "Calendar Agent",
              "type": "ai_tool",
              "index": 0
            }
          ]
        ]
      },
      "Create Event": {
        "ai_tool": [
          [
            {
              "node": "Calendar Agent",
              "type": "ai_tool",
              "index": 0
            }
          ]
        ]
      },
      "Delete Event": {
        "ai_tool": [
          [
            {
              "node": "Calendar Agent",
              "type": "ai_tool",
              "index": 0
            }
          ]
        ]
      },
      "OpenAI Model": {
        "ai_languageModel": [
          [
            {
              "node": "Calendar Agent",
              "type": "ai_languageModel",
              "index": 0
            }
          ]
        ]
      },
      "Update Event": {
        "ai_tool": [
          [
            {
              "node": "Calendar Agent",
              "type": "ai_tool",
              "index": 0
            }
          ]
        ]
      },
      "calendarAgent": {
        "ai_tool": [
          [
            {
              "node": "Write a personalized message",
              "type": "ai_tool",
              "index": 0
            }
          ]
        ]
      },
      "Calendar Agent": {
        "main": [
          [
            {
              "node": "Success",
              "type": "main",
              "index": 0
            }
          ],
          [
            {
              "node": "Try Again",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "HubSpot Trigger": {
        "main": [
          [
            {
              "node": "Enter your company data here",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Send the message": {
        "main": [
          [
            {
              "node": "Set owner to contact",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Split Out owners": {
        "main": [
          [
            {
              "node": "Get current owner",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Get current owner": {
        "main": [
          [
            {
              "node": "If a contact is created",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Get list of owners": {
        "main": [
          [
            {
              "node": "Split Out owners",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "OpenAI Chat Model2": {
        "ai_languageModel": [
          [
            {
              "node": "Write a personalized message",
              "type": "ai_languageModel",
              "index": 0
            }
          ]
        ]
      },
      "If a contact is created": {
        "main": [
          [
            {
              "node": "Get all info about the contact",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Structured Output Parser": {
        "ai_outputParser": [
          [
            {
              "node": "Write a personalized message",
              "type": "ai_outputParser",
              "index": 0
            }
          ]
        ]
      },
      "Create Event with Attendee": {
        "ai_tool": [
          [
            {
              "node": "Calendar Agent",
              "type": "ai_tool",
              "index": 0
            }
          ]
        ]
      },
      "Transforms markdown to HTML": {
        "main": [
          [
            {
              "node": "Send the message",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Enter your company data here": {
        "main": [
          [
            {
              "node": "Get list of owners",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Write a personalized message": {
        "main": [
          [
            {
              "node": "Transforms markdown to HTML",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Get all info about the contact": {
        "main": [
          [
            {
              "node": "Write a personalized message",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "When Executed by Another Workflow": {
        "main": [
          [
            {
              "node": "Calendar Agent",
              "type": "main",
              "index": 0
            }
          ]
        ]
      }
    }
  },
  'bug-triage':{
    "meta": {
      "instanceId": "cb484ba7b742928a2048bf8829668bed5b5ad9787579adea888f05980292a4a7"
    },
    "nodes": [
      {
        "id": "72c8c4a7-ee03-4e43-97db-f6fc8904e5e0",
        "name": "Bug Webhook",
        "type": "n8n-nodes-base.webhook",
        "position": [
          1100,
          360
        ],
        "webhookId": "e6d88547-5423-4b01-bc7f-e1f94274c4b2",
        "parameters": {
          "path": "e6d88547-5423-4b01-bc7f-e1f94274c4b2",
          "options": {},
          "httpMethod": "POST"
        },
        "typeVersion": 1
      },
      {
        "id": "d1f3a8c8-d4af-452f-b4df-1e2dc73f7bd3",
        "name": "Hidden message to add bug details",
        "type": "n8n-nodes-base.httpRequest",
        "position": [
          1840,
          360
        ],
        "parameters": {
          "url": "={{ $('Bug Webhook').item.json.body.response_url }}",
          "method": "POST",
          "options": {},
          "sendBody": true,
          "bodyParameters": {
            "parameters": [
              {
                "name": "text",
                "value": "=Thanks for adding the bug `{{$node[\"Bug Webhook\"].json[\"body\"][\"text\"]}}` <@{{$node[\"Bug Webhook\"].json[\"body\"][\"user_id\"]}}> :rocket: Please make sure to add a way to reproduce, expected behavior and current behavior.\n\n:point_right: <{{ $json[\"data\"][\"issueCreate\"][\"issue\"][\"url\"] }}|Add your details here>"
              }
            ]
          }
        },
        "typeVersion": 3
      },
      {
        "id": "42977fb4-389f-4cef-855d-104f4cf0754f",
        "name": "Create linear issue",
        "type": "n8n-nodes-base.httpRequest",
        "position": [
          1660,
          360
        ],
        "parameters": {
          "url": "https://api.linear.app/graphql",
          "method": "POST",
          "options": {},
          "jsonBody": "={\n    \"query\":\"mutation IssueCreate($input: IssueCreateInput!) {issueCreate(input: $input) {issue {id title url}}}\",\n    \"variables\":{\"input\":{\"title\":\"{{ $json[\"body\"][\"text\"].replaceAll('\"',\"'\") }}\",\"teamId\":\"7a330c36-4b39-4bf1-922e-b4ceeb91850a\", \"description\":\"## Description  \\n [Add a description here]  \\n## Expected  \\n [What behavior did you expect?]  \\n## Actual  \\n [What was the actual behavior? Use screenshots or videos to show the behavior]  \\n## Steps or workflow to reproduce (with screenshots/recordings)  \\n **n8n version:** [Deployment type] [version]  \\n 1. [Replace me]   \\n  \\n Created by: {{ $json[\"body\"][\"user_name\"].toSentenceCase() }}\", \"labelIds\": [\"f2b6e3e9-b42d-4106-821c-6a08dcb489a9\"]}} \n}",
          "sendBody": true,
          "specifyBody": "json",
          "authentication": "predefinedCredentialType",
          "nodeCredentialType": "linearOAuth2Api"
        },
        "credentials": {
          "linearOAuth2Api": {
            "id": "02MqKUMdPxr9t3mX",
            "name": "Nik's Linear Creds"
          }
        },
        "typeVersion": 3
      },
      {
        "id": "ff733f62-3381-46c1-af9f-53d35f4b76ec",
        "name": "Sticky Note",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          580,
          140
        ],
        "parameters": {
          "color": 7,
          "width": 446,
          "height": 321,
          "content": "## Needed pre-work: Add a Slack App\n1. Visit https://api.slack.com/apps, click on `New App` and choose a name and workspace.\n2. Click on `OAuth & Permissions` and scroll down to Scopes -> Bot token Scopes\n3. Add the `chat:write` scope\n4. Head over to `Slash Commands` and click on `Create New Command`\n5. Use `/bug` as the command\n6. Copy the test URL from the **Webhook** node into `Request URL`\n7. Add whatever feels best to the description and usage hint\n8. Go to `Install app` and click install"
        },
        "typeVersion": 1
      },
      {
        "id": "eca6f08d-fa8d-4ac7-a048-42ce839d3e01",
        "name": "Sticky Note1",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          580,
          540
        ],
        "parameters": {
          "color": 7,
          "width": 599.3676814988288,
          "height": 298.0562060889928,
          "content": "## Helper nodes\nRun these to find the IDs of your team and wanted labels"
        },
        "typeVersion": 1
      },
      {
        "id": "9d42e8ea-0f35-4c46-bb75-9c6a6123f4d5",
        "name": "Set me up",
        "type": "n8n-nodes-base.set",
        "position": [
          1380,
          360
        ],
        "parameters": {
          "options": {},
          "assignments": {
            "assignments": [
              {
                "id": "38e3a1ba-fd53-43f7-949d-427425727c7e",
                "name": "labelIds",
                "type": "array",
                "value": "[\"f2b6e3e9-b42d-4106-821c-6a08dcb489a9\"]"
              },
              {
                "id": "3825e332-a905-48d3-ac9a-46b0ce3439f6",
                "name": "teamId",
                "type": "string",
                "value": "7a330c36-4b39-4bf1-922e-b4ceeb91850a"
              }
            ]
          }
        },
        "typeVersion": 3.3
      },
      {
        "id": "b95148b2-17e0-444e-a642-a4319df9c4c5",
        "name": "Get all linear teams",
        "type": "n8n-nodes-base.httpRequest",
        "position": [
          634,
          660
        ],
        "parameters": {
          "url": "https://api.linear.app/graphql",
          "method": "POST",
          "options": {},
          "sendBody": true,
          "authentication": "predefinedCredentialType",
          "bodyParameters": {
            "parameters": [
              {
                "name": "query",
                "value": "{ teams { nodes { id name } } }"
              }
            ]
          },
          "nodeCredentialType": "linearOAuth2Api"
        },
        "credentials": {
          "linearOAuth2Api": {
            "id": "02MqKUMdPxr9t3mX",
            "name": "Nik's Linear Creds"
          }
        },
        "typeVersion": 3
      },
      {
        "id": "04ad2f49-ef78-4d08-ab6b-d0384aee5b80",
        "name": "Get linear labels for a team",
        "type": "n8n-nodes-base.httpRequest",
        "position": [
          1014,
          660
        ],
        "parameters": {
          "url": "https://api.linear.app/graphql",
          "method": "POST",
          "options": {},
          "sendBody": true,
          "authentication": "predefinedCredentialType",
          "bodyParameters": {
            "parameters": [
              {
                "name": "query",
                "value": "query { team(id: \"16de8638-2729-4245-b9f8-74daf4780cb3\") { labels { nodes { id name } } } }"
              }
            ]
          },
          "nodeCredentialType": "linearOAuth2Api"
        },
        "credentials": {
          "linearOAuth2Api": {
            "id": "02MqKUMdPxr9t3mX",
            "name": "Nik's Linear Creds"
          }
        },
        "typeVersion": 3
      },
      {
        "id": "4045dc92-4b9f-471c-8fb1-4d76942d0330",
        "name": "Set team ID",
        "type": "n8n-nodes-base.set",
        "position": [
          854,
          660
        ],
        "parameters": {
          "options": {},
          "assignments": {
            "assignments": [
              {
                "id": "25ed1c7d-e2c0-44b0-8b43-aa19122f6e88",
                "name": "teamId",
                "type": "string",
                "value": "38b31539-61e2-451c-ba06-ba8cf0d33650"
              }
            ]
          }
        },
        "typeVersion": 3.3
      },
      {
        "id": "e45fe192-6846-41ad-ad75-699184486b6f",
        "name": "Sticky Note2",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          1246.2295081967216,
          164.12177985948486
        ],
        "parameters": {
          "color": 5,
          "width": 372.78688524590143,
          "height": 358.12646370023407,
          "content": "## Setup\n1. Congifure your Slack bot using the sticky to the left\n2. Fill the `Set me up` node. You can find the IDs easily using the Helper nodes section\n3. Make sure to exchange the `Request URL` in your Slack with the Prod URL of the Webhook node before activating this workflow  "
        },
        "typeVersion": 1
      }
    ],
    "pinData": {
      "Bug Webhook": [
        {
          "body": {
            "text": "My bug",
            "token": "OROQZiopO3NiQVLFg0muEISq",
            "command": "/bug",
            "team_id": "TG9695PUK",
            "user_id": "U047V1J0E7J",
            "user_name": "niklas",
            "api_app_id": "A06MQ8S7QM6",
            "channel_id": "C03600UUFSS",
            "trigger_id": "6716864450738.553213193971.0ef33a2db05a1d2dcf02c178d8efc534",
            "team_domain": "n8nio",
            "channel_name": "updates-workflow-templates",
            "response_url": "https://hooks.slack.com/commands/TG9695PUK/6713943368277/ogqoFMjMytSkbWNUdtg9Cp73",
            "is_enterprise_install": "false"
          },
          "query": {},
          "params": {},
          "headers": {
            "host": "internal.users.n8n.cloud",
            "accept": "application/json,*/*",
            "x-real-ip": "10.255.0.2",
            "user-agent": "Slackbot 1.0 (+https://api.slack.com/robots)",
            "content-type": "application/x-www-form-urlencoded",
            "content-length": "428",
            "accept-encoding": "gzip,deflate",
            "x-forwarded-for": "10.255.0.2",
            "x-forwarded-host": "internal.users.n8n.cloud",
            "x-forwarded-port": "443",
            "x-forwarded-proto": "https",
            "x-slack-signature": "v0=dae629e837d8585faf0feffd1778020aa7a47dfe759def3088179a4a70cf31db",
            "x-forwarded-server": "3d9f11a36e52",
            "x-slack-request-timestamp": "1709135352"
          }
        }
      ]
    },
    "connections": {
      "Set me up": {
        "main": [
          [
            {
              "node": "Create linear issue",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Bug Webhook": {
        "main": [
          [
            {
              "node": "Set me up",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Set team ID": {
        "main": [
          [
            {
              "node": "Get linear labels for a team",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Create linear issue": {
        "main": [
          [
            {
              "node": "Hidden message to add bug details",
              "type": "main",
              "index": 0
            }
          ]
        ]
      }
    }
  },
  'invoice-processing':{
    "meta": {
      "instanceId": "26ba763460b97c249b82942b23b6384876dfeb9327513332e743c5f6219c2b8e"
    },
    "nodes": [
      {
        "id": "7076854e-c7e8-45b5-9e5e-16678bffa254",
        "name": "OpenAI Model",
        "type": "@n8n/n8n-nodes-langchain.lmOpenAi",
        "position": [
          2420,
          480
        ],
        "parameters": {
          "model": {
            "__rl": true,
            "mode": "list",
            "value": "gpt-3.5-turbo-1106",
            "cachedResultName": "gpt-3.5-turbo-1106"
          },
          "options": {
            "temperature": 0
          }
        },
        "credentials": {
          "openAiApi": {
            "id": "8gccIjcuf3gvaoEr",
            "name": "OpenAi account"
          }
        },
        "typeVersion": 1
      },
      {
        "id": "00819f1c-2c60-4b7c-b395-445ec05fd898",
        "name": "Structured Output Parser",
        "type": "@n8n/n8n-nodes-langchain.outputParserStructured",
        "position": [
          2600,
          480
        ],
        "parameters": {
          "jsonSchema": "{\n  \"Invoice date\": { \"type\": \"date\" },\n  \"invoice number\": { \"type\": \"string\" },\n  \"Purchase order number\": { \"type\": \"string\" },\n  \"Supplier name\": { \"type\": \"string\" },\n  \"Supplier address\": {\n    \"type\": \"object\",\n    \"properties\": {\n      \"address 1\": { \"type\": \"string\" },\n      \"address 2\": { \"type\": \"string\" },\n      \"city\": { \"type\": \"string\" },\n      \"postcode\": { \"type\": \"string\" }\n    }\n  },\n  \"Supplier VAT identification number\": { \"type\": \"string\" },\n  \"Customer name\": { \"type\": \"string\" },\n  \"Customer address\": {\n    \"type\": \"object\",\n    \"properties\": {\n      \"address 1\": { \"type\": \"string\" },\n      \"address 2\": { \"type\": \"string\" },\n      \"city\": { \"type\": \"string\" },\n      \"postcode\": { \"type\": \"string\" }\n    }\n  },\n  \"Customer VAT identification number\": { \"type\": \"string\" }, \n  \"Shipping addresses\": {\n    \"type\": \"array\",\n    \"items\": {\n      \"type\": \"object\",\n      \"properties\": {\n        \"address 1\": { \"type\": \"string\" },\n        \"address 2\": { \"type\": \"string\" },\n        \"city\": { \"type\": \"string\" },\n        \"postcode\": { \"type\": \"string\" }\n      }\n    }\n  },\n  \"Line items\": {\n    \"type\": \"array\",\n    \"items\": {\n      \"name\": \"string\",\n      \"description\": \"string\",\n      \"price\": \"number\",\n      \"discount\": \"number\"\n    }\n  },\n  \"Subtotal without VAT\": { \"type\": \"number\" },\n  \"Subtotal with VAT\": { \"type\": \"number\" },\n  \"Total price\": { \"type\": \"number\" }\n}"
        },
        "typeVersion": 1.1
      },
      {
        "id": "3b40d506-aabc-4105-853a-a318375cea73",
        "name": "Upload to LlamaParse",
        "type": "n8n-nodes-base.httpRequest",
        "position": [
          1620,
          420
        ],
        "parameters": {
          "url": "https://api.cloud.llamaindex.ai/api/parsing/upload",
          "method": "POST",
          "options": {},
          "sendBody": true,
          "contentType": "multipart-form-data",
          "sendHeaders": true,
          "authentication": "genericCredentialType",
          "bodyParameters": {
            "parameters": [
              {
                "name": "file",
                "parameterType": "formBinaryData",
                "inputDataFieldName": "=attachment_0"
              }
            ]
          },
          "genericAuthType": "httpHeaderAuth",
          "headerParameters": {
            "parameters": [
              {
                "name": "accept",
                "value": "application/json"
              }
            ]
          }
        },
        "credentials": {
          "httpHeaderAuth": {
            "id": "pZ4YmwFIkyGnbUC7",
            "name": "LlamaIndex API"
          }
        },
        "typeVersion": 4.2
      },
      {
        "id": "57a5d331-8838-4d44-8fac-a44dba35fcc4",
        "name": "Sticky Note",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          1540,
          140
        ],
        "parameters": {
          "color": 7,
          "width": 785.9525375246163,
          "height": 623.4951418211454,
          "content": "## 2. Advanced PDF Processing with LlamaParse\n[Read more about using HTTP Requests](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest/)\n\nLlamaIndex's LlamaCloud is a cloud-based service that allows you to upload,\nparse, and index document. LlamaParse is a tool offered by LlamaCloud\nto parse for complex PDFs with embedded objects ie PDF Tables and figures.\n\nAt time of writing, you can parse 1000 pdfs/day with LlamaCloud's free plan\nby signing up at [https://cloud.llamaindex.ai/](https://cloud.llamaindex.ai/?ref=n8n.io)."
        },
        "typeVersion": 1
      },
      {
        "id": "a4504d83-da3b-41bc-891f-f8f9314a6af5",
        "name": "Receiving Invoices",
        "type": "n8n-nodes-base.gmailTrigger",
        "position": [
          780,
          400
        ],
        "parameters": {
          "simple": false,
          "filters": {
            "q": "has:attachment",
            "sender": "invoices@paypal.com"
          },
          "options": {
            "downloadAttachments": true
          },
          "pollTimes": {
            "item": [
              {
                "mode": "everyMinute"
              }
            ]
          }
        },
        "credentials": {
          "gmailOAuth2": {
            "id": "Sf5Gfl9NiFTNXFWb",
            "name": "Gmail account"
          }
        },
        "typeVersion": 1
      },
      {
        "id": "02bd4636-f35b-4a3a-8a5f-9ae7aeed2bf4",
        "name": "Append to Reconciliation Sheet",
        "type": "n8n-nodes-base.googleSheets",
        "position": [
          2960,
          320
        ],
        "parameters": {
          "columns": {
            "value": {},
            "schema": [
              {
                "id": "Invoice date",
                "type": "string",
                "display": true,
                "removed": false,
                "required": false,
                "displayName": "Invoice date",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "invoice number",
                "type": "string",
                "display": true,
                "removed": false,
                "required": false,
                "displayName": "invoice number",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Purchase order number",
                "type": "string",
                "display": true,
                "removed": false,
                "required": false,
                "displayName": "Purchase order number",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Supplier name",
                "type": "string",
                "display": true,
                "removed": false,
                "required": false,
                "displayName": "Supplier name",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Supplier address",
                "type": "string",
                "display": true,
                "removed": false,
                "required": false,
                "displayName": "Supplier address",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Supplier VAT identification number",
                "type": "string",
                "display": true,
                "removed": false,
                "required": false,
                "displayName": "Supplier VAT identification number",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Customer name",
                "type": "string",
                "display": true,
                "removed": false,
                "required": false,
                "displayName": "Customer name",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Customer address",
                "type": "string",
                "display": true,
                "removed": false,
                "required": false,
                "displayName": "Customer address",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Customer VAT identification number",
                "type": "string",
                "display": true,
                "removed": false,
                "required": false,
                "displayName": "Customer VAT identification number",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Shipping addresses",
                "type": "string",
                "display": true,
                "removed": false,
                "required": false,
                "displayName": "Shipping addresses",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Line items",
                "type": "string",
                "display": true,
                "removed": false,
                "required": false,
                "displayName": "Line items",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Subtotal without VAT",
                "type": "string",
                "display": true,
                "removed": false,
                "required": false,
                "displayName": "Subtotal without VAT",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Subtotal with VAT",
                "type": "string",
                "display": true,
                "removed": false,
                "required": false,
                "displayName": "Subtotal with VAT",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Total price",
                "type": "string",
                "display": true,
                "removed": false,
                "required": false,
                "displayName": "Total price",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              }
            ],
            "mappingMode": "autoMapInputData",
            "matchingColumns": [
              "output"
            ]
          },
          "options": {},
          "operation": "append",
          "sheetName": {
            "__rl": true,
            "mode": "id",
            "value": "gid=0"
          },
          "documentId": {
            "__rl": true,
            "mode": "list",
            "value": "1omHDl1jpjHyrtga2ZHBddUkbkdatEr1ga9vHc4fQ1pI",
            "cachedResultUrl": "https://docs.google.com/spreadsheets/d/1omHDl1jpjHyrtga2ZHBddUkbkdatEr1ga9vHc4fQ1pI/edit?usp=drivesdk",
            "cachedResultName": "Invoice Reconciliation"
          }
        },
        "credentials": {
          "googleSheetsOAuth2Api": {
            "id": "XHvC7jIRR8A2TlUl",
            "name": "Google Sheets account"
          }
        },
        "typeVersion": 4.3
      },
      {
        "id": "cdb0a7ee-068d-465a-b4ae-d5221d5e7400",
        "name": "Get Processing Status",
        "type": "n8n-nodes-base.httpRequest",
        "position": [
          1800,
          420
        ],
        "parameters": {
          "url": "=https://api.cloud.llamaindex.ai/api/parsing/job/{{ $json.id }}",
          "options": {},
          "sendHeaders": true,
          "authentication": "genericCredentialType",
          "genericAuthType": "httpHeaderAuth",
          "headerParameters": {
            "parameters": [
              {
                "name": "accept",
                "value": "application/json"
              }
            ]
          }
        },
        "credentials": {
          "httpHeaderAuth": {
            "id": "pZ4YmwFIkyGnbUC7",
            "name": "LlamaIndex API"
          }
        },
        "typeVersion": 4.2
      },
      {
        "id": "b68a01ab-d8e6-42f4-ab1d-81e746695eef",
        "name": "Wait to stay within service limits",
        "type": "n8n-nodes-base.wait",
        "position": [
          2120,
          560
        ],
        "webhookId": "17a96ed6-b5ff-47bb-a8a2-39c1eb40185a",
        "parameters": {
          "amount": 1
        },
        "typeVersion": 1.1
      },
      {
        "id": "41bd28d2-665a-4f71-a456-98eeb26b6655",
        "name": "Is Job Ready?",
        "type": "n8n-nodes-base.switch",
        "position": [
          1960,
          420
        ],
        "parameters": {
          "rules": {
            "values": [
              {
                "outputKey": "SUCCESS",
                "conditions": {
                  "options": {
                    "leftValue": "",
                    "caseSensitive": true,
                    "typeValidation": "strict"
                  },
                  "combinator": "and",
                  "conditions": [
                    {
                      "id": "300fce8c-b19a-4d0c-86e8-f62853c70ce2",
                      "operator": {
                        "name": "filter.operator.equals",
                        "type": "string",
                        "operation": "equals"
                      },
                      "leftValue": "={{ $json.status }}",
                      "rightValue": "SUCCESS"
                    }
                  ]
                },
                "renameOutput": true
              },
              {
                "outputKey": "ERROR",
                "conditions": {
                  "options": {
                    "leftValue": "",
                    "caseSensitive": true,
                    "typeValidation": "strict"
                  },
                  "combinator": "and",
                  "conditions": [
                    {
                      "id": "e6058aa0-a3e2-4ce3-9bed-6ff41a5be052",
                      "operator": {
                        "name": "filter.operator.equals",
                        "type": "string",
                        "operation": "equals"
                      },
                      "leftValue": "={{ $json.status }}",
                      "rightValue": "ERROR"
                    }
                  ]
                },
                "renameOutput": true
              },
              {
                "outputKey": "CANCELED",
                "conditions": {
                  "options": {
                    "leftValue": "",
                    "caseSensitive": true,
                    "typeValidation": "strict"
                  },
                  "combinator": "and",
                  "conditions": [
                    {
                      "id": "ceb6338f-4261-40ac-be11-91f61c7302ba",
                      "operator": {
                        "name": "filter.operator.equals",
                        "type": "string",
                        "operation": "equals"
                      },
                      "leftValue": "={{ $json.status }}",
                      "rightValue": "CANCELED"
                    }
                  ]
                },
                "renameOutput": true
              },
              {
                "outputKey": "PENDING",
                "conditions": {
                  "options": {
                    "leftValue": "",
                    "caseSensitive": true,
                    "typeValidation": "strict"
                  },
                  "combinator": "and",
                  "conditions": [
                    {
                      "id": "0fa97d86-432a-409a-917e-5f1a002b1ab9",
                      "operator": {
                        "name": "filter.operator.equals",
                        "type": "string",
                        "operation": "equals"
                      },
                      "leftValue": "={{ $json.status }}",
                      "rightValue": "PENDING"
                    }
                  ]
                },
                "renameOutput": true
              }
            ]
          },
          "options": {
            "allMatchingOutputs": true
          }
        },
        "typeVersion": 3
      },
      {
        "id": "f7157abe-b1ee-46b3-adb2-1be056d9d75d",
        "name": "Sticky Note1",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          694.0259411218055,
          139.97202236910687
        ],
        "parameters": {
          "color": 7,
          "width": 808.8727491350096,
          "height": 709.5781339256318,
          "content": "## 1. Watch for Invoice Emails\n[Read more about Gmail Triggers](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.gmailtrigger)\n\nThe Gmail node can watch for all incoming messages and filter based on a condition. We'll set our Gmail node to wait for:\n* a message from particular email address.\n* having an attachment which should be the invoice PDF\n* not having a label \"invoice synced\", which is what we use to avoid duplicate processing."
        },
        "typeVersion": 1
      },
      {
        "id": "ff7cb6e4-5a60-4f12-b15e-74e7a4a302ce",
        "name": "Sticky Note2",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          2360,
          70.48792658995046
        ],
        "parameters": {
          "color": 7,
          "width": 805.0578351924228,
          "height": 656.5014186128178,
          "content": "## 3. Use LLMs to Extract Values from Data\n[Read more about Basic LLM Chain](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.chainllm/)\n\nLarge language models are perfect for data extraction tasks as they can work across a range of document layouts without human intervention. The extracted data can then be sent to a variety of datastores such as spreadsheets, accounting systems and/or CRMs.\n\n**Tip:** The \"Structured Output Parser\" ensures the AI output can be\ninserted to our spreadsheet without additional clean up and/or formatting. "
        },
        "typeVersion": 1
      },
      {
        "id": "0d510631-440b-41f5-b1aa-9b7279e9c8e3",
        "name": "Sticky Note3",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          1934,
          774
        ],
        "parameters": {
          "color": 5,
          "width": 394.15089838126653,
          "height": 154.49585536070904,
          "content": "### 🙋‍♂️ Why not just use the built-in PDF convertor?\nA common issue with PDF-to-text convertors are that they ignore important data structures like tables. These structures can be important for data extraction. For example, being able to distinguish between seperate line items in an invoice."
        },
        "typeVersion": 1
      },
      {
        "id": "fe7fdb90-3c85-4f29-a7d3-16f927f48682",
        "name": "Sticky Note4",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          3200,
          157.65172434465347
        ],
        "parameters": {
          "color": 7,
          "width": 362.3535748101346,
          "height": 440.3435768155051,
          "content": "## 4. Add Label to Avoid Duplication\n[Read more about working with Gmail](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.gmail/)\n\nTo finish off the workflow, we'll add the \"invoice synced\" label to the original invoice email to flag that the extraction was successful. This can be useful if working with a shared inbox and for quality control purposes later."
        },
        "typeVersion": 1
      },
      {
        "id": "1acf2c60-c2b9-4f78-94a4-0711c8bd71ab",
        "name": "Sticky Note5",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          300,
          140
        ],
        "parameters": {
          "width": 360.0244620907562,
          "height": 573.2443601155958,
          "content": "## Try Me Out!\n\n**This workflow does the following:**\n* Waits for email invoices with PDF attachments.\n* Uses the LlamaParse service to convert the invoice PDF into a markdown file.\n* Uses a LLM to extract invoice data from the Markdown file.\n* Exports the extracted data to a Google Sheet.\n\n### Follow along with the blog here\nhttps://blog.n8n.io/how-to-extract-data-from-pdf-to-excel-spreadsheet-advance-parsing-with-n8n-io-and-llamaparse/\n\n### Good to know\n* You'll need to create the label \"invoice synced\" in gmail before using this workflow.\n\n### Need Help?\nJoin the [Discord](https://discord.com/invite/XPKeKXeB7d) or ask in the [Forum](https://community.n8n.io/)!\n\nHappy Hacking!"
        },
        "typeVersion": 1
      },
      {
        "id": "3802c538-acf9-48d8-b011-bfe2fb817350",
        "name": "Add \"invoice synced\" Label",
        "type": "n8n-nodes-base.gmail",
        "position": [
          3320,
          400
        ],
        "parameters": {
          "labelIds": [
            "Label_5511644430826409825"
          ],
          "messageId": "={{ $('Receiving Invoices').item.json.id }}",
          "operation": "addLabels"
        },
        "credentials": {
          "gmailOAuth2": {
            "id": "Sf5Gfl9NiFTNXFWb",
            "name": "Gmail account"
          }
        },
        "typeVersion": 2.1
      },
      {
        "id": "ffabd8c5-c440-4473-8e44-b849426c70cf",
        "name": "Get Parsed Invoice Data",
        "type": "n8n-nodes-base.httpRequest",
        "position": [
          2160,
          280
        ],
        "parameters": {
          "url": "=https://api.cloud.llamaindex.ai/api/parsing/job/{{ $json.id }}/result/markdown",
          "options": {
            "redirect": {
              "redirect": {}
            }
          },
          "authentication": "genericCredentialType",
          "genericAuthType": "httpHeaderAuth"
        },
        "credentials": {
          "httpHeaderAuth": {
            "id": "pZ4YmwFIkyGnbUC7",
            "name": "LlamaIndex API"
          }
        },
        "typeVersion": 4.2
      },
      {
        "id": "5f9b507f-4dc1-4853-bf71-a64f2f4b55c1",
        "name": "Map Output",
        "type": "n8n-nodes-base.set",
        "position": [
          2760,
          320
        ],
        "parameters": {
          "mode": "raw",
          "options": {},
          "jsonOutput": "={{ $json.output }}"
        },
        "typeVersion": 3.3
      },
      {
        "id": "d22744cd-151d-4b92-b4f2-4a5b9ceb4ee7",
        "name": "Apply Data Extraction Rules",
        "type": "@n8n/n8n-nodes-langchain.chainLlm",
        "position": [
          2420,
          320
        ],
        "parameters": {
          "text": "=Given the following invoice in the <invoice> xml tags, extract the following information as listed below.\nIf you cannot the information for a specific item, then leave blank and skip to the next. \n\n* Invoice date\n* invoice number\n* Purchase order number\n* Supplier name\n* Supplier address\n* Supplier VAT identification number\n* Customer name\n* Customer address\n* Customer VAT identification number\n* Shipping addresses\n* Line items, including a description of the goods or services rendered\n* Price with and without VAT\n* Total price\n\n<invoice>{{ $json.markdown }}</invoice>",
          "promptType": "define",
          "hasOutputParser": true
        },
        "typeVersion": 1.4
      },
      {
        "id": "3735a124-9fab-4400-8b94-8b5aa9f951fe",
        "name": "Should Process Email?",
        "type": "n8n-nodes-base.if",
        "position": [
          1340,
          400
        ],
        "parameters": {
          "options": {},
          "conditions": {
            "options": {
              "leftValue": "",
              "caseSensitive": true,
              "typeValidation": "strict"
            },
            "combinator": "and",
            "conditions": [
              {
                "id": "e5649a2b-6e12-4cc4-8001-4639cc9cc2c2",
                "operator": {
                  "name": "filter.operator.equals",
                  "type": "string",
                  "operation": "equals"
                },
                "leftValue": "={{ $input.item.binary.attachment_0.mimeType }}",
                "rightValue": "application/pdf"
              },
              {
                "id": "4c57ab9b-b11c-455a-a63d-daf48418b06e",
                "operator": {
                  "type": "array",
                  "operation": "notContains",
                  "rightType": "any"
                },
                "leftValue": "={{ $json.labels }}",
                "rightValue": "invoice synced"
              }
            ]
          }
        },
        "typeVersion": 2
      },
      {
        "id": "12a23527-39f3-4f72-8691-3d5cf59f9909",
        "name": "Split Out Labels",
        "type": "n8n-nodes-base.splitOut",
        "position": [
          980,
          400
        ],
        "parameters": {
          "options": {},
          "fieldToSplitOut": "labelIds"
        },
        "typeVersion": 1
      },
      {
        "id": "88ff6e22-d3d3-403d-b0b2-2674487140a7",
        "name": "Get Labels Names",
        "type": "n8n-nodes-base.gmail",
        "position": [
          980,
          540
        ],
        "parameters": {
          "labelId": "={{ $json.labelIds }}",
          "resource": "label",
          "operation": "get"
        },
        "credentials": {
          "gmailOAuth2": {
            "id": "Sf5Gfl9NiFTNXFWb",
            "name": "Gmail account"
          }
        },
        "typeVersion": 2.1
      },
      {
        "id": "88accb8e-6531-40be-8d35-1bba594149af",
        "name": "Combine Label Names",
        "type": "n8n-nodes-base.aggregate",
        "position": [
          980,
          680
        ],
        "parameters": {
          "options": {},
          "fieldsToAggregate": {
            "fieldToAggregate": [
              {
                "renameField": true,
                "outputFieldName": "labels",
                "fieldToAggregate": "name"
              }
            ]
          }
        },
        "typeVersion": 1
      },
      {
        "id": "d233ff33-cabf-434e-876d-879693ecaf58",
        "name": "Email with Label Names",
        "type": "n8n-nodes-base.merge",
        "position": [
          1160,
          400
        ],
        "parameters": {
          "mode": "combine",
          "options": {},
          "combinationMode": "multiplex"
        },
        "typeVersion": 2.1
      },
      {
        "id": "733fc285-e069-4e4e-b13e-dfc1c259ac12",
        "name": "Sticky Note6",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          2540,
          460
        ],
        "parameters": {
          "width": 192.26896179623753,
          "height": 213.73043662572252,
          "content": "\n\n\n\n\n\n\n\n\n\n\n\n**Need more attributes?**\nChange it here!"
        },
        "typeVersion": 1
      },
      {
        "id": "83aa6ed0-ce3b-48d7-aded-475c337ae86e",
        "name": "Sticky Note7",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          2880,
          300
        ],
        "parameters": {
          "width": 258.29345180972877,
          "height": 397.0641952938746,
          "content": "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🚨**Required**\n* Set Your Google Sheet URL here\n* Set the Name of your Sheet\n\n\n**Don't use GSheets?**\nSwap this for Excel, Airtable or a Database!"
        },
        "typeVersion": 1
      },
      {
        "id": "720070f6-2d6c-45ef-80c2-e950862a002b",
        "name": "Sticky Note8",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          740,
          380
        ],
        "parameters": {
          "width": 174.50671517518518,
          "height": 274.6295678979021,
          "content": "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🚨**Required**\n* Change the email filters here!"
        },
        "typeVersion": 1
      }
    ],
    "pinData": {},
    "connections": {
      "Map Output": {
        "main": [
          [
            {
              "node": "Append to Reconciliation Sheet",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "OpenAI Model": {
        "ai_languageModel": [
          [
            {
              "node": "Apply Data Extraction Rules",
              "type": "ai_languageModel",
              "index": 0
            }
          ]
        ]
      },
      "Is Job Ready?": {
        "main": [
          [
            {
              "node": "Get Parsed Invoice Data",
              "type": "main",
              "index": 0
            }
          ],
          null,
          null,
          [
            {
              "node": "Wait to stay within service limits",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Get Labels Names": {
        "main": [
          [
            {
              "node": "Combine Label Names",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Split Out Labels": {
        "main": [
          [
            {
              "node": "Get Labels Names",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Receiving Invoices": {
        "main": [
          [
            {
              "node": "Split Out Labels",
              "type": "main",
              "index": 0
            },
            {
              "node": "Email with Label Names",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Combine Label Names": {
        "main": [
          [
            {
              "node": "Email with Label Names",
              "type": "main",
              "index": 1
            }
          ]
        ]
      },
      "Upload to LlamaParse": {
        "main": [
          [
            {
              "node": "Get Processing Status",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Get Processing Status": {
        "main": [
          [
            {
              "node": "Is Job Ready?",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Should Process Email?": {
        "main": [
          [
            {
              "node": "Upload to LlamaParse",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Email with Label Names": {
        "main": [
          [
            {
              "node": "Should Process Email?",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Get Parsed Invoice Data": {
        "main": [
          [
            {
              "node": "Apply Data Extraction Rules",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Structured Output Parser": {
        "ai_outputParser": [
          [
            {
              "node": "Apply Data Extraction Rules",
              "type": "ai_outputParser",
              "index": 0
            }
          ]
        ]
      },
      "Apply Data Extraction Rules": {
        "main": [
          [
            {
              "node": "Map Output",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Append to Reconciliation Sheet": {
        "main": [
          [
            {
              "node": "Add \"invoice synced\" Label",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Wait to stay within service limits": {
        "main": [
          [
            {
              "node": "Get Processing Status",
              "type": "main",
              "index": 0
            }
          ]
        ]
      }
    }
  },
  'server-monitor':{
    "meta": {
      "instanceId": "26ba763460b97c249b82942b23b6384876dfeb9327513332e743c5f6219c2b8e"
    },
    "nodes": [
      {
        "id": "acb0acd0-9bb6-4491-a1ca-4aa9a7820bbc",
        "name": "Schedule Trigger",
        "type": "n8n-nodes-base.scheduleTrigger",
        "position": [
          1440,
          420
        ],
        "parameters": {
          "rule": {
            "interval": [
              {
                "field": "hours",
                "hoursInterval": 6
              }
            ]
          }
        },
        "typeVersion": 1.2
      },
      {
        "id": "c6bb51c4-aec4-4a6d-ade2-1080bbbb6fb3",
        "name": "Calculate Status",
        "type": "n8n-nodes-base.set",
        "position": [
          2367,
          460
        ],
        "parameters": {
          "options": {},
          "assignments": {
            "assignments": [
              {
                "id": "b0cbcff5-bfcf-46a5-a386-65c4dd56c42f",
                "name": "date",
                "type": "string",
                "value": "={{ $json.headers.date }}"
              },
              {
                "id": "8c4155e4-bcc6-41dd-9582-346a57a7b997",
                "name": "Property",
                "type": "string",
                "value": "={{ $json.Property }}"
              },
              {
                "id": "f0320678-d352-486f-a633-9980c4fc73b2",
                "name": "UP_FROM_UP",
                "type": "boolean",
                "value": "={{ $json.statusCode < 400 && $json.Status === 'UP' }}"
              },
              {
                "id": "61783eb6-a683-44c9-aa0c-5fc5247da9fa",
                "name": "DOWN_FROM_DOWN",
                "type": "boolean",
                "value": "={{ $json.statusCode >= 400 && $json.Status === 'DOWN' }}"
              },
              {
                "id": "1052a69e-4456-445d-bdd9-2765b334cf64",
                "name": "UP_FROM_DOWN",
                "type": "boolean",
                "value": "={{ $json.statusCode < 400 && $json.Status === 'DOWN' }}"
              },
              {
                "id": "9af72278-5b29-406a-b4c5-f47f3d805063",
                "name": "DOWN_FROM_UP",
                "type": "boolean",
                "value": "={{ $json.statusCode >= 400 && $json.Status === 'UP' }}"
              }
            ]
          }
        },
        "typeVersion": 3.3
      },
      {
        "id": "50307dca-fa88-4a19-91a4-456866e529d4",
        "name": "Get Sites",
        "type": "n8n-nodes-base.googleSheets",
        "position": [
          1700,
          420
        ],
        "parameters": {
          "options": {},
          "sheetName": {
            "__rl": true,
            "mode": "list",
            "value": "gid=0",
            "cachedResultUrl": "https://docs.google.com/spreadsheets/d/1t2RT3lxyxXj3X1y6klWvyhEJEazpkT3Hpi2ttEJRVT4/edit#gid=0",
            "cachedResultName": "dashboard"
          },
          "documentId": {
            "__rl": true,
            "mode": "list",
            "value": "1t2RT3lxyxXj3X1y6klWvyhEJEazpkT3Hpi2ttEJRVT4",
            "cachedResultUrl": "https://docs.google.com/spreadsheets/d/1t2RT3lxyxXj3X1y6klWvyhEJEazpkT3Hpi2ttEJRVT4/edit?usp=drivesdk",
            "cachedResultName": "n8n uptime"
          }
        },
        "credentials": {
          "googleSheetsOAuth2Api": {
            "id": "XHvC7jIRR8A2TlUl",
            "name": "Google Sheets account"
          }
        },
        "typeVersion": 4.3
      },
      {
        "id": "4b0cb0cc-282b-4be9-a4ca-0c4eb10d896e",
        "name": "Send Chat Alert",
        "type": "n8n-nodes-base.slack",
        "position": [
          3100,
          340
        ],
        "parameters": {
          "text": "=From: n8n uptime\nDate: {{ $('Calculate Status').item.json[\"date\"] }}\n\n{{ $('Calculate Status').item.json.Property }} is {{ $('Calculate Status').item.json[\"DOWN_FROM_UP\"] ? 'DOWN' : 'UP' }}",
          "select": "channel",
          "channelId": {
            "__rl": true,
            "mode": "list",
            "value": "C06RS1WPUQ6",
            "cachedResultName": "general"
          },
          "otherOptions": {}
        },
        "credentials": {
          "slackApi": {
            "id": "VfK3js0YdqBdQLGP",
            "name": "Slack account"
          }
        },
        "typeVersion": 2.1
      },
      {
        "id": "ab303995-bd82-4aef-8fe1-ce808c4dbd33",
        "name": "Send Email Alert",
        "type": "n8n-nodes-base.gmail",
        "position": [
          2940,
          340
        ],
        "parameters": {
          "sendTo": "no-reply@example.com",
          "message": "=From: n8n uptime\nDate: {{ $('Calculate Status').item.json[\"date\"] }}\n\n{{ $('Calculate Status').item.json.Property }} is {{ $('Calculate Status').item.json[\"DOWN_FROM_UP\"] ? 'DOWN' : 'UP' }}",
          "options": {
            "senderName": "n8n uptime",
            "appendAttribution": false
          },
          "subject": "=n8n uptime: {{ $('Calculate Status').item.json.Property }} is {{ $('Calculate Status').item.json[\"DOWN_FROM_UP\"] ? 'DOWN' : 'UP' }}",
          "emailType": "text"
        },
        "credentials": {
          "gmailOAuth2": {
            "id": "Sf5Gfl9NiFTNXFWb",
            "name": "Gmail account"
          }
        },
        "typeVersion": 2.1
      },
      {
        "id": "63343e68-be07-4d89-8363-140299dcf0b6",
        "name": "Log Uptime Event",
        "type": "n8n-nodes-base.googleSheets",
        "position": [
          2940,
          520
        ],
        "parameters": {
          "columns": {
            "value": {
              "date": "={{ $json.date }}",
              "period": "={{ new Date($json.date).format(\"yyyy-MM\") }}"
            },
            "schema": [
              {
                "id": "period",
                "type": "string",
                "display": true,
                "removed": false,
                "required": false,
                "displayName": "period",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "date",
                "type": "string",
                "display": true,
                "required": false,
                "displayName": "date",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Property",
                "type": "string",
                "display": true,
                "required": false,
                "displayName": "Property",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "UP_FROM_UP",
                "type": "string",
                "display": true,
                "required": false,
                "displayName": "UP_FROM_UP",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "DOWN_FROM_DOWN",
                "type": "string",
                "display": true,
                "required": false,
                "displayName": "DOWN_FROM_DOWN",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "UP_FROM_DOWN",
                "type": "string",
                "display": true,
                "required": false,
                "displayName": "UP_FROM_DOWN",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "DOWN_FROM_UP",
                "type": "string",
                "display": true,
                "required": false,
                "displayName": "DOWN_FROM_UP",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              }
            ],
            "mappingMode": "defineBelow",
            "matchingColumns": []
          },
          "options": {},
          "operation": "append",
          "sheetName": {
            "__rl": true,
            "mode": "name",
            "value": "={{ $('Calculate Status').item.json.Property }}"
          },
          "documentId": {
            "__rl": true,
            "mode": "list",
            "value": "1t2RT3lxyxXj3X1y6klWvyhEJEazpkT3Hpi2ttEJRVT4",
            "cachedResultUrl": "https://docs.google.com/spreadsheets/d/1t2RT3lxyxXj3X1y6klWvyhEJEazpkT3Hpi2ttEJRVT4/edit?usp=drivesdk",
            "cachedResultName": "n8n uptime"
          }
        },
        "credentials": {
          "googleSheetsOAuth2Api": {
            "id": "XHvC7jIRR8A2TlUl",
            "name": "Google Sheets account"
          }
        },
        "typeVersion": 4.3
      },
      {
        "id": "fe97a18b-902c-4fab-bf73-69b5b9e41a11",
        "name": "Update Site Status",
        "type": "n8n-nodes-base.googleSheets",
        "position": [
          3100,
          520
        ],
        "parameters": {
          "columns": {
            "value": {
              "Status": "={{ $json[\"DOWN_FROM_UP\"] || $json[\"DOWN_FROM_DOWN\"] ? 'DOWN' : 'UP' }}",
              "Property": "={{ $json.Property }}"
            },
            "schema": [
              {
                "id": "Property",
                "type": "string",
                "display": true,
                "removed": false,
                "required": false,
                "displayName": "Property",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              },
              {
                "id": "Status",
                "type": "string",
                "display": true,
                "required": false,
                "displayName": "Status",
                "defaultMatch": false,
                "canBeUsedToMatch": true
              }
            ],
            "mappingMode": "defineBelow",
            "matchingColumns": [
              "Property"
            ]
          },
          "options": {},
          "operation": "appendOrUpdate",
          "sheetName": {
            "__rl": true,
            "mode": "list",
            "value": "gid=0",
            "cachedResultUrl": "https://docs.google.com/spreadsheets/d/1t2RT3lxyxXj3X1y6klWvyhEJEazpkT3Hpi2ttEJRVT4/edit#gid=0",
            "cachedResultName": "dashboard"
          },
          "documentId": {
            "__rl": true,
            "mode": "list",
            "value": "1t2RT3lxyxXj3X1y6klWvyhEJEazpkT3Hpi2ttEJRVT4",
            "cachedResultUrl": "https://docs.google.com/spreadsheets/d/1t2RT3lxyxXj3X1y6klWvyhEJEazpkT3Hpi2ttEJRVT4/edit?usp=drivesdk",
            "cachedResultName": "n8n uptime"
          }
        },
        "credentials": {
          "googleSheetsOAuth2Api": {
            "id": "XHvC7jIRR8A2TlUl",
            "name": "Google Sheets account"
          }
        },
        "typeVersion": 4.3
      },
      {
        "id": "b37537d1-eedf-446e-a5ed-2ef7388fd7bc",
        "name": "Perform Site Test",
        "type": "n8n-nodes-base.httpRequest",
        "position": [
          2207,
          460
        ],
        "parameters": {
          "url": "={{ $json.Property }}",
          "options": {
            "response": {
              "response": {
                "neverError": true,
                "fullResponse": true
              }
            }
          },
          "sendHeaders": true,
          "headerParameters": {
            "parameters": [
              {}
            ]
          }
        },
        "typeVersion": 4.2
      },
      {
        "id": "22efcca8-81a8-4128-a03f-efd394e41977",
        "name": "For Each Site...",
        "type": "n8n-nodes-base.splitInBatches",
        "position": [
          2007,
          460
        ],
        "parameters": {
          "options": {}
        },
        "typeVersion": 3
      },
      {
        "id": "b74d0b2c-8b08-42fe-a78f-103d4ea3b60f",
        "name": "Sticky Note3",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          1375.3365733151754,
          160
        ],
        "parameters": {
          "color": 7,
          "width": 533.3167991131336,
          "height": 451.46281790887826,
          "content": "## 1. Setting a Schedule\n[Read more about Scheduling Workflows](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.scheduletrigger/)\n\nSince we expect downtime to be a rare occurance, our monitor should only check infrequently during the day. We'll use a schedule trigger for this purpose.\n\nOnce the schdule activates, we'll pull a list of sites to check from our google sheet."
        },
        "typeVersion": 1
      },
      {
        "id": "6c570ff2-aa08-4458-b2da-7632d516c4e3",
        "name": "Sticky Note4",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          1940,
          247.83581204342858
        ],
        "parameters": {
          "color": 7,
          "width": 596.6620781418152,
          "height": 464.2968162619932,
          "content": "## 2. Perform Site Checks\n[Read more about using HTTP requests](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest/)\n\nn8n makes it easy to communicate with external websites by offering a powerful HTTP request node which can handle GET and POST requests as well as pagination.\n\nHere, we're only interested in the status code of our requests."
        },
        "typeVersion": 1
      },
      {
        "id": "d1f67650-1409-43b1-b197-0e5a821d8b6f",
        "name": "Sticky Note5",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          2580,
          117.20168629145996
        ],
        "parameters": {
          "color": 7,
          "width": 720.3351531809235,
          "height": 600.2604061412927,
          "content": "## 3. Sending Alerts and Logging Results\n[Read more about using Switch for powerful control flow](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.switch)\n\nThe switch node is powerful control flow tool that makes your workflows smart. Here, we're able to use Switch to trigger alert notifications whenever we have DOWN status or whenever we get a status change.\n\nWe store the event in our Sites Google Sheet and update the site's status which will be used to calculate our state on the next scheduled run."
        },
        "typeVersion": 1
      },
      {
        "id": "244291de-7ce1-48c9-9d7a-c04fc7d069ab",
        "name": "Status Router",
        "type": "n8n-nodes-base.switch",
        "position": [
          2640,
          520
        ],
        "parameters": {
          "rules": {
            "values": [
              {
                "outputKey": "UP_FROM_UP",
                "conditions": {
                  "options": {
                    "leftValue": "",
                    "caseSensitive": true,
                    "typeValidation": "strict"
                  },
                  "combinator": "and",
                  "conditions": [
                    {
                      "operator": {
                        "type": "boolean",
                        "operation": "true",
                        "singleValue": true
                      },
                      "leftValue": "={{ $json.UP_FROM_UP }}",
                      "rightValue": 200
                    }
                  ]
                },
                "renameOutput": true
              },
              {
                "outputKey": "UP_FROM_DOWN",
                "conditions": {
                  "options": {
                    "leftValue": "",
                    "caseSensitive": true,
                    "typeValidation": "strict"
                  },
                  "combinator": "and",
                  "conditions": [
                    {
                      "id": "f50ae8d6-4359-4163-aedb-fddf100ad676",
                      "operator": {
                        "type": "boolean",
                        "operation": "true",
                        "singleValue": true
                      },
                      "leftValue": "={{ $json.UP_FROM_DOWN }}",
                      "rightValue": 200
                    }
                  ]
                },
                "renameOutput": true
              },
              {
                "outputKey": "DOWN_FROM_DOWN",
                "conditions": {
                  "options": {
                    "leftValue": "",
                    "caseSensitive": true,
                    "typeValidation": "strict"
                  },
                  "combinator": "and",
                  "conditions": [
                    {
                      "id": "417e93d8-08b7-468d-a3bb-f0d395b3026a",
                      "operator": {
                        "type": "boolean",
                        "operation": "true",
                        "singleValue": true
                      },
                      "leftValue": "={{ $json.DOWN_FROM_DOWN }}",
                      "rightValue": ""
                    }
                  ]
                },
                "renameOutput": true
              },
              {
                "outputKey": "DOWN_FROM_UP",
                "conditions": {
                  "options": {
                    "leftValue": "",
                    "caseSensitive": true,
                    "typeValidation": "strict"
                  },
                  "combinator": "and",
                  "conditions": [
                    {
                      "id": "7191e7cb-f2e1-4288-aa68-21f6efefafc5",
                      "operator": {
                        "type": "boolean",
                        "operation": "true",
                        "singleValue": true
                      },
                      "leftValue": "={{ $json.DOWN_FROM_UP }}",
                      "rightValue": ""
                    }
                  ]
                },
                "renameOutput": true
              }
            ]
          },
          "options": {}
        },
        "typeVersion": 3
      },
      {
        "id": "a2a683fa-1fa5-4595-856a-de4f717eadf0",
        "name": "Sticky Note6",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          1063.07390978683,
          160
        ],
        "parameters": {
          "width": 276.590892958905,
          "height": 299.942498076894,
          "content": "## Try It Out!\n### Thie workflow showcases how you can build a simple website monitoring service using Scheduled Triggers and the HTTP Requests node. \n\n### Need Help?\nJoin the [Discord](https://discord.com/invite/XPKeKXeB7d) or ask in the [Forum](https://community.n8n.io/)!\n\nHappy Hacking!"
        },
        "typeVersion": 1
      },
      {
        "id": "704ce21f-6b96-4dc5-a27f-fca4b326efd1",
        "name": "Sticky Note",
        "type": "n8n-nodes-base.stickyNote",
        "position": [
          1620,
          380
        ],
        "parameters": {
          "width": 262.6069985025353,
          "height": 379.4991553144906,
          "content": "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n### 🚨Google Sheet Required!\nYou'll need the following columns:\n* **Property** - the website address to monitor\n* **Status** - either one of \"UP\" or \"DOWN\""
        },
        "typeVersion": 1
      }
    ],
    "pinData": {},
    "connections": {
      "Get Sites": {
        "main": [
          [
            {
              "node": "For Each Site...",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Status Router": {
        "main": [
          [
            {
              "node": "Log Uptime Event",
              "type": "main",
              "index": 0
            }
          ],
          [
            {
              "node": "Send Email Alert",
              "type": "main",
              "index": 0
            },
            {
              "node": "Log Uptime Event",
              "type": "main",
              "index": 0
            }
          ],
          [
            {
              "node": "Log Uptime Event",
              "type": "main",
              "index": 0
            },
            {
              "node": "Send Email Alert",
              "type": "main",
              "index": 0
            }
          ],
          [
            {
              "node": "Send Email Alert",
              "type": "main",
              "index": 0
            },
            {
              "node": "Log Uptime Event",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Calculate Status": {
        "main": [
          [
            {
              "node": "Status Router",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "For Each Site...": {
        "main": [
          null,
          [
            {
              "node": "Perform Site Test",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Log Uptime Event": {
        "main": [
          [
            {
              "node": "Update Site Status",
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
              "node": "Get Sites",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Send Email Alert": {
        "main": [
          [
            {
              "node": "Send Chat Alert",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Perform Site Test": {
        "main": [
          [
            {
              "node": "Calculate Status",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Update Site Status": {
        "main": [
          [
            {
              "node": "For Each Site...",
              "type": "main",
              "index": 0
            }
          ]
        ]
      }
    }
  },

};
