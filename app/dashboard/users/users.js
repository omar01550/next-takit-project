export const users = [];

// Define possible values for service
const services = ["train", "metro", "bus"];

for (let i = 0; i < 100; i++) {
  const uid = Math.floor(Math.random() * 100000) + 10000; // Generate unique IDs (5 digits)
  const uname = `user${i + 1}`; // Sequential usernames (user1, user2, ...)
  const umobile = `+1234567890${i}`; // Sample phone numbers with variation
  const service = services[Math.floor(Math.random() * services.length)];
  const ticket = Math.floor(Math.random() * 100000) + 10000; // Generate unique ticket IDs

  users.push({
    uid,
    uname,
    umobile,
    service,
    ticket,
  });
}

