# TechXtract WebVision Official Website

*GitHub Repository:* https://github.com/daksh-suri/WebVision

***

## 🚀 1. Project Overview

This is the official website for *TechXtract, the Department's technology society, developed and submitted as part of the **WebVision Hackathon* challenge. The primary goal was to create a unified, modern, and highly responsive digital identity that accurately reflects TechXtract's mission of *Innovation, Collaboration, and Engineering Creativity*.

The solution fulfills the minimum requirement of *four pages* and is built upon a component-driven architecture using ReactJS.

| Detail | Status |
| :--- | :--- |
| *Society* | TechXtract |
| *Hackathon* | WebVision |
| *Minimum Pages Met* | *4* (Home, About, Team, Events) |
| *Framework* | ReactJS |

***

## 💻 2. Tech Stack & Implementation Details

The project utilizes a lean, component-based stack focused on rapid development and clean structure, adhering to the hackathon's technical requirements.

### Core Technologies

| Area | Technology | Implementation Notes |
| :--- | :--- | :--- |
| *Framework* | *ReactJS* | Used for component reusability and managing UI structure. |
| *Routing* | *React Router DOM* | Used for navigation between the four pages (Link component in HomePage.jsx). |
| *Styling* | *Inline CSS/JSX* | Consistent styling maintained across components using defined styles objects, leveraging CSS variables (e.g., var(--primary-color)). |
| *Data Handling* | *Local Arrays/Objects* | Data for events, mission points, and activities is managed directly within the respective page files for fast prototyping (EventsPage.jsx, AboutPage.jsx). |
| *Branding* | *Logo and Color Overlay* | The society logo is integrated into the HomePage's hero section as a subtle background watermark. |

### Technical Implementation Highlights

* *Component Structure:* The website is organized into distinct, reusable page components (HomePage, TeamPage, AboutPage, etc.), each handling its own layout and data presentation.
* *Four Pages Implemented:* *Home, **About, **Team, and **Events* pages are fully developed and routed.
* *Data Structure:* Structured data (arrays of objects) is used for repeatable elements like *Events* (allEventsData) and *Activities* (activities) for easy rendering and mapping.

***

## ✨ 3. Design and User Experience (UX)

The design is aimed at being clean, forward-thinking, and visually striking, adhering to a dark theme for a modern tech feel.

### Key Design Choices

* *Dark Theme:* Utilizes a dark background (#1e1e1e / #181818) with white/light secondary text (#b0b0b0) for high contrast and a professional aesthetic.
* *Accent Color:* A primary accent color (var(--primary-color)) is used for headlines, buttons, and list markers to draw focus and signify interaction.
* *Visual Engagement:*
    * The *Home Page Hero* features the society *logo as a transparent background image* with a dark overlay, strongly branding the landing page.
    * The *Team Page* prominently features a large, centralized *Team Photo* with a significant shadow for visual impact.
    * The *About Page* uses a distinct icon (&#10148;) for mission points and card layouts for activities to break up text content.
* *Responsiveness:* Elements like card containers (cardsContainer in HomePage.jsx and EventsPage.jsx) use *Flexbox* (display: 'flex', flexWrap: 'wrap') to ensure content flows and stacks correctly on mobile and tablet devices.

***

## 📄 4. Pages Implemented

| Page Name | URL | Content Summary |
| :--- | :--- | :--- |
| *Home* | / | Hero section, About teaser, and a preview of *Recent Events* (Secret Cipher, Luminar Insights). |
| *About* | /about | Detailed *Our Mission* statement (list format) and a *What We Do* section showcasing activities (Workshops, Community Events). |
| *Team* | /team | Focused representation featuring a title ("The People Who Make It Happen") and a large, visually prominent *Team Photo*. |
| *Events* | /events | Structured list of events segmented into *Upcoming Events* and *Past Events* based on a filterable data source. |

***

## 🧑‍💻 5. Contribution & License

### Contributing

If you'd like to contribute to this project after the hackathon, please feel free to fork the repository and submit a pull request!

### License

This project is licensed under the *MIT License*.