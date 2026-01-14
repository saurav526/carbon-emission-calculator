Overview

This project is a web-based gamified platform designed to promote sustainable  practices and carbon emission reduction. Users can calculate daily carbon emissions, earn green credits, unlock interactive badges, receive eco-tips, participate in a mini-game, and track their progress visually through graphs and leaderboards.

The platform is built entirely with HTML, CSS, and JavaScript, leveraging localStorage for user data and Chart.js for carbon emission visualization. Particle animations enhance user engagement when users earn credits.

Features
1. User Authentication

Users can register and login using email and password.

All data is stored locally using localStorage.

2. Carbon Calculator

Users can enter electricity, transport, and fuel usage.

The system calculates daily CO₂ emissions.

If emissions are below 50 kg CO₂, users earn credits.

3. Carbon Meter

Interactive meter shows progress visually toward carbon reduction goals.

4. Badges

Users earn interactive badges for reducing emissions.

Badges are clickable, with animated effects and explanations.

New badges are awarded when users reach milestones.

5. Leaderboards

Displays top users by credits earned.

Encourages friendly competition.

6. Daily Carbon Graph

Shows daily carbon emissions using Chart.js.

Updates dynamically as users calculate emissions.

7. Eco-Tips Section

Users can click a button to receive random actionable tips to reduce carbon footprint.

8. Today’s Green Challenge

Displays a motivational challenge to encourage sustainable actions every day.

9. Gamified Mini-Game

Users can play a “Plant Trees Game” to earn points.

Trees grow on canvas as users click, simulating growth.

Points contribute to overall engagement and gamification.

10. Particle Animation

Rewarded when users earn credits for low carbon emissions.

Adds visual excitement to the experience.

11. Bottom Motivational Message

Constant call-to-action for users to reduce carbon and participate in challenges.

Tech Stack

HTML5 – Structure of the application.

CSS3 – Styling, grid layout, animations, badges, and particle effects.

JavaScript (ES6) – Logic for calculator, game, tips, badges, leaderboard, and particles.

Chart.js – Dynamic graph of daily carbon emissions.

LocalStorage – Persistent user data (credentials, credits, badges).

Project Structure
green-farming-platform/
│
├── index.html          # Login & Registration Page
├── dashboard.html      # Single-page interactive dashboard
├── style.css           # Styling for dashboard and login page
├── auth.js             # Login & registration logic
├── dashboard.js        # Dashboard logic (calculator, badges, tips, game)
├── particles.js        # Particle animation for rewards
├── README.md           # Project documentation

How to Run

Clone the repository or download the project folder.

Open index.html in a modern web browser.

Register with an email and password.

After login, you’ll access the interactive dashboard:

Calculate carbon emissions.

Earn badges and credits.

Play the mini-game to plant trees.

View leaderboards and daily CO₂ graph.

Receive tips and daily challenges.

Enjoy gamified engagement while learning to reduce your carbon footprint!

Future Enhancements

Monthly leaderboard for emissions and game points.

Cloud backend integration for persistent multi-user data.

Mobile-friendly design for real-time use on smartphones.

Advanced gamification with levels, rewards, and challenges.

Community challenges to engage multiple users.

Motivation

This platform encourages sustainable behaviors by combining education, gamification, and visualization. Users learn how small actions contribute to reducing carbon emissions and are rewarded for adopting eco-friendly practices.

License

This project is open-source and free to use for educational purposes.
