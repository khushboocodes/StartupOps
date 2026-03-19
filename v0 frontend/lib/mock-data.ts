// Mock data for StartupOps application

export const dashboardMetrics = {
  goalCompletion: {
    value: 87,
    label: "Goal completion",
    badge: "This week",
    trend: "+12%",
    trendColor: "green" as const,
  },
  teamMembers: {
    value: 24,
    label: "Team members",
    badge: "Active",
    subtext: "2 roles open",
  },
  tasksCompleted: {
    value: "18/22",
    label: "Tasks completed",
    badge: "Today",
    subtext: "4 in progress",
  },
  cashRunway: {
    value: "18 mo",
    label: "Cash runway",
    badge: "Runway",
    subtext: "Healthy position",
    color: "green" as const,
  },
};

export const weeklyTaskCompletion = [
  { day: "Mon", planned: 8, completed: 7 },
  { day: "Tue", planned: 9, completed: 8 },
  { day: "Wed", planned: 10, completed: 9 },
  { day: "Thu", planned: 7, completed: 5 },
  { day: "Fri", planned: 8, completed: 7 },
];

export const burnRateData = [
  { month: "Aug", rate: 142 },
  { month: "Sep", rate: 158 },
  { month: "Oct", rate: 165 },
  { month: "Nov", rate: 162 },
  { month: "Dec", rate: 168 },
  { month: "Jan", rate: 165 },
];

export const recentActivity = [
  {
    id: 1,
    icon: "Check",
    title: "Marketing team completed Q4 campaign launch",
    timestamp: "2 hours ago",
    color: "green",
  },
  {
    id: 2,
    icon: "Users",
    title: "Sarah Chen joined as Senior Product Designer",
    timestamp: "5 hours ago",
    color: "purple",
  },
  {
    id: 3,
    icon: "Target",
    title: "Reached 1,000 active users milestone",
    timestamp: "1 day ago",
    color: "amber",
  },
  {
    id: 4,
    icon: "Zap",
    title: "AI Budget Optimizer suggested 3 cost improvements",
    timestamp: "1 day ago",
    color: "purple",
  },
  {
    id: 5,
    icon: "CheckCircle2",
    title: "Engineering sprint #12 completed ahead of schedule",
    timestamp: "2 days ago",
    color: "green",
  },
];

export const pitchDeskMetrics = {
  totalFunding: {
    value: "$12.0M",
    label: "Total Funding",
    subtext: "100% deployed strategically",
    color: "green",
  },
  monthlyBurn: {
    value: "$165K",
    label: "Monthly Burn",
    subtext: "-12% vs projection",
  },
  runway: {
    value: "18 months",
    label: "Runway",
    subtext: "Healthy cash position",
  },
  transparencyScore: {
    value: "96/100",
    label: "Transparency Score",
    subtext: "Investor-ready reporting",
  },
};

export const valuationTimeline = [
  { date: "Jan 24", valuation: 5 },
  { date: "Feb 24", valuation: 6 },
  { date: "Mar 24", valuation: 7 },
  { date: "Apr 24", valuation: 8.5 },
  { date: "May 24", valuation: 9.5 },
  { date: "Jun 24", valuation: 11 },
  { date: "Jul 24", valuation: 12 },
  { date: "Aug 24", valuation: 13.5 },
  { date: "Sep 24", valuation: 14 },
  { date: "Oct 24", valuation: 15 },
  { date: "Nov 24", valuation: 16 },
  { date: "Dec 24", valuation: 17 },
  { date: "Jan 25", valuation: 19 },
  { date: "Feb 25", valuation: 21 },
  { date: "Mar 25", valuation: 23 },
  { date: "Apr 25", valuation: 25 },
  { date: "May 25", valuation: 28 },
  { date: "Jun 25", valuation: 31 },
  { date: "Jul 25", valuation: 33 },
  { date: "Aug 25", valuation: 35 },
  { date: "Sep 25", valuation: 35.5 },
  { date: "Oct 25", valuation: 36 },
  { date: "Nov 25", valuation: 36.5 },
];

export const fundingManagementMetrics = {
  totalRaised: { value: "$12.0M", label: "Total Raised", color: "purple" },
  cashRemaining: { value: "$3.8M", label: "Cash Remaining" },
  monthlyBurn: { value: "$165K", label: "Monthly Burn" },
  runwayRemaining: { value: "18 mo", label: "Runway Remaining", color: "green" },
};

