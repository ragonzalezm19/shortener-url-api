module.exports = notFound = (req, res) => {
  res.status(404).json({ error: 'resource not found' });
};
