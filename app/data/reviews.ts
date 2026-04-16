export interface Review {
  author: string;
  rating: 5;
  text: string;
  relativeDate: string;
  isLocalGuide?: boolean;
}

export const reviews: Review[] = [
  {
    author: "Lynne Williams",
    rating: 5,
    text: "Just been for first treatment.. Extremely satisfied..so far so good ..Will give further feedback after a few more sessions.. Lynne.",
    relativeDate: "2 months ago",
    isLocalGuide: true,
  },
  {
    author: "James Fox",
    rating: 5,
    text: "Simply excellent. Friendly, supportive with firm guidance about correct care. Highly recommend.",
    relativeDate: "2 months ago",
  },
  {
    author: "Emma Robinson",
    rating: 5,
    text: "Easy to get an appointment with parking right outside. Rachel was very welcoming, friendly and knowledgeable. The treatment was quick, painless and, with the wax treatment, a little treat! Highly recommended",
    relativeDate: "1 day ago",
  },
  {
    author: "Emma Taylor",
    rating: 5,
    text: "Rachel put me at ease with my concerns immediately. She diagnosed my issues confidently & I felt reassured when leaving the appt. She is lovely & friendly & the issue is clearing up nicely :)",
    relativeDate: "1 day ago",
  },
];
