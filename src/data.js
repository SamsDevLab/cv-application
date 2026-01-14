export const generalData = {
  username: "Sam's Dev Lab",
  email: "samsdevlab@randomemail.com",
  phone: "555-555-5555",
};

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

export const experienceData = [
  {
    id: crypto.randomUUID(),
    company: "Random Co.",
    location: "Nashville, TN",
    title: "Software Developer",
    from: "Nov 2023",
    to: "Jul 2024",
    responsibilities: "Breaking stuff right before it ships to prod",
  },
];

export const allData = { generalData, educationData, experienceData };
