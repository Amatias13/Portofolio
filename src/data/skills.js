export const skills = [
  { name: "JavaScript", category: "backend" },
  { name: "Node.js", category: "backend" },
  { name: "Python", category: "backend" },
  { name: "Java", category: "backend" },
  { name: ".NET / C#", category: "backend" },
  { name: "React", category: "frontend" },
  { name: "React Native", category: "frontend" },
  { name: "HTML / CSS", category: "frontend" },
  { name: "RESTful APIs", category: "backend" },
  { name: "Microservices", category: "backend" },
  { name: "SQL", category: "database" },
  { name: "NoSQL", category: "database" },
  { name: "SQLite", category: "database" },
  { name: "Firebase", category: "database" },
  { name: "Database Design", category: "database" },
  { name: "Git", category: "tools" },
  { name: "Flask", category: "backend" },
];

export const skillsByCategory = skills.reduce((acc, { category, name }) => {
  if (!acc[category]) acc[category] = [];
  acc[category].push(name);
  return acc;
}, {});

export const skillCategories = Object.keys(skillsByCategory);
