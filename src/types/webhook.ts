export interface WebhookField {
  name: string
  value: string
  inline?: boolean
}

export interface WebhookEmbed {
  title: string
  color: string
  fields: WebhookField[]
  timestamp?: string
}

export interface WebhookContent {
  username?: string
  avatar_url?: string
  embeds: WebhookEmbed[]
}

export interface DiscordWebhook {
  contact: WebhookContent
}

export interface EdgeConfigWebhook {
  discord: DiscordWebhook
}
