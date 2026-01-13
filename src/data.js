export const generalData = {
  username: "Sam's Dev Lab",
  email: "samsdevlab@randomemail.com",
  phone: "555-555-5555",
};

// Start here tomorrow - trying to figure out how to map this new version within the Resume Preview
// If there is an array of objects, each object needs to print in the Resume Preview and also appear
// in the ResumeBuilder

// Second Draft:
// export const educationData = [
//   {
//     id: 0,
//     school: "University of Louisville",
//     location: "Louisville, KY",
//     major: "BA - English Literature",
//     from: "Aug 2007",
//     to: "May 2011",
//   },
// ];

// First Draft:
export const educationData = [
  {
    id: crypto.randomUUID(),
    school: "University of Louisville",
    location: "Louisville, KY",
    major: "BA - English Literature",
    from: "Aug 2007",
    to: "May 2011",
  },
];

export const experienceData = {
  id: crypto.randomUUID(),
  company: "Random Co.",
  location: "Nashville, TN",
  title: "Software Developer",
  from: "Nov 2023",
  to: "Jul 2024",
  responsibilities: "Breaking stuff right before it ships to prod",
};

export const allData = { generalData, educationData, experienceData };
