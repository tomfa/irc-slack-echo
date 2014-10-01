module.exports = {
  slack: {
    // link to your slack url
    host: 'my.slack.com',  
    // "Incoming" and "Outgoing"  webtoken from Slack
    incomingWebhookToken: 'your incoming webhook token',
    outgoingWebhookToken: 'your outgoing webhook token',
    outgoingWebhookServer: {
      // What URL Slack should listen to.
      // Here http://your.webhook.server.com:666/irc-echo
      port: 666,
      domain: 'your.webhook.server.com',
      hookPath: '/irc-echo'
    },
    // channel name in Slack to post to
    echoChannel: '#irc-echo',
    // the name of the bot in Slack
    botName: 'IRCBot',
  },
  irc: {
    // What IRC-server your channel is on
    server: 'your.irc.net',
    // Your desired nick on irc
    nick: 'slackbot',
    // channel to listen in on IRC
    channel: '#mychan'
  },
};
