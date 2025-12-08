# My Portfolio Website

A modern, aesthetic portfolio website with a computer-frame design featuring smooth animations, multi-page navigation, and responsive design.

## Features

✨ **Design & Aesthetics**
- Computer-monitor frame design with realistic bezel and stand
- Gradient color scheme with modern aesthetics
- Smooth animations and transitions throughout
- Responsive design that works on all devices
- Dark theme monitor frame for stylish presentation

🚀 **Functionality**
- Multi-page navigation (Home, About, Projects, Skills, Contact)
- Smooth page transitions with fade and slide animations
- Interactive elements with hover effects
- Mobile-friendly hamburger menu
- Keyboard navigation support (Arrow keys to navigate)
- Parallax scrolling effects
- Form submission with validation

📱 **Responsive Design**
- Desktop: Full monitor frame display
- Tablet: Optimized layout with adjusted sizing
- Mobile: Compact design with hamburger menu

## File Structure

```
my-portfolio/
├── index.html       # Main HTML file with page structure
├── styles.css       # Complete styling with animations
├── script.js        # Interactive functionality and navigation
└── README.md        # This file
```

## Getting Started

### Option 1: Direct Opening
Simply open `index.html` in your web browser.

### Option 2: Using a Local Server (Recommended)
```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (with http-server)
npx http-server
```

Then visit `http://localhost:8000` in your browser.

## Customization

### Update Personal Information
1. **Name & Title**: Edit the hero section in `index.html`
   - Change "Welcome to My Portfolio" to your name
   - Update "Full Stack Developer & Creative Technologist" to your title

2. **About Section**: Modify the about text and statistics
   - Update the bio paragraph
   - Change the stat numbers (5+, 50+, 30+)

3. **Projects**: Add your own projects in the projects grid
   - Update project titles, descriptions, and tags
   - Modify gradient colors by changing the background colors

4. **Skills**: Update your skill categories and proficiencies
   - Modify skill names and percentages
   - The skill bars will animate to the specified width

5. **Contact Information**: Update contact details
   - Email, phone, location, and social links
   - Email link format: `mailto:your.email@example.com`
   - Phone link format: `tel:+1234567890`

### Color Scheme
Edit the CSS variables in `styles.css` (lines 7-18):
```css
:root {
    --primary-color: #667eea;      /* Main accent color */
    --secondary-color: #764ba2;    /* Secondary accent */
    --accent-color: #f5576c;       /* Accent highlights */
    --text-dark: #1a1a1a;          /* Text color */
    --bg-light: #f8f9fa;           /* Light backgrounds */
    /* ... more variables ... */
}
```

### Animations
- **Speed**: Adjust transition durations in CSS (search for `0.3s`, `0.6s`, etc.)
- **Effects**: Modify @keyframes in CSS for different animation styles
- **Intensity**: Change transform values (translateX, translateY, scale)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. Optimize images before adding them to projects
2. Minimize CSS/JS files for production
3. Use lazy loading for images if needed
4. Consider using a CDN for faster delivery

## Navigation Features

- **Click Navigation**: Click any nav link to navigate to that section
- **Keyboard Navigation**: Use arrow keys (← →) to navigate between pages
- **Mobile Menu**: Hamburger menu automatically appears on small screens
- **CTA Button**: "Explore My Work" button on home page navigates to projects

## Animations Included

1. **Page Transitions**: Fade and slide effects
2. **Floating Boxes**: Continuous float animation on home page
3. **Skill Bars**: Progressive fill animation on skills page
4. **Card Hover Effects**: Lift and shadow effects on hover
5. **Power Button**: Pulsing glow effect
6. **Button Animations**: Shine effect on hover
7. **Scroll Effects**: Parallax movement with scroll

## Mobile Considerations

- Hamburger menu for navigation on screens < 768px
- Optimized touch targets for mobile devices
- Responsive grid layouts
- Flexible typography
- Reduced animations on devices with reduced motion preference

## SEO & Metadata

Update the following in `index.html`:
- `<title>`: Page title
- Add meta description: `<meta name="description" content="...">`
- Add open graph tags for social sharing
- Update favicon if desired

## Deployment

### Deploy to GitHub Pages
```bash
git add .
git commit -m "Initial portfolio commit"
git push origin main
```

### Deploy to Netlify
1. Connect your GitHub repository
2. Build command: (leave empty for static files)
3. Publish directory: `/`

### Deploy to Vercel
1. Import your project from GitHub
2. Deploy with default settings

## Troubleshooting

**Menu not closing on mobile?**
- Clear browser cache
- Check that JavaScript is enabled

**Animations not smooth?**
- Check browser hardware acceleration is enabled
- Reduce motion settings in OS preferences

**Images not showing?**
- Ensure images are in the correct path
- Check file permissions

## Future Enhancements

- [ ] Dark/Light theme toggle
- [ ] Blog section
- [ ] Project filtering by technology
- [ ] Client testimonials section
- [ ] Newsletter subscription
- [ ] Analytics integration
- [ ] Comment system
- [ ] Multi-language support

## License

This portfolio template is free to use and modify for personal projects.

## Support

For issues or questions, please refer to the HTML, CSS, and JavaScript comments in the source files.

---

**Made with ❤️ | Last Updated: December 2024**