export const capitalAllocation = [
  { department: "Engineering", amount: 600 },
  { department: "Product", amount: 280 },
  { department: "Marketing", amount: 350 },
  { department: "Sales", amount: 280 },
  { department: "Operations", amount: 200 },
];

export const fundingHistory = [
  {
    id: 1,
    round: "Pre-seed",
    status: "Closed",
    investors: "1 Contributor, Angel Investors",
    amount: "$500K",
    date: "Jan 2023",
  },
  {
    id: 2,
    round: "Seed",
    status: "Closed",
    investors: "Sequoia Capital, a16z, individual Angels",
    amount: "$3.5M",
    date: "Aug 2023",
  },
  {
    id: 3,
    round: "Bridge",
    status: "Closed",
    investors: "Existing Investors",
    amount: "$1.2M",
    date: "Mar 2024",
  },
  {
    id: 4,
    round: "Series A",
    status: "Planning",
    investors: "TBD",
    amount: "$12M (Target)",
    date: "Q2 2025",
  },
];

export const keyInvestors = [
  { name: "Sequoia Capital", badge: "Lead" },
  { name: "a16z", badge: "Investor" },
  { name: "Y Combinator", badge: "Batch S23" },
  { name: "Individual Angels", badge: "Multiple" },
];

export const upcomingMilestones = [
  { title: "Series A Funding Close", target: "Q2 2025", priority: "high" },
  { title: "Expand to Asian Markets", target: "Q3 2025", priority: "medium" },
  { title: "Reach $500K MRR", target: "Q4 2025", priority: "high" },
  { title: "Break-even Cash Flow", target: "Q4 2025", priority: "medium" },
];

export const teams = [
  {
    id: 1,
    name: "Engineering",
    icon: "Code",
    members: 12,
    lead: "Michael Chen",
    color: "blue",
  },
  {
    id: 2,
    name: "Product",
    icon: "Layers",
    members: 5,
    lead: "Sarah Martinez",
    color: "green",
  },
  {
    id: 3,
    name: "Marketing",
    icon: "Megaphone",
    members: 4,
    lead: "David Kim",
    color: "amber",
  },
  {
    id: 4,
    name: "Sales",
    icon: "TrendingUp",
    members: 3,
    lead: "Emily Roberts",
    color: "red",
  },
];

export const teamMembers = [
  {
    id: 1,
    name: "Michael Chen",
    role: "VP Engineering",
    department: "Engineering",
    avatar: "MC",
    online: true,
  },
  {
    id: 2,
    name: "Sarah Martinez",
    role: "Head of Product",
    department: "Product",
    avatar: "SM",
    online: true,
  },
  {
    id: 3,
    name: "David Kim",
    role: "Marketing Lead",
    department: "Marketing",
    avatar: "DK",
    online: false,
  },
  {
    id: 4,
    name: "Emily Roberts",
    role: "Sales Lead",
    department: "Sales",
    avatar: "ER",
    online: true,
  },
  {
    id: 5,
    name: "Alex Johnson",
    role: "Senior Engineer",
    department: "Engineering",
    avatar: "AJ",
    online: true,
  },
  {
    id: 6,
    name: "Lisa Wang",
    role: "Product Designer",
    department: "Product",
    avatar: "LW",
    online: false,
  },
  {
    id: 7,
    name: "Tom Brown",
    role: "DevOps Engineer",
    department: "Engineering",
    avatar: "TB",
    online: true,
  },
  {
    id: 8,
    name: "Jessica Lee",
    role: "Content Manager",
    department: "Marketing",
    avatar: "JL",
    online: true,
  },
];

export const kanbanTasks = {
  todo: [
    {
      id: 1,
      title: "Set up CI/CD pipeline",
      priority: "medium",
      assignee: "Tom",
      dueDate: "2/12/2026",
      tags: ["Engineering", "DevOps"],
    },
    {
      id: 2,
      title: "Conduct user interviews",
      priority: "low",
      assignee: "Sarah",
      dueDate: "2/15/2026",
      tags: ["Product", "Research"],
    },
  ],
  inProgress: [
    {
      id: 3,
      title: "Complete user authentication flow",
      priority: "high",
      assignee: "Michael",
      dueDate: "2/10/2026",
      tags: ["Engineering", "Backend"],
    },
    {
      id: 4,
      title: "Design new dashboard mockups",
      priority: "high",
      assignee: "Lisa",
      dueDate: "2/9/2026",
      tags: ["Product", "Design"],
    },
  ],
  done: [
    {
      id: 5,
      title: "Write blog post on product launch",
      priority: "medium",
      assignee: "Jessica",
      dueDate: "2/5/2026",
      tags: ["Marketing", "Content"],
    },
  ],
};

