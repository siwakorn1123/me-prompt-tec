# ME PROMPT TECHNOLOGY - Company Website

**Thai Name:** มีพร้อมเทคโนโลยี
**Company:** ME PROMPT TECHNOLOGY COMPANY LIMITED

บริษัทพัฒนาซอฟต์แวร์และโซลูชันดิจิทัล เฉพาะด้าน Web & Mobile Development, AI และ Automation พร้อมโปรแกรมฝึกงาน/สหกิจศึกษาสำหรับนักศึกษา

---

## 🚀 Tech Stack

- **Frontend:** Next.js 16, React 19, TypeScript, Tailwind CSS 4
- **Backend:** Next.js API Routes, Node.js
- **Database:** MongoDB (with Prisma ORM)
- **Authentication:** JWT (jsonwebtoken + bcryptjs)
- **Validation:** Zod
- **Deployment:** Docker + Portainer (recommended)

---

## 📋 Features

### Public Pages
- ✅ **Homepage** - Hero, Services, Featured Projects, Internship CTA
- 🔄 **About** - Company info, Team members, Mission & Vision
- 🔄 **Portfolio** - Project listing with filters + detail pages
- 🔄 **Internship** - Student profiles with portfolio slugs
- 🔄 **Partnerships** - MOU listing and partner institutions
- 🔄 **Contact** - Contact form with message management

### Admin Dashboard (Protected)
- 🔄 **Members Management** - CRUD operations for team members
- 🔄 **Interns Management** - Manage student profiles
- 🔄 **Projects Management** - Manage portfolio with many-to-many relations
- 🔄 **MOU Management** - Academic partnerships tracking
- 🔄 **Messages** - View and respond to contact form submissions
- 🔄 **Media Library** - Asset management
- 🔄 **Users & Roles** - RBAC (Admin, Staff, Student, Viewer)

### API Endpoints
- ✅ **Authentication:** `/api/v1/auth/login`, `/api/v1/auth/me`
- ✅ **Public:** `/api/v1/public/company`, `/api/v1/public/projects`, `/api/v1/public/projects/[slug]`
- 🔄 **Protected:** Members, Interns, Projects (full CRUD)

---

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 18+
- MongoDB database (Atlas or local)
- npm or yarn

### 1. Clone & Install

```bash
# Install dependencies
npm install

# Install Prisma CLI (if needed)
npm install -D prisma
```

### 2. Environment Variables

Create `.env` file in root directory:

```env
# Database
DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/meprompt?retryWrites=true&w=majority"

# JWT Secrets (Change in production!)
JWT_SECRET="your-super-secret-jwt-key-change-this-in-production"
JWT_REFRESH_SECRET="your-super-secret-refresh-key-change-this-in-production"

# App
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NODE_ENV="development"
```

### 3. Database Setup

```bash
# Generate Prisma Client
npx prisma generate

# (Optional) Push schema to database
npx prisma db push

# (Optional) Seed database with sample data
npm run seed
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## 📁 Project Structure

```
me-prompt-tec/
├── prisma/
│   └── schema.prisma          # Database models (MongoDB)
├── src/
│   ├── components/            # React components
│   │   └── Layout.tsx         # Main layout with nav + footer
│   ├── lib/                   # Utility libraries
│   │   ├── prisma.ts          # Prisma client singleton
│   │   └── auth.ts            # JWT utilities
│   ├── middleware/            # API middleware
│   │   └── auth.ts            # Authentication & Authorization
│   ├── pages/
│   │   ├── api/v1/           # API routes
│   │   │   ├── auth/         # Login, logout, me
│   │   │   └── public/       # Public endpoints
│   │   ├── index.tsx         # Homepage ✅
│   │   ├── about.tsx         # About page (TODO)
│   │   ├── portfolio/        # Portfolio pages (TODO)
│   │   ├── internship/       # Internship pages (TODO)
│   │   ├── partnerships/     # MOU pages (TODO)
│   │   └── contact.tsx       # Contact page (TODO)
│   └── types/                # TypeScript types
├── .env                      # Environment variables (DO NOT COMMIT!)
├── package.json
└── tsconfig.json
```

---

## 🔐 Database Schema

### Core Models

- **User** - Authentication (email, role, status)
- **Member** - Team members (name, position, skills, bio)
- **Intern** - Students (university, portfolio slug, skills)
- **Project** - Portfolio (title, slug, tech stack, status)
- **ProjectMember** - Many-to-many: Projects ↔ Members
- **ProjectIntern** - Many-to-many: Projects ↔ Interns
- **MOU** - Academic partnerships (institution, dates, status)
- **ContactMessage** - Contact form submissions
- **MediaAsset** - File uploads
- **Company** - Company information (single record)

### Enums

- **Role:** ADMIN, STAFF, STUDENT, VIEWER
- **ProjectStatus:** PLANNING, IN_PROGRESS, COMPLETED, ON_HOLD
- **MOUStatus:** ACTIVE, EXPIRED, PENDING_RENEWAL, TERMINATED

---

## 🔑 Authentication & Authorization

### JWT Authentication
- Access token: 15 minutes lifetime
- Refresh token: 7 days lifetime
- Tokens stored in Authorization header: `Bearer <token>`

### Role-Based Access Control (RBAC)

| Role | Permissions |
|------|-------------|
| **ADMIN** | Full access to all resources |
| **STAFF** | Manage members, interns, projects, messages |
| **STUDENT** | View own profile, update own info |
| **VIEWER** | Read-only access to public content |

### Using Middleware

```typescript
import { withAuth } from '@/middleware/auth';

