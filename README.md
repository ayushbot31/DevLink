# DevLink – Personal Portfolio Website Generator
A modern, user-friendly web application that allows you to create and generate beautiful personal portfolio websites in minutes. Built with Next.js, TypeScript, and Tailwind CSS.

------live project------
https://dev-link-pi.vercel.app/


## Features

- 📝 **Easy-to-Use Forms**: Intuitive forms to input your personal information, skills, projects, experience, and education
- 👁️ **Live Preview**: Real-time preview of your portfolio as you build it
- 🎨 **Modern Design**: Beautiful, responsive design that looks great on all devices
- 🌙 **Dark Mode Support**: Automatic dark mode based on system preferences
- 📱 **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- ⚡ **Fast & Lightweight**: Built with Next.js for optimal performance

## Getting Started

### Prerequisites

- Node.js 18+ installed on your system
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd devlink
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

1. **Fill in Your Information**: Use the "Edit Portfolio" tab to fill in your personal information, including:
   - Personal details (name, title, bio, contact info)
   - Social media links
   - Skills with proficiency levels
   - Projects with descriptions, technologies, and links
   - Work experience
   - Education history

2. **Preview Your Portfolio**: Switch to the "Preview" tab to see how your portfolio will look

3. **Export/Deploy**: (Coming soon) Export your portfolio as a static website or deploy it directly

## Project Structure

```
devlink/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Main page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── PortfolioForm.tsx  # Main form component
│   ├── PortfolioPreview.tsx # Preview component
│   └── forms/            # Form sub-components
├── types/                 # TypeScript type definitions
│   └── portfolio.ts      # Portfolio data types
├── package.json          # Dependencies
└── README.md            # This file
```

## Technologies Used

- **Next.js 14**: React framework for production
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **React Icons**: Icon library

## Development

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Lint Code

```bash
npm run lint
```

## Future Enhancements

- [ ] Export portfolio as static HTML/CSS
- [ ] Multiple portfolio themes/templates
- [ ] PDF export functionality
- [ ] Save/load portfolio data
- [ ] Direct deployment integration (Vercel, Netlify)
- [ ] Custom color themes
- [ ] Additional sections (certifications, publications, etc.)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Support

If you encounter any issues or have questions, please open an issue on the GitHub repository.

---

Made with ❤️ using Next.js and TypeScript