export const analyticsMetrics = {
  monthlyRevenue: { value: "$124K", change: "+10%", trend: "up" },
  activeUsers: { value: "1,520", change: "+19%", trend: "up" },
  burnMultiple: { value: "1.33x", change: "-5%", trend: "down" },
  netBurnRate: { value: "$41K", change: "-24%", trend: "down" },
};

export const revenueVsCosts = [
  { month: "Aug", revenue: 45, costs: 102 },
  { month: "Sep", revenue: 52, costs: 115 },
  { month: "Oct", revenue: 68, costs: 118 },
  { month: "Nov", revenue: 85, costs: 125 },
  { month: "Dec", revenue: 102, costs: 132 },
  { month: "Jan", revenue: 124, costs: 135 },
];

export const userGrowth = [
  { month: "Aug", users: 400 },
  { month: "Sep", users: 520 },
  { month: "Oct", users: 680 },
  { month: "Nov", users: 890 },
  { month: "Dec", users: 1150 },
  { month: "Jan", users: 1520 },
];

export const departmentSpend = [
  { name: "Engineering", value: 4200 },
  { name: "Marketing", value: 2500 },
  { name: "Sales", value: 1900 },
  { name: "Product", value: 1800 },
  { name: "Operations", value: 1600 },
];

export const investorMetrics = {
  transparencyScore: { value: "96/100", icon: "Shield" },
  yoyGrowth: { value: "192%", icon: "TrendingUp", color: "green" },
  cashOnHand: { value: "$3.8M", icon: "DollarSign" },
  runway: { value: "18 mo", icon: "Clock", color: "green" },
};

export const valuationTrajectory = [
  { quarter: "Q1 24", valuation: 5 },
  { quarter: "Q2 24", valuation: 7.5 },
  { quarter: "Q3 24", valuation: 11 },
  { quarter: "Q4 24", valuation: 15 },
  { quarter: "Q1 25", valuation: 19 },
  { quarter: "Q2 25", valuation: 25 },
];

export const executionHighlights = [
  { label: "Milestone Completion Rate", value: "87%" },
  { label: "Team Velocity vs Benchmark", value: "+23%" },
  { label: "Budget Efficiency", value: "94%" },
  { label: "Customer Satisfaction (NPS)", value: "68" },
];

export const keyMilestones = [
  {
    title: "Product-Market Fit Achieved",
    quarter: "Q3 2024",
    status: "Completed",
  },
  { title: "1,000 Paying Customers", quarter: "Q3 2024", status: "Completed" },
  { title: "Break-even Revenue", quarter: "Q4 2025", status: "On Track" },
  { title: "Series A Funding", quarter: "Q2 2025", status: "Planned" },
];

export const billingPlans = [
  {
    name: "Starter",
    price: 39,
    billing: "month",
    description: "Perfect for getting started",
    icon: "Zap",
    features: [
      "Basic Dashboard & Analytics",
      "Up to 3 Team Members",
      "Pitch Deck Builder",
      "Email Support",
      "5 AI Budget Optimizations/month",
    ],
    cta: "Select Plan",
  },
  {
    name: "Growth",
    price: 119,
    billing: "month",
    description: "For scaling startups",
    badge: "Most Popular",
    icon: "TrendingUp",
    highlighted: true,
    features: [
      "Everything in Starter",
      "Up to 15 Team Members",
      "AI Pitch Simulator",
      "Priority Support",
      "Unlimited AI Optimizations",
      "Advanced Analytics",
      "Investor Portal Access",
    ],
    cta: "Continue",
  },
  {
    name: "Enterprise",
    price: 399,
    billing: "month",
    description: "For established companies",
    icon: "Crown",
    features: [
      "Everything in Growth",
      "Unlimited Team Members",
      "Custom Integrations",
      "Dedicated Success Manager",
      "White-label Options",
      "API Access",
      "Custom AI Training",
    ],
    cta: "Select Plan",
  },
];

export const budgetOptimizerData = {
  current: { value: "$12.7K", label: "Monthly Spend", badge: "Current" },
  optimized: { value: "$12.6K", label: "Recommended Spend", badge: "Optimized" },
  savings: { value: "$0.1K", percentage: "0.8%", label: "Savings" },
};

