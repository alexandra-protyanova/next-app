
export default function handler(req, res) {
  res.status(200).send({ users: [{ name: 'John Doe' }]});
}

