import { StrategyColumn, ContentType, ChartDataPoint } from './types';

// Based on the provided image structure
export const STRATEGY_MAP: StrategyColumn[] = [
  {
    id: 'col1',
    title: '一、自媒体起号流程',
    description: 'Bootstrapping Process',
    categories: [
      {
        title: '账号定位',
        color: 'bg-orange-100 border-orange-300 text-orange-800',
        items: [
          { title: '明确你是谁', description: 'Define your persona clearly.', actionable: true },
          { title: '你做什么', description: 'What value do you provide?', actionable: true },
          { title: '用户能获得什么', description: 'What is the user benefit?', actionable: true },
          { title: '清晰定位', description: 'Combine persona, value, and benefit.', actionable: true },
          { title: '输出账号风格', description: 'Visual and tone consistency.', actionable: false },
        ]
      },
      {
        title: '对标分析',
        color: 'bg-green-100 border-green-300 text-green-800',
        items: [
          { title: '同行优质账号', description: 'Find top 10 competitors.', actionable: true },
          { title: '拆封面', description: 'Analyze their thumbnail style.', actionable: true },
          { title: '拆标题', description: 'Analyze their hook structures.', actionable: true },
          { title: '拆内容', description: 'Analyze their script/body.', actionable: true },
          { title: '总结3套可复用模板', description: 'Create your own templates.', actionable: true },
        ]
      },
      {
        title: '选题策略',
        color: 'bg-purple-100 border-purple-300 text-purple-800',
        items: [
          { title: '围绕用户痛点', description: 'Solve a specific problem.', actionable: true },
          { title: '场景明确', description: 'When do they need this?', actionable: true },
          { title: '结果明确', description: 'What happens after reading?', actionable: true },
          { title: '反差法(易爆)', description: 'Contrary to popular belief.', actionable: true },
          { title: '建长期选题池', description: 'Maintain a backlog of 50+ ideas.', actionable: true },
        ]
      },
    ]
  },
  {
    id: 'col2',
    title: '二、爆款内容能力',
    description: 'Viral Content Capabilities',
    categories: [
      {
        title: '爆款内容',
        color: 'bg-yellow-100 border-yellow-300 text-yellow-800',
        items: [
          { title: '价值直给', description: 'Don\'t bury the lead.', actionable: false },
          { title: '场景具体', description: 'Specific situations relate better.', actionable: false },
          { title: '数字强化', description: 'Use numbers (e.g., "3 tips").', actionable: false },
          { title: '情绪带入', description: 'Provoke emotion (joy, fear, anger).', actionable: false },
          { title: '对象明确', description: 'Speak directly to "You".', actionable: false },
        ]
      },
      {
        title: '封面设计',
        color: 'bg-teal-100 border-teal-300 text-teal-800',
        items: [
          { title: '主体突出', description: 'Main subject should be large.', actionable: true },
          { title: '关键词亮', description: 'Big, contrasting text.', actionable: true },
          { title: '对比强烈', description: 'High contrast colors.', actionable: true },
          { title: '画面干净', description: 'Remove clutter.', actionable: true },
          { title: '风格统一', description: 'Brand recognition.', actionable: true },
        ]
      },
      {
        title: '内容开头',
        color: 'bg-blue-100 border-blue-300 text-blue-800',
        items: [
          { title: '三秒抓人', description: 'The golden 3-second rule.', actionable: true },
          { title: '反差开局', description: 'Start with something unexpected.', actionable: true },
          { title: '先抛结论', description: 'State the result first.', actionable: true },
          { title: '设置悬念', description: 'Open a loop to close later.', actionable: true },
          { title: '亮出收益', description: 'Why should they stay?', actionable: true },
        ]
      }
    ]
  },
  {
    id: 'col3',
    title: '三、账号增长策略',
    description: 'Growth Strategy',
    categories: [
      {
        title: '用户心理',
        color: 'bg-indigo-100 border-indigo-300 text-indigo-800',
        items: [
          { title: '求快结果', description: 'Instant gratification.', actionable: false },
          { title: '求省时间', description: 'Efficiency hacks.', actionable: false },
          { title: '求避风险', description: 'Safety and security.', actionable: false },
          { title: '求爽体验', description: 'Entertainment value.', actionable: false },
          { title: '求被理解', description: 'Empathy and validation.', actionable: false },
        ]
      },
      {
        title: '内容矩阵',
        color: 'bg-orange-100 border-orange-300 text-orange-800',
        items: [
          { title: '教程内容', description: 'How-to guides.', actionable: true },
          { title: '工具分享', description: 'Resource lists.', actionable: true },
          { title: '观点拆解', description: 'Opinion pieces.', actionable: true },
          { title: '案例输出', description: 'Case studies.', actionable: true },
          { title: '故事表达', description: 'Personal narratives.', actionable: true },
        ]
      },
      {
        title: '长期增长',
        color: 'bg-red-100 border-red-300 text-red-800',
        items: [
          { title: '选题复利', description: 'Topics that stay relevant.', actionable: true },
          { title: '内容资产', description: 'Build a library.', actionable: true },
          { title: '老粉留存', description: 'Community engagement.', actionable: true },
          { title: '复盘循环', description: 'Review and improve.', actionable: true },
          { title: '品牌沉淀', description: 'Long-term branding.', actionable: true },
        ]
      }
    ]
  }
];

export const MOCK_GROWTH_DATA: ChartDataPoint[] = [
  { name: 'Mon', value: 120, value2: 10 },
  { name: 'Tue', value: 132, value2: 15 },
  { name: 'Wed', value: 301, value2: 45 },
  { name: 'Thu', value: 234, value2: 30 },
  { name: 'Fri', value: 490, value2: 80 },
  { name: 'Sat', value: 680, value2: 120 },
  { name: 'Sun', value: 820, value2: 150 },
];

export const MOCK_TOPICS = [
  "How to start a side hustle in 2024",
  "5 Tools to boost productivity",
  "My morning routine for success",
  "Why most beginners fail at content creation"
];

export const DEFAULT_AVATAR = "https://picsum.photos/100/100";

export const CONTENT_TYPES = [
  { id: ContentType.SHORT_VIDEO, label: 'Short Video (Reels/TikTok)', icon: 'Video' },
  { id: ContentType.ARTICLE, label: 'Article / Blog Post', icon: 'FileText' },
  { id: ContentType.IMAGE_POST, label: 'Infographic / Carousel', icon: 'Image' },
];