export const departmentBudgets = [
  {
    department: "Engineering",
    current: 6400,
    recommended: 6400,
    change: 0,
  },
  {
    department: "Marketing - Paid Ads",
    current: 1550,
    recommended: 1100,
    change: -450,
  },
  {
    department: "Marketing - Content",
    current: 640,
    recommended: 1090,
    change: 450,
  },
  {
    department: "Sales",
    current: 1900,
    recommended: 2100,
    change: 200,
  },
  {
    department: "Product",
    current: 1800,
    recommended: 1800,
    change: 0,
  },
  {
    department: "Cloud Infrastructure",
    current: 450,
    recommended: 250,
    change: -200,
  },
  {
    department: "Software Subscriptions",
    current: 140,
    recommended: 70,
    change: -70,
  },
  {
    department: "Operations",
    current: 1100,
    recommended: 1070,
    change: -30,
  },
];

export const budgetInsights = [
  {
    title: "Marketing Channel Efficiency",
    description:
      "Paid ads showing declining ROI (13% increase in CAC). Consider reallocating to content marketing.",
    impact: "High Impact",
    color: "purple",
  },
  {
    title: "Infrastructure Optimization",
    description:
      "Moving to AWS reserved instances can save $200K quarterly while improving query speed.",
    impact: "Medium Impact",
    color: "gray",
  },
  {
    title: "Sales Investment Opportunity",
    description:
      "Strong product market fit signals justify $200K additional investment in sales team expansion.",
    impact: "High Impact",
    color: "purple",
  },
];

export const projectedImpact = {
  annualSavings: "$1.2K",
  efficiencyGain: "18%",
  revenueImpact: "+$380K",
};

export const aiCoFounderMessages = [
  {
    role: "assistant",
    content: `Hi Jane! I'm your AI Co-Founder. I've analyzed TechVenture's execution data, market conditions, and growth trajectory.

**Strong Areas:**
- Team velocity is 23% above industry benchmark
- Milestone completion rate at 87% (target: 80%)
- Cash efficiency improving month-over-month

**Areas Needing Attention:**
- CAC increasing 13% quarter-over-quarter
- Sales cycle extended by 2 weeks
- Marketing channel ROI declining

**Execution Score: 87/100** - Solid execution with room for optimization in go-to-market strategy.`,
  },
];

export const aiCoFounderQuickQuestions = [
  "What should I focus on this week?",
  "Am I ready for Series A?",
  "What are my biggest risks?",
  "Optimize my budget",
];

export const aiCoFounderHealthScore = {
  overall: 87,
  executionVelocity: "+23%",
  burnEfficiency: "-12%",
  seriesAReadiness: "6-8 months",
};

export const liveInsights = [
  {
    icon: "TrendingUp",
    title: "Exceptional Execution Velocity",
    description:
      "Your team is shipping 23% faster than comparable startups. Consider increasing engineering investment to maintain momentum.",
    color: "green",
  },
  {
    icon: "AlertCircle",
    title: "Marketing Channel Efficiency Alert",
    description:
      "Paid ads CAC increased 13% while organic CAC decreased 8%. Shift budget toward content and referral channels.",
    color: "amber",
  },
];

export const aiActionPlan = [
  {
    badge: "Critical",
    title: "Shift $450K from paid ads to content marketing over next 60 days",
    why: "Your organic CAC declined 8% while paid CAC increased 13%. Content channels showing 3:1 ROI improvement.",
    timeline: "Start this week",
  },
  {
    badge: "High",
    title: "Hire 2 senior sales reps immediately",
    why: "Sales cycle extended 2 weeks. Senior reps historically reduce cycle by 40% and increase deal size by 25%.",
    timeline: "First week of next month",
  },
  {
    badge: "High",
    title: "Consolidate software subscriptions",
    why: "Operating 8 tools with overlapping features. Consolidation saves $70K annually with zero feature loss.",
    timeline: "Next 2 weeks",
  },
];

export const pitchPracticeSession = {
  questionsAnswered: 0,
  totalQuestions: 8,
  confidenceLevel: 0,
  status: "Waiting for Response",
  currentQuestion:
    "Tell me about your business model. How exactly do you make money, and what are your unit economics?",
  judgeAvatar: "🦈",
};

export const pitchProTips = [
  "Lead with your traction metrics - investors care most about proof of market demand",
  "Have defensible unit economics prepared with sensitivity analysis for different growth scenarios",
  "Anticipate the unit economics follow-up - practice explaining CAC payback period and LTV:CAC ratio",
  "Use analogies to comparable companies that successfully exited in your space",
];
