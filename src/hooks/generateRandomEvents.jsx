// hooks/generateRandomEvents.js

const eventTypes = ['Holiday', 'Exam', 'Function', 'Meeting'];

const eventTitles = {
  Holiday: ['Republic Day', 'Independence Day', 'Eid', 'Christmas', 'Diwali', 'New Year'],
  Exam: ['Midterm Exam', 'Final Exam', 'Unit Test', 'Mock Test', 'Quiz'],
  Function: ['Annual Day', 'Science Fair', 'Tech Fest', 'Cultural Fest', 'Sports Day'],
  Meeting: ['Staff Meeting', 'Parent-Teacher Meeting', 'Department Briefing', 'Training Session'],
};

const eventDescriptions = {
  Holiday: [
    'A national public holiday with celebrations.',
    'School is closed for the holiday.',
    'Enjoy the festivities and rest!',
  ],
  Exam: [
    'Important examination for the term.',
    'Ensure to revise all topics thoroughly.',
    'Exam will be held in the main hall.',
  ],
  Function: [
    'Annual function with cultural performances.',
    'All students are encouraged to participate.',
    "Don't miss the awards ceremony!",
  ],
  Meeting: [
    'Staff meeting to discuss upcoming events.',
    'Parent-Teacher meeting to discuss student progress.',
    'Department briefing about new policies.',
  ],
};

export function generateRandomEvents(count = 100) {
  const events = [];
  const year = 2025;

  for (let i = 0; i < count; i++) {
    const type = eventTypes[Math.floor(Math.random() * eventTypes.length)];
    const titleArr = eventTitles[type];
    const descArr = eventDescriptions[type];

    const title = titleArr[Math.floor(Math.random() * titleArr.length)];
    const description = descArr[Math.floor(Math.random() * descArr.length)];

    const month = Math.floor(Math.random() * 12);
    const day = Math.floor(Math.random() * 28) + 1;
    const hour = Math.floor(Math.random() * 8) + 8;
    const durationHours = Math.floor(Math.random() * 4) + 1;

    const start = new Date(year, month, day, hour);
    const end = new Date(start);
    end.setHours(start.getHours() + durationHours);

    const isAllDay = type === 'Holiday' || Math.random() < 0.3;
    if (isAllDay) {
      start.setHours(0, 0, 0, 0);
      end.setHours(23, 59, 59, 999);
    }

    events.push({
      id: i,
      title,
      start: new Date(start),
      end: new Date(end),
      allDay: isAllDay,
      type,
      description, // ensure it's attached
    });
  }

  return events;
}
