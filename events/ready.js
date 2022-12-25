module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username}`);
  await client.user.setActivity("Pidit Songs 24/7",{ type: 'PLAYING'});
};