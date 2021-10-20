const single = (resource, authUser) => ({
  id: resource._id,
  alias: resource.alias,
  url: resource.url,
});

module.exports = {
  single,
};