// Protect route for ADMIN only
export default withAuth('ADMIN')(handler);

// Allow multiple roles
export default withAuth('ADMIN', 'STAFF')(handler);
```

---

## 🎨 UI/UX Guidelines

- **Color Scheme:** Blue (#2563eb) primary, Purple accent, Gray neutrals
- **Typography:** System fonts (Geist Sans/Mono), Thai language support
- **Responsive:** Mobile-first design, Tailwind breakpoints (sm, md, lg, xl)
- **Accessibility:** WCAG AA compliant, semantic HTML

---

## 📝 API Examples

### Login

```bash
POST /api/v1/auth/login
Content-Type: application/json

{
  "email": "admin@meprompt.tech",
  "password": "password123"
}
```

### Get Projects (Public)

```bash
GET /api/v1/public/projects?industry=ecommerce&status=COMPLETED&page=1&limit=10
```

### Get Current User (Protected)

```bash
GET /api/v1/auth/me
Authorization: Bearer <access_token>
```

---

## 🚢 Deployment

### Docker Deployment

```bash
# Build Docker image
docker build -t meprompt-web .

# Run container
docker run -p 3000:3000 --env-file .env meprompt-web
```

### Portainer Setup
1. Deploy stack using docker-compose.yml
2. Set environment variables in Portainer UI
3. Configure MongoDB connection
4. Enable auto-restart policy

---

## 📚 Development Roadmap

### Phase 1: MVP (Completed ✅)
- [x] Project setup and dependencies
- [x] Database schema with Prisma
- [x] Authentication system (JWT)
- [x] API routes structure
- [x] Homepage with Layout

### Phase 2: Core Pages (In Progress 🔄)
- [ ] About page
- [ ] Portfolio listing + detail pages
- [ ] Internship page with student profiles
- [ ] Partnerships/MOU page
- [ ] Contact form

### Phase 3: Admin Dashboard (Planned 📋)
- [ ] Admin layout with sidebar
- [ ] Member CRUD
- [ ] Intern CRUD
- [ ] Project CRUD with relations
- [ ] MOU CRUD
- [ ] Message management
- [ ] Media library

### Phase 4: Polish (Planned 🎨)
- [ ] SEO optimization
- [ ] Performance optimization
- [ ] Seed data script
- [ ] Unit & integration tests
- [ ] Documentation

---

## 🤝 Contributing

This is a proprietary project for ME PROMPT TECHNOLOGY COMPANY LIMITED.

### Development Team
- Product/Tech Lead: [Name]
- Developers: [Names]
- Designers: [Names]

### Academic Partners
- มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน (RMUTI)
  - คณะบริหารธุรกิจ
  - สาขาสารสนเทศทางคอมพิวเตอร์

---

## 📄 License

Copyright © 2025 ME PROMPT TECHNOLOGY COMPANY LIMITED. All rights reserved.

---

## 📞 Contact

- **Website:** [https://meprompt.tech](https://meprompt.tech)
- **Email:** contact@meprompt.tech
- **Phone:** +66-XX-XXX-XXXX

---

## 🙏 Acknowledgments

- Next.js Team
- Prisma Team
- Tailwind CSS Team
- All our academic partners and interns

---

**Built with ❤️ in Thailand**
