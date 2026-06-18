export type Lang = 'zh' | 'en';

export type RouteKey =
  | 'home'
  | 'about'
  | 'programmes'
  | 'faculty'
  | 'facilities'
  | 'policies'
  | 'admissions'
  | 'contact';

export const routes: Record<RouteKey, string> = {
  home: '/',
  about: '/about',
  programmes: '/programmes',
  faculty: '/faculty',
  facilities: '/facilities',
  policies: '/policies',
  admissions: '/admissions',
  contact: '/contact',
};

const placeholdersZh = {
  address: '洛阳市洛龙区学府街39号（新区关林路与学府街交叉口）',
  telephone: '0379-64315181',
  email: 'lyyggjbedu@163.com',
  website: '[网站地址]',
};

const placeholdersEn = {
  address: 'No. 39 Xuefu Street, Luolong District, Luoyang, Henan Province, China',
  telephone: '0379-64315181',
  email: 'lyyggjbedu@163.com',
  website: '[Website URL]',
};

export const content = {
  zh: {
    languageLabel: '中文',
    switchLanguage: '英文',
    logoText: '一高',
    schoolName: '洛阳市第一高级中学',
    schoolNameEn: '公办普通高中',
    nav: {
      home: '首页',
      about: '学校概况',
      programmes: '课程体系',
      faculty: '师资团队',
      facilities: '校园设施',
      policies: '政策与质量保障',
      admissions: '招生信息',
      contact: '联系我们',
    },
    common: {
      learnMore: '了解更多',
      viewDetails: '查看详情',
    },
    home: {
      title: '洛阳市第一高级中学',
      subtitle: '立足中国基础教育，培养面向未来的国际化人才',
      badge: '公办普通高中',
      panelKicker: '校园关注',
      panelTitle: '学习、成长与稳健发展',
      profileLabel: '学校概览',
      heroImage: {
        src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
        alt: '校园学习环境',
      },
      intro:
        '洛阳市第一高级中学是一所具有稳定办学基础和完善管理体系的高级中学。学校重视学生全面发展，致力于为学生提供高质量的学术课程、学习支持和升学指导。',
      ctas: [
        { label: '了解学校', to: routes.about },
        { label: '查看课程体系', to: routes.programmes },
      ],
      quickLinksTitle: '快速入口',
      quickLinks: [
        { label: '学校概况', description: '了解学校历史、定位与发展支持', to: routes.about },
        { label: '课程体系', description: '查看高中课程、拓展学习与学业支持', to: routes.programmes },
        { label: '校园设施', description: '了解课堂、实验、阅读与学习空间', to: routes.facilities },
        { label: '联系我们', description: '获取学校地址、电话与邮箱信息', to: routes.contact },
      ],
      stats: [
        ['一九零四年', '办学源流'],
        ['示范性高中', '河南省首批'],
        ['重点高中', '河南省'],
        ['全国文明校园', '第二届'],
      ],
      highlights: [
        {
          title: '成熟的学校管理体系',
          eyebrow: '规范治理',
          body: '学校以规范治理、清晰职责和持续改进为基础，支持稳定有序的教育教学运行。',
        },
        {
          title: '学术卓越',
          eyebrow: '学术基础',
          body: '学校重视课程质量、学习过程和学生学术能力培养，为学生后续发展奠定基础。',
        },
        {
          title: '多元发展支持',
          eyebrow: '成长支持',
          body: '学校关注学生个体发展需求，在学业规划、复习准备和升学信息方面提供稳妥支持。',
        },
      ],
      overviewTitle: '面向学生发展的学校环境',
      overview:
        '学校以高中阶段教育教学为核心，重视课程安排、课堂学习、学业反馈、学生管理和家校沟通的连续性。网站内容用于展示学校基本情况、课程支持、校园环境和质量保障安排。',
      heritageTitle: '始于一九零四年的办学传统',
      heritage:
        '学校前身可追溯至清光绪三十年创办的河南府中学堂，历经多次校名更迭和校址迁迁，形成了深厚的中学教育传统。',
      featureRows: [
        ['课程与学习', '围绕高中课程和国际课程支持，帮助学生形成稳定的学习节奏和学科基础。'],
        ['质量与管理', '通过内部管理、学习过程记录和质量反馈机制，支持规范化教学实施。'],
        ['升学与发展', '在不作结果承诺的前提下，为学生提供学业规划、复习准备和发展信息支持。'],
      ],
      campusTitle: '校园学习场景',
      campusIntro: '学校围绕日常课堂、阅读学习、科学实践和安全管理，建设支持学生持续成长的校园环境。',
      campusScenes: [
        {
          title: '课堂学习',
          body: '以稳定课堂秩序和持续学习反馈支持学生掌握基础知识。',
          image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80',
        },
        {
          title: '阅读空间',
          body: '为学生提供阅读、资料查阅和自主学习环境。',
          image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=80',
        },
        {
          title: '实验实践',
          body: '科学课程重视实践学习、过程指导和实验安全。',
          image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=80',
        },
      ],
      contactTitle: '联系学校',
      contactIntro: '如需了解学校信息、课程咨询或招生安排，可通过以下方式联系学校。',
      contactCta: '查看联系方式',
    },
    about: {
      title: '学校概况',
      subtitle: '规范治理、稳健发展、关注学生成长',
      identityLabel: '学校定位',
      sections: [
        {
          title: '学校简介',
          body: '洛阳市第一高级中学位于中国河南省洛阳市，是一所提供高中阶段教育的学校。学校围绕学术发展、品格培养和升学准备，为学生提供结构化的学习环境和持续支持。',
        },
        {
          title: '办学理念',
          body: '学校坚持立德树人，重视基础学科能力、综合素养和社会责任感培养，鼓励学生在扎实学习中形成面向未来的视野。',
        },
        {
          title: '教育目标',
          body: '学校致力于帮助学生建立良好的学习习惯、学术能力、沟通能力和自主发展能力，为高等教育及未来发展做好准备。',
        },
        {
          title: '学校治理与管理体系',
          body: '学校通过明确的管理职责、教学安排、质量反馈和学生支持机制，保障教学活动有序开展。',
        },
        {
          title: '学生发展支持',
          body: '学校关注学生在学习、身心发展和升学规划方面的需求，通过班级管理、学业辅导和家校沟通提供支持。',
        },
      ],
      governanceTitle: '学校运行与管理重点',
      governance: [
        ['教学组织', '学校通过课程计划、课堂教学、作业反馈和阶段性评估支持学生持续学习。'],
        ['学生管理', '班级管理、出勤跟踪、日常沟通和学习状态关注共同构成学生支持基础。'],
        ['质量反馈', '学校重视教学反馈、学习进度记录和内部复盘，推动教学安排稳妥改进。'],
        ['家校沟通', '学校通过适当渠道与家长保持沟通，帮助学生形成稳定的学习和发展环境。'],
      ],
      developmentTitle: '学生发展维度',
      development: ['学术基础', '学习习惯', '英语能力', '科学素养', '沟通表达', '升学准备'],
      historyTitle: '办学沿革',
      historyImage: {
        src: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        alt: '图书馆与学习空间',
      },
      historyIntro:
        '洛阳市第一高级中学，简称洛一高，坐落于河南省洛阳市洛龙区。学校办学历史可追溯至一九零四年，前身为河南府中学堂。长期以来，学校在不同历史时期经历校名变更与校址迁迁，延续了洛阳地区中学教育的重要传统。',
      historyTimeline: [
        ['一九零四年', '河南府中学堂创办，成为学校办学源流的重要起点。'],
        ['历史沿革', '学校曾先后经历中学堂、洛阳中学、第八中学、中山中学、省立洛中、豫西联合中学等发展阶段。'],
        ['一九五四年', '高中部迁至夹马营路东双龙巷迎恩寺旧址，并正式更名为河南省洛阳市第一高级中学。'],
        ['二零零零年', '西校区建成投入使用，学校办学空间进一步拓展。'],
        ['二零二零年', '学校被评为第二届全国文明校园。'],
      ],
      recognitionsTitle: '办学定位与荣誉',
      recognitions: [
        '河南省首批示范性高中',
        '河南省重点高中',
        '第二届全国文明校园',
      ],
    },
    programmes: {
      title: '课程体系',
      subtitle: '以中国高中课程为基础，提供拓展学习与升学支持',
      structureLabel: '课程结构',
      intro:
        '课程体系注重基础学科学习、英语能力提升、科学素养与未来升学准备。拓展课程与学习支持内容将根据学校规划和学生发展需要稳妥推进。',
      items: [
        ['中国高中课程', '围绕高中阶段核心学科设置课程，支持学生完成系统的中学学术学习。'],
        ['拓展课程支持', '为有多元发展需求的学生提供课程衔接、学习方法和阶段性准备支持。'],
        ['英语语言支持', '加强学术英语、阅读写作、表达沟通和考试技能训练。'],
        ['数学与科学课程', '关注数学、物理、化学等学科的概念理解与应用能力。'],
        ['经济与商科方向课程', '提供经济、商科等方向的基础学习与学术支持。'],
        ['学术辅导与升学准备', '通过辅导、模拟评估和升学建议帮助学生规划后续学习路径。'],
      ],
      subjectsTitle: '重点支持科目',
      subjects: ['英语语言', '数学', '进阶数学支持', '物理', '化学', '经济', '商科'],
      approachTitle: '课程实施方式',
      approach: [
        ['课堂教学', '以校内教学为主，结合课程目标、学生基础和学习进度组织教学。'],
        ['阶段评估', '通过练习、测验、模拟评估和学习反馈帮助学生了解自身进展。'],
        ['复习支持', '围绕重点知识、考试技能和薄弱环节开展复习与辅导。'],
        ['升学准备', '提供课程选择建议、学习规划和升学信息支持。'],
      ],
    },
    faculty: {
      title: '师资团队',
      subtitle: '以岗位职责为基础的教学、管理与质量保障团队',
      roleLabel: '岗位',
      intro:
        '学校围绕课程实施和学生发展支持配置具有相应学科背景、教学经验和学习支持能力的人员。以下为岗位结构说明，具体人员信息可根据实际任命后更新。',
      roles: [
        ['课程负责人', '负责课程支持项目的整体协调、资源安排和质量改进。'],
        ['学术协调员', '统筹课程安排、教学计划、学习进度和跨学科协作。'],
        ['内部质量保障人员', '负责内部质量保障、评估流程检查和记录审核。'],
        ['英语教师', '提供英语语言、学术阅读写作和考试准备支持。'],
        ['数学教师', '负责数学课程教学、练习反馈和进阶数学支持。'],
        ['科学教师', '支持物理、化学等科学课程教学和实验安全规范。'],
        ['经济与商科教师', '提供经济与商科方向课程教学、案例分析和考试准备。'],
        ['课程行政人员', '负责学生信息记录、文件归档、沟通协调和日常行政支持。'],
        ['财务管理人员', '负责项目相关财务流程、费用记录和内部审批配合。'],
      ],
      standardsTitle: '团队建设重点',
      standards: [
        ['岗位职责清晰', '通过明确的岗位分工支持课程实施、学生服务、行政记录和质量保障。'],
        ['学科专业支持', '教师团队围绕英语、数学、科学、经济与商科等方向提供学术支持。'],
        ['持续专业发展', '学校重视教师培训、课程研究、评估准备和教学反馈。'],
        ['学生支持能力', '团队关注学习诊断、复习指导、学术沟通和升学准备。'],
      ],
    },
    facilities: {
      title: '校园与设施',
      subtitle: '支持日常教学、实验学习、考试准备与学生发展',
      items: [
        ['教室', '用于常规课程、小组讨论和学业辅导的教学空间。'],
        ['科学实验室', '支持科学实践学习，并配备化学实验资源与物理实践设备。'],
        ['图书馆与阅读空间', '为学生提供阅读、资料查阅和自主学习环境。'],
        ['计算机教室', '支持信息技术学习、在线资源使用和学术资料检索。'],
        ['学习区域', '为课后辅导、复习和小组学习提供空间。'],
        ['考试场地', '可根据考试安排设置安静、有序的考试环境。'],
        ['学习管理工具', '用于学习进度跟踪、资源发布和教学沟通支持。'],
        ['安全与急救安排', '学校重视校园安全、实验室监督、风险评估和急救安排。'],
        ['实验室安全', '包括安全化学品存储、实验指导、实验室监督和风险评估。'],
      ],
      environmentTitle: '学习环境支持',
      environment:
        '校园设施服务于日常课堂、实验学习、自主复习、学术辅导和考试准备。学校将根据课程安排和安全要求，对教学空间、实验室和考试场地进行相应管理。',
      safetyTitle: '安全与实验管理',
      safety: ['安全化学品存储', '实验室监督', '实验风险评估', '急救安排', '设备使用指导', '考试环境管理'],
      galleryTitle: '校园学习场景',
      gallery: [
        {
          title: '课堂教学',
          body: '稳定有序的课堂环境支持学生完成系统学习。',
          image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80',
        },
        {
          title: '阅读与自习',
          body: '阅读空间和学习区域为学生提供自主学习支持。',
          image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=80',
        },
        {
          title: '科学实践',
          body: '实验学习强调规范操作、过程指导和安全管理。',
          image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=80',
        },
      ],
    },
    policies: {
      title: '政策与质量保障',
      subtitle: '以清晰流程支持学生注册、学习管理、考试准备和内部质量保障',
      items: [
        ['学生信息登记', '按照项目要求记录学生信息，并保持注册资料完整。'],
        ['出勤监测', '定期跟踪出勤情况，支持学习过程管理。'],
        ['内部评估', '通过阶段性评估了解学生学习进展。'],
        ['模拟考试', '组织模拟考试，帮助学生熟悉考试流程和时间管理。'],
        ['申诉处理', '为学生提供清晰的申诉渠道和记录流程。'],
        ['违规与管理失误处理', '建立违规和管理失误处理流程，维护考试和评估公正性。'],
        ['合理便利安排', '根据适用规则，为符合条件的学生提供合理便利安排。'],
        ['健康与安全', '关注校园安全、实验室安全和应急安排。'],
        ['学生保护', '重视学生保护和安全学习环境建设。'],
        ['数据保护', '以审慎方式管理学生资料和学校记录。'],
        ['内部质量保障', '通过内部审核、反馈和改进机制支持项目质量。'],
      ],
      frameworkTitle: '质量保障框架',
      framework:
        '政策与质量保障内容用于支持课程实施、学生管理、评估准备和内部记录。学校将根据实际项目要求持续完善相关流程，并保持文件记录的清晰和可追溯。',
      cycleTitle: '持续改进流程',
      cycle: ['计划课程与支持', '记录学习过程', '开展阶段评估', '收集反馈信息', '内部质量审核', '落实改进措施'],
    },
    admissions: {
      title: '招生信息',
      subtitle: '提供咨询、评估、课程建议与家校沟通支持',
      intro:
        '学校可为有意了解高中课程、拓展学习与升学支持的家庭提供咨询。具体课程安排、入学要求和学习路径将根据学生情况和学校实际安排确认。',
      steps: [
        ['入学咨询', '了解学生学习需求、家庭规划和课程关注点。'],
        ['学术背景评估', '参考学生过往学习经历和学科基础，提供适当建议。'],
        ['英语能力评估', '了解学生英语学习基础，为后续支持提供参考。'],
        ['课程选择建议', '结合学生目标和学术准备情况，建议合适课程方向。'],
        ['学习计划制定', '协助学生形成阶段性学习目标和复习安排。'],
        ['家校沟通', '通过稳妥沟通支持学生学习进展和发展规划。'],
      ],
      note: '本页面不包含具体收费信息，不承诺录取结果或升学结果。',
      guidanceTitle: '咨询重点',
      guidance:
        '招生咨询以了解学生情况和课程适配为主。学校会根据学生学术基础、英语能力、学习目标和家庭规划，提供稳妥的课程选择建议。',
      documentsTitle: '建议准备材料',
      documents: ['学生基本信息', '过往学习记录', '英语学习情况', '意向课程方向', '家长联系方式'],
    },
    contact: {
      title: '联系我们',
      subtitle: '欢迎就学校信息、课程咨询和招生安排进行联系',
      detailsTitle: '学校信息',
      name: '洛阳市第一高级中学',
      nameEn: '公办普通高中',
      addressLabel: '地址',
      telLabel: '电话',
      emailLabel: '邮箱',
      websiteLabel: '网站',
      formTitle: '咨询表单',
      fields: {
        name: '姓名',
        email: '邮箱',
        phone: '电话',
        message: '留言',
      },
      submit: '提交咨询',
      thanks: '感谢您的咨询。我们会在信息确认后与您联系。',
      placeholders: placeholdersZh,
    },
    footer: {
      name: '洛阳市第一高级中学',
      address: `地址：${placeholdersZh.address}`,
      tel: `电话：${placeholdersZh.telephone}`,
      email: `邮箱：${placeholdersZh.email}`,
      copyright: '© 2026 洛阳市第一高级中学。保留所有权利。',
    },
    seo: {
      defaultTitle: '洛阳市第一高级中学',
      defaultDescription: '洛阳市第一高级中学中英文官方网站，展示学校概况、课程体系、校园设施、质量保障与招生信息。',
    },
  },
  en: {
    languageLabel: 'English',
    switchLanguage: 'Chinese',
    logoText: 'L1',
    schoolName: 'Luoyang NO.1 Senior High School',
    schoolNameEn: 'Public Senior Secondary School',
    nav: {
      home: 'Home',
      about: 'About',
      programmes: 'Programmes',
      faculty: 'Faculty',
      facilities: 'Campus & Facilities',
      policies: 'Policies & QA',
      admissions: 'Admissions',
      contact: 'Contact',
    },
    common: {
      learnMore: 'Learn More',
      viewDetails: 'View Details',
    },
    home: {
      title: 'Luoyang NO.1 Senior High School',
      subtitle: 'Rooted in Chinese secondary education, preparing learners for future global opportunities.',
      badge: 'Public Senior Secondary School',
      panelKicker: 'Campus Focus',
      panelTitle: 'Learning, growth, and steady progression',
      profileLabel: 'School Profile',
      heroImage: {
        src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
        alt: 'Campus learning environment',
      },
      intro:
        'Luoyang NO.1 Senior High School is a senior secondary school with a stable educational foundation and a structured management system. The school values holistic learner development and is committed to providing quality academic programmes, learning support, and progression guidance.',
      ctas: [
        { label: 'About the School', to: routes.about },
        { label: 'View Programmes', to: routes.programmes },
      ],
      quickLinksTitle: 'Quick Access',
      quickLinks: [
        { label: 'About School', description: 'Learn about the school history, profile, and development support.', to: routes.about },
        { label: 'Programmes', description: 'View senior secondary courses, extended learning, and academic support.', to: routes.programmes },
        { label: 'Campus Facilities', description: 'Explore classrooms, laboratories, reading areas, and study spaces.', to: routes.facilities },
        { label: 'Contact', description: 'Find the school address, telephone number, and email.', to: routes.contact },
      ],
      stats: [
        ['1904', 'Historical origin'],
        ['Model High School', 'Henan Province'],
        ['Key High School', 'Henan Province'],
        ['Civilized Campus', 'National recognition'],
      ],
      highlights: [
        {
          title: 'Established School Governance',
          eyebrow: 'Governance',
          body: 'The school supports stable educational delivery through clear governance, defined responsibilities, and ongoing improvement.',
        },
        {
          title: 'Academic Excellence',
          eyebrow: 'Academic Foundations',
          body: 'The school focuses on curriculum quality, learner progress, and the development of strong academic foundations.',
        },
        {
          title: 'Progression Support',
          eyebrow: 'Learner Growth',
          body: 'The school supports learners with academic planning, revision preparation, and progression information without making outcome guarantees.',
        },
      ],
      overviewTitle: 'A School Environment for Learner Development',
      overview:
        'The school focuses on senior secondary teaching and learning, with attention to curriculum planning, classroom learning, academic feedback, student management, and home-school communication. This website presents school information, programme support, campus environment, and quality assurance arrangements.',
      heritageTitle: 'An Educational Tradition Since 1904',
      heritage:
        'The school traces its origins to Henan Prefecture Middle School, founded in 1904, and has developed through more than a century of secondary education in Luoyang.',
      featureRows: [
        ['Curriculum and Learning', 'Structured learning supports steady study routines and subject foundations.'],
        ['Quality and Management', 'Internal management, learning records, and feedback processes support organised delivery.'],
        ['Progression and Development', 'Academic planning, revision preparation, and development information are provided without guaranteeing outcomes.'],
      ],
      campusTitle: 'Campus Learning Scenes',
      campusIntro: 'The school supports learner growth through classroom learning, reading spaces, science practice, and safety management.',
      campusScenes: [
        {
          title: 'Classroom Learning',
          body: 'Orderly classroom routines and continuous feedback support subject foundations.',
          image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80',
        },
        {
          title: 'Reading Spaces',
          body: 'Reading and study areas support reference work and independent learning.',
          image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=80',
        },
        {
          title: 'Science Practice',
          body: 'Science learning emphasises practical work, guided process, and laboratory safety.',
          image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=80',
        },
      ],
      contactTitle: 'Contact the School',
      contactIntro: 'For school information, programme enquiries, or admissions arrangements, please contact the school.',
      contactCta: 'View Contact Details',
    },
    about: {
      title: 'About School',
      subtitle: 'Structured governance, steady development, and learner-centred support',
      identityLabel: 'School Identity',
      sections: [
        {
          title: 'School Profile',
          body: 'Luoyang NO.1 Senior High School is a senior secondary school located in Luoyang, Henan Province, China. The school provides structured secondary education and supports learners in academic development, personal growth, and progression to higher education.',
        },
        {
          title: 'Educational Philosophy',
          body: 'The school values moral education, academic foundations, personal responsibility, and broader perspectives for future learning.',
        },
        {
          title: 'Educational Objectives',
          body: 'The school aims to help learners build effective study habits, academic competence, communication skills, and independent learning capacity.',
        },
        {
          title: 'Governance and Management',
          body: 'Teaching and learning are supported by defined management responsibilities, curriculum planning, quality feedback, and learner support procedures.',
        },
        {
          title: 'Learner Development Support',
          body: 'The school supports learners through class management, academic guidance, wellbeing attention, progression advice, and home-school communication.',
        },
      ],
      governanceTitle: 'Operational and Management Focus',
      governance: [
        ['Teaching Organisation', 'Curriculum planning, classroom teaching, assignment feedback, and staged assessment support continuous learning.'],
        ['Student Management', 'Class management, attendance tracking, daily communication, and learning attention form the basis of student support.'],
        ['Quality Feedback', 'Teaching feedback, learner progress records, and internal review support steady improvement.'],
        ['Home-School Communication', 'Appropriate communication with families helps maintain a stable learning environment.'],
      ],
      developmentTitle: 'Learner Development Areas',
      development: ['Academic foundations', 'Study habits', 'English language', 'Scientific literacy', 'Communication', 'Progression preparation'],
      historyTitle: 'School History',
      historyImage: {
        src: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        alt: 'Library and study space',
      },
      historyIntro:
        'Luoyang NO.1 Senior High School, also known locally as Luoyi Gao, is located in Luolong District, Luoyang, Henan Province. Its history can be traced back to Henan Prefecture Middle School, founded in 1904. Through different historical periods, the school experienced several name changes and campus relocations while continuing an important tradition of secondary education in Luoyang.',
      historyTimeline: [
        ['1904', 'Henan Prefecture Middle School was founded, marking an important origin of the school.'],
        ['Historical development', 'The school developed through several stages under different names, including Luoyang Middle School, No.8 Middle School, Zhongshan Middle School, Provincial Luoyang Middle School, and Western Henan United Middle School.'],
        ['1954', 'The senior secondary section moved to the former Ying’en Temple site near Dongshuanglong Lane on Jiama Ying Road and was formally named Henan Luoyang NO.1 Senior High School.'],
        ['2000', 'The west campus was completed and put into use, expanding the school’s educational space.'],
        ['2020', 'The school was recognised as a National Civilized Campus in the second national selection.'],
      ],
      recognitionsTitle: 'School Positioning and Recognition',
      recognitions: [
        'One of the first model senior high schools in Henan Province',
        'A key senior high school in Henan Province',
        'National Civilized Campus recognition',
      ],
    },
    programmes: {
      title: 'Academic Programmes',
      subtitle: 'Chinese senior secondary education with international curriculum support',
      structureLabel: 'Programme Structure',
      intro:
        'The academic programme structure emphasises core subject learning, English language development, scientific literacy, and preparation for future progression. International curriculum support will be developed in line with school planning and applicable qualification requirements.',
      items: [
        ['Chinese Senior Secondary Curriculum', 'Structured learning across core senior secondary subjects.'],
        ['International Curriculum Support', 'Bridging guidance, study skills, and qualification preparation for learners considering international progression.'],
        ['English Language Support', 'Academic English, reading, writing, communication, and examination skills.'],
        ['Mathematics and Science', 'Conceptual understanding and applied skills in Mathematics, Physics, and Chemistry.'],
        ['Economics and Business Pathways', 'Foundational academic support in Economics and Business.'],
        ['Academic Guidance and Progression Preparation', 'Tutorials, mock assessments, and guidance for future study planning.'],
      ],
      subjectsTitle: 'Key Supported Subjects',
      subjects: ['English Language', 'Mathematics', 'Advanced Mathematics Support', 'Physics', 'Chemistry', 'Economics', 'Business'],
      approachTitle: 'Delivery Approach',
      approach: [
        ['Classroom Teaching', 'Onsite teaching is organised around course aims, learner foundations, and learning progress.'],
        ['Staged Assessment', 'Practice, tests, mock assessment, and feedback help learners understand progress.'],
        ['Revision Support', 'Revision and tutorials focus on key knowledge, examination skills, and areas for improvement.'],
        ['Progression Preparation', 'Course selection advice, study planning, and international progression information are provided.'],
      ],
    },
    faculty: {
      title: 'Faculty & Staff',
      subtitle: 'Role-based teaching, administration, and quality assurance structure',
      roleLabel: 'Role',
      intro:
        'The school intends to allocate staff with relevant subject expertise, teaching experience, assessment preparation capacity, learner support skills, and commitment to professional development. The structure below describes roles rather than named individuals.',
      roles: [
        ['Programme Lead', 'Overall coordination, resource planning, and quality improvement for programme support.'],
        ['Academic Coordinator', 'Curriculum planning, teaching schedules, learner progress, and academic coordination.'],
        ['Internal Quality Assurer', 'Internal quality assurance, assessment process review, and record checks.'],
        ['English Language Tutors', 'English language teaching, academic reading and writing, and examination preparation.'],
        ['Mathematics Tutors', 'Mathematics teaching, feedback on practice, and advanced mathematics support.'],
        ['Science Tutors', 'Physics and Chemistry teaching support, practical preparation, and laboratory safety.'],
        ['Economics and Business Tutors', 'Economics and Business teaching, case analysis, and examination readiness.'],
        ['Programme Administrator', 'Learner information records, documentation, coordination, and administrative support.'],
        ['Finance Manager', 'Project finance procedures, records, and internal approval support.'],
      ],
      standardsTitle: 'Team Development Focus',
      standards: [
        ['Clear Responsibilities', 'Defined roles support programme delivery, learner services, administration, records, and quality assurance.'],
        ['Subject Expertise', 'Teaching support is organised around English, mathematics, science, economics, and business areas.'],
        ['Continuing Professional Development', 'The school values staff training, curriculum review, assessment preparation, and teaching feedback.'],
        ['Learner Support Capacity', 'The team supports learning diagnosis, revision guidance, academic communication, and progression preparation.'],
      ],
    },
    facilities: {
      title: 'Campus & Facilities',
      subtitle: 'Facilities supporting teaching, practical learning, examination preparation, and learner development',
      items: [
        ['Classrooms', 'Teaching spaces for regular lessons, tutorials, and group discussion.'],
        ['Science Laboratories', 'Practical learning supported by Chemistry laboratory resources and Physics practical equipment.'],
        ['Library / Reading Spaces', 'Reading, reference, and independent study areas for learners.'],
        ['Computer Rooms', 'Facilities for ICT learning, online resources, and academic research.'],
        ['Study Areas', 'Spaces for revision, guided support, and collaborative learning.'],
        ['Examination Rooms', 'Quiet and orderly spaces that can be arranged for examination preparation and delivery.'],
        ['Learning Management Tools', 'Tools for learning progress tracking, resource sharing, and teaching communication.'],
        ['Safety and First Aid Arrangements', 'School safety procedures, supervision, and first aid arrangements.'],
        ['Laboratory Safety', 'Safe chemical storage, laboratory supervision, and risk assessment procedures.'],
      ],
      environmentTitle: 'Learning Environment Support',
      environment:
        'Campus facilities support regular lessons, practical learning, independent revision, academic tutorials, and examination preparation. Teaching spaces, laboratories, and examination rooms are managed according to course arrangements and safety requirements.',
      safetyTitle: 'Safety and Practical Management',
      safety: ['Safe chemical storage', 'Laboratory supervision', 'Practical risk assessment', 'First aid arrangements', 'Equipment use guidance', 'Examination room management'],
      galleryTitle: 'Campus Learning Scenes',
      gallery: [
        {
          title: 'Classroom Teaching',
          body: 'Orderly classroom environments support structured learning.',
          image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80',
        },
        {
          title: 'Reading and Study',
          body: 'Reading spaces and study areas support independent learning.',
          image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=80',
        },
        {
          title: 'Science Practice',
          body: 'Practical learning emphasises safe operation, guidance, and supervision.',
          image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=80',
        },
      ],
    },
    policies: {
      title: 'Policies & Quality Assurance',
      subtitle: 'Clear procedures for learner registration, learning management, examination preparation, and internal quality assurance',
      items: [
        ['Learner registration', 'Learner information is recorded according to programme requirements and maintained appropriately.'],
        ['Attendance monitoring', 'Attendance is monitored to support learning management and learner progress.'],
        ['Internal assessment', 'Staged assessments help review learner progress and academic needs.'],
        ['Mock examination', 'Mock examinations support examination readiness, timing, and procedure familiarity.'],
        ['Appeals', 'Learners are provided with a clear route for appeals and related records.'],
        ['Malpractice and maladministration', 'Procedures support fairness and integrity in assessment and administration.'],
        ['Reasonable adjustments', 'Reasonable arrangements may be considered for eligible learners under applicable rules.'],
        ['Health and safety', 'Campus safety, laboratory safety, and emergency arrangements are maintained.'],
        ['Safeguarding', 'The school values learner protection and a safe learning environment.'],
        ['Data protection', 'Learner information and school records are handled with care.'],
        ['Internal quality assurance', 'Internal review, feedback, and improvement processes support programme quality.'],
      ],
      frameworkTitle: 'Quality Assurance Framework',
      framework:
        'Policies and quality assurance arrangements support programme delivery, learner management, assessment preparation, and internal records. The school will continue to refine procedures according to actual programme requirements and maintain clear, traceable documentation.',
      cycleTitle: 'Continuous Improvement Cycle',
      cycle: ['Plan courses and support', 'Record learning processes', 'Conduct staged assessment', 'Collect feedback', 'Review quality internally', 'Implement improvements'],
    },
    admissions: {
      title: 'Admissions',
      subtitle: 'Consultation, assessment, course guidance, and home-school communication',
      intro:
        'Families interested in senior secondary programmes, extended learning, and progression support may contact the school for consultation. Course arrangements, entry requirements, and learning pathways will be confirmed according to learner circumstances and school arrangements.',
      steps: [
        ['Admission Enquiry', 'Understanding learner needs, family planning, and course interests.'],
        ['Academic Background Review', 'Reviewing previous learning experience and academic foundations.'],
        ['English Language Assessment', 'Understanding English learning foundations for future support planning.'],
        ['Course Selection Advice', 'Advising suitable course directions based on learner goals and readiness.'],
        ['Study Plan Development', 'Supporting staged learning goals and revision planning.'],
        ['Home-School Communication', 'Maintaining appropriate communication to support learner progress.'],
      ],
      note: 'This page does not include fee information and does not guarantee admission or progression outcomes.',
      guidanceTitle: 'Consultation Focus',
      guidance:
        'Admissions consultation focuses on understanding learner circumstances and course suitability. Advice may consider academic foundations, English language level, learning goals, and family planning.',
      documentsTitle: 'Suggested Information to Prepare',
      documents: ['Learner basic information', 'Previous learning records', 'English learning background', 'Intended course direction', 'Parent or guardian contact details'],
    },
    contact: {
      title: 'Contact',
      subtitle: 'Contact us for school information, programme enquiries, and admissions information',
      detailsTitle: 'School Information',
      name: 'Luoyang NO.1 Senior High School',
      nameEn: 'Public Senior Secondary School',
      addressLabel: 'Address',
      telLabel: 'Tel',
      emailLabel: 'Email',
      websiteLabel: 'Website',
      formTitle: 'Enquiry Form',
      fields: {
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        message: 'Message',
      },
      submit: 'Submit Enquiry',
      thanks: 'Thank you for your enquiry.',
      placeholders: placeholdersEn,
    },
    footer: {
      name: 'Luoyang NO.1 Senior High School',
      address: `Address: ${placeholdersEn.address}`,
      tel: `Tel: ${placeholdersEn.telephone}`,
      email: `Email: ${placeholdersEn.email}`,
      copyright: '© 2026 Luoyang NO.1 Senior High School. All rights reserved.',
    },
    seo: {
      defaultTitle: 'Luoyang NO.1 Senior High School',
      defaultDescription:
        'Official bilingual website for Luoyang NO.1 Senior High School, including school profile, academic programmes, facilities, quality assurance, and admissions information.',
    },
  },
} as const;

export type SiteContent = (typeof content)[Lang];
