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
      hookPath: '/irc-echo',
      interface: '0.0.0.0',  // allows requests from all IPs
    },
    // channel name in Slack to post to
    echoChannel: '#irc-echo',
    // the name of the bot in Slack
    botName: 'IRCBot',
    // Whether or not to transfer all messages, regardless of being a command
    transferAll: false,
    // Whether or not on has to first has to start line with botname to call commands
    specifyBotForCmds: false
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
