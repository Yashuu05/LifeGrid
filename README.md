# Project Overview Name: LifeGrid 

---

### Mission: 
- To help users reclaim their time by visualizing their finite life span, fostering intentionality and goal completion.Core Value Proposition: A visual reminder that time is a finite, non-renewable resource.

---

### Target Audience:
- Individuals seeking productivity enhancements, habit building, or those currently in a "quarter-life" or "mid-life" reflection phase.

---

### User FlowOnboarding: 
- User inputs Date of Birth (DOB) and Target Lifespan (default: 80).Visualization: The app generates a grid of weeks (52 weeks × Target Lifespan).State Management:Past Squares (Filled): Represent weeks lived.Current Square (Blinking/Highlighted): Represents the current week.Future Squares (Empty): Represent remaining potential.Interaction: Clicking a future square opens a modal to "Add a Goal" or "Set a Milestone."

---

### Non-Functional Requirements Privacy: 

- The data (DOB) must be handled locally on the browser (LocalStorage) to ensure the user feels secure and that no one else is "tracking" their mortality.
- Performance: The grid should render instantly (< 200ms) on mobile and desktop.Responsiveness: Must be fully mobile-optimized, as users will likely check this on their phones. 

---

### Technical Stack Frontend: 
- React or Next.js (for fast rendering).
- Visuals: D3.js or Tailwind CSS with CSS Grid for the square rendering.
- State: Zustand or standard React Context for local state.
- Deployment: Vercel or Netlify (perfect for static, client-side heavy apps).

---

### Success Metrics Retention: 
- Number of users who return to the site to add new milestones.
- Engagement: Average time spent viewing the grid versus setting goals.
- Viral Growth: Number of times users export and share their "Life Grid" snapshot on social media.

---
